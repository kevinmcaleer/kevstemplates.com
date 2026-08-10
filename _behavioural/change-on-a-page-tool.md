---
layout: behavioural
title: "Change on a Page — Interactive"
name: "Change on a Page — Interactive"
permalink: /behavioural-change/change-on-a-page-tool/
section: "Plan"
order: 4
kind: "tool"
use_when: "You need the one-pager you will take to every meeting, and you want it checked before you circulate it"
toolkit: "Behavioural Change Toolkit"
---
Build the [Change on a Page](/behavioural-change/change-on-a-page/) one-pager on screen. It checks the two tables people skip — what stops, and what you need decided — and tells you before you circulate it rather than after.

If you have already saved a [Behavioural Diagnosis Canvas](/behavioural-change/diagnosis-tool/), load it below and the behaviours, primary barrier, sponsor and risks carry straight across.

Everything stays in your browser. Nothing is uploaded, and your answers are saved to this device as you type.

<div id="cop-tool">
<div class="bct-toolbar">
<span class="bct-toolbar-note">Saves to this device as you type</span>
<label class="btn btn-sm btn-outline-primary mb-0" for="cop-import-diagnosis">Pre-fill from a saved diagnosis<input type="file" id="cop-import-diagnosis" accept="application/json,.json" hidden></label>
<button type="button" class="btn btn-sm btn-primary" id="cop-save">Save progress</button>
<button type="button" class="btn btn-sm btn-outline-secondary" id="cop-json">Download a copy</button>
<label class="btn btn-sm btn-outline-secondary mb-0" for="cop-import">Load a saved copy<input type="file" id="cop-import" accept="application/json,.json" hidden></label>
<button type="button" class="btn btn-sm btn-outline-secondary" id="cop-clear">Clear form</button>
<span data-saved class="bct-saved" aria-live="polite"></span>
</div>
<section class="bct-tool-section">
<h2>Heading</h2>
<div class="form-row">
<div class="form-group col-md-6"><label for="c-init">Initiative name</label><input type="text" class="form-control" id="c-init" data-f="initiative"></div>
<div class="form-group col-md-2"><label for="c-ver">Version</label><input type="text" class="form-control" id="c-ver" data-f="version" placeholder="v0.1"></div>
<div class="form-group col-md-4"><label for="c-date">Date</label><input type="text" class="form-control" id="c-date" data-f="date"></div>
</div>
<div class="form-row">
<div class="form-group col-md-6"><label for="c-owner">Owner</label><input type="text" class="form-control" id="c-owner" data-f="owner"></div>
<div class="form-group col-md-6"><label for="c-sponsor">Sponsor</label><input type="text" class="form-control" id="c-sponsor" data-f="sponsor"></div>
</div>
</section>
<section class="bct-tool-section">
<h2>Why</h2>
<div class="form-group"><label for="c-why">In one sentence a frontline person would repeat accurately</label><input type="text" class="form-control" id="c-why" data-f="why_sentence"></div>
<div class="form-group"><label for="c-whynot">What happens if we do not</label><input type="text" class="form-control" id="c-whynot" data-f="why_not"></div>
</section>
<section class="bct-tool-section">
<h2>What changes</h2>
<div class="table-responsive">
<table class="table table-sm bct-grid">
<thead><tr><th class="bct-narrow"></th><th>Today</th><th>From</th></tr></thead>
<tbody id="cop-changes">
<tr><td><input type="text" class="form-control form-control-sm" data-col="aspect" value="System" data-keep></td><td><input type="text" class="form-control form-control-sm" data-col="today"></td><td><input type="text" class="form-control form-control-sm" data-col="future"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="aspect" value="Process" data-keep></td><td><input type="text" class="form-control form-control-sm" data-col="today"></td><td><input type="text" class="form-control form-control-sm" data-col="future"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="aspect" value="Who decides" data-keep></td><td><input type="text" class="form-control form-control-sm" data-col="today"></td><td><input type="text" class="form-control form-control-sm" data-col="future"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="aspect" value="What gets measured" data-keep></td><td><input type="text" class="form-control form-control-sm" data-col="today"></td><td><input type="text" class="form-control form-control-sm" data-col="future"></td></tr>
</tbody>
</table>
</div>
<button type="button" class="btn btn-sm btn-outline-secondary" data-add-row="cop-changes">Add a row</button>
<div class="form-group mt-3"><label for="c-notchanging">What is NOT changing</label><input type="text" class="form-control" id="c-notchanging" data-f="not_changing"></div>
<p class="bct-hint">People overestimate scope. This line is free reassurance.</p>
</section>
<section class="bct-tool-section">
<h2>The vital few behaviours</h2>
<div class="table-responsive">
<table class="table table-sm bct-grid">
<thead><tr><th>Who</th><th>Does what, when</th><th>Instead of</th><th>Primary barrier</th></tr></thead>
<tbody id="cop-behaviours">
<tr><td><input type="text" class="form-control form-control-sm" data-col="who"></td><td><input type="text" class="form-control form-control-sm" data-col="does"></td><td><input type="text" class="form-control form-control-sm" data-col="instead"></td><td><input type="text" class="form-control form-control-sm" data-col="barrier"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="who"></td><td><input type="text" class="form-control form-control-sm" data-col="does"></td><td><input type="text" class="form-control form-control-sm" data-col="instead"></td><td><input type="text" class="form-control form-control-sm" data-col="barrier"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="who"></td><td><input type="text" class="form-control form-control-sm" data-col="does"></td><td><input type="text" class="form-control form-control-sm" data-col="instead"></td><td><input type="text" class="form-control form-control-sm" data-col="barrier"></td></tr>
</tbody>
</table>
</div>
<button type="button" class="btn btn-sm btn-outline-secondary" data-add-row="cop-behaviours">Add a behaviour</button>
</section>
<section class="bct-tool-section">
<h2>What we are doing about each barrier</h2>
<div class="table-responsive">
<table class="table table-sm bct-grid">
<thead><tr><th class="bct-narrow">Behaviour</th><th>Barrier (COM-B)</th><th>Intervention</th><th>Owner</th><th class="bct-narrow">By</th></tr></thead>
<tbody id="cop-interventions">
<tr><td><input type="text" class="form-control form-control-sm" data-col="behaviour" placeholder="B1"></td><td><input type="text" class="form-control form-control-sm" data-col="barrier"></td><td><input type="text" class="form-control form-control-sm" data-col="intervention"></td><td><input type="text" class="form-control form-control-sm" data-col="owner"></td><td><input type="text" class="form-control form-control-sm" data-col="by"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="behaviour" placeholder="B2"></td><td><input type="text" class="form-control form-control-sm" data-col="barrier"></td><td><input type="text" class="form-control form-control-sm" data-col="intervention"></td><td><input type="text" class="form-control form-control-sm" data-col="owner"></td><td><input type="text" class="form-control form-control-sm" data-col="by"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="behaviour" placeholder="B3"></td><td><input type="text" class="form-control form-control-sm" data-col="barrier"></td><td><input type="text" class="form-control form-control-sm" data-col="intervention"></td><td><input type="text" class="form-control form-control-sm" data-col="owner"></td><td><input type="text" class="form-control form-control-sm" data-col="by"></td></tr>
</tbody>
</table>
</div>
<button type="button" class="btn btn-sm btn-outline-secondary" data-add-row="cop-interventions">Add an intervention</button>
</section>
<section class="bct-tool-section">
<h2>What people stop doing</h2>
<p class="bct-help bct-help-warn">If this table is empty, the plan is not finished. Nothing gets added to a full day without something coming off.</p>
<div class="table-responsive">
<table class="table table-sm bct-grid">
<thead><tr><th>Stops</th><th>Owner of stopping it</th><th class="bct-narrow">Date</th></tr></thead>
<tbody id="cop-stops">
<tr><td><input type="text" class="form-control form-control-sm" data-col="stops"></td><td><input type="text" class="form-control form-control-sm" data-col="owner"></td><td><input type="text" class="form-control form-control-sm" data-col="date"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="stops"></td><td><input type="text" class="form-control form-control-sm" data-col="owner"></td><td><input type="text" class="form-control form-control-sm" data-col="date"></td></tr>
</tbody>
</table>
</div>
<button type="button" class="btn btn-sm btn-outline-secondary" data-add-row="cop-stops">Add something that stops</button>
</section>
<section class="bct-tool-section">
<h2>Who does what</h2>
<div class="table-responsive">
<table class="table table-sm bct-grid">
<thead><tr><th class="bct-narrow">Role</th><th>Name</th><th>Their commitments</th></tr></thead>
<tbody id="cop-roles">
<tr><td><input type="text" class="form-control form-control-sm" data-col="role" value="Sponsor" data-keep></td><td><input type="text" class="form-control form-control-sm" data-col="name"></td><td><input type="text" class="form-control form-control-sm" data-col="commitments"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="role" value="Change lead" data-keep></td><td><input type="text" class="form-control form-control-sm" data-col="name"></td><td><input type="text" class="form-control form-control-sm" data-col="commitments"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="role" value="Line managers" data-keep></td><td><input type="text" class="form-control form-control-sm" data-col="name"></td><td><input type="text" class="form-control form-control-sm" data-col="commitments"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="role" value="Champions" data-keep></td><td><input type="text" class="form-control form-control-sm" data-col="name"></td><td><input type="text" class="form-control form-control-sm" data-col="commitments"></td></tr>
</tbody>
</table>
</div>
</section>
<section class="bct-tool-section">
<h2>How we will know</h2>
<div class="table-responsive">
<table class="table table-sm bct-grid">
<thead><tr><th class="bct-narrow"></th><th>Metric</th><th class="bct-narrow">Baseline</th><th class="bct-narrow">Target</th><th class="bct-narrow">When</th><th>Source</th></tr></thead>
<tbody id="cop-metrics">
<tr><td><input type="text" class="form-control form-control-sm" data-col="type" value="Leading" data-keep></td><td><input type="text" class="form-control form-control-sm" data-col="metric"></td><td><input type="text" class="form-control form-control-sm" data-col="baseline"></td><td><input type="text" class="form-control form-control-sm" data-col="target"></td><td><input type="text" class="form-control form-control-sm" data-col="when"></td><td><input type="text" class="form-control form-control-sm" data-col="source"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="type" value="Leading" data-keep></td><td><input type="text" class="form-control form-control-sm" data-col="metric"></td><td><input type="text" class="form-control form-control-sm" data-col="baseline"></td><td><input type="text" class="form-control form-control-sm" data-col="target"></td><td><input type="text" class="form-control form-control-sm" data-col="when"></td><td><input type="text" class="form-control form-control-sm" data-col="source"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="type" value="Lagging" data-keep></td><td><input type="text" class="form-control form-control-sm" data-col="metric"></td><td><input type="text" class="form-control form-control-sm" data-col="baseline"></td><td><input type="text" class="form-control form-control-sm" data-col="target"></td><td><input type="text" class="form-control form-control-sm" data-col="when"></td><td><input type="text" class="form-control form-control-sm" data-col="source"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="type" value="Health" data-keep></td><td><input type="text" class="form-control form-control-sm" data-col="metric"></td><td><input type="text" class="form-control form-control-sm" data-col="baseline"></td><td><input type="text" class="form-control form-control-sm" data-col="target"></td><td><input type="text" class="form-control form-control-sm" data-col="when"></td><td><input type="text" class="form-control form-control-sm" data-col="source"></td></tr>
</tbody>
</table>
</div>
</section>
<section class="bct-tool-section">
<h2>Sequence</h2>
<div class="table-responsive">
<table class="table table-sm bct-grid">
<thead><tr><th class="bct-narrow">Wave</th><th>Who</th><th class="bct-narrow">Date</th><th>Gate to proceed</th></tr></thead>
<tbody id="cop-sequence">
<tr><td><input type="text" class="form-control form-control-sm" data-col="wave" value="Pilot" data-keep></td><td><input type="text" class="form-control form-control-sm" data-col="who"></td><td><input type="text" class="form-control form-control-sm" data-col="date"></td><td><input type="text" class="form-control form-control-sm" data-col="gate"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="wave" value="1" data-keep></td><td><input type="text" class="form-control form-control-sm" data-col="who"></td><td><input type="text" class="form-control form-control-sm" data-col="date"></td><td><input type="text" class="form-control form-control-sm" data-col="gate"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="wave" value="2" data-keep></td><td><input type="text" class="form-control form-control-sm" data-col="who"></td><td><input type="text" class="form-control form-control-sm" data-col="date"></td><td><input type="text" class="form-control form-control-sm" data-col="gate"></td></tr>
</tbody>
</table>
</div>
<button type="button" class="btn btn-sm btn-outline-secondary" data-add-row="cop-sequence">Add a wave</button>
</section>
<section class="bct-tool-section">
<h2>Top three risks</h2>
<div class="table-responsive">
<table class="table table-sm bct-grid">
<thead><tr><th>Risk</th><th>Mitigation</th><th>Owner</th></tr></thead>
<tbody id="cop-risks">
<tr><td><input type="text" class="form-control form-control-sm" data-col="risk"></td><td><input type="text" class="form-control form-control-sm" data-col="mitigation"></td><td><input type="text" class="form-control form-control-sm" data-col="owner"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="risk"></td><td><input type="text" class="form-control form-control-sm" data-col="mitigation"></td><td><input type="text" class="form-control form-control-sm" data-col="owner"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="risk"></td><td><input type="text" class="form-control form-control-sm" data-col="mitigation"></td><td><input type="text" class="form-control form-control-sm" data-col="owner"></td></tr>
</tbody>
</table>
</div>
<button type="button" class="btn btn-sm btn-outline-secondary" data-add-row="cop-risks">Add a risk</button>
</section>
<section class="bct-tool-section">
<h2>Decisions needed from leadership</h2>
<p class="bct-help bct-help-warn">The most important table on the page. It converts your document from a status report into a request — a page with no ask gets noted and filed.</p>
<div class="table-responsive">
<table class="table table-sm bct-grid">
<thead><tr><th>Decision</th><th class="bct-narrow">By when</th><th class="bct-narrow">Who decides</th><th>Consequence of delay</th></tr></thead>
<tbody id="cop-decisions">
<tr><td><input type="text" class="form-control form-control-sm" data-col="decision"></td><td><input type="text" class="form-control form-control-sm" data-col="by"></td><td><input type="text" class="form-control form-control-sm" data-col="who"></td><td><input type="text" class="form-control form-control-sm" data-col="consequence"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="decision"></td><td><input type="text" class="form-control form-control-sm" data-col="by"></td><td><input type="text" class="form-control form-control-sm" data-col="who"></td><td><input type="text" class="form-control form-control-sm" data-col="consequence"></td></tr>
</tbody>
</table>
</div>
<button type="button" class="btn btn-sm btn-outline-secondary" data-add-row="cop-decisions">Add a decision</button>
</section>
<section class="bct-tool-section">
<h2>Open questions</h2>
<div class="form-group"><input type="text" class="form-control" data-f="question1" placeholder="1."></div>
<div class="form-group"><input type="text" class="form-control" data-f="question2" placeholder="2."></div>
</section>
<div class="bct-generate-bar">
<button type="button" class="btn btn-primary btn-lg" id="cop-generate">Generate my one-pager</button>
</div>
<div id="cop-output" class="bct-output" hidden></div>
<div id="cop-exports" class="bct-exports" hidden>
<h4>Take it with you</h4>
<div class="bct-export-buttons">
<button type="button" class="btn btn-outline-primary" id="cop-word">Download as Word</button>
<button type="button" class="btn btn-outline-primary" id="cop-markdown">Download as Markdown</button>
<button type="button" class="btn btn-outline-secondary" id="cop-print">Print / save as PDF</button>
</div>
<p class="bct-help">Version it in the filename and keep the old versions. When someone says “that is not what we agreed”, you will want the history.</p>
</div>
</div>

<script src="/assets/js/bct-tool.js"></script>
<script src="/assets/js/change-on-a-page-tool.js"></script>

---

→ Next: [The One-Page Board Narrative](/behavioural-change/the-one-page-board-narrative/) · [Measurement Plan — Leading and Lagging](/behavioural-change/measurement-plan-leading-and-lagging/)
