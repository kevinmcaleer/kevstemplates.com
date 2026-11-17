"""Word template specifications. Run build.py to generate the files."""
from lib import (C, G, H2, KV, L, N, P, SIGN, T, page_sections, rename)

DOC_CONTROL_NOTE = None


def docs():
    d = {}

    # ------------------------------------------------------------------ project reports
    d["end_of_stage_report.docx"] = dict(
        title="End of Stage Report",
        subtitle="<Project name> – <Stage name>",
        about=[
            "The End of Stage Report tells the project board how the stage performed against its plan, how the project as a whole is now forecast to perform, and what the project manager recommends for the next stage.",
            "Produce it at the end of every management stage. It is the basis for the board's decision to authorise the next stage, ask for an exception plan or close the project.",
        ],
        sections=rename(page_sections("projects/end_of_stage_report", r"## End of Stage Report Template", r"## End of Stage Report Checklist"),
                        {"Stage 3": "Next Stage"}),
    )
    d["end_of_project_report.docx"] = dict(
        title="End of Project Report",
        subtitle="<Project name>",
        about=[
            "The End of Project Report reviews how the project performed against its original Project Initiation Document, confirms what was handed over, and records the benefits position, lessons and follow-on actions.",
            "The project manager prepares it during closure. The project board uses it to confirm the project can be closed.",
        ],
        sections=page_sections("projects/end_of_project_report", r"## End of Project Report Template", r"## End of Project Report Checklist"),
    )
    d["handover_document.docx"] = dict(
        title="Handover Document",
        subtitle="<Service or system name>",
        about=[
            "The Handover Document transfers ownership of a delivered service or system from the project to the people who will run and support it.",
            "It gives operations and support everything they need on day one: what the service is, who owns it, how to run it, how to fix it and what is still outstanding.",
        ],
        sections=page_sections("projects/handover_document", r"## Handover Document Template", r"## Handover Checklist"),
    )
    d["backout_plan.docx"] = dict(
        title="Backout Plan",
        subtitle="<Release or change name>",
        about=[
            "A Backout Plan sets out how a deployment or change will be reversed if it fails, restoring the service to its previous known good state.",
            "Write it before deployment, test it, and make sure everyone involved knows the triggers and who decides.",
        ],
        sections=page_sections("projects/backout_plan", r"## Backout Plan Template", r"## Backout Plan Checklist"),
    )
    d["post_implementation_review.docx"] = dict(
        title="Post Implementation Review",
        subtitle="<Project name>",
        about=[
            "The Post Implementation Review (PIR) looks at a solution some months after it went live, to check whether the expected benefits are being realised, how well it is working for users and operations, and what can be learned.",
            "Hold it typically three to six months after go-live, once the solution has settled into normal use.",
        ],
        sections=page_sections("projects/post_implementation_review", r"## PIR Template", r"## PIR Checklist"),
    )
    d["product_description.docx"] = dict(
        title="Product Description",
        subtitle="<Product name>",
        about=[
            "A Product Description defines a product the project will deliver: its purpose, what it is made of, who needs it, and the quality criteria it must meet to be accepted.",
            "Write one for each significant product before work on it starts, and agree it with the people who will use and approve it.",
        ],
        sections=page_sections("projects/product_description", r"## Product Description Template", r"## Types of Products"),
    )
    d["stage_plan.docx"] = dict(
        title="Stage Plan",
        subtitle="<Project name> – <Stage name>",
        about=[
            "The Stage Plan is the detailed plan the project manager uses to manage a stage day to day. It covers the products, activities, schedule, resources, budget, risks, controls and tolerances for the stage.",
            "Produce it towards the end of the previous stage, so the project board can approve it alongside the End of Stage Report.",
        ],
        sections=page_sections("projects/stage_plan", r"## Stage Plan Template", r"## Creating a Stage Plan"),
    )
    d["work_package.docx"] = dict(
        title="Work Package",
        subtitle="<Work package reference and name>",
        about=[
            "A Work Package is the formal agreement between the project manager and a team manager (or supplier) for a piece of work: what is to be delivered, to what quality, by when, at what cost, and how progress will be reported.",
            "Agree and sign it before work starts. Close it formally when the products are accepted.",
        ],
        sections=page_sections("projects/work_package", r"## Work Package Template", r"## Managing Work Packages"),
    )
    d["meeting_agenda.docx"] = dict(
        title="Meeting Agenda",
        subtitle="<Meeting name> – <Date>",
        about=[
            "Use this agenda for project meetings such as status meetings, project board meetings and workshops. A clear agenda, sent with pre-reading at least two working days before, makes meetings shorter and decisions better.",
        ],
        sections=page_sections("projects/meeting_agenda", r"## Meeting Agenda Template", r"## Agenda Templates by Meeting Type"),
    )
    d["workshop_planner.docx"] = dict(
        title="Workshop Planner",
        subtitle="<Workshop name> – <Date>",
        about=[
            "Use the Workshop Planner to design a project workshop: its purpose and outputs, who should attend, the agenda, the facilitation approach, materials and logistics.",
            "A well planned workshop produces agreed outputs in a fraction of the time it takes to reach them by email.",
        ],
        sections=page_sections("projects/workshop_planner", r"## Workshop Planning Template", r"## Facilitation Techniques"),
    )

    # ------------------------------------------------------------------ hand-written project docs
    d["meeting_minutes.docx"] = dict(
        title="Meeting Minutes",
        subtitle="<Meeting name> – <Date>",
        about=[
            "Minutes are the formal record of a meeting: who attended, what was discussed, what was decided and who will do what by when.",
            "Issue them within two working days, and copy every action and decision into the project's action tracker and decision log.",
        ],
        sections=[
            ("Meeting Details", [KV("Meeting", "Project", "Date and time", "Location / platform", "Chair", "Minute taker")]),
            ("Attendance", [
                T(["Name", "Role", "Present / Apologies"], rows=6),
            ]),
            ("Previous Minutes and Actions", [
                P("Minutes of the previous meeting were agreed as an accurate record / agreed with the following changes:"),
                G("Record any corrections to the previous minutes."),
                T(["Action ID", "Action", "Owner", "Status", "Update"], rows=4),
            ]),
            ("Discussion", [
                G("One sub-heading per agenda item. Summarise the key points, not a word-for-word transcript. Attribute views only where it matters."),
                H2("Item 1: <title>"),
                G("Summary of discussion."),
                H2("Item 2: <title>"),
                G("Summary of discussion."),
                H2("Item 3: <title>"),
                G("Summary of discussion."),
            ]),
            ("Decisions", [
                T(["Decision ID", "Decision", "Rationale", "Made by"], rows=3),
            ]),
            ("Actions", [
                T(["Action ID", "Action", "Owner", "Due date"], rows=5),
                G("Each action needs one named owner and a date. Avoid 'team' or 'all' as an owner."),
            ]),
            ("Risks and Issues Raised", [
                T(["Type (risk / issue)", "Description", "Owner", "Added to RAID log?"], rows=3),
            ]),
            ("Next Meeting", [KV("Date and time", "Location / platform", "Proposed agenda items")]),
        ],
    )
    d["project_charter.docx"] = dict(
        title="Project Charter",
        subtitle="<Project name>",
        about=[
            "The Project Charter formally authorises the project. It names the sponsor and project manager, states why the project exists and what it will achieve, and sets its high-level scope, budget and timeline.",
            "Keep it short, typically two to four pages, and get it signed by the sponsor before significant work starts.",
        ],
        sections=[
            ("Project Overview", [KV("Project title", "Project sponsor", "Project manager", "Date", "Version")]),
            ("Purpose and Background", [G("Why is this project needed? What problem or opportunity does it address, and why now?")]),
            ("Objectives", [
                G("Write SMART objectives: specific, measurable, achievable, relevant and time-bound."),
                T(["#", "Objective", "Measure", "Target date"], first_col=["1", "2", "3"]),
            ]),
            ("Scope", [
                H2("In scope"),
                G("List what the project will deliver or change."),
                H2("Out of scope"),
                G("List anything people might assume is included but is not."),
            ]),
            ("Key Deliverables", [T(["Deliverable", "Description", "Target date"], rows=4)]),
            ("Success Criteria", [G("How will the sponsor judge whether the project has succeeded?"), T(["Criterion", "Measure", "Target"], rows=3)]),
            ("Stakeholders", [T(["Stakeholder", "Role / interest"], rows=5)]),
            ("High-Level Timeline", [T(["Milestone", "Target date"], rows=5)]),
            ("Budget", [KV("Estimated cost (order of magnitude)", "Funding source", "Contingency")]),
            ("Assumptions, Constraints and Risks", [
                H2("Assumptions"), G("Conditions taken to be true for planning purposes."),
                H2("Constraints"), G("Fixed limits on time, cost, resources, technology or regulation."),
                H2("Key risks"), T(["Risk", "Impact", "Response"], rows=3),
            ]),
            ("Project Manager Authority", [
                G("State what the project manager may decide without referring to the sponsor, for example spend up to a limit, resource allocation and supplier selection within an approved budget."),
                KV("Budget authority", "Resource authority", "Escalation route"),
            ]),
            ("Approval", [SIGN("Project Sponsor", "Project Manager")]),
        ],
    )
    d["communication_plan.docx"] = dict(
        title="Communication Plan",
        subtitle="<Project name>",
        about=[
            "The Communication Plan sets out who needs to know what about the project, when, how and from whom. It covers both routine reporting and the messages needed to bring people through the change.",
            "Base it on the stakeholder analysis and review it at each stage boundary. Use the Communication Matrix workbook to manage individual communications.",
        ],
        sections=[
            ("Objectives", [G("What should communication achieve? For example: keep sponsors informed, build support for the change, make sure users know what is happening and when."), T(["#", "Objective", "Measure"], first_col=["1", "2", "3"])]),
            ("Key Messages", [T(["Audience", "Key message", "Owner"], rows=4)]),
            ("Stakeholder Communication Needs", [
                G("Summarise from the stakeholder register. Group stakeholders with similar needs."),
                T(["Stakeholder / group", "Interest / influence", "Information needs", "Preferred channel"], rows=6),
            ]),
            ("Communication Methods", [T(["Method", "Use for", "Owner"], first_col=["Project board meeting", "Highlight report", "Team meeting", "Newsletter / intranet", "Email update", "Town hall / briefing", "Workshops"])]),
            ("Communication Schedule", [
                G("The detailed schedule is maintained in the Communication Matrix workbook. Summarise the regular communications here."),
                T(["Communication", "Audience", "Frequency", "Method", "Owner"], rows=6),
            ]),
            ("Roles and Responsibilities", [T(["Role", "Communication responsibilities", "Name"], first_col=["Project sponsor", "Project manager", "Communications lead", "Business change manager", "Team leads"])]),
            ("Feedback and Escalation", [
                G("How can stakeholders ask questions or raise concerns? How quickly will they get a response? Who handles complaints or escalations?"),
                KV("Feedback channels", "Response time", "Escalation route"),
            ]),
            ("Measuring Effectiveness", [T(["Measure", "Method", "Target", "Frequency"], rows=3)]),
            ("Approval", [SIGN("Project Sponsor", "Project Manager")]),
        ],
    )
    d["monthly_progress_report.docx"] = dict(
        title="Monthly Progress Report",
        subtitle="<Project name> – <Month and year>",
        about=[
            "The Monthly Progress Report gives the sponsor and project board a fuller picture than the weekly status report: progress against plan, finances, risks and issues, benefits and the outlook for next month.",
            "Lead with the overall status and the decisions you need. Keep the whole report to four pages or fewer.",
        ],
        sections=[
            ("Report Details", [KV("Project", "Reporting period", "Project manager", "Sponsor", "Date issued")]),
            ("Executive Summary", [
                T(["Dimension", "Status (R/A/G)", "Trend", "Commentary"], first_col=["Overall", "Schedule", "Budget", "Scope", "Quality", "Risks and issues", "Resources", "Benefits"]),
                H2("Key messages"),
                G("Three to five sentences: what happened, what it means and what is needed."),
                H2("Decisions or support needed"),
                T(["Decision / support needed", "From", "By when"], rows=2),
            ]),
            ("Progress This Month", [
                H2("Achievements"), T(["Achievement", "Impact"], rows=4),
                H2("Milestones"), T(["Milestone", "Baseline date", "Forecast / actual date", "Status"], rows=5),
            ]),
            ("Financial Summary", [
                T(["Category", "Budget", "Actual to date", "Forecast at completion", "Variance"], first_col=["Internal labour", "External labour", "Hardware / software", "Other", "Contingency", "Total"]),
                G("Explain any variance outside tolerance and the action being taken."),
            ]),
            ("Risks and Issues", [
                H2("Top risks"), T(["Risk", "Probability", "Impact", "Response", "Owner"], rows=3),
                H2("Key issues"), T(["Issue", "Impact", "Action", "Owner", "Due"], rows=3),
            ]),
            ("Change Requests", [T(["Ref", "Change", "Impact", "Status"], rows=3)]),
            ("Benefits", [T(["Benefit", "Measure", "Target", "Status"], rows=3)]),
            ("Next Month", [
                H2("Planned activities"), G("List the main activities and milestones planned for next month."),
                H2("Look-ahead"), G("Anything coming up in the next two to three months the board should know about."),
            ]),
        ],
    )
    d["lessons_facilitation_guide.docx"] = dict(
        title="Lessons Learned Workshop Facilitation Guide",
        subtitle="<Project name>",
        about=[
            "This guide helps you plan and run a lessons learned workshop that produces specific, actionable lessons rather than a list of complaints.",
            "Use it with the Lessons Report template and the printable Question Prompt Cards.",
        ],
        guidance="Adapt the agenda and questions to your project. Text in grey italics is guidance.",
        sections=page_sections("projects/lessons_learned", r"## Workshop Facilitation Guide", r"## Lesson Template", prose=True, keep_rows=True),
    )
    d["sipoc_workshop_guide.docx"] = dict(
        title="SIPOC Workshop Guide",
        subtitle="<Process name>",
        about=[
            "This guide helps you run a workshop to build a SIPOC (Suppliers, Inputs, Process, Outputs, Customers) for a business process, using the SIPOC Excel template to record the result.",
            "A SIPOC workshop usually takes 60 to 90 minutes with five to eight people who know the process.",
        ],
        sections=[
            ("Workshop Details", [KV("Process name", "Process owner", "Facilitator", "Scribe", "Date and time", "Location / platform")]),
            ("Purpose and Scope", [
                G("Why are we mapping this process? What decision or piece of work will the SIPOC feed?"),
                KV("Process start trigger", "Process end point", "In scope", "Out of scope"),
            ]),
            ("Participants", [
                G("Invite people who do the process, people who supply it and people who receive its outputs."),
                T(["Name", "Role", "Perspective (supplier / process / customer)"], rows=6),
            ]),
            ("Preparation", [C(
                "Agree scope and the start and end points with the process owner",
                "Gather existing process documents, procedures and metrics",
                "Prepare a SIPOC board: five columns on a wall or virtual whiteboard",
                "Send participants a short briefing on SIPOC and the workshop purpose",
                "Book a room or online session with whiteboard and sticky notes",
            )]),
            ("Agenda", [T(["Time", "Activity", "Notes"], first_col=[
                ["0:00", "Welcome, purpose and ground rules", "Confirm the start and end points"],
                ["0:10", "Process: map 5 to 7 high-level steps", "Start in the middle; verb and noun for each step"],
                ["0:25", "Outputs: what the process produces", "Products, services, information"],
                ["0:35", "Customers: who receives each output", "Internal and external"],
                ["0:45", "Inputs: what each step needs", "Materials, information, resources"],
                ["0:55", "Suppliers: where each input comes from", "Internal and external"],
                ["1:05", "Review and validate", "Check every output has a customer and every input a supplier"],
                ["1:15", "Next steps and close", "Owners for gaps and follow-up"],
            ])]),
            ("Facilitation Tips", [L(
                "Build the Process column first. It anchors everything else.",
                "Keep to high-level steps. If people dive into detail, park it for a detailed process map.",
                "Ask 'who uses this?' for every output, and 'where does this come from?' for every input.",
                "Capture disagreements about the process as issues rather than resolving them in the room.",
                "Photograph or export the board before the session ends.",
            )]),
            ("Outputs and Follow-Up", [
                T(["Output", "Owner", "Due date"], first_col=["Completed SIPOC template", "Issues and gaps log", "Requirements or improvement ideas"]),
                G("Validate the SIPOC with the process owner and anyone who could not attend."),
            ]),
        ],
    )
    d["contract_checklist.docx"] = dict(
        title="Contract Review Checklist",
        subtitle="<Supplier name> – <Contract or agreement>",
        about=[
            "Use this checklist to review a supplier contract before signature, alongside your procurement and legal teams. It covers the terms that most often cause problems on projects.",
            "It is not legal advice. Always involve your organisation's legal or commercial team.",
        ],
        sections=[
            ("Contract Details", [KV("Supplier", "Contract type (fixed price, time and materials, etc.)", "Contract value", "Start and end dates", "Contract owner", "Reviewed by", "Review date")]),
            ("Scope and Deliverables", [C(
                "Scope of work clearly defined, with exclusions",
                "Deliverables listed with acceptance criteria",
                "Statement of work or specification attached",
                "Dependencies on the client (data, access, people) stated",
                "Assumptions recorded and reasonable",
            )]),
            ("Commercial Terms", [C(
                "Pricing model and rates agreed",
                "Payment linked to milestones or accepted deliverables",
                "Expenses policy and caps defined",
                "Invoicing and payment terms agreed",
                "Price review or indexation terms understood",
                "Retention or holdback amounts, if any, agreed",
            )]),
            ("Performance and Service Levels", [C(
                "Service levels or KPIs defined and measurable",
                "Reporting frequency and format agreed",
                "Service credits or remedies for missed service levels",
                "Performance review meetings scheduled",
            )]),
            ("Change Control", [C(
                "Change request process defined",
                "Rates for changes agreed in advance",
                "Authority to approve changes stated on both sides",
            )]),
            ("Risk and Liability", [C(
                "Limitation of liability appropriate to the risk",
                "Indemnities reviewed by legal",
                "Insurance requirements stated and evidence requested",
                "Warranties for deliverables and their duration",
            )]),
            ("Intellectual Property and Data", [C(
                "Ownership of deliverables and intellectual property agreed",
                "Licences for supplier tools or components stated",
                "Data protection obligations and data processing terms in place",
                "Confidentiality terms agreed",
                "Information security requirements included",
            )]),
            ("Personnel", [C(
                "Key personnel named, with replacement terms",
                "Subcontracting requires approval",
                "Onboarding, security clearance and site access requirements stated",
            )]),
            ("Termination and Exit", [C(
                "Termination for convenience and for cause defined",
                "Notice periods acceptable",
                "Exit and handover obligations, including knowledge transfer",
                "Return of data and materials on exit",
            )]),
            ("Dispute Resolution and Governance", [C(
                "Escalation route defined",
                "Dispute resolution method agreed (negotiation, mediation, arbitration)",
                "Governing law and jurisdiction stated",
            )]),
            ("Issues Found", [T(["Clause", "Issue", "Proposed change", "Owner", "Status"], rows=5)]),
            ("Sign-off", [SIGN("Contract owner", "Legal / commercial", "Project manager")]),
        ],
    )

    # ------------------------------------------------------------------ programme docs
    d["programme_blueprint.docx"] = dict(
        title="Programme Blueprint",
        subtitle="<Programme name>",
        about=[
            "The Blueprint describes the future state the programme will create: how the organisation will work once the change is complete, in terms of its people, organisation, processes, information and technology.",
            "It turns the vision into something concrete enough to plan projects and benefits against. Update it at the end of each tranche.",
        ],
        sections=[
            ("Vision", [G("Summarise the programme vision statement and the strategic objectives the blueprint supports.")]),
            ("Current State", [G("Describe how things work today. Keep it to what is relevant to the change."), T(["Dimension", "Current state summary"], first_col=["People", "Organisation", "Processes", "Information", "Technology"])]),
            ("Future State", [
                H2("People"), G("Roles, skills, culture and ways of working in the future state."),
                T(["Role / group", "Future responsibilities", "Skills needed"], rows=3),
                H2("Organisation"), G("Structure, reporting lines, governance and locations."),
                H2("Processes"), G("Key business processes in the future state, and how they change."),
                T(["Process", "Current", "Future", "Change"], rows=4),
                H2("Information"), G("Data, information flows, reporting and records."),
                H2("Technology"), G("Systems, applications and infrastructure."),
                T(["System", "Current", "Future", "Change"], rows=4),
            ]),
            ("Gap Analysis", [T(["Dimension", "Current", "Future", "Gap", "Closed by (project / activity)"], first_col=["People", "Organisation", "Processes", "Information", "Technology"])]),
            ("Transitional States", [
                G("Describe the intermediate state at the end of each tranche, so the organisation can operate safely while the change is in progress."),
                T(["Tranche", "End date", "Capabilities in place", "Operational state"], first_col=["Tranche 1", "Tranche 2", "Tranche 3"]),
            ]),
            ("Benefits Linkage", [T(["Capability", "Outcome", "Benefit", "Benefit owner"], rows=4)]),
            ("Measures of Performance", [T(["Measure", "Current", "Target", "By when"], rows=4)]),
            ("Assumptions and Constraints", [G("List what the blueprint assumes and any fixed limits.")]),
            ("Approval", [SIGN("Senior Responsible Owner", "Programme Manager", "Business Change Manager")]),
        ],
    )
    d["programme_governance_framework.docx"] = dict(
        title="Programme Governance Framework",
        subtitle="<Programme name>",
        about=[
            "The Programme Governance Framework sets out how the programme is directed and controlled: who decides what, the boards and their roles, delegated authority and tolerances, reporting, assurance and stage gates.",
            "Agree it during programme definition and review it at each tranche boundary.",
        ],
        sections=[
            ("Governance Principles", [G("State the principles the programme will follow, for example clear accountability, decisions at the lowest sensible level, transparency, and benefits before outputs.")]),
            ("Governance Structure", [
                G("Insert an organisation chart showing the sponsoring group, programme board, SRO, programme manager, business change managers, programme office and projects."),
                T(["Body / role", "Purpose", "Chair / holder", "Frequency"], first_col=["Sponsoring group", "Programme board", "Senior Responsible Owner", "Programme manager", "Business change manager(s)", "Programme office", "Design authority", "Project boards"]),
            ]),
            ("Roles and Responsibilities", [T(["Role", "Accountabilities", "Name"], first_col=["Senior Responsible Owner", "Programme manager", "Business change manager", "Programme office lead", "Project executives"])]),
            ("Decision Rights", [
                G("Who can decide what. Use RACI or A (approve), R (recommend), C (consulted), I (informed)."),
                T(["Decision", "Sponsoring group", "Programme board", "SRO", "Programme manager", "Project board"], first_col=["Approve programme business case", "Start or stop a tranche", "Start a new project", "Change programme scope", "Release contingency", "Approve project exceptions"]),
            ]),
            ("Tolerances and Escalation", [
                T(["Dimension", "Programme manager tolerance", "Programme board tolerance", "Escalate to"], first_col=["Cost", "Time", "Scope", "Benefits", "Risk"]),
            ]),
            ("Reporting", [T(["Report", "Produced by", "Audience", "Frequency"], first_col=["Programme highlight report", "Benefits report", "Risk and issue summary", "Financial report", "Tranche end report"])]),
            ("Assurance", [
                G("Describe the assurance approach: first, second and third line reviews, gate reviews and who carries them out."),
                T(["Review", "When", "Carried out by", "Reports to"], rows=4),
            ]),
            ("Stage Gates", [T(["Gate", "Timing", "Criteria", "Decision maker"], first_col=["Programme definition approval", "Tranche 1 end", "Tranche 2 end", "Programme closure"])]),
            ("Key Governance Documents", [T(["Document", "Owner", "Review frequency"], first_col=["Programme mandate and brief", "Business case", "Blueprint", "Programme plan", "Benefits realisation plan", "Risk and issue strategy", "Stakeholder engagement strategy"])]),
            ("Approval", [SIGN("Senior Responsible Owner", "Programme Manager")]),
        ],
    )
    d["programme_board_tor.docx"] = dict(
        title="Programme Board Terms of Reference",
        subtitle="<Programme name>",
        about=[
            "These Terms of Reference set out the purpose, membership, authority and ways of working of the programme board.",
            "Agree them at the first board meeting and review them at least annually or at each tranche boundary.",
        ],
        sections=[
            ("Purpose", [G("For example: to direct the programme on behalf of the sponsoring group, ensure it remains aligned to strategy and delivers its benefits, and make decisions outside the programme manager's authority.")]),
            ("Membership", [T(["Role", "Name", "Responsibilities on the board"], first_col=["Chair: Senior Responsible Owner", "Programme manager", "Business change manager(s)", "Senior user representative(s)", "Senior supplier representative(s)", "Finance representative", "Programme office (secretariat)"])]),
            ("Responsibilities", [L(
                "Approve the programme plan, blueprint and benefits realisation plan",
                "Approve the start and end of each tranche",
                "Monitor progress, risks, issues and benefits",
                "Resolve escalated issues and approve changes outside programme manager tolerance",
                "Make sure resources are available to the programme",
                "Commission assurance reviews and act on their findings",
            )]),
            ("Authority and Tolerances", [
                G("State what the board may decide, and what must go to the sponsoring group or investment committee."),
                KV("Financial authority", "Scope authority", "Schedule authority", "Escalation route"),
            ]),
            ("Meetings", [KV("Frequency", "Duration", "Quorum", "Location / platform", "Papers issued", "Minutes issued")]),
            ("Standing Agenda", [N(
                "Apologies and declarations of interest",
                "Minutes and actions from the previous meeting",
                "Programme highlight report and overall status",
                "Benefits update",
                "Key risks and issues",
                "Decisions required",
                "Change requests",
                "Any other business",
            )]),
            ("Inputs and Outputs", [T(["Inputs to the board", "Outputs from the board"], first_col=[["Highlight report", "Decisions and approvals"], ["Risk and issue summary", "Actions"], ["Benefits report", "Minutes"], ["Change requests", "Direction to the programme manager"]])]),
            ("Conduct", [L(
                "Members attend in person or send a briefed deputy with authority to decide",
                "Papers are read before the meeting",
                "Decisions are recorded in the decision log",
                "Members declare any conflicts of interest",
            )]),
            ("Review", [KV("Date agreed", "Next review date")]),
            ("Approval", [SIGN("Senior Responsible Owner")]),
        ],
    )
    d["engagement_strategy.docx"] = dict(
        title="Stakeholder Engagement Strategy",
        subtitle="<Programme or project name>",
        about=[
            "The Stakeholder Engagement Strategy sets out how the programme will identify, analyse and engage the people who affect or are affected by it, so they understand the change, support it and are ready for it.",
            "Use it with the Programme Stakeholder Map workbook. Review it at each tranche boundary and whenever the stakeholder landscape changes.",
        ],
        sections=[
            ("Objectives", [G("What should engagement achieve? For example: secure senior sponsorship, build a coalition for change, reduce resistance, prepare users."), T(["#", "Objective", "Measure"], first_col=["1", "2", "3"])]),
            ("Principles", [G("For example: engage early, be honest about impacts, listen as well as tell, tailor messages to each audience.")]),
            ("Stakeholder Groups", [T(["Group", "Interest in the programme", "Influence", "Impact on them", "Current position"], rows=6)]),
            ("Engagement Approach", [
                T(["Approach", "Applies to", "Methods"], first_col=["Manage closely (high influence, high interest)", "Keep satisfied (high influence, lower interest)", "Keep informed (lower influence, high interest)", "Monitor (lower influence, lower interest)"]),
            ]),
            ("Engagement Plan", [
                G("The detailed plan is kept in the Programme Stakeholder Map workbook. Summarise the main activities here."),
                T(["Stakeholder / group", "Current", "Target", "Activities", "Owner", "When"], rows=6),
            ]),
            ("Key Messages", [T(["Audience", "Message", "Messenger"], rows=4)]),
            ("Managing Resistance", [G("How will concerns be heard and addressed? Who handles escalations? How will you tell the difference between resistance and legitimate objections?")]),
            ("Roles", [T(["Role", "Engagement responsibilities", "Name"], first_col=["Senior Responsible Owner", "Programme manager", "Business change managers", "Communications lead", "Change champions"])]),
            ("Measuring Engagement", [T(["Measure", "Method", "Target", "Frequency"], rows=3)]),
            ("Approval", [SIGN("Senior Responsible Owner", "Programme Manager")]),
        ],
    )
    return d
