---
layout: behavioural
title: "Executive Failure Modes — Interactive"
name: "Executive Failure Modes — Interactive"
permalink: /behavioural-change/exec-failure-tool/
section: "Advising Senior Leaders"
order: 7
kind: "tool"
use_when: "A leader is undermining their own change and you need to name it in a way that lands"
toolkit: "Behavioural Change Toolkit"
---
Tick what you are actually seeing. The tool names the [failure mode](/behavioural-change/executive-failure-modes/), explains why it produces the outcome you are getting, and gives you the words to raise it.

<div class="bct-callout bct-tip" markdown="1">
**All eight are well-intentioned**

Nobody sets out to undermine their own change. These are the natural output of being time-poor, optimistic, and several layers away from where the work happens — which is exactly why naming them constructively is valuable and naming them accusingly is worse than useless.
</div>

Everything stays in your browser. Nothing is uploaded, and your answers are saved to this device as you type.

{% include bct_tool_nav.html %}

<div id="efm-tool">
<div class="bct-toolbar">
<span class="bct-toolbar-note">Saves to this device as you type</span>
<button type="button" class="btn btn-sm btn-primary" id="efm-save">Save progress</button>
<button type="button" class="btn btn-sm btn-outline-secondary" id="efm-json">Download a copy</button>
<label class="btn btn-sm btn-outline-secondary mb-0" for="efm-import">Load a saved copy<input type="file" id="efm-import" accept="application/json,.json" hidden></label>
<button type="button" class="btn btn-sm btn-outline-secondary" id="efm-clear">Clear form</button>
<span data-saved class="bct-saved" aria-live="polite"></span>
</div>
<section class="bct-tool-section">
<h2>Context</h2>
<div class="form-row">
<div class="form-group col-md-6"><label for="efm-change">The change</label><input type="text" class="form-control" id="efm-change" data-f="change_name"></div>
<div class="form-group col-md-6"><label for="efm-leader">Who this is about</label><input type="text" class="form-control" id="efm-leader" data-f="leader" placeholder="Director of Field Operations"></div>
</div>
<div class="form-group"><label for="efm-barrier">Do you have barrier data — what people actually said, not a survey?</label><select class="form-control" id="efm-barrier" data-f="barrier_data"><option value="">Not yet</option><option>Yes</option></select></div>
</section>
<section class="bct-tool-section">
<h2>What are you seeing?</h2>
<p class="bct-help">Tick what you have actually observed, not what you suspect. The earliest signals are the cheapest to act on.</p>
<div class="bct-signal-group">
<p class="bct-signal-mode"><span class="bct-rank">1</span> The Say–Do Gap</p>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-saydo-0" data-signal="saydo-0"><label class="form-check-label" for="sig-saydo-0">Asks for the old report format</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-saydo-1" data-signal="saydo-1"><label class="form-check-label" for="sig-saydo-1">Does not use the new system themselves</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-saydo-2" data-signal="saydo-2"><label class="form-check-label" for="sig-saydo-2">Grants themselves an exception</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-saydo-3" data-signal="saydo-3"><label class="form-check-label" for="sig-saydo-3">Someone jokes about it</label></div>
</div>
<div class="bct-signal-group">
<p class="bct-signal-mode"><span class="bct-rank">2</span> Delegating the Change but Not the Authority</p>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-delegated-0" data-signal="delegated-0"><label class="form-check-label" for="sig-delegated-0">“You own this, come to me if you need anything”</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-delegated-1" data-signal="delegated-1"><label class="form-check-label" for="sig-delegated-1">No decisions, no removed blockers</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-delegated-2" data-signal="delegated-2"><label class="form-check-label" for="sig-delegated-2">Decisions taking more than two weeks</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-delegated-3" data-signal="delegated-3"><label class="form-check-label" for="sig-delegated-3">No visible presence</label></div>
</div>
<div class="bct-signal-group">
<p class="bct-signal-mode"><span class="bct-rank">3</span> Declaring Victory Early</p>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-victory-0" data-signal="victory-0"><label class="form-check-label" for="sig-victory-0">Celebration planned for go-live</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-victory-1" data-signal="victory-1"><label class="form-check-label" for="sig-victory-1">Standing the team down at week four</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-victory-2" data-signal="victory-2"><label class="form-check-label" for="sig-victory-2">Moving to the next initiative while the dip is still deepening</label></div>
</div>
<div class="bct-signal-group">
<p class="bct-signal-mode"><span class="bct-rank">4</span> The Comms Reflex</p>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-comms-0" data-signal="comms-0"><label class="form-check-label" for="sig-comms-0">Every problem is met with “we need to communicate better”</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-comms-1" data-signal="comms-1"><label class="form-check-label" for="sig-comms-1">Third email on the same topic</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-comms-2" data-signal="comms-2"><label class="form-check-label" for="sig-comms-2">A video is commissioned</label></div>
</div>
<div class="bct-signal-group">
<p class="bct-signal-mode"><span class="bct-rank">5</span> Change Saturation Blindness</p>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-saturation-0" data-signal="saturation-0"><label class="form-check-label" for="sig-saturation-0">Approving another initiative into a team already absorbing three</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-saturation-1" data-signal="saturation-1"><label class="form-check-label" for="sig-saturation-1">“One more will not hurt”</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-saturation-2" data-signal="saturation-2"><label class="form-check-label" for="sig-saturation-2">Genuinely unaware of the cumulative load</label></div>
</div>
<div class="bct-signal-group">
<p class="bct-signal-mode"><span class="bct-rank">6</span> Consensus Theatre</p>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-consensus-0" data-signal="consensus-0"><label class="form-check-label" for="sig-consensus-0">The leadership team agrees in the room, then six versions reach the organisation</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-consensus-1" data-signal="consensus-1"><label class="form-check-label" for="sig-consensus-1">Different versions in the corridor</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-consensus-2" data-signal="consensus-2"><label class="form-check-label" for="sig-consensus-2">Nobody disagreed publicly; nobody committed either</label></div>
</div>
<div class="bct-signal-group">
<p class="bct-signal-mode"><span class="bct-rank">7</span> Solving the Wrong Problem Confidently</p>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-wrongproblem-0" data-signal="wrongproblem-0"><label class="form-check-label" for="sig-wrongproblem-0">The intervention was decided before anyone talked to the people doing the work</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-wrongproblem-1" data-signal="wrongproblem-1"><label class="form-check-label" for="sig-wrongproblem-1">A system purchase or training programme chosen before diagnosis</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-wrongproblem-2" data-signal="wrongproblem-2"><label class="form-check-label" for="sig-wrongproblem-2">Solution chosen before diagnosis</label></div>
</div>
<div class="bct-signal-group">
<p class="bct-signal-mode"><span class="bct-rank">8</span> Punishing the Messenger</p>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-messenger-0" data-signal="messenger-0"><label class="form-check-label" for="sig-messenger-0">Bad news is met with pressure</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-messenger-1" data-signal="messenger-1"><label class="form-check-label" for="sig-messenger-1">“I do not want problems, I want solutions”</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-messenger-2" data-signal="messenger-2"><label class="form-check-label" for="sig-messenger-2">Dashboards suddenly green</label></div>
<div class="form-check"><input class="form-check-input" type="checkbox" id="sig-messenger-3" data-signal="messenger-3"><label class="form-check-label" for="sig-messenger-3">The team stops reporting accurately</label></div>
</div>
</section>
<div class="bct-generate-bar">
<button type="button" class="btn btn-primary btn-lg" id="efm-generate">Name what is happening</button>
</div>
<div id="efm-output" class="bct-output" hidden></div>
<div id="efm-exports" class="bct-exports" hidden>
<h4>Take it with you</h4>
<div class="bct-export-buttons">
<button type="button" class="btn btn-outline-primary" id="efm-word">Download as Word</button>
<button type="button" class="btn btn-outline-primary" id="efm-markdown">Download as Markdown</button>
<button type="button" class="btn btn-outline-secondary" id="efm-print">Print / save as PDF</button>
</div>
<p class="bct-help">The scripts are the point — they keep the conversation on cost and fix rather than on character.</p>
</div>
</div>

<script src="/assets/js/bct-tool.js"></script>
<script src="/assets/js/exec-failure-tool.js"></script>

---

→ Next: [Challenging Upward — Scripts](/behavioural-change/challenging-upward-scripts/) · [Leader Behaviour Contract](/behavioural-change/leader-behaviour-contract/) · [Sponsor Briefing Pack](/behavioural-change/sponsor-briefing-tool/)
