"""PowerPoint and PDF templates. others() maps file name to a function(path)."""
import re

from pptx import Presentation
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.text import PP_ALIGN
from pptx.util import Emu, Inches, Pt
from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas

from lib import _plain
from sheets import page_text

TEAL = RGBColor(0x3F, 0x8F, 0x92)
BLUE = RGBColor(0x10, 0x8B, 0xB9)
GREY = RGBColor(0x5A, 0x5A, 0x5A)
LIGHT = RGBColor(0xF2, 0xF2, 0xF2)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
RAGS = {"G": RGBColor(0xC6, 0xEF, 0xCE), "A": RGBColor(0xFF, 0xE6, 0x99), "R": RGBColor(0xF8, 0xCB, 0xAD)}


# ---------------------------------------------------------------------------
# PowerPoint
# ---------------------------------------------------------------------------

class Deck:
    def __init__(self, title):
        self.prs = Presentation()
        self.prs.slide_width = Inches(13.333)
        self.prs.slide_height = Inches(7.5)
        self.blank = self.prs.slide_layouts[6]
        self.title = title
        self.prs.core_properties.title = title
        self.prs.core_properties.author = "kevstemplates.com"
        self.n = 0

    def _text(self, slide, x, y, w, h, text, size=14, bold=False, colour=None, italic=False, align=None):
        tb = slide.shapes.add_textbox(x, y, w, h)
        tf = tb.text_frame
        tf.word_wrap = True
        lines = text if isinstance(text, list) else [text]
        for i, line in enumerate(lines):
            p = tf.paragraphs[0] if i == 0 else tf.add_paragraph()
            p.text = line
            p.font.size = Pt(size)
            p.font.bold = bold
            p.font.italic = italic
            p.font.color.rgb = colour or RGBColor(0x26, 0x26, 0x26)
            if align:
                p.alignment = align
        return tb

    def slide(self, heading, guidance=None):
        self.n += 1
        s = self.prs.slides.add_slide(self.blank)
        bar = s.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, self.prs.slide_width, Inches(0.12))
        bar.fill.solid()
        bar.fill.fore_color.rgb = TEAL
        bar.line.fill.background()
        self._text(s, Inches(0.5), Inches(0.3), Inches(12), Inches(0.8), heading, 28, colour=TEAL)
        if guidance:
            self._text(s, Inches(0.5), Inches(0.95), Inches(12), Inches(0.5), guidance, 12, italic=True, colour=GREY)
        self._text(s, Inches(0.5), Inches(7.0), Inches(9), Inches(0.35), f"{self.title}  |  <Project name>  |  <Date>", 10, colour=GREY)
        self._text(s, Inches(12.0), Inches(7.0), Inches(0.8), Inches(0.35), str(self.n), 10, colour=GREY, align=PP_ALIGN.RIGHT)
        return s

    def title_slide(self, title, subtitle):
        self.n += 1
        s = self.prs.slides.add_slide(self.blank)
        bg = s.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, self.prs.slide_width, self.prs.slide_height)
        bg.fill.solid()
        bg.fill.fore_color.rgb = TEAL
        bg.line.fill.background()
        self._text(s, Inches(0.8), Inches(2.4), Inches(11.5), Inches(1.2), title, 44, colour=WHITE)
        self._text(s, Inches(0.8), Inches(3.6), Inches(11.5), Inches(1.6), subtitle, 20, colour=WHITE)
        return s

    def table(self, slide, headers, rows, x=Inches(0.5), y=Inches(1.5), w=None, widths=None, row_h=Inches(0.45), size=12, rag_col=None):
        w = w or Inches(12.3)
        shape = slide.shapes.add_table(len(rows) + 1, len(headers), x, y, w, row_h * (len(rows) + 1))
        t = shape.table
        if widths:
            total = sum(widths)
            for i, wd in enumerate(widths):
                t.columns[i].width = Emu(int(w * wd / total))
        for j, h in enumerate(headers):
            c = t.cell(0, j)
            c.text = h
            c.fill.solid()
            c.fill.fore_color.rgb = BLUE
            p = c.text_frame.paragraphs[0]
            p.font.size, p.font.bold, p.font.color.rgb = Pt(size), True, WHITE
        for i, row in enumerate(rows, start=1):
            for j, v in enumerate(row):
                c = t.cell(i, j)
                c.text = v
                c.fill.solid()
                c.fill.fore_color.rgb = LIGHT if i % 2 else WHITE
                p = c.text_frame.paragraphs[0]
                p.font.size = Pt(size)
                if j == 0:
                    p.font.bold = True
                if rag_col is not None and j == rag_col and v in RAGS:
                    c.fill.fore_color.rgb = RAGS[v]
                    p.alignment = PP_ALIGN.CENTER
        return t

    def panel(self, slide, x, y, w, h, heading, lines):
        box = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, x, y, w, h)
        box.fill.solid()
        box.fill.fore_color.rgb = LIGHT
        box.line.color.rgb = RGBColor(0xD9, 0xD9, 0xD9)
        self._text(slide, x + Inches(0.15), y + Inches(0.1), w - Inches(0.3), Inches(0.45), heading, 16, True, BLUE)
        self._text(slide, x + Inches(0.15), y + Inches(0.6), w - Inches(0.3), h - Inches(0.7), lines, 13)

    def save(self, path):
        self.prs.save(path)


def weekly_status_report(path):
    d = Deck("Weekly Status Report")
    d.title_slide("Weekly Status Report", "<Project name>\nWeek ending <date>  |  <Project manager>")

    s = d.slide("Status summary", "Use G, A or R in the Status column. Give a reason for anything not Green.")
    d.table(s, ["Dimension", "Status", "Last week", "Comment"],
            [["Overall", "G", "G", "<One-line summary of where the project is>"],
             ["Schedule", "A", "G", "<e.g. Testing 1 week behind; recovery plan in place>"],
             ["Budget", "G", "G", "<Spend to date vs plan>"],
             ["Scope", "G", "G", "<Any change requests>"],
             ["Quality", "G", "G", "<Defects, review results>"],
             ["Risks and issues", "A", "A", "<Most significant risk or issue>"]],
            widths=[2.2, 1.1, 1.2, 7.8], rag_col=1, row_h=Inches(0.55), size=14)
    d._text(s, Inches(0.5), Inches(5.6), Inches(12.3), Inches(1.2),
            ["Green: on track.  Amber: at risk, corrective action under way.  Red: off track, needs a decision or help."], 12, colour=GREY, italic=True)

    s = d.slide("Progress", "Keep each list to the three to five things that matter most.")
    d.panel(s, Inches(0.5), Inches(1.5), Inches(6.0), Inches(5.2), "Completed this week",
            ["• <Achievement>", "• <Achievement>", "• <Achievement>"])
    d.panel(s, Inches(6.8), Inches(1.5), Inches(6.0), Inches(5.2), "Planned next week",
            ["• <Planned activity>", "• <Planned activity>", "• <Planned activity>"])

    s = d.slide("Milestones", "Show the next five to eight milestones. Forecast is the current expected date.")
    d.table(s, ["Milestone", "Baseline date", "Forecast date", "Status", "Comment"],
            [["<Milestone>", "<date>", "<date>", "G", ""] for _ in range(6)],
            widths=[4, 1.8, 1.8, 1.1, 3.6], rag_col=3, size=13)

    s = d.slide("Budget", "Figures to the end of last month unless stated.")
    d.table(s, ["", "Budget", "Actual to date", "Forecast at completion", "Variance"],
            [["Labour", "", "", "", ""], ["Non-labour", "", "", "", ""], ["Contingency", "", "", "", ""], ["Total", "", "", "", ""]],
            widths=[3, 2, 2, 2.6, 2], size=14, row_h=Inches(0.55))

    s = d.slide("Top risks and issues", "The few that the reader needs to know about. Full detail stays in the RAID log.")
    d.table(s, ["Ref", "Risk or issue", "Impact", "Action", "Owner", "Status"],
            [["R-", "", "", "", "", "A"], ["R-", "", "", "", "", "A"], ["I-", "", "", "", "", "R"], ["I-", "", "", "", "", "A"]],
            widths=[0.8, 3.4, 2.4, 3.2, 1.4, 1.1], rag_col=5, size=13, row_h=Inches(0.7))

    s = d.slide("Decisions and help needed", "Be specific: what you need, from whom, and by when.")
    d.table(s, ["Decision or support needed", "From", "By when", "Impact if not received"],
            [["", "", "", ""] for _ in range(4)], widths=[5, 2, 1.6, 3.7], size=13, row_h=Inches(0.7))
    d.save(path)


def meeting_pack(path):
    d = Deck("Meeting Pack")
    d.title_slide("<Meeting name>", "<Date, time and location or call link>\nChair: <name>  |  Pack issued: <date>")

    s = d.slide("Agenda", "Send the pack at least two working days before the meeting.")
    d.table(s, ["#", "Item", "Purpose", "Lead", "Time"],
            [["1", "Welcome, apologies and objectives", "Information", "Chair", "5 min"],
             ["2", "Minutes and actions from last meeting", "Review", "Chair", "10 min"],
             ["3", "Status update", "Information", "PM", "15 min"],
             ["4", "Risks and issues", "Discussion", "PM", "15 min"],
             ["5", "Decisions required", "Decision", "Chair", "15 min"],
             ["6", "Any other business and next meeting", "Information", "Chair", "5 min"]],
            widths=[0.6, 5.2, 2, 2, 1.4], size=14, row_h=Inches(0.55))

    s = d.slide("Objectives", "What this meeting must achieve. Decisions first.")
    d.panel(s, Inches(0.5), Inches(1.5), Inches(12.3), Inches(5.2), "By the end of this meeting we will have:",
            ["• <Decided ...>", "• <Agreed ...>", "• <Reviewed ...>"])

    s = d.slide("Actions from last meeting", "Close completed actions here. Carry open ones forward with a new date if needed.")
    d.table(s, ["Ref", "Action", "Owner", "Due", "Status"],
            [["", "", "", "", ""] for _ in range(6)], widths=[0.9, 6.5, 2, 1.5, 1.4], size=13)

    s = d.slide("Status update", "Summary only. Attach the full report as a pre-read.")
    d.panel(s, Inches(0.5), Inches(1.5), Inches(4.0), Inches(5.2), "Progress", ["• ", "• ", "• "])
    d.panel(s, Inches(4.65), Inches(1.5), Inches(4.0), Inches(5.2), "Coming up", ["• ", "• ", "• "])
    d.panel(s, Inches(8.8), Inches(1.5), Inches(4.0), Inches(5.2), "Concerns", ["• ", "• ", "• "])

    s = d.slide("Risks and issues", "Items that need this group's attention.")
    d.table(s, ["Ref", "Description", "Impact", "Proposed action", "Owner"],
            [["", "", "", "", ""] for _ in range(4)], widths=[0.9, 4, 2.5, 3.5, 1.4], size=13, row_h=Inches(0.7))

    s = d.slide("Decision required", "One slide per decision. State the recommendation clearly.")
    d.panel(s, Inches(0.5), Inches(1.5), Inches(6.0), Inches(2.4), "The decision", ["<What the meeting is being asked to decide>"])
    d.panel(s, Inches(0.5), Inches(4.1), Inches(6.0), Inches(2.6), "Recommendation", ["<Recommended option and why>"])
    d.table(s, ["Option", "Pros", "Cons", "Cost / impact"],
            [["A", "", "", ""], ["B", "", "", ""], ["Do nothing", "", "", ""]],
            x=Inches(6.8), w=Inches(6.0), widths=[1.4, 1.6, 1.6, 1.4], size=12, row_h=Inches(1.2))

    s = d.slide("Summary and next meeting", "Read back decisions and new actions before closing.")
    d.panel(s, Inches(0.5), Inches(1.5), Inches(6.0), Inches(5.2), "Decisions made", ["• ", "• "])
    d.panel(s, Inches(6.8), Inches(1.5), Inches(6.0), Inches(5.2), "New actions", ["• <Action> - <Owner> - <Date>", "• "])
    d._text(s, Inches(0.5), Inches(6.75), Inches(12), Inches(0.3), "Next meeting: <date, time, location>", 12, True, GREY)
    d.save(path)


# ---------------------------------------------------------------------------
# PDF prompt cards
# ---------------------------------------------------------------------------

PHASE_COLOURS = ["#3F8F92", "#108BB9", "#8E5BA6", "#D9822B", "#5A5A5A"]


def prompt_cards_data():
    text = page_text("projects/lessons_learned")
    sect = text.split("### Facilitation Question Prompts", 1)[1].split("\n---", 1)[0]
    phases = []
    for block in re.split(r"^#### ", sect, flags=re.M)[1:]:
        name, body = block.split("\n", 1)
        cards = []
        for line in body.splitlines():
            if line.startswith("| **"):
                cells = [c.strip() for c in line.strip().strip("|").split("|")]
                qs = [q.strip() + "?" for q in cells[1].split("?") if q.strip()]
                cards.append((_plain(cells[0]), qs))
        phases.append((name.strip().replace("&", "and"), cards))
    return phases


def _wrap(c, text, font, size, width):
    words, lines, cur = text.split(), [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if c.stringWidth(trial, font, size) <= width:
            cur = trial
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def lessons_prompt_cards(path):
    phases = prompt_cards_data()
    opener = ("Opening questions", [
        ("Went well", ["What went well that we should repeat?", "What are we proud of?"]),
        ("Could be better", ["What did not go as planned?", "What got in the way?"]),
        ("Do differently", ["If we started this project again tomorrow, what would we do differently?"]),
        ("Advice", ["What one piece of advice would you give the next project like this?"]),
    ])
    cards = [(opener[0], cat, qs, PHASE_COLOURS[4]) for cat, qs in opener[1]]
    for i, (phase, items) in enumerate(phases):
        for cat, qs in items:
            cards.append((phase, cat, qs, PHASE_COLOURS[i % 4]))

    c = canvas.Canvas(path, pagesize=A4)
    c.setTitle("Lessons Learned Question Prompt Cards")
    c.setAuthor("kevstemplates.com")
    W, H = A4
    margin, cols, rows = 12 * mm, 2, 4
    cw, ch = (W - 2 * margin) / cols, (H - 2 * margin - 10 * mm) / rows

    # instruction page
    c.setFont("Helvetica-Bold", 22)
    c.setFillColor(HexColor("#3F8F92"))
    c.drawString(margin, H - 30 * mm, "Lessons Learned Question Prompt Cards")
    c.setFillColor(HexColor("#262626"))
    y = H - 45 * mm
    intro = [
        "Print these cards, cut along the dashed lines and use them in a lessons learned workshop.",
        "Ways to use them:",
        "- Deal one card to each small group. Give them 10 minutes to discuss and write one specific lesson.",
        "- Lay the cards for a phase on the table and let the group choose the ones that matter most.",
        "- Use the opening cards to warm up, then work through the phases in order.",
        "A good lesson says what happened, why, and what to do next time. Capture each one with an owner.",
        "Cards are colour-coded by phase:",
    ]
    for line in intro:
        for wl in _wrap(c, line, "Helvetica", 12, W - 2 * margin):
            c.setFont("Helvetica", 12)
            c.drawString(margin, y, wl)
            y -= 7 * mm
        y -= 2 * mm
    for i, name in enumerate([opener[0]] + [p for p, _ in phases]):
        colour = PHASE_COLOURS[4] if i == 0 else PHASE_COLOURS[(i - 1) % 4]
        c.setFillColor(HexColor(colour))
        c.rect(margin, y - 1.5 * mm, 8 * mm, 6 * mm, fill=1, stroke=0)
        c.setFillColor(HexColor("#262626"))
        c.drawString(margin + 12 * mm, y, name)
        y -= 9 * mm
    c.setFont("Helvetica-Oblique", 9)
    c.setFillColor(HexColor("#5A5A5A"))
    c.drawString(margin, 12 * mm, "Free template from kevstemplates.com")
    c.showPage()

    per = cols * rows
    for p in range(0, len(cards), per):
        for k, (phase, cat, qs, colour) in enumerate(cards[p:p + per]):
            col, row = k % cols, k // cols
            x = margin + col * cw
            y = H - margin - 10 * mm - (row + 1) * ch
            c.setDash(3, 3)
            c.setStrokeColor(HexColor("#BFBFBF"))
            c.rect(x, y, cw, ch, fill=0, stroke=1)
            c.setDash()
            pad = 6 * mm
            c.setFillColor(HexColor(colour))
            c.rect(x + pad, y + ch - pad - 9 * mm, cw - 2 * pad, 9 * mm, fill=1, stroke=0)
            c.setFillColor(white)
            c.setFont("Helvetica-Bold", 10)
            c.drawString(x + pad + 3 * mm, y + ch - pad - 6 * mm, phase.upper())
            c.setFillColor(HexColor(colour))
            c.setFont("Helvetica-Bold", 18)
            c.drawString(x + pad, y + ch - pad - 20 * mm, cat)
            c.setFillColor(HexColor("#262626"))
            ty = y + ch - pad - 30 * mm
            for q in qs:
                for wl in _wrap(c, q, "Helvetica", 13, cw - 2 * pad):
                    c.setFont("Helvetica", 13)
                    c.drawString(x + pad, ty, wl)
                    ty -= 6 * mm
                ty -= 3 * mm
            c.setFont("Helvetica-Oblique", 7)
            c.setFillColor(HexColor("#8C8C8C"))
            c.drawRightString(x + cw - pad, y + 4 * mm, "kevstemplates.com")
        c.setFont("Helvetica", 8)
        c.setFillColor(HexColor("#8C8C8C"))
        c.drawString(margin, H - margin - 4 * mm, "Cut along the dashed lines")
        c.showPage()
    c.save()


def others():
    return {
        "weekly_status_report.pptx": weekly_status_report,
        "meeting_pack.pptx": meeting_pack,
        "lessons_prompt_cards.pdf": lessons_prompt_cards,
    }
