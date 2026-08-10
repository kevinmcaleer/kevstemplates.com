---
layout: behavioural
title: "Resistance Decoder — Interactive"
name: "Resistance Decoder — Interactive"
permalink: /behavioural-change/resistance-tool/
section: "Diagnose"
order: 3
kind: "tool"
use_when: "You are getting pushback and need to know which of the seven things it actually is, because they have completely different first moves"
toolkit: "Behavioural Change Toolkit"
---
Log what you actually heard and the [Resistance Decoder](/behavioural-change/resistance-decoder/) works out which of the seven types it is — then gives you the first move for each, and the split to take to your sponsor with real numbers in it.

<div class="bct-callout bct-tip" markdown="1">
**The one idea this is built on**

Resistance is data, not defiance. When someone pushes back they are telling you something about your change. The skill is decoding *which* thing — treating it all as an attitude problem is both wrong and useless, because it points to no action except pressure, which makes it worse.
</div>

Everything stays in your browser. Nothing is uploaded, and your answers are saved to this device as you type.

{% include bct_tool_nav.html %}

<div id="rd-tool">
<div class="bct-toolbar">
<span class="bct-toolbar-note">Saves to this device as you type</span>
<button type="button" class="btn btn-sm btn-primary" id="rd-save">Save progress</button>
<button type="button" class="btn btn-sm btn-outline-secondary" id="rd-json">Download a copy</button>
<label class="btn btn-sm btn-outline-secondary mb-0" for="rd-import">Load a saved copy<input type="file" id="rd-import" accept="application/json,.json" hidden></label>
<button type="button" class="btn btn-sm btn-outline-secondary" id="rd-clear">Clear form</button>
<span data-saved class="bct-saved" aria-live="polite"></span>
</div>
<section class="bct-tool-section">
<h2>The change</h2>
<div class="form-row">
<div class="form-group col-md-6"><label for="rd-change">What is being changed</label><input type="text" class="form-control" id="rd-change" data-f="change_name"></div>
<div class="form-group col-md-6"><label for="rd-owner">Logged by</label><input type="text" class="form-control" id="rd-owner" data-f="owner"></div>
</div>
<div class="form-group"><label for="rd-changed">Have you changed anything about the plan in response to feedback yet?</label><select class="form-control" id="rd-changed" data-f="changed"><option value="">Not answered</option><option>Yes</option><option>No</option></select></div>
</section>
<section class="bct-tool-section">
<h2>What you actually heard</h2>
<p class="bct-help">As close to verbatim as you can — the exact words carry the diagnosis. Leave the type as “decode it for me” and the tool will have a go from the phrasing.</p>
<div class="table-responsive">
<table class="table table-sm bct-grid">
<thead><tr><th>What you heard</th><th>Who from</th><th class="bct-narrow">Setting</th><th>Your read</th></tr></thead>
<tbody id="rd-observations">
<tr><td><input type="text" class="form-control form-control-sm" data-col="heard"></td><td><input type="text" class="form-control form-control-sm" data-col="who"></td><td><select class="form-control form-control-sm" data-col="setting"><option value=""></option><option>One-to-one</option><option>Group meeting</option><option>Corridor</option><option>Silence in the room</option><option>Written</option></select></td><td><select class="form-control form-control-sm" data-col="type"><option value="">Not sure — decode it for me</option><option value="1">1 · I do not understand what you want</option><option value="2">2 · This costs me something you have not acknowledged</option><option value="3">3 · I will look incompetent</option><option value="4">4 · I have seen this before</option><option value="5">5 · This is being done to me</option><option value="6">6 · This conflicts with what you are also asking me to do</option><option value="7">7 · Your design is bad</option></select></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="heard"></td><td><input type="text" class="form-control form-control-sm" data-col="who"></td><td><select class="form-control form-control-sm" data-col="setting"><option value=""></option><option>One-to-one</option><option>Group meeting</option><option>Corridor</option><option>Silence in the room</option><option>Written</option></select></td><td><select class="form-control form-control-sm" data-col="type"><option value="">Not sure — decode it for me</option><option value="1">1 · I do not understand what you want</option><option value="2">2 · This costs me something you have not acknowledged</option><option value="3">3 · I will look incompetent</option><option value="4">4 · I have seen this before</option><option value="5">5 · This is being done to me</option><option value="6">6 · This conflicts with what you are also asking me to do</option><option value="7">7 · Your design is bad</option></select></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="heard"></td><td><input type="text" class="form-control form-control-sm" data-col="who"></td><td><select class="form-control form-control-sm" data-col="setting"><option value=""></option><option>One-to-one</option><option>Group meeting</option><option>Corridor</option><option>Silence in the room</option><option>Written</option></select></td><td><select class="form-control form-control-sm" data-col="type"><option value="">Not sure — decode it for me</option><option value="1">1 · I do not understand what you want</option><option value="2">2 · This costs me something you have not acknowledged</option><option value="3">3 · I will look incompetent</option><option value="4">4 · I have seen this before</option><option value="5">5 · This is being done to me</option><option value="6">6 · This conflicts with what you are also asking me to do</option><option value="7">7 · Your design is bad</option></select></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="heard"></td><td><input type="text" class="form-control form-control-sm" data-col="who"></td><td><select class="form-control form-control-sm" data-col="setting"><option value=""></option><option>One-to-one</option><option>Group meeting</option><option>Corridor</option><option>Silence in the room</option><option>Written</option></select></td><td><select class="form-control form-control-sm" data-col="type"><option value="">Not sure — decode it for me</option><option value="1">1 · I do not understand what you want</option><option value="2">2 · This costs me something you have not acknowledged</option><option value="3">3 · I will look incompetent</option><option value="4">4 · I have seen this before</option><option value="5">5 · This is being done to me</option><option value="6">6 · This conflicts with what you are also asking me to do</option><option value="7">7 · Your design is bad</option></select></td></tr>
</tbody>
</table>
</div>
<button type="button" class="btn btn-sm btn-outline-secondary" data-add-row="rd-observations">Add another</button>
<p class="bct-hint">Never diagnose resistance in public. Log it here, then take it to a one-to-one.</p>
</section>
<section class="bct-tool-section">
<h2>The seven types, for reference</h2>
<div class="table-responsive">
<table class="table table-sm bct-types">
<tbody>
<tr><td><span class="bct-rank">1</span></td><td><strong>I do not understand what you want</strong><br><span class="bct-decode-probe">Sounds like: vagueness, agreeing then not doing, asking the same question repeatedly</span></td></tr>
<tr><td><span class="bct-rank">2</span></td><td><strong>This costs me something you have not acknowledged</strong><br><span class="bct-decode-probe">Sounds like: “it's fine in theory but…”, “you don't understand how it works on the ground”, edge cases</span></td></tr>
<tr><td><span class="bct-rank">3</span></td><td><strong>I will look incompetent</strong><br><span class="bct-decode-probe">Sounds like: deflection, humour, sudden focus on other priorities, delegation to a junior</span></td></tr>
<tr><td><span class="bct-rank">4</span></td><td><strong>I have seen this before</strong><br><span class="bct-decode-probe">Sounds like: “we tried this in 2019”, “this'll blow over”, polite compliance with zero energy</span></td></tr>
<tr><td><span class="bct-rank">5</span></td><td><strong>This is being done to me</strong><br><span class="bct-decode-probe">Sounds like: “who decided this?”, “nobody asked us”, procedural objections</span></td></tr>
<tr><td><span class="bct-rank">6</span></td><td><strong>This conflicts with what you are also asking me to do</strong><br><span class="bct-decode-probe">Sounds like: “which do you want?”, raising the target, reverting under pressure</span></td></tr>
<tr><td><span class="bct-rank">7</span></td><td><strong>Your design is bad</strong><br><span class="bct-decode-probe">Sounds like: specific, technical, persistent objections that survive explanation</span></td></tr>
</tbody>
</table>
</div>
</section>
<div class="bct-generate-bar">
<button type="button" class="btn btn-primary btn-lg" id="rd-generate">Decode the resistance</button>
</div>
<div id="rd-output" class="bct-output" hidden></div>
<div id="rd-exports" class="bct-exports" hidden>
<h4>Take it with you</h4>
<div class="bct-export-buttons">
<button type="button" class="btn btn-outline-primary" id="rd-word">Download as Word</button>
<button type="button" class="btn btn-outline-primary" id="rd-markdown">Download as Markdown</button>
<button type="button" class="btn btn-outline-secondary" id="rd-print">Print / save as PDF</button>
</div>
<p class="bct-help">The sponsor reframe is the bit worth taking upward — it moves the conversation from character to design.</p>
</div>
</div>

<script src="/assets/js/bct-tool.js"></script>
<script src="/assets/js/resistance-tool.js"></script>

---

→ Next: [Bridges Transition Model](/behavioural-change/bridges-transition-model/) · [Objection Handling Bank](/behavioural-change/objection-handling-bank/) · [Force Field Analysis](/behavioural-change/force-field-tool/)
