---
layout: behavioural
title: "Drift Explainer — Interactive"
name: "Drift Explainer — Interactive"
permalink: /behavioural-change/drift-tool/
section: "Frameworks"
order: 2
kind: "tool"
use_when: "Adoption spiked then fell and you need to explain why, and what would actually hold it"
toolkit: "Behavioural Change Toolkit"
---
Pick the shape your adoption curve made and the signs you recognise. The [drift](/behavioural-change/habit-loop-and-behavioural-drift/) explainer names which of the four causes you have, why it produces that curve, and the structural fix.

<div class="bct-callout bct-tip" markdown="1">
**The early spike is not adoption**

It is novelty plus surveillance — everyone knows they are being watched in week one. The real number is what you see at week 12 when nobody is looking.
</div>

{% include bct_tool_nav.html %}

<div id="drift-tool">
<div class="bct-toolbar">
<span class="bct-toolbar-note">Saves to this device as you type</span>
<button type="button" class="btn btn-sm btn-primary" id="drift-save">Save progress</button>
<button type="button" class="btn btn-sm btn-outline-secondary" id="drift-json">Download a copy</button>
<label class="btn btn-sm btn-outline-secondary mb-0" for="drift-import">Load a saved copy<input type="file" id="drift-import" accept="application/json,.json" hidden></label>
<button type="button" class="btn btn-sm btn-outline-secondary" id="drift-clear">Clear form</button>
<span data-saved class="bct-saved" aria-live="polite"></span>
</div>
<section class="bct-tool-section">
<h2>The curve</h2>
<div class="form-row">
<div class="form-group col-md-6"><label for="dr-change">The change</label><input type="text" class="form-control" id="dr-change" data-f="change_name"></div>
<div class="form-group col-md-6"><label for="dr-shape">What shape did adoption make?</label><select class="form-control" id="dr-shape" data-f="shape"><option value="">Not sure</option><option>Spiked, then fell away</option><option>Never really started</option><option>Held for a while, then slid</option><option>Still holding — I am planning ahead</option></select></div>
</div>
<div class="form-row">
<div class="form-group col-md-6"><label for="dr-reported">Did you report an early adoption number as success?</label><select class="form-control" id="dr-reported" data-f="reported"><option value="">Not answered</option><option>Yes</option><option>No</option></select></div>
<div class="form-group col-md-6"><label for="dr-dates">Were the drift check dates set before go-live?</label><select class="form-control" id="dr-dates" data-f="dates"><option value="">Not answered</option><option>Yes</option><option>No</option></select></div>
</div>
</section>
<section class="bct-tool-section">
<h2>Which of these do you recognise?</h2>
<p class="bct-help">Each sign maps to one of the four causes of drift. They compound, so tick everything that fits.</p>
<div class="form-check"><input class="form-check-input" type="checkbox" id="cause-attention" data-cause="attention"><label class="form-check-label" for="cause-attention">Adoption falls the week the programme team stands down</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="cause-effort" data-cause="effort"><label class="form-check-label" for="cause-effort">“It is fine normally, but not when we are busy”</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="cause-reward" data-cause="reward"><label class="form-check-label" for="cause-reward">Early recognition stopped, and the behaviour stopped with it</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="cause-competing" data-cause="competing"><label class="form-check-label" for="cause-competing">A new priority landed and displaced it</label></div>
</section>
<div class="bct-generate-bar">
<button type="button" class="btn btn-primary btn-lg" id="drift-generate">Explain the drift</button>
</div>
<div id="drift-output" class="bct-output" hidden></div>
<div id="drift-exports" class="bct-exports" hidden>
<h4>Take it with you</h4>
<div class="bct-export-buttons">
<button type="button" class="btn btn-outline-primary" id="drift-word">Download as Word</button>
<button type="button" class="btn btn-outline-primary" id="drift-markdown">Download as Markdown</button>
<button type="button" class="btn btn-outline-secondary" id="drift-print">Print / save as PDF</button>
</div>
</div>
</div>

<script src="/assets/js/bct-tool.js"></script>
<script src="/assets/js/drift-tool.js"></script>

---

→ Next: [Drift Check — 30 60 90](/behavioural-change/drift-check-30-60-90/) · [Embedding and Reinforcement](/behavioural-change/embedding-and-reinforcement/)
