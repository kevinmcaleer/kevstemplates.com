---
layout: behavioural
title: "Behavioural Diagnosis Canvas — Interactive"
name: "Behavioural Diagnosis Canvas — Interactive"
permalink: /behavioural-change/diagnosis-tool/
section: "Diagnose"
order: 3
kind: "tool"
use_when: "You want to work the canvas through on screen and get a prioritised set of next steps, a Word document and an Obsidian note out of the other end"
toolkit: "Behavioural Change Toolkit"
---
Work through the [Behavioural Diagnosis Canvas](/behavioural-change/behavioural-diagnosis-canvas/) on screen. When you generate the diagnosis it reads your COM-B scores, names your primary barrier, and tells you which kinds of intervention can actually work against it — then gives you an ordered set of next steps into the rest of the toolkit.

Everything stays in your browser. Nothing is uploaded, and your answers are saved to this device as you type.

<div id="bct-tool">
<div class="bct-toolbar">
<button type="button" class="btn btn-sm btn-outline-secondary" id="bct-clear">Clear canvas</button>
<span id="bct-saved" class="bct-saved" aria-live="polite"></span>
</div>
<section class="bct-tool-section">
<h2>1 · The change, in one sentence</h2>
<div class="form-row">
<div class="form-group col-md-6"><label for="f-changing">We are changing…</label><input type="text" class="form-control" id="f-changing" data-f="changing" placeholder="the way field engineers close jobs"></div>
<div class="form-group col-md-6"><label for="f-sothat">…so that…</label><input type="text" class="form-control" id="f-sothat" data-f="so_that" placeholder="parts are reordered before the van is restocked"></div>
</div>
<div class="form-row">
<div class="form-group col-md-4"><label for="f-deadline">Deadline / go-live</label><input type="text" class="form-control" id="f-deadline" data-f="deadline" placeholder="March 2027"></div>
<div class="form-group col-md-4"><label for="f-sponsor">Sponsor</label><input type="text" class="form-control" id="f-sponsor" data-f="sponsor" placeholder="Director of Field Operations"></div>
<div class="form-group col-md-4"><label for="f-role">My role</label><input type="text" class="form-control" id="f-role" data-f="role" placeholder="Change lead"></div>
</div>
</section>
<section class="bct-tool-section">
<h2>2 · What does success actually look like?</h2>
<p class="bct-help">Not the milestone. What is observably different on an ordinary Tuesday? Six months from now, if this has worked, someone walking the floor would see:</p>
<div class="form-group"><input type="text" class="form-control" data-f="see1" placeholder="Engineers scanning parts at the van door before they drive off"></div>
<div class="form-group"><input type="text" class="form-control" data-f="see2" placeholder="A second thing they would see"></div>
<div class="form-group"><input type="text" class="form-control" data-f="see3" placeholder="A third thing they would see"></div>
<div class="form-group"><label for="f-stop">And they would <strong>stop</strong> seeing</label><input type="text" class="form-control" id="f-stop" data-f="stop" placeholder="Paper job sheets in the cab"></div>
</section>
<section class="bct-tool-section">
<h2>3 · Who has to do something differently?</h2>
<p class="bct-help">Include leaders as a group. They almost always have to change too, and it is almost always left off this table.</p>
<div class="table-responsive">
<table class="table table-sm bct-grid">
<thead><tr><th>Group</th><th>Roughly how many</th><th>What they do <strong>now</strong></th><th>What they must do <strong>instead</strong></th><th>Priority</th></tr></thead>
<tbody id="bct-groups">
<tr><td><input type="text" class="form-control form-control-sm" data-col="group"></td><td><input type="text" class="form-control form-control-sm" data-col="count"></td><td><input type="text" class="form-control form-control-sm" data-col="now"></td><td><input type="text" class="form-control form-control-sm" data-col="instead"></td><td><select class="form-control form-control-sm" data-col="priority"><option value=""></option><option>High</option><option>Medium</option><option>Low</option></select></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="group"></td><td><input type="text" class="form-control form-control-sm" data-col="count"></td><td><input type="text" class="form-control form-control-sm" data-col="now"></td><td><input type="text" class="form-control form-control-sm" data-col="instead"></td><td><select class="form-control form-control-sm" data-col="priority"><option value=""></option><option>High</option><option>Medium</option><option>Low</option></select></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="group"></td><td><input type="text" class="form-control form-control-sm" data-col="count"></td><td><input type="text" class="form-control form-control-sm" data-col="now"></td><td><input type="text" class="form-control form-control-sm" data-col="instead"></td><td><select class="form-control form-control-sm" data-col="priority"><option value=""></option><option>High</option><option>Medium</option><option>Low</option></select></td></tr>
</tbody>
</table>
</div>
<button type="button" class="btn btn-sm btn-outline-secondary" data-add-row="bct-groups">Add a group</button>
</section>
<section class="bct-tool-section">
<h2>4 · The vital few behaviours</h2>
<p class="bct-help">Maximum five. Ruthlessly. Each must pass the <strong>film test</strong>: could you film someone doing it and know whether they did it?</p>
<div class="table-responsive">
<table class="table table-sm bct-grid">
<thead><tr><th>Behaviour</th><th>Who</th><th>When / trigger</th><th>Currently happening?</th></tr></thead>
<tbody id="bct-behaviours">
<tr><td><input type="text" class="form-control form-control-sm" data-col="behaviour"></td><td><input type="text" class="form-control form-control-sm" data-col="who"></td><td><input type="text" class="form-control form-control-sm" data-col="trigger"></td><td><select class="form-control form-control-sm" data-col="current"><option value=""></option><option>Never</option><option>Sometimes</option><option>Often</option></select></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="behaviour"></td><td><input type="text" class="form-control form-control-sm" data-col="who"></td><td><input type="text" class="form-control form-control-sm" data-col="trigger"></td><td><select class="form-control form-control-sm" data-col="current"><option value=""></option><option>Never</option><option>Sometimes</option><option>Often</option></select></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="behaviour"></td><td><input type="text" class="form-control form-control-sm" data-col="who"></td><td><input type="text" class="form-control form-control-sm" data-col="trigger"></td><td><select class="form-control form-control-sm" data-col="current"><option value=""></option><option>Never</option><option>Sometimes</option><option>Often</option></select></td></tr>
</tbody>
</table>
</div>
<button type="button" class="btn btn-sm btn-outline-secondary" data-add-row="bct-behaviours">Add a behaviour</button>
</section>
<section class="bct-tool-section">
<h2>5 · COM-B barrier scan</h2>
<p class="bct-help">For your top behaviour. Score each 1 (total blocker) to 5 (no issue). The lowest score is your primary barrier and drives everything below — see <a href="/behavioural-change/com-b-and-the-behaviour-change-wheel/">COM-B and the Behaviour Change Wheel</a>.</p>
<div class="table-responsive">
<table class="table table-sm bct-grid">
<thead><tr><th>Component</th><th class="bct-narrow">Score</th><th>Evidence — how do I actually know?</th></tr></thead>
<tbody>
<tr><td>Physical Capability</td><td><select class="form-control form-control-sm" data-comb-score="phys_cap"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><input type="text" class="form-control form-control-sm" data-comb-evidence="phys_cap"></td></tr>
<tr><td>Psychological Capability</td><td><select class="form-control form-control-sm" data-comb-score="psych_cap"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><input type="text" class="form-control form-control-sm" data-comb-evidence="psych_cap"></td></tr>
<tr><td>Physical Opportunity</td><td><select class="form-control form-control-sm" data-comb-score="phys_opp"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><input type="text" class="form-control form-control-sm" data-comb-evidence="phys_opp"></td></tr>
<tr><td>Social Opportunity</td><td><select class="form-control form-control-sm" data-comb-score="soc_opp"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><input type="text" class="form-control form-control-sm" data-comb-evidence="soc_opp"></td></tr>
<tr><td>Reflective Motivation</td><td><select class="form-control form-control-sm" data-comb-score="refl_mot"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><input type="text" class="form-control form-control-sm" data-comb-evidence="refl_mot"></td></tr>
<tr><td>Automatic Motivation</td><td><select class="form-control form-control-sm" data-comb-score="auto_mot"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td><td><input type="text" class="form-control form-control-sm" data-comb-evidence="auto_mot"></td></tr>
</tbody>
</table>
</div>
<p class="bct-help bct-help-warn">The evidence column is the point. If your evidence is “we assume” or “the steering group thinks”, you have an opinion, not a diagnosis — and the generated plan will tell you so.</p>
</section>
<section class="bct-tool-section">
<h2>6 · Bright spots</h2>
<p class="bct-help">Where is this behaviour <em>already</em> happening, even partially? Who, and what is different about their situation?</p>
<div class="form-group"><input type="text" class="form-control" data-f="bright_spot" placeholder="The Leeds depot has done this since 2024"></div>
<div class="form-group"><label for="f-brightcopy">What can we copy?</label><input type="text" class="form-control" id="f-brightcopy" data-f="bright_copy"></div>
</section>
<section class="bct-tool-section">
<h2>7 · What is genuinely in it for them?</h2>
<div class="form-group"><label for="f-borg">For the organisation</label><input type="text" class="form-control" id="f-borg" data-f="benefit_org"></div>
<div class="form-group"><label for="f-bind">For the individual doing the behaviour</label><input type="text" class="form-control" id="f-bind" data-f="benefit_individual"></div>
<div class="form-group"><label for="f-bcost">What it costs them (time, effort, status, autonomy, comfort)</label><input type="text" class="form-control" id="f-bcost" data-f="benefit_cost"></div>
</section>
<section class="bct-tool-section">
<h2>8 · The honest risks</h2>
<div class="table-responsive">
<table class="table table-sm bct-grid">
<thead><tr><th>Risk</th><th class="bct-narrow">Likelihood</th><th class="bct-narrow">Impact</th><th>What I would do</th></tr></thead>
<tbody id="bct-risks">
<tr><td><input type="text" class="form-control form-control-sm" data-col="risk" value="Sponsor goes quiet"></td><td><select class="form-control form-control-sm" data-col="likelihood"><option value=""></option><option>Low</option><option>Medium</option><option>High</option></select></td><td><select class="form-control form-control-sm" data-col="impact"><option value=""></option><option>Low</option><option>Medium</option><option>High</option></select></td><td><input type="text" class="form-control form-control-sm" data-col="action" value="Sponsor Briefing Pack"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="risk" value="Change saturation"></td><td><select class="form-control form-control-sm" data-col="likelihood"><option value=""></option><option>Low</option><option>Medium</option><option>High</option></select></td><td><select class="form-control form-control-sm" data-col="impact"><option value=""></option><option>Low</option><option>Medium</option><option>High</option></select></td><td><input type="text" class="form-control form-control-sm" data-col="action" value="Change Readiness Assessment"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="risk" value="Middle managers do not cascade"></td><td><select class="form-control form-control-sm" data-col="likelihood"><option value=""></option><option>Low</option><option>Medium</option><option>High</option></select></td><td><select class="form-control form-control-sm" data-col="impact"><option value=""></option><option>Low</option><option>Medium</option><option>High</option></select></td><td><input type="text" class="form-control form-control-sm" data-col="action" value="Manager Conversation Guide"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="risk" value="Design is genuinely worse for users"></td><td><select class="form-control form-control-sm" data-col="likelihood"><option value=""></option><option>Low</option><option>Medium</option><option>High</option></select></td><td><select class="form-control form-control-sm" data-col="impact"><option value=""></option><option>Low</option><option>Medium</option><option>High</option></select></td><td><input type="text" class="form-control form-control-sm" data-col="action" value="Resistance Decoder"></td></tr>
</tbody>
</table>
</div>
<button type="button" class="btn btn-sm btn-outline-secondary" data-add-row="bct-risks">Add a risk</button>
</section>
<section class="bct-tool-section">
<h2>9 · What I do not know yet</h2>
<p class="bct-help">Bring this section to your sponsor. Naming your uncertainties builds far more credibility than a confident plan built on assumptions.</p>
<div class="form-group"><input type="text" class="form-control" data-f="unknown1" placeholder="1."></div>
<div class="form-group"><input type="text" class="form-control" data-f="unknown2" placeholder="2."></div>
<div class="form-group"><input type="text" class="form-control" data-f="unknown3" placeholder="3."></div>
<div class="form-group"><label for="f-unkhow">How I will find out, by when</label><input type="text" class="form-control" id="f-unkhow" data-f="unknown_how"></div>
</section>
<div class="bct-generate-bar">
<button type="button" class="btn btn-primary btn-lg" id="bct-generate">Generate my diagnosis and next steps</button>
</div>
<div id="bct-output" class="bct-output" hidden></div>
<div id="bct-exports" class="bct-exports" hidden>
<h4>Take it with you</h4>
<div class="bct-export-buttons">
<button type="button" class="btn btn-outline-primary" id="bct-word">Download as Word</button>
<button type="button" class="btn btn-outline-primary" id="bct-markdown">Download as Markdown</button>
<button type="button" class="btn btn-outline-secondary" id="bct-print">Print / save as PDF</button>
<button type="button" class="btn btn-outline-secondary" id="bct-json">Save a copy (JSON)</button>
<label class="btn btn-outline-secondary mb-0" for="bct-import">Load a saved copy<input type="file" id="bct-import" accept="application/json,.json" hidden></label>
</div>
<p class="bct-help">The Markdown export uses <code>[[wiki links]]</code>, so it drops straight into the <a href="/downloads/behavioural-change-toolkit.zip">Obsidian vault</a> alongside the other notes.</p>
</div>
</div>

<script src="/assets/js/diagnosis-tool.js"></script>

---

→ Next: [Target Behaviour Definition](/behavioural-change/target-behaviour-definition/) · [Barrier Analysis — COM-B Interview Guide](/behavioural-change/barrier-analysis-com-b-interview-guide/) · [Change on a Page](/behavioural-change/change-on-a-page/)
