---
layout: behavioural
title: "Force Field Analysis — Interactive"
name: "Force Field Analysis — Interactive"
permalink: /behavioural-change/force-field-tool/
section: "Diagnose"
order: 3
kind: "tool"
use_when: "You need to show a group why the change is stuck, and turn the restraints into a specific sponsor ask"
toolkit: "Behavioural Change Toolkit"
---
Work Lewin's [Force Field Analysis](/behavioural-change/force-field-analysis/) on screen. It totals both sides, tells you plainly when the change will not happen at current settings, and turns your strongest restraints into the sponsor ask — which is the part that makes this tool worth the twenty minutes.

<div class="bct-callout bct-tip" markdown="1">
**The one idea this is built on**

Removing a restraining force is usually cheaper and more effective than adding a driving force. Organisations instinctively add pressure — more comms, more targets, more escalation. Adding drivers to a system that is also restrained produces tension, stress and eventual snap-back.
</div>

Everything stays in your browser. Nothing is uploaded, and your answers are saved to this device as you type.

{% include bct_tool_nav.html %}

<div id="ff-tool">
<div class="bct-toolbar">
<span class="bct-toolbar-note">Saves to this device as you type</span>
<button type="button" class="btn btn-sm btn-primary" id="ff-save">Save progress</button>
<button type="button" class="btn btn-sm btn-outline-secondary" id="ff-json">Download a copy</button>
<label class="btn btn-sm btn-outline-secondary mb-0" for="ff-import">Load a saved copy<input type="file" id="ff-import" accept="application/json,.json" hidden></label>
<button type="button" class="btn btn-sm btn-outline-secondary" id="ff-clear">Clear form</button>
<span data-saved class="bct-saved" aria-live="polite"></span>
</div>
<section class="bct-tool-section">
<h2>What are we analysing?</h2>
<div class="form-group"><label for="ff-change">Behaviour or change being analysed</label><input type="text" class="form-control" id="ff-change" data-f="change_name" placeholder="Engineers closing jobs at the van rather than at the depot"></div>
</section>
<section class="bct-tool-section">
<h2>Driving forces <span class="bct-mins">pushing towards change</span></h2>
<div class="table-responsive">
<table class="table table-sm bct-grid">
<thead><tr><th>Force</th><th class="bct-narrow">Strength</th><th>Can we strengthen it? How?</th></tr></thead>
<tbody id="ff-driving">
<tr><td><input type="text" class="form-control form-control-sm" data-col="force"></td><td><select class="form-control form-control-sm" data-col="strength" aria-label="Strength"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><input type="text" class="form-control form-control-sm" data-col="strengthen"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="force"></td><td><select class="form-control form-control-sm" data-col="strength" aria-label="Strength"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><input type="text" class="form-control form-control-sm" data-col="strengthen"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="force"></td><td><select class="form-control form-control-sm" data-col="strength" aria-label="Strength"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><input type="text" class="form-control form-control-sm" data-col="strengthen"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="force"></td><td><select class="form-control form-control-sm" data-col="strength" aria-label="Strength"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><input type="text" class="form-control form-control-sm" data-col="strengthen"></td></tr>
</tbody>
</table>
</div>
<button type="button" class="btn btn-sm btn-outline-secondary" data-add-row="ff-driving">Add a driving force</button>
</section>
<section class="bct-tool-section">
<h2>Restraining forces <span class="bct-mins">holding the current state</span></h2>
<p class="bct-help">This is the side that matters. Groups find drivers easy and restraints uncomfortable — work this list hardest.</p>
<div class="bct-prompts">
<p class="bct-help">Common restraints in a tech, process and culture change. Click one to add it — groups usually recognise several immediately.</p>
<button type="button" class="btn btn-sm btn-outline-secondary bct-prompt" data-prompt="The new way takes longer at the point of use">The new way takes longer at the point of use</button>
<button type="button" class="btn btn-sm btn-outline-secondary bct-prompt" data-prompt="The old system still works and nobody turned it off">The old system still works and nobody turned it off</button>
<button type="button" class="btn btn-sm btn-outline-secondary bct-prompt" data-prompt="Reporting still requires the old format">Reporting still requires the old format</button>
<button type="button" class="btn btn-sm btn-outline-secondary bct-prompt" data-prompt="Middle managers weren't consulted and are quietly opting out">Middle managers weren't consulted and are quietly opting out</button>
<button type="button" class="btn btn-sm btn-outline-secondary bct-prompt" data-prompt="Targets and incentives still reward the old behaviour">Targets and incentives still reward the old behaviour</button>
<button type="button" class="btn btn-sm btn-outline-secondary bct-prompt" data-prompt="Nobody has removed anything from anyone's day">Nobody has removed anything from anyone's day</button>
<button type="button" class="btn btn-sm btn-outline-secondary bct-prompt" data-prompt="Two systems now hold the truth">Two systems now hold the truth</button>
<button type="button" class="btn btn-sm btn-outline-secondary bct-prompt" data-prompt="The people who were expert are now beginners, publicly">The people who were expert are now beginners, publicly</button>
<button type="button" class="btn btn-sm btn-outline-secondary bct-prompt" data-prompt="IT access, licences or permissions are incomplete">IT access, licences or permissions are incomplete</button>
<button type="button" class="btn btn-sm btn-outline-secondary bct-prompt" data-prompt="A previous similar initiative was abandoned and people are waiting it out">A previous similar initiative was abandoned and people are waiting it out</button>
<button type="button" class="btn btn-sm btn-outline-secondary bct-prompt" data-prompt="The people affected can't see any benefit to themselves">The people affected can't see any benefit to themselves</button>
<button type="button" class="btn btn-sm btn-outline-secondary bct-prompt" data-prompt="Senior leaders still ask for things the old way">Senior leaders still ask for things the old way</button>
</div>
<div class="table-responsive">
<table class="table table-sm bct-grid bct-wide">
<thead><tr><th>Force</th><th class="bct-narrow">Strength</th><th>What would have to happen to remove it</th><th>What it costs</th><th>Who owns the cause</th><th>Who decides</th><th class="bct-narrow">Asked by</th></tr></thead>
<tbody id="ff-restraining">
<tr><td><input type="text" class="form-control form-control-sm" data-col="force"></td><td><select class="form-control form-control-sm" data-col="strength" aria-label="Strength"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><input type="text" class="form-control form-control-sm" data-col="remove"></td><td><input type="text" class="form-control form-control-sm" data-col="cost"></td><td><input type="text" class="form-control form-control-sm" data-col="owner"></td><td><input type="text" class="form-control form-control-sm" data-col="decides"></td><td><input type="text" class="form-control form-control-sm" data-col="asked"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="force"></td><td><select class="form-control form-control-sm" data-col="strength" aria-label="Strength"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><input type="text" class="form-control form-control-sm" data-col="remove"></td><td><input type="text" class="form-control form-control-sm" data-col="cost"></td><td><input type="text" class="form-control form-control-sm" data-col="owner"></td><td><input type="text" class="form-control form-control-sm" data-col="decides"></td><td><input type="text" class="form-control form-control-sm" data-col="asked"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="force"></td><td><select class="form-control form-control-sm" data-col="strength" aria-label="Strength"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><input type="text" class="form-control form-control-sm" data-col="remove"></td><td><input type="text" class="form-control form-control-sm" data-col="cost"></td><td><input type="text" class="form-control form-control-sm" data-col="owner"></td><td><input type="text" class="form-control form-control-sm" data-col="decides"></td><td><input type="text" class="form-control form-control-sm" data-col="asked"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="force"></td><td><select class="form-control form-control-sm" data-col="strength" aria-label="Strength"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><input type="text" class="form-control form-control-sm" data-col="remove"></td><td><input type="text" class="form-control form-control-sm" data-col="cost"></td><td><input type="text" class="form-control form-control-sm" data-col="owner"></td><td><input type="text" class="form-control form-control-sm" data-col="decides"></td><td><input type="text" class="form-control form-control-sm" data-col="asked"></td></tr>
</tbody>
</table>
</div>
<button type="button" class="btn btn-sm btn-outline-secondary" data-add-row="ff-restraining">Add a restraining force</button>
<p class="bct-hint">The last three columns are what turn a restraint into something a sponsor can decide, rather than something you have merely noticed.</p>
</section>
<div class="bct-generate-bar">
<button type="button" class="btn btn-primary btn-lg" id="ff-generate">Weigh the forces</button>
</div>
<div id="ff-output" class="bct-output" hidden></div>
<div id="ff-exports" class="bct-exports" hidden>
<h4>Take it with you</h4>
<div class="bct-export-buttons">
<button type="button" class="btn btn-outline-primary" id="ff-word">Download as Word</button>
<button type="button" class="btn btn-outline-primary" id="ff-markdown">Download as Markdown</button>
<button type="button" class="btn btn-outline-secondary" id="ff-print">Print / save as PDF</button>
</div>
<p class="bct-help">Take the saved copy to the <a href="/behavioural-change/sponsor-briefing-tool/">Sponsor Briefing Pack</a> and it will pre-fill your strongest restraint as the first ask.</p>
</div>
</div>

<script src="/assets/js/bct-tool.js"></script>
<script src="/assets/js/force-field-tool.js"></script>

---

→ Next: [Resistance Decoder](/behavioural-change/resistance-decoder/) · [Intervention Design Worksheet](/behavioural-change/intervention-design-worksheet/) · [Sponsor Briefing Pack](/behavioural-change/sponsor-briefing-tool/)
