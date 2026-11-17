"""Excel template specifications. Each entry in sheets() is passed to
lib.build_xlsx(path, **spec)."""
import os
import re

from openpyxl.chart import BarChart, Reference
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter

from lib import (BOLD, GUIDE_FONT, RAG, ROOT, TITLE_FONT, Col, Sheet,
                 highlight, _plain)

DATE = "dd-mmm-yy"
GBP = "£#,##0"
PCT = "0%"
RAGC = ["Green", "Amber", "Red"]
HML = ["High", "Medium", "Low"]
HL = ["High", "Low"]
BLUE = "108BB9"
HEAD_FILL = PatternFill("solid", start_color="4472C4", end_color="4472C4")
HEAD_FONT = Font(name="Calibri", size=11, bold=True, color="FFFFFF")
THIN = Side(style="thin", color="BFBFBF")
BOX = Border(left=THIN, right=THIN, top=THIN, bottom=THIN)
GREEN, AMBER, RED = RAG["Green"], RAG["Amber"], RAG["Red"]


# ---------------------------------------------------------------------------
# helpers
# ---------------------------------------------------------------------------

def page_text(page):
    return open(os.path.join(ROOT, "_pages", page + ".md"), encoding="utf-8").read()


def checklist(page, start, end):
    """Return [(area, item)] for the `- [ ]` items between two headings."""
    rows, area, on = [], "", False
    for line in page_text(page).splitlines():
        if not on:
            on = bool(re.match(start, line))
            continue
        if re.match(end, line):
            break
        if line.startswith("### "):
            area = _plain(line[4:])
        m = re.match(r"^\s*- \[[ x]\] (.+)", line)
        if m:
            rows.append((area, _plain(m.group(1)).rstrip("?") ))
    return rows


def table_first_col(page, heading):
    """First-column cells of the first table under `heading`."""
    out, on, seen = [], False, False
    for line in page_text(page).splitlines():
        if not on:
            on = line.strip() == heading
            continue
        if line.startswith("|"):
            seen = True
            cells = [c.strip() for c in line.strip().strip("|").split("|")]
            if re.match(r"^[\s\-:]+$", cells[0]):
                continue
            out.append(_plain(cells[0]))
        elif seen:
            break
    return out[1:]


def status_fills(ws, letter, first, last, done=("Done", "Complete", "Pass", "Yes"),
                 warn=("In progress", "Partial", "On hold"), bad=("Not started", "Fail", "No", "Overdue")):
    rng = f"{letter}{first}:{letter}{last}"
    for words, colour in ((done, GREEN), (warn, AMBER), (bad, RED)):
        cond = ",".join(f'{letter}{first}="{w}"' for w in words)
        highlight(ws, rng, f"OR({cond})", colour)


def label(ws, ref, text, bold=True):
    ws[ref] = text
    ws[ref].font = BOLD if bold else GUIDE_FONT


def head(ws, row, col, values, widths=None):
    for i, v in enumerate(values):
        c = ws.cell(row=row, column=col + i, value=v)
        c.fill = HEAD_FILL
        c.font = HEAD_FONT
        c.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        c.border = BOX
        if widths:
            ws.column_dimensions[get_column_letter(col + i)].width = widths[i]


def box(cell, fmt=None, bold=False):
    cell.border = BOX
    if fmt:
        cell.number_format = fmt
    if bold:
        cell.font = BOLD
    return cell


def summary_sheet(wb, name, title, guidance):
    ws = wb.create_sheet(name)
    ws["A2"] = title
    ws["A2"].font = TITLE_FONT
    ws["A3"] = guidance
    ws["A3"].font = GUIDE_FONT
    ws.sheet_view.showGridLines = False
    ws.column_dimensions["A"].width = 30
    return ws


CHECK_STATUS = ["Done", "In progress", "Not started", "N/A"]


def checklist_sheet(name, title, guidance, items, status=CHECK_STATUS, extra_cols=None):
    cols = [Col("Ref", 7), Col("Area", 22), Col("Check", 60),
            Col("Status", 14, choices=status), Col("Owner", 18),
            Col("Date", 12, number_format=DATE), Col("Evidence / notes", 40)]
    if extra_cols:
        cols = cols[:3] + extra_cols + cols[3:]
    examples, n, prev, sub = [], 0, None, 0
    for area, item in items:
        if area != prev:
            n, sub, prev = n + 1, 0, area
        sub += 1
        examples.append([f"{n}.{sub}", area, item])
    rows = len(items) + 10
    status_col = get_column_letter([c["name"] for c in cols].index("Status") + 1)

    def extra(ws, cols_, first, last):
        status_fills(ws, status_col, first, last)
        label(ws, "A4", "Complete:")
        ws["B4"] = (f'=IFERROR(COUNTIF({status_col}{first}:{status_col}{last},"{status[0]}")/'
                    f'(COUNTA(C{first}:C{last})-COUNTIF({status_col}{first}:{status_col}{last},"N/A")),0)')
        ws["B4"].number_format = PCT
        ws["B4"].font = BOLD
    return Sheet(name, title, guidance, cols, rows=rows, examples=examples, extra=extra)


def checklist_book(title, guidance, items, guide, sheet="Checklist", **kw):
    return dict(sheets=[checklist_sheet(sheet, title, guidance, items, **kw)], guide=[
        ("Purpose", guide),
        ("Status", "Done, In progress, Not started or N/A. The Complete figure at the top ignores N/A items."),
        ("Evidence", "Record where the evidence is kept, such as a document link or meeting reference."),
        ("Adding checks", "Type new checks into the blank rows at the bottom of the table. Delete checks that do not apply, or mark them N/A."),
    ])


def scoring_extra(weights, crit_start, score_col, rank_col, out_of=None):
    """Put criteria weights in row 4 above the criteria columns."""
    def extra(ws, cols, first, last):
        label(ws, get_column_letter(crit_start - 1) + "4", "Weight →")
        for i, w in enumerate(weights):
            c = ws.cell(row=4, column=crit_start + i, value=w)
            c.font = BOLD
            c.fill = PatternFill("solid", start_color="DDEBF7", end_color="DDEBF7")
            c.number_format = "0%" if w <= 1 else "0"
        sl = get_column_letter(score_col)
        highlight(ws, f"{sl}{first}:{sl}{last}", f'AND(ISNUMBER({sl}{first}),{get_column_letter(rank_col)}{first}=1)', GREEN)
    return extra


def weighted(crit_start, n, scale=5, out_of=100):
    a = get_column_letter(crit_start)
    b = get_column_letter(crit_start + n - 1)
    return (f"IF(COUNT({a}{{r}}:{b}{{r}})=0,\"\",SUMPRODUCT(${a}$4:${b}$4,{a}{{r}}:{b}{{r}})"
            f"/SUM(${a}$4:${b}$4)/{scale}*{out_of})")


# ---------------------------------------------------------------------------
# project templates
# ---------------------------------------------------------------------------

def action_tracker():
    cols = [Col("Action ID", 10), Col("Date raised", 12, number_format=DATE),
            Col("Description", 45), Col("Source", 18, choices=["Project board", "Team meeting", "Workshop", "Review", "Risk", "Issue", "Other"]),
            Col("Category", 14, choices=["Planning", "Technical", "Commercial", "Communication", "Governance", "Resource", "Other"]),
            Col("Priority", 10, choices=["High", "Medium", "Low"]),
            Col("Owner", 16), Col("Due date", 12, number_format=DATE),
            Col("Status", 13, choices=["Open", "In progress", "Complete", "On hold", "Cancelled"]),
            Col("Days overdue", 10, formula='IF(OR({col:Due date}{r}="",{col:Status}{r}="Complete",{col:Status}{r}="Cancelled"),"",MAX(0,TODAY()-{col:Due date}{r}))'),
            Col("Date closed", 12, number_format=DATE), Col("Related items", 16), Col("Notes", 40)]

    def extra(ws, c, first, last):
        status_fills(ws, "I", first, last, done=("Complete",), warn=("In progress", "On hold"), bad=())
        highlight(ws, f"A{first}:H{last}", f'AND(ISNUMBER($J{first}),$J{first}>0)', RED)
    return dict(sheets=[Sheet("Actions", "Action Tracker", "One row per action. Write each action as a verb with an owner and a due date. Overdue rows turn red.", cols, rows=100, extra=extra)],
                guide=[("Action ID", "Unique reference, for example ACT-001."),
                       ("Description", "A clear, specific statement of what needs to be done, starting with a verb."),
                       ("Source", "Where the action came from, such as a board meeting or review."),
                       ("Owner", "One named person, not a team."),
                       ("Status", "Open, In progress, Complete, On hold or Cancelled."),
                       ("Days overdue", "Calculated from the due date for actions that are not complete or cancelled."),
                       ("Related items", "Links to risks, issues or decisions, for example R-004 or DEC-012."),
                       ("Review", "Review open actions at each team meeting and close completed ones with the date closed.")])


def decision_log():
    cols = [Col("Decision ID", 11), Col("Date", 12, number_format=DATE), Col("Decision", 45),
            Col("Rationale", 40), Col("Options considered", 30),
            Col("Category", 13, choices=["Scope", "Technical", "Resource", "Schedule", "Budget", "Process", "Governance"]),
            Col("Decision maker", 18), Col("Stakeholders consulted", 22), Col("Impact", 30),
            Col("Status", 13, choices=["Pending", "Approved", "Implemented", "Superseded", "Deferred", "Rejected"]),
            Col("Related items", 16), Col("Review date", 12, number_format=DATE)]

    def extra(ws, c, first, last):
        status_fills(ws, "J", first, last, done=("Approved", "Implemented"), warn=("Pending", "Deferred"), bad=("Rejected",))
    return dict(sheets=[Sheet("Decisions", "Decision Log", "Record each decision with its rationale and who made it, so it can be traced later.", cols, rows=100, extra=extra)],
                guide=[("Decision", "State exactly what was decided, for example 'Selected supplier A for cloud hosting', not 'Agreed option 2'."),
                       ("Rationale", "Why this option was chosen over the alternatives."),
                       ("Decision maker", "The person or board with the authority to make it. Scope changes go to the project board; budget increases to the sponsor."),
                       ("Status", "Pending, Approved, Implemented, Superseded, Deferred or Rejected. Mark replaced decisions as Superseded and reference the new one."),
                       ("Review", "Review pending decisions weekly and the full log at each stage gate.")])


def issue_log():
    cols = [Col("Issue ID", 9), Col("Date raised", 12, number_format=DATE), Col("Raised by", 16),
            Col("Description", 45), Col("Category", 13, choices=["Technical", "Resource", "Scope", "Schedule", "Budget", "Quality", "Supplier", "Other"]),
            Col("Priority", 10, choices=["Critical", "High", "Medium", "Low"]), Col("Impact", 30),
            Col("Root cause", 28), Col("Resolution actions", 35), Col("Owner", 16),
            Col("Target date", 12, number_format=DATE),
            Col("Status", 12, choices=["Open", "In progress", "Escalated", "Resolved", "Closed"]),
            Col("Days open", 9, formula='IF({col:Date raised}{r}="","",IF({col:Date closed}{r}="",TODAY(),{col:Date closed}{r})-{col:Date raised}{r})'),
            Col("Actual resolution", 30), Col("Date closed", 12, number_format=DATE)]

    def extra(ws, c, first, last):
        status_fills(ws, "L", first, last, done=("Resolved", "Closed"), warn=("In progress",), bad=("Escalated",))
        highlight(ws, f"F{first}:F{last}", f'F{first}="Critical"', RED)
        highlight(ws, f"F{first}:F{last}", f'F{first}="High"', AMBER)
    return dict(sheets=[Sheet("Issues", "Issue Log", "Record problems that have happened and need resolving. Risks that might happen belong in the risk register.", cols, rows=100, extra=extra)],
                guide=[("Issue or risk?", "An issue has already happened. If it might happen, record it in the risk register instead."),
                       ("Priority", "Critical, High, Medium or Low, based on the effect on the project's objectives."),
                       ("Root cause", "The underlying reason, so that the fix stops it happening again."),
                       ("Status", "Open, In progress, Escalated, Resolved or Closed. Escalate issues that are beyond your tolerances."),
                       ("Days open", "Calculated from the date raised to the date closed, or to today if still open.")])


def stakeholder_register():
    cols = [Col("ID", 8), Col("Name", 20), Col("Role / title", 20), Col("Organisation", 18),
            Col("Contact details", 24), Col("Category", 12, choices=["Internal", "External"]),
            Col("Interest", 28), Col("Expectations", 28),
            Col("Influence", 10, choices=HML), Col("Impact", 10, choices=HML),
            Col("Attitude", 12, choices=["Champion", "Supporter", "Neutral", "Critic", "Blocker"]),
            Col("Current engagement", 14, choices=["Unaware", "Resistant", "Neutral", "Supportive", "Leading"]),
            Col("Desired engagement", 14, choices=["Unaware", "Resistant", "Neutral", "Supportive", "Leading"]),
            Col("Engagement strategy", 30), Col("Communication needs", 26),
            Col("Frequency", 12, choices=["Daily", "Weekly", "Fortnightly", "Monthly", "Quarterly", "As needed"]),
            Col("Owner", 16), Col("Notes", 30)]

    def extra(ws, c, first, last):
        status_fills(ws, "K", first, last, done=("Champion", "Supporter"), warn=("Critic",), bad=("Blocker",))
        highlight(ws, f"M{first}:M{last}", f'AND(M{first}<>"",M{first}<>L{first})', AMBER)
    return dict(sheets=[Sheet("Register", "Stakeholder Register", "One row per stakeholder or group. Desired engagement turns amber when it differs from current engagement.", cols, rows=60, extra=extra)],
                guide=[("Influence", "High: can approve or block the project. Medium: can influence decisions. Low: limited ability to affect it."),
                       ("Impact", "How much the stakeholder is affected by the project's outcome."),
                       ("Attitude", "Champion, Supporter, Neutral, Critic or Blocker."),
                       ("Engagement", "Unaware, Resistant, Neutral, Supportive or Leading. Plan actions to close the gap between current and desired."),
                       ("Privacy", "This register holds personal data. Store it securely and only record what you need.")])


def stakeholder_analysis():
    quad = ('IF(OR({col:Power}{r}="",{col:Interest}{r}=""),"",IF({col:Power}{r}="High",'
            'IF({col:Interest}{r}="High","Manage closely","Keep satisfied"),'
            'IF({col:Interest}{r}="High","Keep informed","Monitor")))')
    cols = [Col("Stakeholder", 22), Col("Role", 18),
            Col("Category", 14, choices=["Internal", "External", "Organisational", "End users", "Indirect"]),
            Col("Power", 9, choices=HL), Col("Interest", 9, choices=HL),
            Col("Influence", 10, choices=HML), Col("Impact", 10, choices=HML),
            Col("Attitude", 12, choices=["Champion", "Supporter", "Neutral", "Critic", "Blocker"]),
            Col("Expectations", 30), Col("Quadrant", 16, formula=quad),
            Col("Engagement approach", 34), Col("Owner", 16)]

    def front(wb):
        ws = summary_sheet(wb, "Grid", "Power / Interest Grid", "Counts update from the Analysis sheet.")
        ws.column_dimensions["B"].width = 26
        ws.column_dimensions["C"].width = 26
        label(ws, "A6", "High power")
        label(ws, "A8", "Low power")
        label(ws, "B10", "Low interest")
        label(ws, "C10", "High interest")
        cells = {"B6": ("Keep satisfied", AMBER), "C6": ("Manage closely", RED),
                 "B8": ("Monitor", "E7E6E6"), "C8": ("Keep informed", GREEN)}
        for ref, (q, colour) in cells.items():
            c = ws[ref]
            c.value = f'="{q}: "&COUNTIF(Analysis!$J$6:$J$105,"{q}")'
            c.fill = PatternFill("solid", start_color=colour, end_color=colour)
            c.font = BOLD
            c.alignment = Alignment(horizontal="center", vertical="center")
            c.border = BOX
            ws.row_dimensions[c.row].height = 60
        return [ws]
    return dict(sheets=[Sheet("Analysis", "Stakeholder Analysis", "List every stakeholder, then rate power and interest. The quadrant tells you how closely to engage them.", cols, rows=100)],
                front=front,
                guide=[("Power", "Can they stop or significantly change the project? High or Low."),
                       ("Interest", "How much do they care about the outcome? High or Low."),
                       ("Quadrant", "Manage closely (high power, high interest), Keep satisfied (high power, low interest), Keep informed (low power, high interest) or Monitor."),
                       ("Influence / impact", "Influence: can they sway others? Impact: how much will they be affected?"),
                       ("Next step", "Copy the key stakeholders into the stakeholder register and plan their engagement.")])


def communication_matrix():
    cols = [Col("Audience", 20), Col("Information needed", 30), Col("Purpose", 24),
            Col("Channel", 14, choices=["Email", "Meeting", "Report", "Dashboard", "Chat", "Workshop", "Newsletter", "Intranet", "Presentation"]),
            Col("Frequency", 13, choices=["Daily", "Weekly", "Fortnightly", "Monthly", "Quarterly", "At milestones", "As needed"]),
            Col("Format", 18), Col("Owner", 16), Col("Next due", 12, number_format=DATE),
            Col("Feedback route", 22), Col("Notes", 28)]
    return dict(sheets=[Sheet("Matrix", "Communication Matrix", "Who needs what, when, how, and who sends it. Review the matrix at each stage boundary.", cols, rows=40,
                              examples=[["Sponsor", "Status summary, decisions needed, key risks", "Keep informed and get decisions", "Meeting", "Weekly"],
                                        ["Project board", "Highlight report", "Oversight and control", "Report", "Monthly"],
                                        ["Project team", "Task updates, priorities, blockers", "Coordinate delivery", "Meeting", "Daily"],
                                        ["End users", "Changes, training dates, timeline", "Prepare for change", "Email", "As needed"]])],
                guide=[("Audience", "A person or group from the stakeholder register."),
                       ("Information needed", "What they need to know, not what you want to tell them."),
                       ("Channel", "Choose the channel that suits the message: meetings for discussion and decisions, reports for formal status, email for records."),
                       ("Owner", "The person who prepares and sends it."),
                       ("Example rows", "The first rows are examples. Edit or delete them.")])


def project_budget():
    cats = ["Labour", "Hardware", "Software", "Services", "Facilities", "Travel", "Contingency", "Other"]
    cols = [Col("Category", 14, choices=cats), Col("Item", 30), Col("Cost type", 10, choices=["Capex", "Opex"]),
            Col("Budget", 12, number_format=GBP), Col("Actual", 12, number_format=GBP),
            Col("Committed", 12, number_format=GBP), Col("Forecast to complete", 13, number_format=GBP),
            Col("EAC", 12, number_format=GBP, formula='IF({col:Budget}{r}="","",N({col:Actual}{r})+N({col:Committed}{r})+N({col:Forecast to complete}{r}))'),
            Col("Variance", 12, number_format=GBP, formula='IF({col:Budget}{r}="","",{col:Budget}{r}-{col:EAC}{r})'),
            Col("Variance %", 10, number_format=PCT, formula='IF(OR({col:Budget}{r}="",{col:Budget}{r}=0),"",{col:Variance}{r}/{col:Budget}{r})'),
            Col("RAG", 9, rag=True, formula='IF({col:Budget}{r}="","",IF({col:Variance %}{r}<-0.1,"Red",IF({col:Variance %}{r}<0,"Amber","Green")))'),
            Col("Notes", 30)]
    months = [Col("Category", 14, choices=cats)] + [Col(f"Month {i}", 10, number_format=GBP) for i in range(1, 13)] + \
        [Col("Total", 12, number_format=GBP, formula="SUM(B{r}:M{r})")]

    def front(wb):
        ws = summary_sheet(wb, "Summary", "Project Budget Summary", "Totals by category update from the Budget sheet. Contingency is held as its own category.")
        head(ws, 5, 1, ["Category", "Budget", "Actual", "Committed", "EAC", "Variance", "Variance %"], [18, 13, 13, 13, 13, 13, 11])
        for i, cat in enumerate(cats + ["Total"], start=6):
            box(ws.cell(row=i, column=1, value=cat), bold=cat == "Total")
            for j, src in enumerate(["D", "E", "F", "H"], start=2):
                f = f"=SUM(B6:B{i-1})".replace("B", get_column_letter(j)) if cat == "Total" else f'=SUMIF(Budget!$A$6:$A$105,$A{i},Budget!{src}$6:{src}$105)'
                box(ws.cell(row=i, column=j, value=f), GBP, cat == "Total")
            box(ws.cell(row=i, column=6, value=f"=B{i}-E{i}"), GBP, cat == "Total")
            box(ws.cell(row=i, column=7, value=f'=IF(B{i}=0,"",F{i}/B{i})'), PCT, cat == "Total")
        highlight(ws, "F6:F14", "F6<0", RED)
        return [ws]
    return dict(sheets=[Sheet("Budget", "Project Budget", "One row per budget line. EAC is actual plus committed plus forecast to complete.", cols, rows=100, total_row={"Budget": "SUM", "Actual": "SUM", "Committed": "SUM", "Forecast to complete": "SUM", "EAC": "SUM", "Variance": "SUM"}),
                        Sheet("Cash flow", "Cash Flow Forecast", "Planned spend by month. Rename Month 1 to Month 12 with your own months.", months, rows=12, table="CashFlow",
                              examples=[[c] for c in cats], total_row={f"Month {i}": "SUM" for i in range(1, 13)} | {"Total": "SUM"})],
                front=front,
                guide=[("Budget", "The approved amount for each line. The total is the budget at completion (BAC)."),
                       ("Actual", "Spend that has been invoiced or charged."),
                       ("Committed", "Spend that is contracted or ordered but not yet invoiced."),
                       ("Forecast to complete", "Further spend expected on the line, beyond actual and committed."),
                       ("EAC", "Estimate at completion: actual + committed + forecast to complete."),
                       ("RAG", "Green when forecast is within budget, Amber when over by up to 10%, Red when over by more than 10%. Change the thresholds to match your tolerances."),
                       ("Contingency", "Keep contingency as its own line so its use is visible. Management reserve sits outside the project budget.")])


def earned_value_calculator():
    cols = [Col("Work package", 28), Col("BAC", 12, number_format=GBP),
            Col("Planned % complete", 11, number_format=PCT), Col("Actual % complete", 11, number_format=PCT),
            Col("Actual cost (AC)", 13, number_format=GBP),
            Col("PV", 12, number_format=GBP, formula='IF(OR({col:BAC}{r}="",{col:Planned % complete}{r}=""),"",{col:BAC}{r}*{col:Planned % complete}{r})'),
            Col("EV", 12, number_format=GBP, formula='IF(OR({col:BAC}{r}="",{col:Actual % complete}{r}=""),"",{col:BAC}{r}*{col:Actual % complete}{r})'),
            Col("CV", 12, number_format=GBP, formula='IF(OR({col:EV}{r}="",{col:Actual cost (AC)}{r}=""),"",{col:EV}{r}-{col:Actual cost (AC)}{r})'),
            Col("SV", 12, number_format=GBP, formula='IF(OR({col:EV}{r}="",{col:PV}{r}=""),"",{col:EV}{r}-{col:PV}{r})'),
            Col("CPI", 8, number_format="0.00", formula='IFERROR({col:EV}{r}/{col:Actual cost (AC)}{r},"")'),
            Col("SPI", 8, number_format="0.00", formula='IFERROR({col:EV}{r}/{col:PV}{r},"")'),
            Col("EAC", 12, number_format=GBP, formula='IFERROR({col:BAC}{r}/{col:CPI}{r},"")'),
            Col("VAC", 12, number_format=GBP, formula='IFERROR({col:BAC}{r}-{col:EAC}{r},"")')]

    def extra(ws, c, first, last):
        t = last + 1
        for col in ("J", "K"):
            highlight(ws, f"{col}{first}:{col}{t}", f'AND(ISNUMBER({col}{first}),{col}{first}<0.9)', RED)
            highlight(ws, f"{col}{first}:{col}{t}", f'AND(ISNUMBER({col}{first}),{col}{first}<1)', AMBER)
            highlight(ws, f"{col}{first}:{col}{t}", f'ISNUMBER({col}{first})', GREEN)
        ws[f"J{t}"] = f'=IFERROR(G{t}/E{t},"")'
        ws[f"K{t}"] = f'=IFERROR(G{t}/F{t},"")'
        ws[f"L{t}"] = f'=IFERROR(B{t}/J{t},"")'
        ws[f"M{t}"] = f'=IFERROR(B{t}-L{t},"")'
        for col, fmt in (("J", "0.00"), ("K", "0.00"), ("L", GBP), ("M", GBP)):
            ws[f"{col}{t}"].number_format = fmt
            ws[f"{col}{t}"].font = BOLD
        r = t + 2
        label(ws, f"A{r}", "Project measures")
        rows = [("Estimate to complete (ETC)", f'=IFERROR(L{t}-E{t},"")', GBP),
                ("To-complete performance index (TCPI)", f'=IFERROR((B{t}-G{t})/(B{t}-E{t}),"")', "0.00"),
                ("Percent complete (EV / BAC)", f'=IFERROR(G{t}/B{t},"")', PCT),
                ("Percent spent (AC / BAC)", f'=IFERROR(E{t}/B{t},"")', PCT)]
        for i, (name, f, fmt) in enumerate(rows, start=r + 1):
            box(ws.cell(row=i, column=1, value=name))
            box(ws.cell(row=i, column=2, value=f), fmt, True)
    return dict(sheets=[Sheet("EVM", "Earned Value Calculator", "Enter BAC, planned and actual % complete, and actual cost for each work package at the status date. Everything else is calculated.", cols, rows=30, extra=extra,
                              total_row={"BAC": "SUM", "Actual cost (AC)": "SUM", "PV": "SUM", "EV": "SUM", "CV": "SUM", "SV": "SUM"})],
                guide=[("BAC", "Budget at completion: the approved budget for the work package."),
                       ("PV", "Planned value: the budgeted cost of work scheduled to date (BAC x planned % complete)."),
                       ("EV", "Earned value: the budgeted cost of work actually performed (BAC x actual % complete)."),
                       ("AC", "Actual cost of the work performed to date."),
                       ("CV and SV", "Cost variance = EV - AC. Schedule variance = EV - PV. Negative means over budget or behind schedule."),
                       ("CPI and SPI", "Cost performance index = EV / AC. Schedule performance index = EV / PV. Below 1.0 is unfavourable; amber below 1.0, red below 0.9."),
                       ("EAC and VAC", "Estimate at completion = BAC / CPI, assuming current cost performance continues. Variance at completion = BAC - EAC."),
                       ("TCPI", "The cost efficiency needed on the remaining work to finish within BAC. Above 1.1 is usually unrealistic."),
                       ("Measuring progress", "Use objective measures of % complete, such as 0/50/100 per task or completed products, rather than effort spent.")])


def executive_dashboard():
    cols = [Col("Project", 24), Col("Project manager", 16), Col("Sponsor", 16),
            Col("Stage", 12, choices=["Start-up", "Initiation", "Delivery", "Closure"]),
            Col("Overall", 9, choices=RAGC, rag=True), Col("Schedule", 9, choices=RAGC, rag=True),
            Col("Budget", 9, choices=RAGC, rag=True), Col("Scope", 9, choices=RAGC, rag=True),
            Col("Risks", 9, choices=RAGC, rag=True), Col("Trend", 8, choices=["↑", "→", "↓"]),
            Col("Budget (£)", 12, number_format=GBP), Col("Actual (£)", 12, number_format=GBP),
            Col("Forecast (£)", 12, number_format=GBP), Col("Next milestone", 22),
            Col("Milestone date", 12, number_format=DATE), Col("Key issue or decision needed", 40)]

    def front(wb):
        ws = summary_sheet(wb, "Dashboard", "Executive Dashboard", "Summary of all projects. Update the Projects sheet; this page recalculates.")
        label(ws, "A4", "Reporting period:")
        head(ws, 6, 1, ["Dimension", "Green", "Amber", "Red"], [18, 10, 10, 10])
        for i, (dim, col) in enumerate([("Overall", "E"), ("Schedule", "F"), ("Budget", "G"), ("Scope", "H"), ("Risks", "I")], start=7):
            box(ws.cell(row=i, column=1, value=dim), bold=True)
            for j, rag in enumerate(RAGC, start=2):
                c = box(ws.cell(row=i, column=j, value=f'=COUNTIF(Projects!${col}$6:${col}$55,"{rag}")'))
                c.fill = PatternFill("solid", start_color=RAG[rag], end_color=RAG[rag])
                c.alignment = Alignment(horizontal="center")
        head(ws, 14, 1, ["Finance", "£"])
        for i, (name, col) in enumerate([("Total budget", "K"), ("Actual to date", "L"), ("Forecast", "M")], start=15):
            box(ws.cell(row=i, column=1, value=name))
            box(ws.cell(row=i, column=2, value=f"=SUM(Projects!{col}6:{col}55)"), GBP)
        box(ws.cell(row=18, column=1, value="Forecast variance"), bold=True)
        box(ws.cell(row=18, column=2, value="=B15-B17"), GBP, True)
        highlight(ws, "B18", "B18<0", RED)
        ws.column_dimensions["B"].width = 14
        chart = BarChart()
        chart.type = "bar"
        chart.grouping = "stacked"
        chart.overlap = 100
        chart.title = "Project status"
        data = Reference(ws, min_col=2, max_col=4, min_row=6, max_row=11)
        chart.add_data(data, titles_from_data=True)
        chart.set_categories(Reference(ws, min_col=1, min_row=7, max_row=11))
        for s, colour in zip(chart.series, ["70AD47", "FFC000", "C00000"]):
            s.graphicalProperties.solidFill = colour
        chart.height, chart.width = 7, 14
        ws.add_chart(chart, "F6")
        return [ws]
    return dict(sheets=[Sheet("Projects", "Project Status", "One row per project, updated each reporting period. Use the RAG criteria on the Guide sheet.", cols, rows=50)],
                front=front,
                guide=[("Green", "On track to deliver. Schedule on plan; budget within tolerance; scope as baselined."),
                       ("Amber", "At risk, corrective action under way. For example up to 2 weeks late or up to 10% budget variance."),
                       ("Red", "Off track and intervention needed. Beyond tolerance; escalate for decisions."),
                       ("Trend", "Direction of travel since the last report: improving, stable or worsening."),
                       ("Key issue", "The one thing the executive needs to know or decide.")])


def sipoc_template():
    cols = [Col("Suppliers", 24), Col("Inputs", 26), Col("Process steps", 28), Col("Outputs", 26), Col("Customers", 24)]
    example = [["Customer", "Order request", "1. Receive order", "Order confirmation", "Customer"],
               ["Inventory system", "Stock availability", "2. Check stock and credit", "Picking list", "Warehouse"],
               ["Credit system", "Credit status", "3. Pick and pack", "Packed order", "Shipping provider"],
               ["Warehouse", "Picking list", "4. Ship order", "Shipped order and tracking", "Customer"],
               ["Shipping provider", "Shipping rates", "5. Invoice customer", "Invoice", "Finance"]]

    def extra(ws, c, first, last):
        label(ws, "A4", "Process name:")
        label(ws, "C4", "Process owner:")
        label(ws, "E4", "Date / version:")
        for r in range(first, last + 1):
            ws.row_dimensions[r].height = 30
    sheet = Sheet("SIPOC", "SIPOC Diagram", "Work in this order: name the process, list 4 to 7 high-level steps, then outputs, customers, inputs and suppliers.", cols, rows=12, extra=extra)
    ex = Sheet("Example", "SIPOC Example: Customer Order Fulfilment", "A completed example. Process owner: Operations Manager.", cols, rows=5, examples=example, table="SipocExample")
    return dict(sheets=[sheet, ex],
                guide=[("Suppliers", "Who provides the inputs: other teams, vendors, systems or customers."),
                       ("Inputs", "What the process needs: information, materials, resources and triggers."),
                       ("Process steps", "4 to 7 high-level steps in verb-noun form, with a clear start and end."),
                       ("Outputs", "What the process produces: products, services, information and updates."),
                       ("Customers", "Who receives the outputs, internal or external, including regulators."),
                       ("Workshop", "Use the SIPOC Workshop Guide to run the session. Fill the table live on screen.")])


def stage_plan_gantt():
    cols = [Col("ID", 6), Col("Activity", 34), Col("Type", 11, choices=["Task", "Milestone"]),
            Col("Owner", 14), Col("Start", 11, number_format=DATE), Col("End", 11, number_format=DATE),
            Col("Days", 7, formula='IF(OR({col:Start}{r}="",{col:End}{r}=""),"",NETWORKDAYS({col:Start}{r},{col:End}{r}))'),
            Col("Depends on", 10), Col("Status", 12, choices=["Not started", "In progress", "Complete", "On hold"]),
            Col("% complete", 9, number_format=PCT)]
    weeks = 26

    def extra(ws, c, first, last):
        label(ws, "B4", "Plan start (a Monday):")
        ws["C4"] = "=TODAY()-WEEKDAY(TODAY(),3)"
        ws["C4"].number_format = DATE
        ws["C4"].font = BOLD
        label(ws, "D4", "Overwrite with the Monday the stage begins.", bold=False)
        g0 = len(c) + 2
        for k in range(weeks):
            col = g0 + k
            letter = get_column_letter(col)
            cell = ws.cell(row=5, column=col, value="=$C$4" if k == 0 else f"={get_column_letter(col-1)}5+7")
            cell.number_format = "dd-mmm"
            cell.font = Font(name="Calibri", size=9, bold=True)
            cell.alignment = Alignment(text_rotation=90, horizontal="center")
            ws.column_dimensions[letter].width = 4
            for r in range(first, last + 1):
                ws.cell(row=r, column=col).border = BOX
        a, b = get_column_letter(g0), get_column_letter(g0 + weeks - 1)
        rng = f"{a}{first}:{b}{last}"
        highlight(ws, rng, f'AND($C{first}="Milestone",$E{first}<>"",$E{first}>={a}$5,$E{first}<={a}$5+6)', "C00000")
        highlight(ws, rng, f'AND($E{first}<>"",$F{first}<>"",$I{first}="Complete",{a}$5<=$F{first},{a}$5+6>=$E{first})', "70AD47")
        highlight(ws, rng, f'AND($E{first}<>"",$F{first}<>"",{a}$5<=$F{first},{a}$5+6>=$E{first})', BLUE)
        highlight(ws, rng, f'AND(TODAY()>={a}$5,TODAY()<={a}$5+6)', "FFF2CC")
        ws.row_dimensions[5].height = 45
        status_fills(ws, "I", first, last, done=("Complete",), warn=("In progress", "On hold"), bad=())
    return dict(sheets=[Sheet("Plan", "Stage Plan", "List the stage's activities and milestones with start and end dates. The bars draw themselves.", cols, rows=60, extra=extra)],
                guide=[("Plan start", "The Monday of the first week shown. Each grid column is one week."),
                       ("Type", "Task for work with a duration, Milestone for a single point such as a stage gate. Milestones show in dark red."),
                       ("Days", "Working days between start and end, excluding weekends."),
                       ("Bars", "Blue for planned work, green when the status is Complete. The current week is shaded yellow."),
                       ("Depends on", "IDs of activities that must finish first, for example 3, 5."),
                       ("Stage plan", "Use with the Stage Plan document, which holds the stage's objectives, products, tolerances and controls.")])


def vendor_evaluation():
    crits = [("Technical capability", 30), ("Experience", 20), ("Team", 15), ("Price", 20), ("Commercial", 10), ("Risk", 5)]
    cols = [Col("Vendor", 24)] + [Col(n, 12, choices=["1", "2", "3", "4", "5"]) for n, _ in crits] + \
        [Col("Weighted score (out of 100)", 14, number_format="0.0", formula=weighted(2, len(crits))),
         Col("Rank", 7, formula='IF({col:Weighted score (out of 100)}{r}="","",RANK({col:Weighted score (out of 100)}{r},$H$6:$H$25))'),
         Col("Strengths", 30), Col("Concerns", 30), Col("Recommendation", 16, choices=["Preferred", "Reserve", "Reject"])]
    # choices are text; convert to numbers with VALUE in weighted formula
    for c in cols[1:1 + len(crits)]:
        c["choices"] = None
    detail = [Col("Criterion", 22), Col("Question or requirement", 40), Col("Evidence asked for", 30),
              Col("Score guide", 40)]
    detail_rows = [[n, "", "", "5 = exceeds, 4 = fully meets, 3 = mostly meets, 2 = partly meets, 1 = does not meet"] for n, _ in crits]
    return dict(sheets=[Sheet("Scoring", "Vendor Evaluation", "Score each vendor 1 to 5 on each criterion. Weights in row 4 must add up to 100; change them before proposals arrive.", cols, rows=20,
                              extra=scoring_extra([w for _, w in crits], 2, 8, 9)),
                        Sheet("Criteria", "Evaluation Criteria", "Define what you will look for under each criterion before you read the proposals.", detail, rows=20, examples=detail_rows)],
                guide=[("Before scoring", "Agree the criteria and weights, and publish them in the RFP, before proposals arrive."),
                       ("Scores", "5 = exceeds the requirement, 4 = fully meets, 3 = mostly meets, 2 = partly meets, 1 = does not meet."),
                       ("Weighted score", "Each score is multiplied by its weight; the result is out of 100."),
                       ("Panel", "Have each panel member score independently, then agree a moderated score for this sheet."),
                       ("Price", "Score price on whole-life cost, not day rate alone."),
                       ("Due diligence", "Check references, financial stability and security before you confirm the preferred vendor.")])


def supplier_scorecard():
    cols = [Col("Supplier", 22), Col("Period", 12), Col("Metric", 26), Col("Target", 12), Col("Actual", 12),
            Col("Status", 10, choices=RAGC, rag=True), Col("Trend", 8, choices=["↑", "→", "↓"]),
            Col("Comment", 34), Col("Action", 30), Col("Owner", 14)]
    metrics = [("On-time delivery", "95%"), ("Defect rate", "< 5%"), ("Budget variance", "< 5%"),
               ("Issue resolution", "< 2 days"), ("Stakeholder satisfaction", "> 4 / 5"),
               ("Relationship health", "Good")]
    examples = [["", "", m, t] for m, t in metrics]
    rel = [Col("Area", 24), Col("Score (1-5)", 10, choices=["1", "2", "3", "4", "5"]), Col("Supplier view", 30), Col("Our view", 30), Col("Agreed action", 30)]
    return dict(sheets=[Sheet("Scorecard", "Supplier Performance Scorecard", "Record each supplier's performance against its contract measures every review period. Add a block of rows per period.", cols, rows=60, examples=examples),
                        Sheet("Relationship", "Relationship Review", "Discuss these in the performance review meeting. Feedback goes both ways.", rel, rows=10, table="Relationship",
                              examples=[[a] for a in ["Communication", "Responsiveness", "Collaboration", "Proactivity", "Change handling", "Invoicing and admin"]])],
                guide=[("Metrics", "Use the service levels and KPIs written into the contract. The examples can be replaced."),
                       ("Status", "Green: meets target. Amber: slightly below target or trending down. Red: well below target or a breach."),
                       ("Review meeting", "Cover metrics, issues and risks, change requests, upcoming work, relationship health and actions."),
                       ("Escalation", "Two consecutive Red periods on the same metric should trigger the contract's remedy or escalation route.")])


def work_package_register():
    cols = [Col("WP ID", 8), Col("Title", 28), Col("Team manager / supplier", 20), Col("Stage", 10),
            Col("Date authorised", 12, number_format=DATE), Col("Planned start", 12, number_format=DATE),
            Col("Planned end", 12, number_format=DATE), Col("Forecast end", 12, number_format=DATE),
            Col("Effort (days)", 9), Col("Cost", 11, number_format=GBP),
            Col("Status", 12, choices=["Draft", "Authorised", "In progress", "Complete", "Accepted", "On hold"]),
            Col("% complete", 9, number_format=PCT),
            Col("RAG", 8, rag=True, formula='IF(OR({col:Planned end}{r}="",{col:Forecast end}{r}=""),"",IF({col:Forecast end}{r}-{col:Planned end}{r}>10,"Red",IF({col:Forecast end}{r}>{col:Planned end}{r},"Amber","Green")))'),
            Col("Checkpoint frequency", 12, choices=["Weekly", "Fortnightly", "Monthly"]), Col("Tolerances", 20), Col("Notes", 28)]
    return dict(sheets=[Sheet("Register", "Work Package Register", "One row per work package authorised to a team. RAG compares forecast end with planned end.", cols, rows=50,
                              total_row={"Effort (days)": "SUM", "Cost": "SUM"})],
                guide=[("Status", "Draft, Authorised, In progress, Complete (team says done), Accepted (PM has accepted the products) or On hold."),
                       ("RAG", "Green: forecast on or before planned end. Amber: late. Red: more than 10 days late. Adjust to match the work package tolerances."),
                       ("Tolerances", "The time and cost tolerances agreed in the work package. Breaches are raised as issues."),
                       ("Work package", "Each row should have a matching Work Package document that describes the products, constraints and reporting.")])


def risk_assessment_matrix():
    cols = [Col("Risk ID", 8), Col("Risk description", 40), Col("Owner", 14),
            Col("Probability (1-5)", 11), Col("Impact (1-5)", 11),
            Col("Score", 8, formula='IF(OR({col:Probability (1-5)}{r}="",{col:Impact (1-5)}{r}=""),"",{col:Probability (1-5)}{r}*{col:Impact (1-5)}{r})'),
            Col("Zone", 9, rag=True, formula='IF({col:Score}{r}="","",IF({col:Score}{r}>=15,"Red",IF({col:Score}{r}>=5,"Amber","Green")))'),
            Col("Response", 12, choices=["Avoid", "Mitigate", "Transfer", "Accept"]), Col("Actions", 34)]
    example = [["R001", "Key developer leaves", "", 3, 4], ["R002", "Third-party API changes", "", 2, 5],
               ["R003", "Requirements creep", "", 4, 4], ["R004", "Server hardware failure", "", 1, 5],
               ["R005", "Testing delays", "", 3, 3], ["R006", "Budget approval delayed", "", 2, 2]]
    names5 = ["Very Low (1)", "Low (2)", "Medium (3)", "High (4)", "Very High (5)"]

    def zone_fill(score):
        return RED if score >= 15 else AMBER if score >= 5 else GREEN

    def grid(ws, top, title, counts):
        label(ws, f"A{top}", title)
        ws.cell(row=top + 1, column=3, value="Impact").font = BOLD
        head(ws, top + 2, 2, ["Probability"] + names5, [16, 13, 13, 13, 13, 13])
        for i, p in enumerate(range(5, 0, -1)):
            r = top + 3 + i
            c = ws.cell(row=r, column=2, value=names5[p - 1])
            c.fill, c.font, c.border = HEAD_FILL, HEAD_FONT, BOX
            for imp in range(1, 6):
                score = p * imp
                val = (f'=IF(COUNTIFS(Risks!$D$6:$D$105,{p},Risks!$E$6:$E$105,{imp})=0,"",COUNTIFS(Risks!$D$6:$D$105,{p},Risks!$E$6:$E$105,{imp}))'
                       if counts else score)
                cell = ws.cell(row=r, column=2 + imp, value=val)
                cell.fill = PatternFill("solid", start_color=zone_fill(score), end_color=zone_fill(score))
                cell.alignment = Alignment(horizontal="center", vertical="center")
                cell.font = Font(name="Calibri", size=14, bold=True)
                cell.border = BOX
                ws.row_dimensions[r].height = 30

    def front(wb):
        ws = summary_sheet(wb, "5x5 Matrix", "5x5 Risk Assessment Matrix", "Score = probability x impact. Red 15-25: active management. Amber 5-14: monitor closely. Green 1-4: accept or monitor.")
        grid(ws, 5, "Scores", False)
        grid(ws, 14, "Number of risks in each cell (from the Risks sheet)", True)
        ws.column_dimensions["A"].width = 3
        z = 23
        head(ws, z, 2, ["Zone", "Score", "Response", "Typical actions"])
        ws.merge_cells(start_row=z, start_column=5, end_row=z, end_column=7)
        for i, (zone, rng, resp, act, colour) in enumerate([
                ("Red (High)", "15-25", "Active management", "Response plan now, escalate to sponsor, allocate contingency", RED),
                ("Amber (Medium)", "5-14", "Monitor closely", "Mitigation plan, named owner, regular review", AMBER),
                ("Green (Low)", "1-4", "Accept or monitor", "Record in the register, review periodically", GREEN)], start=z + 1):
            for j, v in enumerate([zone, rng, resp, act], start=2):
                c = box(ws.cell(row=i, column=j, value=v))
                c.alignment = Alignment(wrap_text=True, vertical="top")
                if j == 2:
                    c.fill = PatternFill("solid", start_color=colour, end_color=colour)
            ws.merge_cells(start_row=i, start_column=5, end_row=i, end_column=7)
            ws.row_dimensions[i].height = 30

        ws3 = summary_sheet(wb, "3x3 Matrix", "3x3 Risk Assessment Matrix", "A simpler matrix for small projects, rated Low, Medium or High.")
        ws3.column_dimensions["A"].width = 3
        head(ws3, 6, 2, ["Probability", "Low impact", "Medium impact", "High impact"], [16, 16, 16, 16])
        cells = [("High", [("Medium", AMBER), ("High", RED), ("Critical", "C00000")]),
                 ("Medium", [("Low", GREEN), ("Medium", AMBER), ("High", RED)]),
                 ("Low", [("Low", GREEN), ("Low", GREEN), ("Medium", AMBER)])]
        for i, (p, row) in enumerate(cells, start=7):
            c = ws3.cell(row=i, column=2, value=p)
            c.fill, c.font, c.border = HEAD_FILL, HEAD_FONT, BOX
            for j, (v, colour) in enumerate(row, start=3):
                cell = box(ws3.cell(row=i, column=j, value=v))
                cell.fill = PatternFill("solid", start_color=colour, end_color=colour)
                cell.alignment = Alignment(horizontal="center", vertical="center")
                cell.font = Font(name="Calibri", size=13, bold=True, color="FFFFFF" if v == "Critical" else "000000")
                ws3.row_dimensions[i].height = 34
        return [ws, ws3]
    return dict(sheets=[Sheet("Risks", "Risk Scoring", "Enter probability and impact from 1 to 5. Score and zone are calculated, and the count grid on the 5x5 Matrix sheet updates. The first rows are a worked example.", cols, rows=100, examples=example)],
                front=front,
                guide=[("Probability", "1 Very Low (<10%), 2 Low (10-30%), 3 Medium (30-50%), 4 High (50-70%), 5 Very High (>70%). Adjust the bands to your organisation's risk policy."),
                       ("Impact", "1 Very Low to 5 Very High, judged against time, cost, quality and reputation. Use the highest of these."),
                       ("Score", "Probability x impact, from 1 to 25."),
                       ("Zones", "Red 15-25, Amber 5-14, Green 1-4."),
                       ("3x3 matrix", "For small projects, rate probability and impact as Low, Medium or High and read the rating from the 3x3 sheet."),
                       ("Worked example", "Rows R001 to R006 are the example from the site. Delete them when you start.")])


# ---------------------------------------------------------------------------
# checklists built from page content
# ---------------------------------------------------------------------------

def checklists():
    out = {}
    out["backout_checklist.xlsx"] = checklist_book(
        "Backout Plan Checklist", "Work through before the change window, then use as the go or no-go record.",
        checklist("projects/backout_plan", r"## Backout Plan Checklist", r"## Related Resources"),
        "Confirms that a tested backout plan, triggers, decision makers and communications are ready before a change goes live.")
    out["handover_checklist.xlsx"] = checklist_book(
        "Handover Checklist", "Use with the Handover Document. Each item needs evidence before the service owner signs.",
        checklist("projects/handover_document", r"## Handover Checklist", r"## Related Resources"),
        "Confirms that operations has the documents, knowledge, access and support arrangements it needs to accept the service.")
    out["pir_checklist.xlsx"] = checklist_book(
        "Post-Implementation Review Checklist", "Use to plan and run the PIR, normally 3 to 6 months after go-live.",
        checklist("projects/post_implementation_review", r"## PIR Checklist", r"## Related Resources"),
        "Makes sure the post-implementation review is prepared, carried out and followed up.")
    out["workshop_checklist.xlsx"] = checklist_book(
        "Workshop Checklist", "Use with the Workshop Planner. Tick off each item before, on the day and after the workshop.",
        checklist("projects/workshop_planner", r"## Workshop Checklist", r"## Related Resources"),
        "Covers preparation, logistics, facilitation and follow-up for a workshop.")

    pd_items = checklist("projects/product_description", r"## Product Description Checklist", r"## Related Resources")
    qcols = [Col("Ref", 8), Col("Quality criterion", 40), Col("Quality method", 18, choices=["Inspection", "Review", "Test", "Walkthrough", "Demonstration"]),
             Col("Tolerance", 18), Col("Result", 10, choices=["Pass", "Fail", "N/A"]), Col("Reviewer", 16),
             Col("Date", 12, number_format=DATE), Col("Comments", 34)]

    def qextra(ws, c, first, last):
        status_fills(ws, "E", first, last, done=("Pass",), warn=(), bad=("Fail",))
        label(ws, "A4", "Product:")
        label(ws, "D4", "Version:")
        label(ws, "F4", "Passed:")
        ws["G4"] = f'=COUNTIF(E{first}:E{last},"Pass")&" of "&(COUNTA(B{first}:B{last})-COUNTIF(E{first}:E{last},"N/A"))'
        ws["G4"].font = BOLD
        s = last + 3
        label(ws, f"A{s}", "Sign-off")
        head(ws, s + 1, 1, ["Role", "Name", "Signature", "Date"])
        for i, role in enumerate(["Developed by", "Reviewed by", "Approved by"], start=s + 2):
            box(ws.cell(row=i, column=1, value=role), bold=True)
            for j in range(2, 5):
                box(ws.cell(row=i, column=j))
    out["product_checklist.xlsx"] = dict(
        sheets=[Sheet("Quality review", "Product Quality Checklist", "Copy the quality criteria from the product description, then record the result of each check.", qcols, rows=25,
                      examples=[[f"QC-{i:02d}"] for i in range(1, 9)], extra=qextra),
                checklist_sheet("Description check", "Product Description Checklist", "Check the product description itself is complete before work starts.", pd_items)],
        guide=[("Quality criteria", "Measurable criteria from the product description, such as 'Page loads in under 2 seconds'."),
               ("Quality method", "How the criterion is checked: inspection, review, test, walkthrough or demonstration."),
               ("Result", "Pass, Fail or N/A. A product is ready for approval when every applicable criterion passes or a concession is agreed."),
               ("Sign-off", "Record who produced, reviewed and approved the product."),
               ("Description check", "The second sheet checks that the product description is complete before work starts.")])
    return out


# ---------------------------------------------------------------------------
# portfolio and programme templates
# ---------------------------------------------------------------------------

def portfolio_dashboard():
    cats = ["Run", "Grow", "Transform"]
    cols = [Col("ID", 8), Col("Investment", 26), Col("Type", 11, choices=["Project", "Programme"]),
            Col("Category", 11, choices=cats), Col("Strategic theme", 20), Col("Sponsor", 16),
            Col("Stage", 12, choices=["Pipeline", "Initiation", "Delivery", "Closing", "Closed"]),
            Col("Overall RAG", 9, choices=RAGC, rag=True), Col("Budget", 12, number_format=GBP),
            Col("Forecast", 12, number_format=GBP),
            Col("Variance", 12, number_format=GBP, formula='IF({col:Budget}{r}="","",{col:Budget}{r}-{col:Forecast}{r})'),
            Col("Annual benefits", 12, number_format=GBP), Col("Priority rank", 9),
            Col("Next gate", 14), Col("Gate date", 12, number_format=DATE), Col("Comments", 34)]

    def front(wb):
        ws = summary_sheet(wb, "Dashboard", "Portfolio Dashboard", "Summary of the portfolio. Update the Investments sheet; this page recalculates. Set the target mix in column D.")
        head(ws, 5, 1, ["Category", "Budget", "Actual mix", "Target mix", "Count"], [22, 14, 11, 11, 9])
        for i, cat in enumerate(cats, start=6):
            box(ws.cell(row=i, column=1, value=cat), bold=True)
            box(ws.cell(row=i, column=2, value=f'=SUMIF(Investments!$D$6:$D$105,A{i},Investments!$I$6:$I$105)'), GBP)
            box(ws.cell(row=i, column=3, value=f'=IFERROR(B{i}/SUM($B$6:$B$8),0)'), PCT)
            box(ws.cell(row=i, column=4, value=[0.5, 0.35, 0.15][i - 6]), PCT)
            box(ws.cell(row=i, column=5, value=f'=COUNTIF(Investments!$D$6:$D$105,A{i})'))
        highlight(ws, "C6:C8", "ABS(C6-D6)>0.05", AMBER)
        head(ws, 11, 1, ["Status", "Count"])
        for i, rag in enumerate(RAGC, start=12):
            c = box(ws.cell(row=i, column=1, value=rag), bold=True)
            c.fill = PatternFill("solid", start_color=RAG[rag], end_color=RAG[rag])
            box(ws.cell(row=i, column=2, value=f'=COUNTIF(Investments!$H$6:$H$105,A{i})'))
        head(ws, 17, 1, ["Finance", "£"])
        for i, (n, f) in enumerate([("Total budget", "=SUM(Investments!I6:I105)"), ("Total forecast", "=SUM(Investments!J6:J105)"),
                                     ("Forecast variance", "=B18-B19"), ("Annual benefits", "=SUM(Investments!L6:L105)")], start=18):
            box(ws.cell(row=i, column=1, value=n))
            box(ws.cell(row=i, column=2, value=f), GBP)
        highlight(ws, "B20", "B20<0", RED)
        head(ws, 5, 7, ["Stage", "Count"], [14, 9])
        for i, st in enumerate(["Pipeline", "Initiation", "Delivery", "Closing", "Closed"], start=6):
            box(ws.cell(row=i, column=7, value=st), bold=True)
            box(ws.cell(row=i, column=8, value=f'=COUNTIF(Investments!$G$6:$G$105,G{i})'))
        return [ws]
    return dict(sheets=[Sheet("Investments", "Portfolio Investments", "One row per project or programme in the portfolio, including the pipeline.", cols, rows=100)],
                front=front,
                guide=[("Category", "Run keeps the lights on (maintenance, compliance). Grow improves the current business. Transform creates new capabilities."),
                       ("Target mix", "The share of budget the portfolio board wants in each category. The actual mix turns amber when it is more than 5 points away."),
                       ("Overall RAG", "Taken from each investment's latest highlight report."),
                       ("Priority rank", "From the Investment Prioritisation workbook."),
                       ("Next gate", "The next decision point, such as business case approval or tranche review.")])


def investment_prioritisation():
    crits = [("Strategic fit", 0.30), ("Financial value", 0.25), ("Risk (5 = low)", 0.15), ("Urgency", 0.15), ("Ease of delivery", 0.15)]
    n = len(crits)
    score_col = 3 + n + 2
    cols = [Col("ID", 8), Col("Investment", 28)] + [Col(c, 12) for c, _ in crits] + \
        [Col("Cost", 12, number_format=GBP), Col("Annual benefits", 12, number_format=GBP),
         Col("Weighted score", 11, number_format="0.0", formula=weighted(3, n)),
         Col("Rank", 7, formula='IF({col:Weighted score}{r}="","",RANK({col:Weighted score}{r},$' + get_column_letter(score_col) + '$6:$' + get_column_letter(score_col) + '$55))'),
         Col("Payback (years)", 9, number_format="0.0", formula='IFERROR({col:Cost}{r}/{col:Annual benefits}{r},"")'),
         Col("Cumulative cost", 13, number_format=GBP),
         Col("Decision", 11, choices=["Fund", "Defer", "Reject"]), Col("Rationale", 30)]

    def extra(ws, c, first, last):
        scoring_extra([w for _, w in crits], 3, score_col, score_col + 1)(ws, c, first, last)
        status_fills(ws, get_column_letter(score_col + 4), first, last, done=("Fund",), warn=("Defer",), bad=("Reject",))
        label(ws, "A1", "Available budget:")
        ws["C1"] = 0
        ws["C1"].number_format = GBP
        ws["C1"].font = BOLD
        cc = get_column_letter(score_col + 3)
        cost = get_column_letter(3 + n)
        rank = get_column_letter(score_col + 1)
        for r in range(first, last + 1):
            ws[f"{cc}{r}"] = f'=IF({rank}{r}="","",SUMIFS(${cost}${first}:${cost}${last},${rank}${first}:${rank}${last},"<="&{rank}{r}))'
        highlight(ws, f"{cc}{first}:{cc}{last}", f'AND(ISNUMBER({cc}{first}),$C$1>0,{cc}{first}>$C$1)', RED)
    return dict(sheets=[Sheet("Prioritisation", "Investment Prioritisation", "Score each proposal 1 to 5 on each criterion. Weights are in row 4 and should add up to 100%.", cols, rows=50, extra=extra)],
                guide=[("Criteria", "Strategic fit: contribution to strategic objectives. Financial value: return on investment. Risk: 5 means low delivery risk. Urgency: cost of delay or regulatory deadline. Ease of delivery: 5 means easy with current capability."),
                       ("Weights", "Agree the weights with the portfolio board before scoring. Change the criteria names and weights to suit."),
                       ("Weighted score", "Out of 100. Rank 1 is the highest score."),
                       ("Cumulative cost", "Running total of cost in rank order. Enter the available budget in C1 and rows that exceed it turn red: the funding line."),
                       ("Decision", "Fund, Defer or Reject, with the rationale recorded for transparency."),
                       ("Mandatory work", "Regulatory or contractual work may be funded regardless of score. Mark it in the rationale.")])


def resource_capacity_planner():
    pools = ["Project managers", "Business analysts", "Developers", "Testers", "Change managers"]
    cap = [Col("Resource pool", 22), Col("Headcount (FTE)", 11), Col("Working days per quarter", 12),
           Col("Non-project time %", 12, number_format=PCT),
           Col("Productive days per quarter", 13, number_format="#,##0",
               formula='IF({col:Headcount (FTE)}{r}="","",{col:Headcount (FTE)}{r}*{col:Working days per quarter}{r}*(1-{col:Non-project time %}{r}))'),
           Col("Notes", 30)]
    dem = [Col("Investment", 26), Col("Resource pool", 22),
           Col("Certainty", 12, choices=["High", "Medium", "Low"]),
           Col("Source", 18, choices=["In flight", "Approved pipeline", "Business case", "Strategic initiative", "BAU / support"]),
           Col("Q1 days", 9), Col("Q2 days", 9), Col("Q3 days", 9), Col("Q4 days", 9), Col("Notes", 26)]
    gap = [Col("Resource pool", 22, formula='IF(Capacity!A{r}="","",Capacity!A{r})'),
           Col("Capacity per quarter", 12, number_format="#,##0", formula='IF(A{r}="","",Capacity!E{r})')]
    for q in range(1, 5):
        L = "EFGH"[q - 1]
        gap.append(Col(f"Q{q} demand", 10, number_format="#,##0", formula=f'IF(A{{r}}="","",SUMIFS(Demand!{L}$6:{L}$205,Demand!$B$6:$B$205,A{{r}}))'))
    for q in range(1, 5):
        gap.append(Col(f"Q{q} gap", 10, number_format="#,##0;[Red]-#,##0", formula=f'IF(OR(A{{r}}="",B{{r}}=""),"",B{{r}}-{get_column_letter(2 + q)}{{r}})'))
    gap.append(Col("Peak utilisation", 11, number_format=PCT, formula='IF(OR(A{r}="",N(B{r})=0),"",MAX(C{r}:F{r})/B{r})'))

    def gextra(ws, c, first, last):
        highlight(ws, f"K{first}:K{last}", f'AND(ISNUMBER(K{first}),K{first}>1)', RED)
        highlight(ws, f"K{first}:K{last}", f'AND(ISNUMBER(K{first}),K{first}>0.85)', AMBER)
        highlight(ws, f"K{first}:K{last}", f'ISNUMBER(K{first})', GREEN)

    def dextra(ws, c, first, last):
        from openpyxl.worksheet.datavalidation import DataValidation
        dv = DataValidation(type="list", formula1="=Capacity!$A$6:$A$25", allow_blank=True)
        dv.add(f"B{first}:B{last}")
        ws.add_data_validation(dv)
    return dict(sheets=[Sheet("Capacity", "Resource Capacity", "One row per resource pool. Productive days take out holidays, training, admin and BAU work.", cap, rows=20,
                              examples=[[p, None, 60, 0.25] for p in pools]),
                        Sheet("Demand", "Resource Demand", "Days needed from each pool, by investment and quarter. Pick pools from the Capacity sheet.", dem, rows=200, extra=dextra),
                        Sheet("Gap", "Demand vs Capacity", "Calculated. Negative gaps (red) are over-demand. Peak utilisation above 85% is amber; above 100% is red.", gap, rows=20, extra=gextra)],
                guide=[("Capacity", "Gross capacity is headcount x working days. Productive capacity takes out non-project time such as leave, training, admin and BAU."),
                       ("Demand", "Collect demand from in-flight projects, the approved pipeline, business cases and strategic initiatives. Record how certain each figure is."),
                       ("Gap", "Capacity minus demand per quarter. Plan for around 85% utilisation to leave room for the unexpected."),
                       ("Over-demand", "Options: reprioritise, defer lower-priority work, bring in contractors, re-phase, or reduce scope. Take the choice to the portfolio board."),
                       ("Quarters", "Rename Q1 to Q4 in the Demand and Gap sheets to match your planning periods.")])


def skills_matrix():
    skills = ["Project management", "Programme management", "Business analysis", "Agile delivery", "Risk management",
              "Stakeholder engagement", "Financial management", "Change management", "Data analysis", "Testing",
              "Technical architecture", "Commercial and contracts"]
    cols = [Col("Name", 20), Col("Role", 18), Col("Team", 14)] + [Col(s, 11, choices=["0", "1", "2", "3", "4"]) for s in skills] + [Col("Development notes", 30)]
    for c in cols[3:3 + len(skills)]:
        c["choices"] = None

    def extra(ws, c, first, last):
        from openpyxl.formatting.rule import ColorScaleRule
        from openpyxl.worksheet.datavalidation import DataValidation
        a, b = get_column_letter(4), get_column_letter(3 + len(skills))
        dv = DataValidation(type="whole", operator="between", formula1="0", formula2="4", allow_blank=True)
        dv.add(f"{a}{first}:{b}{last}")
        ws.add_data_validation(dv)
        ws.conditional_formatting.add(f"{a}{first}:{b}{last}", ColorScaleRule(
            start_type="num", start_value=0, start_color="F8CBAD", mid_type="num", mid_value=2, mid_color="FFE699",
            end_type="num", end_value=4, end_color="63BE7B"))
        ws.row_dimensions[5].height = 48
        for i in range(4, 4 + len(skills)):
            ws.cell(row=5, column=i).alignment = Alignment(wrap_text=True, horizontal="center", vertical="center")
        r = last + 2
        label(ws, f"C{r}", "Practitioners (3+)")
        label(ws, f"C{r+1}", "Experts (4)")
        label(ws, f"C{r+2}", "Average")
        for i in range(4, 4 + len(skills)):
            L = get_column_letter(i)
            ws[f"{L}{r}"] = f'=COUNTIF({L}{first}:{L}{last},">=3")'
            ws[f"{L}{r+1}"] = f'=COUNTIF({L}{first}:{L}{last},4)'
            ws[f"{L}{r+2}"] = f'=IFERROR(AVERAGE({L}{first}:{L}{last}),"")'
            ws[f"{L}{r+2}"].number_format = "0.0"
            highlight(ws, f"{L}{r}", f"{L}{r}<2", RED)
    return dict(sheets=[Sheet("Matrix", "Skills Matrix", "Rate each person 0 to 4 on each skill. Rename the skill columns to suit your teams. Rows under the table show coverage.", cols, rows=60, extra=extra)],
                guide=[("Levels", "0 None. 1 Awareness: understands the basics. 2 Working: can do it with support. 3 Practitioner: does it independently. 4 Expert: leads and teaches others."),
                       ("Coverage", "Practitioners (3+) below 2 turns red: a single point of failure."),
                       ("Using it", "Combine with the Resource Capacity Planner to find skill gaps behind capacity gaps, and plan training, hiring or contractors."),
                       ("Privacy", "Ratings are personal data. Agree them with each person and store the file securely.")])


def capability_assessment():
    cols = [Col("Area", 13, choices=["People", "Organisation", "Processes", "Information", "Technology"]),
            Col("Capability", 26), Col("Current state", 34), Col("Future state", 34),
            Col("Current level (1-5)", 10), Col("Target level (1-5)", 10),
            Col("Gap", 7, formula='IF(OR({col:Current level (1-5)}{r}="",{col:Target level (1-5)}{r}=""),"",{col:Target level (1-5)}{r}-{col:Current level (1-5)}{r})'),
            Col("Priority", 10, choices=HML), Col("Delivered by (project)", 20),
            Col("Tranche", 9), Col("Business owner", 16), Col("Notes", 28)]

    def extra(ws, c, first, last):
        highlight(ws, f"G{first}:G{last}", f'AND(ISNUMBER(G{first}),G{first}>=3)', RED)
        highlight(ws, f"G{first}:G{last}", f'AND(ISNUMBER(G{first}),G{first}>=1)', AMBER)
        highlight(ws, f"G{first}:G{last}", f'ISNUMBER(G{first})', GREEN)

    def front(wb):
        ws = summary_sheet(wb, "Summary", "Capability Gap Summary", "By POPIT area. Updates from the Assessment sheet.")
        head(ws, 5, 1, ["Area", "Capabilities", "Average current", "Average target", "Average gap", "Not yet assigned to a project"], [18, 13, 13, 13, 13, 18])
        for i, a in enumerate(["People", "Organisation", "Processes", "Information", "Technology"], start=6):
            box(ws.cell(row=i, column=1, value=a), bold=True)
            box(ws.cell(row=i, column=2, value=f'=COUNTIF(Assessment!$A$6:$A$105,A{i})'))
            for j, L in ((3, "E"), (4, "F"), (5, "G")):
                box(ws.cell(row=i, column=j, value=f'=IFERROR(AVERAGEIF(Assessment!$A$6:$A$105,A{i},Assessment!{L}$6:{L}$105),"")'), "0.0")
            box(ws.cell(row=i, column=6, value=f'=COUNTIFS(Assessment!$A$6:$A$105,A{i},Assessment!$I$6:$I$105,"")'))
        highlight(ws, "F6:F10", "F6>0", AMBER)
        return [ws]
    return dict(sheets=[Sheet("Assessment", "Capability Assessment", "Assess each capability in the blueprint across People, Organisation, Processes, Information and Technology (POPIT).", cols, rows=100,
                              examples=[["People", "Digital literacy", "", "", 2, 4], ["People", "Data analysis", "", "", 3, 4],
                                        ["People", "Agile delivery", "", "", 1, 3]])],
                front=front,
                guide=[("POPIT", "People (skills, culture), Organisation (structure, roles, governance), Processes (ways of working), Information (data, reporting) and Technology (systems, infrastructure)."),
                       ("Levels", "1 Initial: ad hoc. 2 Developing: some practice, inconsistent. 3 Defined: standard and documented. 4 Managed: measured and controlled. 5 Optimised: continually improving."),
                       ("Gap", "Target minus current. Gaps of 3 or more are red and usually need more than one tranche."),
                       ("Delivered by", "The project that will close the gap. Capabilities with no project are a hole in the programme's scope."),
                       ("Blueprint", "Use with the Programme Blueprint document. Update both when the blueprint changes.")])


def programme_healthcheck():
    page = "programmes/programme_healthcheck"
    dims = ["Governance", "Delivery", "Benefits", "Stakeholder", "Resources", "Risk"]
    examples = []
    for d in dims:
        qs = table_first_col(page, f"## {d} Assessment")
        for i, q in enumerate(qs, start=1):
            examples.append([f"{d[0]}{i}", d if d != "Stakeholder" else "Stakeholders", q])
    cols = [Col("Ref", 6), Col("Dimension", 14), Col("Question", 55), Col("Score (1-4)", 10),
            Col("Rating", 12, formula='IF({col:Score (1-4)}{r}="","",CHOOSE({col:Score (1-4)}{r},"Red","Amber","Light Green","Green"))'),
            Col("Evidence", 34), Col("Action needed", 34), Col("Owner", 14), Col("Due", 11, number_format=DATE)]
    rating = 'IF({x}="","",IF({x}>=3.5,"Green",IF({x}>=2.5,"Light Green",IF({x}>=1.5,"Amber","Red"))))'

    def fills(ws, rng, top):
        highlight(ws, rng, f'{top}="Red"', RED)
        highlight(ws, rng, f'{top}="Amber"', AMBER)
        highlight(ws, rng, f'{top}="Light Green"', "E2EFDA")
        highlight(ws, rng, f'{top}="Green"', "A9D08E")

    def extra(ws, c, first, last):
        from openpyxl.worksheet.datavalidation import DataValidation
        dv = DataValidation(type="whole", operator="between", formula1="1", formula2="4", allow_blank=True)
        dv.add(f"D{first}:D{last}")
        ws.add_data_validation(dv)
        fills(ws, f"E{first}:E{last}", f"E{first}")

    def front(wb):
        ws = summary_sheet(wb, "Summary", "Programme Healthcheck Summary", "Average score per dimension, from the Assessment sheet. 4 Green, 3 Light Green, 2 Amber, 1 Red.")
        label(ws, "A4", "Programme / date:")
        head(ws, 6, 1, ["Dimension", "Questions", "Answered", "Average score", "Rating", "Lowest score"], [20, 11, 11, 13, 14, 12])
        for i, d in enumerate([d if d != "Stakeholder" else "Stakeholders" for d in dims], start=7):
            box(ws.cell(row=i, column=1, value=d), bold=True)
            box(ws.cell(row=i, column=2, value=f'=COUNTIF(Assessment!$B$6:$B$105,A{i})'))
            box(ws.cell(row=i, column=3, value=f'=COUNTIFS(Assessment!$B$6:$B$105,A{i},Assessment!$D$6:$D$105,"<>")'))
            box(ws.cell(row=i, column=4, value=f'=IFERROR(AVERAGEIF(Assessment!$B$6:$B$105,A{i},Assessment!$D$6:$D$105),"")'), "0.0")
            box(ws.cell(row=i, column=5, value="=" + rating.format(x=f"D{i}")))
            box(ws.cell(row=i, column=6, value=f'=IF(C{i}=0,"",MINIFS(Assessment!$D$6:$D$105,Assessment!$B$6:$B$105,A{i}))'))
        t = 7 + len(dims)
        box(ws.cell(row=t, column=1, value="Overall"), bold=True)
        box(ws.cell(row=t, column=2, value=f"=SUM(B7:B{t-1})"), bold=True)
        box(ws.cell(row=t, column=3, value=f"=SUM(C7:C{t-1})"), bold=True)
        box(ws.cell(row=t, column=4, value='=IFERROR(AVERAGE(Assessment!$D$6:$D$105),"")'), "0.0", True)
        box(ws.cell(row=t, column=5, value="=" + rating.format(x=f"D{t}")), bold=True)
        fills(ws, f"E7:E{t}", "E7")
        label(ws, f"A{t+2}", "Top actions:")
        return [ws]
    return dict(sheets=[Sheet("Assessment", "Programme Healthcheck", "Score each question 1 to 4 with evidence. Add questions in the blank rows using one of the six dimension names.", cols,
                              rows=len(examples) + 15, examples=examples, extra=extra)],
                front=front,
                guide=[("Scores", "4 Green: fully in place, working well. 3 Light Green: mostly in place, minor gaps. 2 Amber: partly in place, action needed. 1 Red: not in place, urgent action."),
                       ("Evidence", "Score on evidence, not opinion: board minutes, plans, registers, benefit reports."),
                       ("Who", "Programme manager and office as a self-assessment, or an independent reviewer for assurance."),
                       ("When", "Monthly or quarterly, before major decisions, when concerns arise, or when a new SRO or programme manager starts."),
                       ("Lowest score", "A single Red question can matter more than a healthy average. Check the lowest score column.")])


def programme_stakeholder_map():
    levels = ["Blocker", "Resistant", "Neutral", "Support", "Lead"]
    arr = '{"Blocker","Resistant","Neutral","Support","Lead"}'
    quad = ('IF(OR({col:Power}{r}="",{col:Interest}{r}=""),"",IF({col:Power}{r}="High",'
            'IF({col:Interest}{r}="High","Close partnership","Keep satisfied"),'
            'IF({col:Interest}{r}="High","Engage and involve","Keep aware")))')
    cols = [Col("Stakeholder", 22), Col("Group", 16, choices=["Sponsors", "Business leaders", "Users", "Delivery", "Enablers", "External", "Influencers"]),
            Col("Role", 18), Col("Power", 8, choices=HL), Col("Interest", 8, choices=HL),
            Col("Strategy", 18, formula=quad),
            Col("Current", 11, choices=levels), Col("Target", 11, choices=levels),
            Col("Gap", 6, formula=f'IF(OR({{col:Current}}{{r}}="",{{col:Target}}{{r}}=""),"",MATCH({{col:Target}}{{r}},{arr},0)-MATCH({{col:Current}}{{r}},{arr},0))'),
            Col("Influences", 20), Col("Influenced by", 20), Col("Projects affecting them", 22),
            Col("Key concerns", 26), Col("Key messages", 26), Col("Engagement owner", 16), Col("Next action", 26)]

    def extra(ws, c, first, last):
        status_fills(ws, "G", first, last, done=("Lead", "Support"), warn=("Resistant",), bad=("Blocker",))
        highlight(ws, f"I{first}:I{last}", f'AND(ISNUMBER(I{first}),I{first}>=2)', RED)
        highlight(ws, f"I{first}:I{last}", f'AND(ISNUMBER(I{first}),I{first}=1)', AMBER)
    return dict(sheets=[Sheet("Map", "Programme Stakeholder Map", "Map stakeholders across the whole programme, not project by project. A gap of 2 or more between current and target engagement turns red.", cols, rows=100, extra=extra)],
                guide=[("Group", "Sponsors, Business leaders, Users, Delivery, Enablers (IT, HR, Finance, Legal), External, Influencers (unions, opinion leaders)."),
                       ("Strategy", "High power, high interest: close partnership. High power, low interest: keep satisfied with targeted updates. Low power, high interest: engage and involve. Low power, low interest: keep aware."),
                       ("Engagement", "Blocker, Resistant, Neutral, Support or Lead. Gap is the number of steps from current to target."),
                       ("Influence network", "Record who influences whom, so you can reach hard-to-reach stakeholders through people they listen to."),
                       ("Projects affecting them", "Coordinate contact so the same stakeholder is not approached by several projects at once."),
                       ("Privacy", "This map may hold sensitive views about named people. Store it securely and share it carefully.")])


def sheets():
    out = {
        "action_tracker.xlsx": action_tracker(),
        "decision_log.xlsx": decision_log(),
        "issue_log.xlsx": issue_log(),
        "stakeholder_register.xlsx": stakeholder_register(),
        "stakeholder_analysis.xlsx": stakeholder_analysis(),
        "communication_matrix.xlsx": communication_matrix(),
        "project_budget.xlsx": project_budget(),
        "earned_value_calculator.xlsx": earned_value_calculator(),
        "executive_dashboard.xlsx": executive_dashboard(),
        "sipoc_template.xlsx": sipoc_template(),
        "stage_plan_gantt.xlsx": stage_plan_gantt(),
        "vendor_evaluation.xlsx": vendor_evaluation(),
        "supplier_scorecard.xlsx": supplier_scorecard(),
        "work_package_register.xlsx": work_package_register(),
        "risk_assessment_matrix.xlsx": risk_assessment_matrix(),
        "portfolio_dashboard.xlsx": portfolio_dashboard(),
        "investment_prioritisation.xlsx": investment_prioritisation(),
        "resource_capacity_planner.xlsx": resource_capacity_planner(),
        "skills_matrix.xlsx": skills_matrix(),
        "capability_assessment.xlsx": capability_assessment(),
        "programme_healthcheck.xlsx": programme_healthcheck(),
        "programme_stakeholder_map.xlsx": programme_stakeholder_map(),
    }
    out.update(checklists())
    return out
