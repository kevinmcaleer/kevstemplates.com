---
layout: behavioural
title: "Diffusion — Who First? — Interactive"
name: "Diffusion — Who First? — Interactive"
permalink: /behavioural-change/diffusion-tool/
section: "Frameworks"
order: 2
kind: "tool"
use_when: "You are deciding who to roll out to first, and who to stop arguing with"
toolkit: "Behavioural Change Toolkit"
---
Rogers' [Diffusion of Innovations](/behavioural-change/diffusion-of-innovations/) answers the question every rollout faces: who first? Score your change against the five attributes, list the people others actually go to, and the tool ranks your Early Adopters and sequences the waves.

<div class="bct-callout bct-warning" markdown="1">
**The rule most rollouts break**

Do not start with the loudest sceptic. You spend disproportionate effort, usually fail, and hand them a public platform during the fragile early phase. The sceptic is far more movable when 60% of their peers have already moved and the argument has been settled without them.
</div>

{% include bct_tool_nav.html %}

<div id="dif-tool">
<div class="bct-toolbar">
<span class="bct-toolbar-note">Saves to this device as you type</span>
<button type="button" class="btn btn-sm btn-primary" id="dif-save">Save progress</button>
<button type="button" class="btn btn-sm btn-outline-secondary" id="dif-json">Download a copy</button>
<label class="btn btn-sm btn-outline-secondary mb-0" for="dif-import">Load a saved copy<input type="file" id="dif-import" accept="application/json,.json" hidden></label>
<button type="button" class="btn btn-sm btn-outline-secondary" id="dif-clear">Clear form</button>
<span data-saved class="bct-saved" aria-live="polite"></span>
</div>
<section class="bct-tool-section">
<h2>The rollout</h2>
<div class="form-row">
<div class="form-group col-md-6"><label for="dif-change">The change</label><input type="text" class="form-control" id="dif-change" data-f="change_name"></div>
<div class="form-group col-md-6"><label for="dif-target">Who are you planning to start with?</label><select class="form-control" id="dif-target" data-f="target_group"><option value="">Not decided</option><option value="innovators">Innovators (2.5%)</option><option value="early_adopters">Early Adopters (13.5%)</option><option value="early_majority">Early Majority (34%)</option><option value="late_majority">Late Majority (34%)</option><option value="laggards">Laggards (16%)</option></select></div>
</div>
<div class="form-row">
<div class="form-group col-md-6"><label for="dif-sceptic">Are you being pushed to win over the loudest sceptic first?</label><select class="form-control" id="dif-sceptic" data-f="start_sceptic"><option value="">Not answered</option><option>Yes</option><option>No</option></select></div>
<div class="form-group col-md-6"><label for="dif-right">If so — are they technically right about a design flaw?</label><select class="form-control" id="dif-right" data-f="sceptic_right"><option value="">Not answered</option><option>Yes</option><option>No</option></select></div>
</div>
<div class="form-row">
<div class="form-group col-md-6"><label for="dif-socio">Have you run the two-question sociogram?</label><select class="form-control" id="dif-socio" data-f="sociogram"><option value="">Not yet</option><option>Yes</option></select></div>
<div class="form-group col-md-6"><label for="dif-labels">How are your waves labelled?</label><input type="text" class="form-control" id="dif-labels" data-f="wave_labels" placeholder="North region, then South"></div>
</div>
</section>
<section class="bct-tool-section">
<h2>Will it spread?</h2>
<p class="bct-help">Rogers' five attributes. Score 1–5 — anything at 2 or below is a spread blocker you can design around before launch, usually more cheaply than any comms campaign.</p>
<div class="table-responsive">
<table class="table table-sm bct-grid">
<thead><tr><th>Attribute</th><th class="bct-narrow">Score</th></tr></thead>
<tbody>
<tr><td><strong>Relative advantage</strong><br><span class="bct-decode-probe">Is it visibly better for the user, not just the organisation?</span></td><td><select class="form-control form-control-sm" data-attr="advantage" aria-label="Relative advantage"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td><strong>Compatibility</strong><br><span class="bct-decode-probe">Does it fit existing values and ways of working?</span></td><td><select class="form-control form-control-sm" data-attr="compatibility" aria-label="Compatibility"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td><strong>Simplicity</strong><br><span class="bct-decode-probe">How easy is it to understand and use? (5 = simple)</span></td><td><select class="form-control form-control-sm" data-attr="complexity" aria-label="Simplicity"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td><strong>Trialability</strong><br><span class="bct-decode-probe">Can people try it without commitment or risk?</span></td><td><select class="form-control form-control-sm" data-attr="trialability" aria-label="Trialability"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td><strong>Observability</strong><br><span class="bct-decode-probe">Can others see the results?</span></td><td><select class="form-control form-control-sm" data-attr="observability" aria-label="Observability"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
</tbody>
</table>
</div>
</section>
<section class="bct-tool-section">
<h2>Who are your Early Adopters?</h2>
<p class="bct-help">Not the org chart. Tick the markers that genuinely apply — the tool ranks by how many each person carries, and three or more puts them in your network.</p>
<div class="table-responsive">
<table class="table table-sm bct-grid bct-cand">
<thead><tr><th>Person</th><th class="bct-tiny-col">Others ask them<br>before deciding</th><th class="bct-tiny-col">Respected for<br>competence</th><th class="bct-tiny-col">Already frustrated<br>with the current way</th><th class="bct-tiny-col">Connected<br>across teams</th><th class="bct-tiny-col">Credible to<br>the sceptics</th></tr></thead>
<tbody>
<tr><td><input type="text" class="form-control form-control-sm" data-cand-name="0" aria-label="Candidate 1"></td><td class="text-center"><input type="checkbox" data-cand="0-asked" aria-label="Others ask them before deciding"></td><td class="text-center"><input type="checkbox" data-cand="0-competence" aria-label="Respected for competence"></td><td class="text-center"><input type="checkbox" data-cand="0-frustrated" aria-label="Already frustrated with the current way"></td><td class="text-center"><input type="checkbox" data-cand="0-connected" aria-label="Connected across teams"></td><td class="text-center"><input type="checkbox" data-cand="0-credible" aria-label="Credible to the sceptics"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-cand-name="1" aria-label="Candidate 2"></td><td class="text-center"><input type="checkbox" data-cand="1-asked" aria-label="Others ask them before deciding"></td><td class="text-center"><input type="checkbox" data-cand="1-competence" aria-label="Respected for competence"></td><td class="text-center"><input type="checkbox" data-cand="1-frustrated" aria-label="Already frustrated with the current way"></td><td class="text-center"><input type="checkbox" data-cand="1-connected" aria-label="Connected across teams"></td><td class="text-center"><input type="checkbox" data-cand="1-credible" aria-label="Credible to the sceptics"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-cand-name="2" aria-label="Candidate 3"></td><td class="text-center"><input type="checkbox" data-cand="2-asked" aria-label="Others ask them before deciding"></td><td class="text-center"><input type="checkbox" data-cand="2-competence" aria-label="Respected for competence"></td><td class="text-center"><input type="checkbox" data-cand="2-frustrated" aria-label="Already frustrated with the current way"></td><td class="text-center"><input type="checkbox" data-cand="2-connected" aria-label="Connected across teams"></td><td class="text-center"><input type="checkbox" data-cand="2-credible" aria-label="Credible to the sceptics"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-cand-name="3" aria-label="Candidate 4"></td><td class="text-center"><input type="checkbox" data-cand="3-asked" aria-label="Others ask them before deciding"></td><td class="text-center"><input type="checkbox" data-cand="3-competence" aria-label="Respected for competence"></td><td class="text-center"><input type="checkbox" data-cand="3-frustrated" aria-label="Already frustrated with the current way"></td><td class="text-center"><input type="checkbox" data-cand="3-connected" aria-label="Connected across teams"></td><td class="text-center"><input type="checkbox" data-cand="3-credible" aria-label="Credible to the sceptics"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-cand-name="4" aria-label="Candidate 5"></td><td class="text-center"><input type="checkbox" data-cand="4-asked" aria-label="Others ask them before deciding"></td><td class="text-center"><input type="checkbox" data-cand="4-competence" aria-label="Respected for competence"></td><td class="text-center"><input type="checkbox" data-cand="4-frustrated" aria-label="Already frustrated with the current way"></td><td class="text-center"><input type="checkbox" data-cand="4-connected" aria-label="Connected across teams"></td><td class="text-center"><input type="checkbox" data-cand="4-credible" aria-label="Credible to the sceptics"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-cand-name="5" aria-label="Candidate 6"></td><td class="text-center"><input type="checkbox" data-cand="5-asked" aria-label="Others ask them before deciding"></td><td class="text-center"><input type="checkbox" data-cand="5-competence" aria-label="Respected for competence"></td><td class="text-center"><input type="checkbox" data-cand="5-frustrated" aria-label="Already frustrated with the current way"></td><td class="text-center"><input type="checkbox" data-cand="5-connected" aria-label="Connected across teams"></td><td class="text-center"><input type="checkbox" data-cand="5-credible" aria-label="Credible to the sceptics"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-cand-name="6" aria-label="Candidate 7"></td><td class="text-center"><input type="checkbox" data-cand="6-asked" aria-label="Others ask them before deciding"></td><td class="text-center"><input type="checkbox" data-cand="6-competence" aria-label="Respected for competence"></td><td class="text-center"><input type="checkbox" data-cand="6-frustrated" aria-label="Already frustrated with the current way"></td><td class="text-center"><input type="checkbox" data-cand="6-connected" aria-label="Connected across teams"></td><td class="text-center"><input type="checkbox" data-cand="6-credible" aria-label="Credible to the sceptics"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-cand-name="7" aria-label="Candidate 8"></td><td class="text-center"><input type="checkbox" data-cand="7-asked" aria-label="Others ask them before deciding"></td><td class="text-center"><input type="checkbox" data-cand="7-competence" aria-label="Respected for competence"></td><td class="text-center"><input type="checkbox" data-cand="7-frustrated" aria-label="Already frustrated with the current way"></td><td class="text-center"><input type="checkbox" data-cand="7-connected" aria-label="Connected across teams"></td><td class="text-center"><input type="checkbox" data-cand="7-credible" aria-label="Credible to the sceptics"></td></tr>
</tbody>
</table>
</div>
<p class="bct-hint">The two-question sociogram: ask 15 people who they go to when they are not sure how to do something, and whose opinion on this change they would take seriously. The top five to eight are frequently not who leadership expected.</p>
</section>
<div class="bct-generate-bar">
<button type="button" class="btn btn-primary btn-lg" id="dif-generate">Work out who first</button>
</div>
<div id="dif-output" class="bct-output" hidden></div>
<div id="dif-exports" class="bct-exports" hidden>
<h4>Take it with you</h4>
<div class="bct-export-buttons">
<button type="button" class="btn btn-outline-primary" id="dif-word">Download as Word</button>
<button type="button" class="btn btn-outline-primary" id="dif-markdown">Download as Markdown</button>
<button type="button" class="btn btn-outline-secondary" id="dif-print">Print / save as PDF</button>
</div>
<p class="bct-help">The ranked list is worth bringing to the sponsor — it is usually a genuinely surprising piece of insight.</p>
</div>
</div>

<script src="/assets/js/bct-tool.js"></script>
<script src="/assets/js/diffusion-tool.js"></script>

---

→ Next: [Champion Network Playbook](/behavioural-change/champion-network-playbook/) · [Social Norms and Influence](/behavioural-change/social-norms-and-influence/) · [Pilot Design and Experiment Card](/behavioural-change/pilot-design-and-experiment-card/)
