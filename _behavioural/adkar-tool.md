---
layout: behavioural
title: "ADKAR Stuck-Step Finder — Interactive"
name: "ADKAR Stuck-Step Finder — Interactive"
permalink: /behavioural-change/adkar-tool/
section: "Frameworks"
order: 2
kind: "tool"
use_when: "A person or team is stuck and you need to know at which step, before you spend money on the wrong fix"
toolkit: "Behavioural Change Toolkit"
---
Ask the five [ADKAR](/behavioural-change/adkar-individual-change/) questions in order and score each. The first low score is your barrier — and the tool checks your intended next action against it.

<div class="bct-callout bct-warning" markdown="1">
**The order is strict**

You cannot fix a Desire gap with more Knowledge — but that is exactly what organisations do. When people resist, we send more training. It never works, and it is expensive.
</div>

{% include bct_tool_nav.html %}

<div id="adkar-tool">
<div class="bct-toolbar">
<span class="bct-toolbar-note">Saves to this device as you type</span>
<button type="button" class="btn btn-sm btn-primary" id="adkar-save">Save progress</button>
<button type="button" class="btn btn-sm btn-outline-secondary" id="adkar-json">Download a copy</button>
<label class="btn btn-sm btn-outline-secondary mb-0" for="adkar-import">Load a saved copy<input type="file" id="adkar-import" accept="application/json,.json" hidden></label>
<button type="button" class="btn btn-sm btn-outline-secondary" id="adkar-clear">Clear form</button>
<span data-saved class="bct-saved" aria-live="polite"></span>
</div>
<section class="bct-tool-section">
<h2>Who are you assessing?</h2>
<div class="form-row">
<div class="form-group col-md-4"><label for="ad-change">The change</label><input type="text" class="form-control" id="ad-change" data-f="change_name"></div>
<div class="form-group col-md-4"><label for="ad-subject">Person or group</label><input type="text" class="form-control" id="ad-subject" data-f="subject"></div>
<div class="form-group col-md-4"><label for="ad-mode">Assessing</label><select class="form-control" id="ad-mode" data-f="mode"><option>An individual</option><option>A group</option></select></div>
</div>
</section>
<section class="bct-tool-section">
<h2>The five questions, in order</h2>
<p class="bct-help">Ask them in this order and stop at the first “no”. Score 1–5; anything at 3 or below is the barrier.</p>
<div class="table-responsive">
<table class="table table-sm bct-grid">
<thead><tr><th class="bct-narrow">Step</th><th>Ask</th><th class="bct-narrow">Score</th></tr></thead>
<tbody>
<tr><td><strong>A</strong>wareness</td><td>Can you tell me <strong>why</strong> we are making this change?</td><td><select class="form-control form-control-sm" data-adkar="a" aria-label="Score for Awareness"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td><strong>D</strong>esire</td><td>What is your <strong>personal view</strong> on it — do you want it to happen?</td><td><select class="form-control form-control-sm" data-adkar="d" aria-label="Score for Desire"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td><strong>K</strong>nowledge</td><td>Do you know <strong>how</strong> to do the new thing?</td><td><select class="form-control form-control-sm" data-adkar="k" aria-label="Score for Knowledge"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td><strong>A</strong>bility</td><td>When you sat down to actually do it, what happened?</td><td><select class="form-control form-control-sm" data-adkar="ab" aria-label="Score for Ability"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
<tr><td><strong>R</strong>einforcement</td><td>What would make you <strong>keep</strong> doing it in six months?</td><td><select class="form-control form-control-sm" data-adkar="r" aria-label="Score for Reinforcement"><option value=""></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td></tr>
</tbody>
</table>
</div>
</section>
<section class="bct-tool-section">
<h2>What were you about to do?</h2>
<p class="bct-help">This is the useful part. Pick your intended next action and the tool will tell you whether it addresses the step that is actually blocked.</p>
<div class="form-group"><select class="form-control" data-f="action"><option value="">Not decided yet</option><option value="comms">Send more communications</option><option value="training">Book more training</option><option value="jobaids">Produce job aids or a quick reference</option><option value="floorwalk">Put support at the desk — floorwalkers, protected practice time</option><option value="recognition">Set up recognition or a reward scheme</option><option value="defaults">Change the system defaults or make fields mandatory</option><option value="escalate">Escalate to their manager</option><option value="involve">Involve them in the design</option></select></div>
</section>
<div class="bct-generate-bar">
<button type="button" class="btn btn-primary btn-lg" id="adkar-generate">Find the stuck step</button>
</div>
<div id="adkar-output" class="bct-output" hidden></div>
<div id="adkar-exports" class="bct-exports" hidden>
<h4>Take it with you</h4>
<div class="bct-export-buttons">
<button type="button" class="btn btn-outline-primary" id="adkar-word">Download as Word</button>
<button type="button" class="btn btn-outline-primary" id="adkar-markdown">Download as Markdown</button>
<button type="button" class="btn btn-outline-secondary" id="adkar-print">Print / save as PDF</button>
</div>
</div>
</div>

<script src="/assets/js/bct-tool.js"></script>
<script src="/assets/js/adkar-tool.js"></script>

---

→ Next: [COM-B and the Behaviour Change Wheel](/behavioural-change/com-b-and-the-behaviour-change-wheel/) · [Resistance Decoder](/behavioural-change/resistance-tool/) · [Embedding and Reinforcement](/behavioural-change/embedding-and-reinforcement/)
