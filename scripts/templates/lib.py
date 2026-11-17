"""Helpers for building the site's downloadable templates in the house style.

Word documents are built on top of downloads/knowledge_transfer_plan.docx so they
share its styles: Title, Subtitle, Heading 1/2, Guidance (grey italic), the
document control block, "Grid Table 2 Accent 1" for field/value tables and
"Grid Table 4 Accent 1" for data tables.

Excel workbooks follow the same pattern as the existing trackers: a title in A2,
grey guidance in A3, a formatted table from row 5 (TableStyleMedium2), drop-down
lists from a Lists sheet, frozen header and a short Guide sheet.
"""
import copy
import os

import docx
from docx.shared import Pt
from openpyxl import Workbook
from openpyxl.formatting.rule import CellIsRule, FormulaRule
from openpyxl.styles import Alignment, Font, PatternFill
from openpyxl.utils import get_column_letter, quote_sheetname
from openpyxl.worksheet.datavalidation import DataValidation
from openpyxl.worksheet.table import Table, TableStyleInfo

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
DOWNLOADS = os.path.join(ROOT, "downloads")
BASE_DOCX = os.path.join(DOWNLOADS, "knowledge_transfer_plan.docx")

# ---------------------------------------------------------------------------
# Word
# ---------------------------------------------------------------------------

# Block constructors used by the specs
def P(text):            return ("p", text)
def G(text):            return ("g", text)          # guidance, grey italic
def H2(text):           return ("h2", text)
def L(*items):          return ("l", items)         # bullet list
def C(*items):          return ("c", items)         # checklist with boxes
def N(*items):          return ("n", items)         # numbered list
def KV(*labels):        return ("kv", labels)       # field / value table
def T(headers, rows=3, first_col=None):             # data table
    return ("t", headers, rows, first_col)
def SIGN(*roles):       return ("sign", roles)      # sign-off table


def _clear_after_control(doc):
    """Remove everything after the Distribution table of the base document."""
    body = doc.element.body
    children = list(body.iterchildren())
    cut = None
    for i, el in enumerate(children):
        if el.tag.endswith("}p"):
            text = "".join(t.text or "" for t in el.iter() if t.tag.endswith("}t"))
            if text.strip() == "About this document":
                cut = i
                break
    for el in children[cut:]:
        if el.tag.endswith("}sectPr"):
            continue
        body.remove(el)


def _table(doc, rows, cols, style):
    t = doc.add_table(rows=rows, cols=cols)
    t.style = doc.styles[style]
    return t


def _look(table, first_row=True):
    from docx.oxml.ns import qn
    from docx.oxml import OxmlElement
    tblPr = table._tbl.tblPr
    look = tblPr.find(qn("w:tblLook"))
    if look is None:
        look = OxmlElement("w:tblLook")
        tblPr.append(look)
    for k, v in {"firstRow": "1" if first_row else "0", "firstColumn": "1", "lastRow": "0",
                 "lastColumn": "0", "noHBand": "0", "noVBand": "1",
                 "val": "04A0" if first_row else "0080"}.items():
        look.set(qn("w:" + k), v)


def _set_header(row, headers):
    for cell, h in zip(row.cells, headers):
        cell.text = h


def _bullet(doc, text, mark="•"):
    doc.add_paragraph(f"{mark}  {text}", style="List Paragraph")


def build_docx(path, title, subtitle, about, sections, guidance=None):
    doc = docx.Document(BASE_DOCX)
    _clear_after_control(doc)
    doc.paragraphs[0].text = title
    doc.paragraphs[1].text = subtitle
    for section in doc.sections:
        for part in (section.header, section.footer):
            for table in part.tables:
                for row in table.rows:
                    for cell in row.cells:
                        for para in cell.paragraphs:
                            for run in para.runs:
                                if "Knowledge Transfer Plan" in run.text:
                                    run.text = run.text.replace("Knowledge Transfer Plan", title)
            for para in part.paragraphs:
                for run in para.runs:
                    if "Knowledge Transfer Plan" in run.text:
                        run.text = run.text.replace("Knowledge Transfer Plan", title)
    doc.core_properties.title = title
    doc.core_properties.author = "kevstemplates.com"
    doc.core_properties.last_modified_by = "kevstemplates.com"
    doc.core_properties.comments = ""
    doc.core_properties.keywords = ""
    doc.core_properties.subject = title

    doc.add_paragraph("About this document", style="Heading 1")
    for para in ([about] if isinstance(about, str) else about):
        doc.add_paragraph(para, style="Normal")
    doc.add_paragraph(
        guidance
        or "Delete any sections that do not apply. Text in grey italics is guidance and should be removed before issue.",
        style="Guidance",
    )

    for n, (heading, blocks) in enumerate(sections, start=1):
        doc.add_paragraph(f"{n}. {heading}", style="Heading 1")
        for block in blocks:
            kind = block[0]
            if kind == "p":
                doc.add_paragraph(block[1], style="Normal")
            elif kind == "g":
                doc.add_paragraph(block[1], style="Guidance")
            elif kind == "h2":
                doc.add_paragraph(block[1], style="Heading 2")
            elif kind == "l":
                for item in block[1]:
                    _bullet(doc, item)
            elif kind == "c":
                for item in block[1]:
                    _bullet(doc, item, "☐")
            elif kind == "n":
                for i, item in enumerate(block[1], start=1):
                    doc.add_paragraph(f"{i}.  {item}", style="List Paragraph")
            elif kind == "kv":
                labels = block[1]
                t = _table(doc, len(labels), 2, "Grid Table 2 Accent 1")
                _look(t, first_row=False)
                for row, label in zip(t.rows, labels):
                    row.cells[0].text = label
                doc.add_paragraph("", style="Normal")
            elif kind == "t":
                _, headers, rows, first_col = block
                body_rows = len(first_col) if first_col else rows
                t = _table(doc, body_rows + 1, len(headers), "Grid Table 4 Accent 1")
                _look(t)
                _set_header(t.rows[0], headers)
                if first_col:
                    for row, value in zip(t.rows[1:], first_col):
                        if isinstance(value, (list, tuple)):
                            for cell, v in zip(row.cells, value):
                                cell.text = v
                        else:
                            row.cells[0].text = value
                doc.add_paragraph("", style="Normal")
            elif kind == "sign":
                roles = block[1]
                t = _table(doc, len(roles) + 1, 4, "Grid Table 4 Accent 1")
                _look(t)
                _set_header(t.rows[0], ["Role", "Name", "Signature", "Date"])
                for row, role in zip(t.rows[1:], roles):
                    row.cells[0].text = role
                doc.add_paragraph("", style="Normal")
            else:
                raise ValueError(kind)
    doc.save(path)


# ---------------------------------------------------------------------------
# Excel
# ---------------------------------------------------------------------------

TITLE_FONT = Font(name="Calibri", size=20)
GUIDE_FONT = Font(name="Calibri", size=11, color="5A5A5A", italic=True)
BOLD = Font(name="Calibri", size=11, bold=True)
RAG = {
    "Red": "F8CBAD",
    "Amber": "FFE699",
    "Green": "C6EFCE",
}


def Col(name, width=18, choices=None, formula=None, number_format=None, rag=False):
    """A column. `formula` may use {r} for the row number and {A}..{Z} style
    names of other columns via {col:Name}."""
    return dict(name=name, width=width, choices=choices, formula=formula,
                number_format=number_format, rag=rag)


def Sheet(name, title, guidance, columns, rows=50, examples=None, table=None,
          extra=None, total_row=None):
    return dict(name=name, title=title, guidance=guidance, columns=columns,
                rows=rows, examples=examples or [], table=table, extra=extra,
                total_row=total_row)


def _resolve(formula, columns, r):
    letters = {c["name"]: get_column_letter(i + 1) for i, c in enumerate(columns)}
    out = formula.replace("{r}", str(r))
    for name, letter in letters.items():
        out = out.replace("{col:" + name + "}", letter)
    return out


def _write_sheet(wb, spec, lists_ws, list_cache):
    ws = wb.create_sheet(spec["name"][:31])
    cols = spec["columns"]
    ws["A2"] = spec["title"]
    ws["A2"].font = TITLE_FONT
    ws["A3"] = spec["guidance"]
    ws["A3"].font = GUIDE_FONT
    header_row = 5
    first = header_row + 1
    last = header_row + spec["rows"]
    for i, c in enumerate(cols, start=1):
        cell = ws.cell(row=header_row, column=i, value=c["name"])
        ws.column_dimensions[get_column_letter(i)].width = c["width"]
    # example rows then blanks
    for ri in range(first, last + 1):
        example = spec["examples"][ri - first] if ri - first < len(spec["examples"]) else None
        for ci, c in enumerate(cols, start=1):
            cell = ws.cell(row=ri, column=ci)
            if example is not None and ci - 1 < len(example) and example[ci - 1] is not None:
                cell.value = example[ci - 1]
            elif c["formula"]:
                cell.value = "=" + _resolve(c["formula"], cols, ri).lstrip("=")
            if c["number_format"]:
                cell.number_format = c["number_format"]
            cell.alignment = Alignment(wrap_text=True, vertical="top")
        if example is not None:
            for ci, c in enumerate(cols, start=1):
                if c["formula"] and (ci - 1 >= len(example) or example[ci - 1] is None):
                    ws.cell(row=ri, column=ci).value = "=" + _resolve(c["formula"], cols, ri).lstrip("=")
    ref = f"A{header_row}:{get_column_letter(len(cols))}{last}"
    table_name = spec["table"] or "".join(ch for ch in spec["name"].title() if ch.isalnum())
    t = Table(displayName=table_name, ref=ref)
    t.tableStyleInfo = TableStyleInfo(name="TableStyleMedium2", showRowStripes=True)
    ws.add_table(t)
    ws.freeze_panes = ws.cell(row=first, column=2)
    # drop-downs
    for ci, c in enumerate(cols, start=1):
        if c["choices"]:
            key = tuple(c["choices"])
            if key not in list_cache:
                lc = len(list_cache) + 1
                lists_ws.cell(row=1, column=lc, value=c["name"]).font = BOLD
                for k, v in enumerate(c["choices"], start=2):
                    lists_ws.cell(row=k, column=lc, value=v)
                lists_ws.column_dimensions[get_column_letter(lc)].width = 22
                col_letter = get_column_letter(lc)
                list_cache[key] = f"{quote_sheetname('Lists')}!${col_letter}$2:${col_letter}${len(c['choices']) + 1}"
            dv = DataValidation(type="list", formula1=list_cache[key], allow_blank=True)
            letter = get_column_letter(ci)
            dv.add(f"{letter}{first}:{letter}{last}")
            ws.add_data_validation(dv)
        if c["rag"]:
            letter = get_column_letter(ci)
            rng = f"{letter}{first}:{letter}{last}"
            for word, colour in RAG.items():
                ws.conditional_formatting.add(
                    rng,
                    FormulaRule(formula=[f'ISNUMBER(SEARCH("{word}",{letter}{first}))'],
                                fill=PatternFill("solid", start_color=colour, end_color=colour)),
                )
    if spec["total_row"]:
        tr = last + 1
        ws.cell(row=tr, column=1, value="Total").font = BOLD
        for name, func in spec["total_row"].items():
            ci = [c["name"] for c in cols].index(name) + 1
            letter = get_column_letter(ci)
            cell = ws.cell(row=tr, column=ci, value=f"={func}({letter}{first}:{letter}{last})")
            cell.font = BOLD
            if cols[ci - 1]["number_format"]:
                cell.number_format = cols[ci - 1]["number_format"]
    if spec["extra"]:
        spec["extra"](ws, cols, first, last)
    print_setup(ws)
    return ws


def print_setup(ws):
    """Landscape, one page wide."""
    ws.page_setup.orientation = "landscape"
    ws.page_setup.paperSize = ws.PAPERSIZE_A4
    ws.page_setup.fitToWidth = 1
    ws.page_setup.fitToHeight = 0
    ws.sheet_properties.pageSetUpPr.fitToPage = True


def highlight(ws, rng, formula, colour, font_colour=None):
    """Conditional fill for `rng` when `formula` (relative to its top-left cell) is true."""
    ws.conditional_formatting.add(rng, FormulaRule(
        formula=[formula], fill=PatternFill("solid", start_color=colour, end_color=colour),
        font=Font(color=font_colour) if font_colour else None))


def build_xlsx(path, sheets, guide, lists_extra=None, front=None):
    """`guide` is a list of (heading, text) rows for the Guide sheet.
    `front(wb)` may create summary sheets and return them; they are placed first."""
    wb = Workbook()
    wb.remove(wb.active)
    data_sheets = []
    list_cache = {}
    lists_ws = None
    # Lists sheet must exist before validations reference it, but is shown last
    for spec in sheets:
        if lists_ws is None:
            lists_ws = wb.create_sheet("Lists")
        data_sheets.append(_write_sheet(wb, spec, lists_ws, list_cache))
    gws = wb.create_sheet("Guide")
    gws["A2"] = "How to use this workbook"
    gws["A2"].font = TITLE_FONT
    gws.column_dimensions["A"].width = 28
    gws.column_dimensions["B"].width = 100
    for i, (h, txt) in enumerate(guide, start=4):
        gws.cell(row=i, column=1, value=h).font = BOLD
        c = gws.cell(row=i, column=2, value=txt)
        c.alignment = Alignment(wrap_text=True, vertical="top")
    gws.cell(row=len(guide) + 6, column=1,
             value="Free template from kevstemplates.com").font = GUIDE_FONT
    if lists_extra:
        lists_extra(lists_ws)
    first_sheets = front(wb) if front else []
    for f in first_sheets:
        print_setup(f)
    # order: summary sheets, data sheets, Guide, Lists
    wb._sheets = first_sheets + data_sheets + [gws, lists_ws]
    if not list_cache and not lists_extra:
        wb.remove(lists_ws)

    wb.active = 0
    wb.properties.title = sheets[0]["title"]
    wb.properties.creator = "kevstemplates.com"
    wb.save(path)


# ---------------------------------------------------------------------------
# Building a Word template from the worked example on a site page
# ---------------------------------------------------------------------------
import re as _re

KV_HEADERS = {"field", "element", "item", "attribute", "detail", "property"}
KV_VALUE_HEADERS = {"content", "detail", "details", "value", "description", "entry"}


def _cells(line):
    return [c.strip() for c in line.strip().strip("|").split("|")]


def _plain(text):
    text = _re.sub(r"\*\*(.+?)\*\*", r"\1", text)
    text = _re.sub(r"\[(.+?)\]\((.+?)\)", r"\1", text)
    text = text.replace("`", "")
    return text.strip()


def page_sections(page, start, end, prose=False, keep_rows=False):
    """Parse the markdown of `page` (path under _pages, no extension) from the
    heading matching regex `start` up to the heading matching `end`, and return
    a list of (heading, blocks) for build_docx.

    Worked-example tables become blank tables with the same columns. Fixed
    labels (bold first-column cells) are kept. Prose becomes guidance unless
    `prose` is true. `keep_rows` keeps every row as written (for reference
    tables such as definitions)."""
    path = os.path.join(ROOT, "_pages", page + ".md")
    text = open(path, encoding="utf-8").read().split("---", 2)[2]
    lines = text.splitlines()
    on = False
    sections = []
    current = None
    pending_h2 = None
    i = 0

    def ensure():
        nonlocal current
        if current is None:
            current = ("Details", [])
            sections.append(current)
        return current[1]

    while i < len(lines):
        line = lines[i]
        if not on:
            if _re.match(start, line):
                on = True
            i += 1
            continue
        if end and _re.match(end, line):
            break
        if line.strip().startswith(("<div class=\"mermaid", "```")):
            closer = "</div>" if line.strip().startswith("<div") else "```"
            i += 1
            while i < len(lines) and not lines[i].strip().startswith(closer):
                i += 1
            i += 1
            continue
        if line.startswith("## "):
            current = (_plain(line[3:]), [])
            sections.append(current)
        elif line.startswith("### ") or line.startswith("#### "):
            ensure().append(H2(_plain(line.lstrip("#").strip())))
        elif line.startswith("|"):
            rows = []
            while i < len(lines) and lines[i].startswith("|"):
                if not _re.match(r"^\|[\s\-|:]+\|\s*$", lines[i]):
                    rows.append(_cells(lines[i]))
                i += 1
            headers = [_plain(h) for h in rows[0]]
            body = rows[1:]
            bold_first = [r for r in body if r and r[0].startswith("**")]
            if keep_rows:
                ensure().append(T(headers, first_col=[[_plain(c) for c in r] for r in body]))
            elif len(headers) == 2 and (headers[0].lower() in KV_HEADERS or headers[1].lower() in KV_VALUE_HEADERS) and len(bold_first) == len(body):
                ensure().append(KV(*[_plain(r[0]) for r in body]))
            elif headers[0].lower() == "role" and "signature" in [h.lower() for h in headers]:
                ensure().append(SIGN(*[_plain(r[0]) for r in body]))
            elif body and len(bold_first) == len(body):
                ensure().append(T(headers, first_col=[_plain(r[0]) for r in body]))
            elif bold_first:
                labels = [_plain(r[0]) if r[0].startswith("**") else "" for r in body]
                ensure().append(T(headers, first_col=labels))
            else:
                ensure().append(T(headers, rows=3))
            continue
        elif _re.match(r"^\s*- \[[ x]\] ", line):
            items = []
            while i < len(lines) and _re.match(r"^\s*- \[[ x]\] ", lines[i]):
                items.append(_plain(_re.sub(r"^\s*- \[[ x]\] ", "", lines[i])))
                i += 1
            ensure().append(C(*items))
            continue
        elif _re.match(r"^\s*[-*] ", line):
            items = []
            while i < len(lines) and _re.match(r"^\s*[-*] ", lines[i]):
                items.append(_plain(_re.sub(r"^\s*[-*] ", "", lines[i])))
                i += 1
            ensure().append(L(*items) if prose else G("For example: " + "; ".join(items)))
            continue
        elif _re.match(r"^\s*\d+\. ", line):
            items = []
            while i < len(lines) and _re.match(r"^\s*\d+\. ", lines[i]):
                items.append(_plain(_re.sub(r"^\s*\d+\. ", "", lines[i])))
                i += 1
            ensure().append(N(*items))
            continue
        elif line.strip() and not line.startswith(("{:", "<", "---")) and not line.strip().startswith("<"):
            txt = _plain(line.lstrip("> ").strip('"'))
            if txt:
                ensure().append(P(txt) if prose else G("Example: " + txt))
        i += 1
    out = [s for s in sections if s[1]]
    if out and out[0][0] == "Details" and out[0][1] and out[0][1][0][0] == "h2":
        out[0] = (out[0][1][0][1], out[0][1][1:])
    return out


def rename(sections, mapping):
    """Apply text replacements to headings and table labels."""
    def fix(t):
        for a, b in mapping.items():
            t = t.replace(a, b)
        return t

    def fix_block(b):
        kind = b[0]
        if kind in ("p", "g", "h2"):
            return (kind, fix(b[1]))
        if kind in ("l", "c", "n", "kv", "sign"):
            return (kind, tuple(fix(x) for x in b[1]))
        if kind == "t":
            fc = b[3]
            if fc:
                fc = [fix(x) if isinstance(x, str) else [fix(y) for y in x] for x in fc]
            return ("t", [fix(h) for h in b[1]], b[2], fc)
        return b
    return [(fix(h), [fix_block(b) for b in bl]) for h, bl in sections]
