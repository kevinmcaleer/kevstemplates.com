---
layout: behavioural
title: "Change Readiness Assessment — Interactive"
name: "Change Readiness Assessment — Interactive"
permalink: /behavioural-change/readiness-tool/
section: "Diagnose"
order: 3
kind: "tool"
use_when: "You need a defensible number to put in front of a leader who has already picked the date"
toolkit: "Behavioural Change Toolkit"
---
Score the [Change Readiness Assessment](/behavioural-change/change-readiness-assessment/) on screen. It does the weighting for you, applies the stop signals, and — more usefully — tells you how to present the result, because leading with the total invites an argument about the instrument rather than the substance.

A low score is not a reason not to proceed. It is a list of what to fix first, and a defensible piece of evidence when you need to tell a leader the date is wrong.

Everything stays in your browser. Nothing is uploaded, and your answers are saved to this device as you type.

{% include bct_tool_nav.html %}

<div id="crt-tool">
<div class="bct-toolbar">
<span class="bct-toolbar-note">Saves to this device as you type</span>
<button type="button" class="btn btn-sm btn-primary" id="crt-save">Save progress</button>
<button type="button" class="btn btn-sm btn-outline-secondary" id="crt-json">Download a copy</button>
<label class="btn btn-sm btn-outline-secondary mb-0" for="crt-import">Load a saved copy<input type="file" id="crt-import" accept="application/json,.json" hidden></label>
<button type="button" class="btn btn-sm btn-outline-secondary" id="crt-clear">Clear form</button>
<span data-saved class="bct-saved" aria-live="polite"></span>
</div>
<section class="bct-tool-section">
<h2>The basics</h2>
<div class="form-row">
<div class="form-group col-md-4"><label for="r-change">Change name</label><input type="text" class="form-control" id="r-change" data-f="change_name"></div>
<div class="form-group col-md-4"><label for="r-assessor">Assessed by</label><input type="text" class="form-control" id="r-assessor" data-f="assessor"></div>
<div class="form-group col-md-4"><label for="r-date">Date</label><input type="text" class="form-control" id="r-date" data-f="date"></div>
</div>
<p class="bct-help">Score each statement 1 (not at all) to 5 (fully true). Score honestly — the value is in the sections you score badly.</p>
</section>
<section class="bct-tool-section">
<h2>A &middot; Sponsorship <span class="bct-mins">weight &times;3</span></h2>
<p class="bct-help">Weighted heaviest because active, visible sponsorship is repeatedly identified as the single largest contributor to change success. If A is under 15 weighted, fix this before anything else.</p>
<div class="table-responsive"><table class="table table-sm bct-grid">
<thead><tr><th class="bct-tiny">#</th><th>Statement</th><th class="bct-narrow">Score</th></tr></thead><tbody>
<tr><td>A1</td><td data-statement="a1">There is one named senior sponsor, not a committee</td><td><select class="form-control form-control-sm" data-score="a1" aria-label="Score for A1"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td>A2</td><td data-statement="a2">The sponsor can explain the change in their own words, without notes</td><td><select class="form-control form-control-sm" data-score="a2" aria-label="Score for A2"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td>A3</td><td data-statement="a3">The sponsor has done something visible about it in the last month</td><td><select class="form-control form-control-sm" data-score="a3" aria-label="Score for A3"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td>A4</td><td data-statement="a4">The sponsor's peers are publicly aligned — no visible dissent at that level</td><td><select class="form-control form-control-sm" data-score="a4" aria-label="Score for A4"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td>A5</td><td data-statement="a5">The sponsor will still be in post in 12 months</td><td><select class="form-control form-control-sm" data-score="a5" aria-label="Score for A5"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
</tbody></table></div>
</section>
<section class="bct-tool-section">
<h2>B &middot; Clarity</h2>
<div class="table-responsive"><table class="table table-sm bct-grid">
<thead><tr><th class="bct-tiny">#</th><th>Statement</th><th class="bct-narrow">Score</th></tr></thead><tbody>
<tr><td>B1</td><td data-statement="b1">We can name the specific behaviours that must change</td><td><select class="form-control form-control-sm" data-score="b1" aria-label="Score for B1"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td>B2</td><td data-statement="b2">We know who has to change them, by role</td><td><select class="form-control form-control-sm" data-score="b2" aria-label="Score for B2"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td>B3</td><td data-statement="b3">We have evidence — not assumption — of what's blocking them</td><td><select class="form-control form-control-sm" data-score="b3" aria-label="Score for B3"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td>B4</td><td data-statement="b4">We know what people will <strong>stop</strong> doing to make room</td><td><select class="form-control form-control-sm" data-score="b4" aria-label="Score for B4"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td>B5</td><td data-statement="b5">We can say what success looks like without using a milestone</td><td><select class="form-control form-control-sm" data-score="b5" aria-label="Score for B5"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
</tbody></table></div>
</section>
<section class="bct-tool-section">
<h2>C &middot; Capacity and saturation</h2>
<p class="bct-help">If C is under 12, the most valuable advice you can give a senior leader is sequence or stop something.</p>
<div class="table-responsive"><table class="table table-sm bct-grid">
<thead><tr><th class="bct-tiny">#</th><th>Statement</th><th class="bct-narrow">Score</th></tr></thead><tbody>
<tr><td>C1</td><td data-statement="c1">The affected teams are not already absorbing a major change</td><td><select class="form-control form-control-sm" data-score="c1" aria-label="Score for C1"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td>C2</td><td data-statement="c2">Managers have time to lead this, not just forward emails</td><td><select class="form-control form-control-sm" data-score="c2" aria-label="Score for C2"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td>C3</td><td data-statement="c3">There is resource for the sustain phase, not just go-live</td><td><select class="form-control form-control-sm" data-score="c3" aria-label="Score for C3"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td>C4</td><td data-statement="c4">Nothing significant lands on these teams in the next quarter</td><td><select class="form-control form-control-sm" data-score="c4" aria-label="Score for C4"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td>C5</td><td data-statement="c5">We know how many other initiatives are live for these people</td><td><select class="form-control form-control-sm" data-score="c5" aria-label="Score for C5"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
</tbody></table></div>
</section>
<section class="bct-tool-section">
<h2>D &middot; Trust and history</h2>
<p class="bct-help">Low D is the hardest to fix and the most often ignored. If it is low, acknowledge the history out loud, early.</p>
<div class="table-responsive"><table class="table table-sm bct-grid">
<thead><tr><th class="bct-tiny">#</th><th>Statement</th><th class="bct-narrow">Score</th></tr></thead><tbody>
<tr><td>D1</td><td data-statement="d1">The last major change here was seen as successful by the people affected</td><td><select class="form-control form-control-sm" data-score="d1" aria-label="Score for D1"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td>D2</td><td data-statement="d2">Commitments made during previous changes were kept</td><td><select class="form-control form-control-sm" data-score="d2" aria-label="Score for D2"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td>D3</td><td data-statement="d3">People believe they can raise concerns without cost</td><td><select class="form-control form-control-sm" data-score="d3" aria-label="Score for D3"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td>D4</td><td data-statement="d4">This isn't a rebrand of something that was tried before and failed</td><td><select class="form-control form-control-sm" data-score="d4" aria-label="Score for D4"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td>D5</td><td data-statement="d5">The reason for the change is credible, not obviously a cover story</td><td><select class="form-control form-control-sm" data-score="d5" aria-label="Score for D5"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
</tbody></table></div>
</section>
<section class="bct-tool-section">
<h2>E &middot; Design quality</h2>
<p class="bct-help">If E1 or E4 is 1–2, you have a design problem masquerading as a change problem. Say this before launch.</p>
<div class="table-responsive"><table class="table table-sm bct-grid">
<thead><tr><th class="bct-tiny">#</th><th>Statement</th><th class="bct-narrow">Score</th></tr></thead><tbody>
<tr><td>E1</td><td data-statement="e1">The new way is genuinely better <em>for the person doing it</em>, not just for the org</td><td><select class="form-control form-control-sm" data-score="e1" aria-label="Score for E1"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td>E2</td><td data-statement="e2">People who do the work were involved in designing it</td><td><select class="form-control form-control-sm" data-score="e2" aria-label="Score for E2"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td>E3</td><td data-statement="e3">It has been tested under realistic pressure, not just demoed</td><td><select class="form-control form-control-sm" data-score="e3" aria-label="Score for E3"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td>E4</td><td data-statement="e4">The new way is easier than the old way at the point of use</td><td><select class="form-control form-control-sm" data-score="e4" aria-label="Score for E4"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td>E5</td><td data-statement="e5">We can make the new way the default</td><td><select class="form-control form-control-sm" data-score="e5" aria-label="Score for E5"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
</tbody></table></div>
</section>
<section class="bct-tool-section">
<h2>Notes and evidence</h2>
<div class="form-group"><label for="r-evidence">Anything you would want to justify a score with</label><input type="text" class="form-control" id="r-evidence" data-f="evidence"></div>
</section>
<div class="bct-generate-bar">
<button type="button" class="btn btn-primary btn-lg" id="crt-generate">Score my readiness</button>
</div>
<div id="crt-output" class="bct-output" hidden></div>
<div id="crt-exports" class="bct-exports" hidden>
<h4>Take it with you</h4>
<div class="bct-export-buttons">
<button type="button" class="btn btn-outline-primary" id="crt-word">Download as Word</button>
<button type="button" class="btn btn-outline-primary" id="crt-markdown">Download as Markdown</button>
<button type="button" class="btn btn-outline-secondary" id="crt-print">Print / save as PDF</button>
</div>
<p class="bct-help">Re-run this after your fixes and keep both copies — showing the movement is far more persuasive than a single score.</p>
</div>
</div>

<script src="/assets/js/bct-tool.js"></script>
<script src="/assets/js/readiness-tool.js"></script>

---

→ Next: [Sponsor Briefing Pack](/behavioural-change/sponsor-briefing-tool/) · [Challenging Upward — Scripts](/behavioural-change/challenging-upward-scripts/) · [Force Field Analysis](/behavioural-change/force-field-analysis/)
