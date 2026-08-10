---
layout: behavioural
title: "Sponsor Briefing Pack — Interactive"
name: "Sponsor Briefing Pack — Interactive"
permalink: /behavioural-change/sponsor-briefing-tool/
section: "Advising Senior Leaders"
order: 7
kind: "tool"
use_when: "You have the 45 minutes booked and you need the one-page brief, the run sheet and the slides ready to walk in with"
toolkit: "Behavioural Change Toolkit"
---
Prepare the [Sponsor Briefing Pack](/behavioural-change/sponsor-briefing-pack/) on screen. It turns your three asks into the one-page brief you hand over, a timed run sheet for the meeting, and a short deck if you need one — and it checks your asks are concrete enough for a sponsor to actually say yes to.

Everything stays in your browser. Nothing is uploaded, and your answers are saved to this device as you type.

<div id="sbp-tool">
<div class="bct-toolbar">
<button type="button" class="btn btn-sm btn-outline-secondary" id="sbp-clear">Clear form</button>
<span data-saved class="bct-saved" aria-live="polite"></span>
</div>
<section class="bct-tool-section">
<h2>The basics</h2>
<div class="form-row">
<div class="form-group col-md-6"><label for="s-change">Change name</label><input type="text" class="form-control" id="s-change" data-f="change_name" placeholder="Field job closure"></div>
<div class="form-group col-md-6"><label for="s-onesent">In one sentence</label><input type="text" class="form-control" id="s-onesent" data-f="one_sentence" placeholder="Engineers close jobs at the van so parts reorder automatically"></div>
</div>
<div class="form-row">
<div class="form-group col-md-4"><label for="s-sponsor">Sponsor</label><input type="text" class="form-control" id="s-sponsor" data-f="sponsor_name"></div>
<div class="form-group col-md-4"><label for="s-role">Their role</label><input type="text" class="form-control" id="s-role" data-f="sponsor_role"></div>
<div class="form-group col-md-4"><label for="s-date">Meeting date</label><input type="text" class="form-control" id="s-date" data-f="date"></div>
</div>
<div class="form-row">
<div class="form-group col-md-6"><label for="s-prepared">Prepared by</label><input type="text" class="form-control" id="s-prepared" data-f="prepared_by"></div>
<div class="form-group col-md-6"><label for="s-whynot">What happens if we do not</label><input type="text" class="form-control" id="s-whynot" data-f="why_not"></div>
</div>
</section>
<section class="bct-tool-section">
<h2>1 · Their words <span class="bct-mins">5 min</span></h2>
<p class="bct-help">“Before I say anything — in your own words, why are we doing this?” Listen precisely. Everything downstream inherits this sentence.</p>
<div class="form-group"><label for="s-words">What they actually said</label><input type="text" class="form-control" id="s-words" data-f="their_words"></div>
<div class="form-group"><label for="s-fluent">Could they say it fluently?</label><select class="form-control" id="s-fluent" data-f="fluent"><option value="">Not asked yet</option><option>Yes</option><option>No</option></select></div>
</section>
<section class="bct-tool-section">
<h2>2 · The evidence <span class="bct-mins">10 min</span></h2>
<p class="bct-help">Barrier data and three verbatim quotes, then the reframe: “Almost none of this is people being resistant. Most of it is things the organisation has done to itself. Some of those only you can fix.”</p>
<div class="form-group"><label for="s-evidence">Your barrier headline</label><input type="text" class="form-control" id="s-evidence" data-f="evidence" placeholder="The new process takes 4 minutes longer and nothing came off the day"></div>
<div class="table-responsive">
<table class="table table-sm bct-grid">
<thead><tr><th>Verbatim quote</th><th>Who from</th></tr></thead>
<tbody id="sbp-quotes">
<tr><td><input type="text" class="form-control form-control-sm" data-col="quote"></td><td><input type="text" class="form-control form-control-sm" data-col="who"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="quote"></td><td><input type="text" class="form-control form-control-sm" data-col="who"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="quote"></td><td><input type="text" class="form-control form-control-sm" data-col="who"></td></tr>
</tbody>
</table>
</div>
<button type="button" class="btn btn-sm btn-outline-secondary" data-add-row="sbp-quotes">Add a quote</button>
</section>
<section class="bct-tool-section">
<h2>3 · The ask <span class="bct-mins">15 min</span></h2>
<p class="bct-help">Three specific things. Not “visible support” — the generator will tell you if an ask is too vague to say yes to.</p>
<div class="form-row">
<div class="form-group col-md-9"><label for="s-ask1">1 · Remove a barrier only you can remove</label><input type="text" class="form-control" id="s-ask1" data-f="ask1" placeholder="Set the legacy switch-off date"></div>
<div class="form-group col-md-3"><label for="s-ask1by">By</label><input type="text" class="form-control" id="s-ask1by" data-f="ask1_by"></div>
</div>
<p class="bct-hint">Legacy switch-off date · a conflicting target · a resource · a peer who will not align · permission to take something off people's plates</p>
<div class="form-group"><label for="s-ask2">2 · Do something visible, repeatedly <span class="bct-ongoing">ongoing</span></label><input type="text" class="form-control" id="s-ask2" data-f="ask2" placeholder="Run their own Monday review off the new system"></div>
<p class="bct-hint">Use it themselves · ask about it in every skip-level · run their own meeting off the new system · refuse the old report format</p>
<div class="form-row">
<div class="form-group col-md-9"><label for="s-ask3">3 · Say something specific, in their own words</label><input type="text" class="form-control" id="s-ask3" data-f="ask3"></div>
<div class="form-group col-md-3"><label for="s-ask3by">By</label><input type="text" class="form-control" id="s-ask3by" data-f="ask3_by"></div>
</div>
<p class="bct-hint">The agreed sentence, plus the honest cost, plus what they will do</p>
</section>
<section class="bct-tool-section">
<h2>4 · The dip <span class="bct-mins">10 min</span></h2>
<p class="bct-help">“Performance will dip for around six weeks. That is normal, not failure. When it dips, people will come to you saying it is not working. What will you do?” Get the answer in the room, before it happens.</p>
<div class="form-row">
<div class="form-group col-md-6"><label for="s-dipstart">Dip expected from</label><input type="text" class="form-control" id="s-dipstart" data-f="dip_start" placeholder="the pilot go-live in March"></div>
<div class="form-group col-md-6"><label for="s-dipweeks">For roughly how many weeks</label><input type="text" class="form-control" id="s-dipweeks" data-f="dip_weeks" placeholder="six"></div>
</div>
<div class="form-group"><label for="s-dipresp">What they committed to do when it dips</label><input type="text" class="form-control" id="s-dipresp" data-f="dip_response" placeholder="hold the line publicly and send anyone complaining to me"></div>
<div class="form-group"><label for="s-peers">Which of their peers is not with us, and how do we fix that?</label><input type="text" class="form-control" id="s-peers" data-f="peers"></div>
</section>
<section class="bct-tool-section">
<h2>5 · The deal <span class="bct-mins">5 min</span></h2>
<p class="bct-help">What you give: a one-pager every fortnight — what moved, what you need, what worries you. Always include an ask, and always include a worry.</p>
<div class="form-group"><label for="s-need">What I need from you</label><input type="text" class="form-control" id="s-need" data-f="deal_need" placeholder="a decision within a week when I ask for one, and to tell me straight when you disagree rather than going quiet"></div>
<div class="table-responsive">
<table class="table table-sm bct-grid">
<thead><tr><th>Decision I will need</th><th class="bct-narrow">By when</th><th>Consequence of delay</th></tr></thead>
<tbody id="sbp-decisions">
<tr><td><input type="text" class="form-control form-control-sm" data-col="decision"></td><td><input type="text" class="form-control form-control-sm" data-col="by"></td><td><input type="text" class="form-control form-control-sm" data-col="consequence"></td></tr>
<tr><td><input type="text" class="form-control form-control-sm" data-col="decision"></td><td><input type="text" class="form-control form-control-sm" data-col="by"></td><td><input type="text" class="form-control form-control-sm" data-col="consequence"></td></tr>
</tbody>
</table>
</div>
<button type="button" class="btn btn-sm btn-outline-secondary" data-add-row="sbp-decisions">Add a decision</button>
</section>
<section class="bct-tool-section">
<h2>Sponsor health check</h2>
<p class="bct-help">Sponsors go quiet for reasons, and the fix differs. If yours has already drifted, pick the sign you are seeing.</p>
<div class="form-group"><label for="s-sign">What are you seeing?</label><select class="form-control" id="s-sign" data-f="sign"><option value="">Nothing — the sponsor is engaged</option><option>Generic support, no action</option><option>Delegates everything, avoids specifics</option><option>Cancels, sends deputies</option><option>Vague on cross-functional issues</option><option>Cannot make decisions when asked</option></select></div>
<div class="form-group"><label for="s-dectest">Have you tested them with a small decision request — did it come back inside a week?</label><select class="form-control" id="s-dectest" data-f="decision_test"><option value="">Not tested</option><option>Yes</option><option>No</option></select></div>
</section>
<div class="bct-generate-bar">
<button type="button" class="btn btn-primary btn-lg" id="sbp-generate">Generate the brief and run sheet</button>
</div>
<div id="sbp-output" class="bct-output" hidden></div>
<div id="sbp-exports" class="bct-exports" hidden>
<h4>Take it with you</h4>
<div class="bct-export-buttons">
<button type="button" class="btn btn-outline-primary" id="sbp-word">Download as Word</button>
<button type="button" class="btn btn-outline-primary" id="sbp-pptx">Download as PowerPoint</button>
<button type="button" class="btn btn-outline-primary" id="sbp-markdown">Download as Markdown</button>
<button type="button" class="btn btn-outline-secondary" id="sbp-print">Print / save as PDF</button>
<button type="button" class="btn btn-outline-secondary" id="sbp-json">Save a copy (JSON)</button>
<label class="btn btn-outline-secondary mb-0" for="sbp-import">Load a saved copy<input type="file" id="sbp-import" accept="application/json,.json" hidden></label>
</div>
<p class="bct-help">The PowerPoint export builds a six-slide deck in your browser. It pulls its builder from a CDN on first use, so that one button needs a connection — Word, Markdown and PDF work offline.</p>
</div>
</div>

<script src="/assets/js/bct-tool.js"></script>
<script src="/assets/js/sponsor-briefing-tool.js"></script>

---

→ Next: [Leader Behaviour Contract](/behavioural-change/leader-behaviour-contract/) · [Executive Failure Modes](/behavioural-change/executive-failure-modes/) · [Challenging Upward — Scripts](/behavioural-change/challenging-upward-scripts/)
