/* Executive Failure Modes — interactive tool
 * Mirrors /behavioural-change/executive-failure-modes/. Browser only.
 *
 * All eight are well-intentioned — the natural output of being time-poor,
 * optimistic and several layers from the work. The tool exists to name them
 * constructively, because naming them accusingly is worse than useless.
 */
(function () {
  'use strict';

  var B = window.BCT;
  if (!B) { return; }

  var MODES = [
    {
      id: 'saydo', n: 1, name: 'The Say–Do Gap',
      signals: [
        'Asks for the old report format',
        'Does not use the new system themselves',
        'Grants themselves an exception',
        'Someone jokes about it'
      ],
      earliest: 'Someone jokes about it',
      why: 'People read behaviour, not statements — and they read it accurately. One visible bypass by a senior figure is worth roughly six weeks of comms, in the wrong direction. It does not make people cynical; it makes them correctly informed that the change is not really required.',
      say: 'Can I flag something that is costing us? The Tuesday report still goes to you in the old format. Your teams have noticed, and it is the most common thing they raise. If that switched, it would do more than anything else this month.',
      tool: ['Leader Behaviour Contract', '/behavioural-change/leader-behaviour-contract/']
    },
    {
      id: 'delegated', n: 2, name: 'Delegating the Change but Not the Authority',
      signals: [
        '“You own this, come to me if you need anything”',
        'No decisions, no removed blockers',
        'Decisions taking more than two weeks',
        'No visible presence'
      ],
      earliest: 'Decisions taking more than two weeks',
      why: 'You are accountable for an outcome you cannot influence. The organisation reads the sponsor’s absence as the true priority.',
      say: 'I have got three blockers that need someone at your level. Can we book twenty minutes a fortnight where I bring you decisions rather than updates? I will keep it to three.',
      tool: ['Sponsor Briefing Pack — Interactive', '/behavioural-change/sponsor-briefing-tool/']
    },
    {
      id: 'victory', n: 3, name: 'Declaring Victory Early',
      signals: [
        'Celebration planned for go-live',
        'Standing the team down at week four',
        'Moving to the next initiative while the dip is still deepening'
      ],
      earliest: 'Celebration planned for go-live',
      why: 'The behaviour has not embedded, the sustain phase has no owner, and the team disbands at exactly the moment reinforcement matters most.',
      say: 'I would hold the celebration for day 90. Right now we have launched it — we have not landed it. What I would rather celebrate is the first month it survives a busy week.',
      tool: ['Drift Check — 30 60 90', '/behavioural-change/drift-check-30-60-90/']
    },
    {
      id: 'comms', n: 4, name: 'The Comms Reflex',
      signals: [
        'Every problem is met with “we need to communicate better”',
        'Third email on the same topic',
        'A video is commissioned'
      ],
      earliest: 'Third email on the same topic',
      why: 'Communication addresses awareness. It does nothing for time, tools, defaults, incentives or habits — which is where the failure actually is.',
      say: 'We could, and I do not think comprehension is the issue — 84% can explain why we are doing it. What is stopping them is that it takes six minutes and nothing has come off their plate. That is a decision rather than a message.',
      tool: ['COM-B and the Behaviour Change Wheel', '/behavioural-change/com-b-and-the-behaviour-change-wheel/'],
      note: 'Bring barrier data to this conversation. Without it you are trading one opinion for another.'
    },
    {
      id: 'saturation', n: 5, name: 'Change Saturation Blindness',
      signals: [
        'Approving another initiative into a team already absorbing three',
        '“One more will not hurt”',
        'Genuinely unaware of the cumulative load'
      ],
      earliest: '“One more will not hurt”',
      why: 'Capacity is finite. Beyond a threshold, additional change reduces the success of everything already running — including the initiatives leadership cares most about.',
      say: 'Before we add this — here are the seven things already live for these teams this quarter. I am not saying do not. I am saying which of these seven matters least, because they cannot all land.',
      tool: ['Change Readiness Assessment — Interactive', '/behavioural-change/readiness-tool/'],
      note: 'The assembled list is the intervention. Most leadership teams have never seen it in one place and the effect of seeing it is often immediate. It takes an afternoon.'
    },
    {
      id: 'consensus', n: 6, name: 'Consensus Theatre',
      signals: [
        'The leadership team agrees in the room, then six versions reach the organisation',
        'Different versions in the corridor',
        'Nobody disagreed publicly; nobody committed either'
      ],
      earliest: 'Different versions in the corridor',
      why: 'Middle managers receive contradictory signals and resolve them by doing nothing — the safest option.',
      say: 'I asked each of your leadership team to write the reason in one sentence. Here are the six answers. Can we spend thirty minutes agreeing which one it is?',
      tool: ['Workshop — Leadership Alignment (half day)', '/behavioural-change/workshop-leadership-alignment-half-day/']
    },
    {
      id: 'wrongproblem', n: 7, name: 'Solving the Wrong Problem Confidently',
      signals: [
        'The intervention was decided before anyone talked to the people doing the work',
        'A system purchase or training programme chosen before diagnosis',
        'Solution chosen before diagnosis'
      ],
      earliest: 'Solution chosen before diagnosis',
      why: 'You can execute perfectly against the wrong diagnosis and be surprised when nothing moves.',
      say: 'Can I do six conversations before we commit the training budget? If the barrier turns out to be capability, we have lost a week. If it is not, we have saved the budget.',
      tool: ['Barrier Analysis — COM-B Interview Guide', '/behavioural-change/barrier-analysis-com-b-interview-guide/'],
      note: 'Frame this as de-risking a decision they have already made, not as challenging it. Leaders will fund insurance far more readily than they will fund being told they are wrong.'
    },
    {
      id: 'messenger', n: 8, name: 'Punishing the Messenger',
      signals: [
        'Bad news is met with pressure',
        '“I do not want problems, I want solutions”',
        'Dashboards suddenly green',
        'The team stops reporting accurately'
      ],
      earliest: 'Dashboards suddenly green',
      why: 'You lose the early warning system. The problem does not go away; it just becomes invisible until it is expensive.',
      say: 'I want to flag something. When the adoption number came in low last month, the response in the room was quite sharp. I have noticed people are now presenting things more optimistically than I think is accurate. I would rather you had the real number, and that needs it to be safe to bring.',
      tool: ['Challenging Upward — Scripts', '/behavioural-change/challenging-upward-scripts/'],
      note: 'Say this privately, and carefully. It is the hardest one to raise and often the most important.'
    }
  ];

  var tool = B.create('efm-tool', 'bct-exec-failure-v1', {});
  if (!tool) { return; }

  function analyse(d) {
    var out = { matched: [], flags: [], steps: [] };

    MODES.forEach(function (m) {
      var hits = m.signals.filter(function (s, i) {
        var el = tool.q('[data-signal="' + m.id + '-' + i + '"]');
        return el && el.checked;
      });
      if (hits.length) { out.matched.push({ def: m, hits: hits }); }
    });

    // Most signals first; the mode you are seeing most of is the one to name.
    out.matched.sort(function (a, b) { return b.hits.length - a.hits.length; });
    out.total = out.matched.length;

    var f = out.flags;

    if (!out.total) {
      f.push({
        level: 'info',
        title: 'Nothing ticked yet',
        body: 'Work down the signals and tick what you have actually seen, not what you suspect. Each one maps to a named failure mode with a script for raising it.'
      });
      return out;
    }

    if (out.matched.some(function (m) { return m.def.id === 'messenger'; })) {
      f.push({
        level: 'danger',
        title: 'Your other data is probably unreliable',
        body: 'If it is not safe to bring bad news, the numbers you are using to judge everything else have already been optimised. Treat every green status on this change as unverified until you have re-established that reporting problems is safe.'
      });
    }

    if (out.matched.some(function (m) { return m.def.id === 'comms'; }) && !d.fields.barrier_data) {
      f.push({
        level: 'warn',
        title: 'You need barrier data before the comms conversation',
        body: 'Countering “we need to communicate better” with an opinion loses. Countering it with what people actually said wins. Six conversations is enough.',
        link: ['Barrier Analysis — COM-B Interview Guide', '/behavioural-change/barrier-analysis-com-b-interview-guide/']
      });
    }

    if (out.total >= 3) {
      f.push({
        level: 'warn',
        title: 'You are seeing ' + out.total + ' failure modes at once',
        body: 'Raise one. Naming three in a single conversation reads as an indictment however carefully you word it, and the framing is what determines whether any of it lands. Start with the one with the most signals.'
      });
    }

    f.push({
      level: 'info',
      title: 'All eight are well-intentioned',
      body: 'Nobody sets out to undermine their own change. These are the natural output of being time-poor, optimistic and several layers away from where the work happens. Naming them constructively is valuable; naming them accusingly is worse than useless. Your framing is always: here is something that is costing us, and here is the specific thing that would fix it.'
    });

    // --- next steps ---
    var lead = out.matched[0];
    out.steps.push({
      text: 'Raise ' + lead.def.name + ' first — you have ticked ' + lead.hits.length +
            ' of its signals. Use the script below rather than your own words; it is built to keep the conversation on cost and fix rather than on character.',
      link: lead.def.tool
    });
    out.steps.push({ text: 'Lead with the cost to them, not the breach of the plan. “Here is something that is costing us” outperforms “this is not what we agreed” every time.' });
    out.steps.push({
      text: 'Have the specific fix ready before you open the conversation. Raising a problem without a route through it is what makes people stop inviting you.',
      link: ['Challenging Upward — Scripts', '/behavioural-change/challenging-upward-scripts/']
    });
    if (out.matched.some(function (m) { return m.def.id === 'saturation'; })) {
      out.steps.push({ text: 'Assemble the list of everything already live for these teams. The list is the intervention, and it takes an afternoon.' });
    }

    return out;
  }

  // --- rendering -----------------------------------------------------------

  function render(d, r) {
    var e = B.esc, h = [];
    var f = d.fields;

    h.push('<div class="bct-result-head"><h3>' +
      (f.leader ? e(f.leader) : 'What you are seeing') + '</h3>' +
      '<p class="bct-complete">' + r.total + ' failure mode' + (r.total === 1 ? '' : 's') + ' matched</p></div>');

    if (!r.total) {
      h.push('<div class="bct-flag bct-flag-info"><strong>Nothing ticked yet</strong><p>Tick the signals you have actually seen.</p></div>');
      return h.join('');
    }

    r.matched.forEach(function (m, idx) {
      h.push('<div class="bct-mode' + (idx === 0 ? ' is-lead' : '') + '">');
      h.push('<p class="bct-mode-head"><span class="bct-rank">' + m.def.n + '</span> ' + e(m.def.name) +
        ' <span class="bct-score">' + m.hits.length + '/' + m.def.signals.length + '</span></p>');
      h.push('<p class="bct-mode-signals">You ticked: ' + m.hits.map(function (s) { return '“' + e(s) + '”'; }).join(', ') + '</p>');
      h.push('<p class="bct-mode-why"><strong>Why it is fatal:</strong> ' + e(m.def.why) + '</p>');
      h.push('<blockquote class="bct-say"><p class="bct-say-label">Say</p>' + e(m.def.say) + '</blockquote>');
      if (m.def.note) { h.push('<p class="bct-mode-note">' + e(m.def.note) + '</p>'); }
      h.push('<p class="bct-mode-tool"><a href="' + m.def.tool[1] + '">' + e(m.def.tool[0]) + ' &rarr;</a></p>');
      h.push('</div>');
    });

    if (r.flags.length) {
      h.push('<h4>What needs attention</h4>');
      r.flags.forEach(function (fl) {
        h.push('<div class="bct-flag bct-flag-' + fl.level + '"><strong>' + e(fl.title) + '</strong><p>' + e(fl.body) + '</p>' +
          (fl.link ? '<p><a href="' + fl.link[1] + '">' + e(fl.link[0]) + ' &rarr;</a></p>' : '') + '</div>');
      });
    }

    h.push('<h4>Your next steps</h4><ol class="bct-steps">');
    r.steps.forEach(function (st) {
      h.push('<li>' + e(st.text) + (st.link ? ' <a href="' + st.link[1] + '">' + e(st.link[0]) + ' &rarr;</a>' : '') + '</li>');
    });
    h.push('</ol>');

    return h.join('');
  }

  // --- exports -------------------------------------------------------------

  function docHtml(d, r) {
    var e = B.esc, f = d.fields, b = [];
    b.push('<h1>Executive Failure Modes</h1>');
    b.push('<p><strong>Change:</strong> ' + e(f.change_name) + '<br><strong>About:</strong> ' + e(f.leader) + '</p>');
    r.matched.forEach(function (m) {
      b.push('<h2>' + m.def.n + ' · ' + e(m.def.name) + '</h2>');
      b.push('<p><strong>Signals seen:</strong> ' + m.hits.map(e).join('; ') + '</p>');
      b.push('<p><strong>Why it is fatal:</strong> ' + e(m.def.why) + '</p>');
      b.push('<p><strong>Say:</strong> <em>' + e(m.def.say) + '</em></p>');
      if (m.def.note) { b.push('<p>' + e(m.def.note) + '</p>'); }
      b.push('<p><strong>Tool:</strong> ' + e(m.def.tool[0]) + '</p>');
    });
    b.push('<h2>Framing</h2><p>All of these are well-intentioned. Naming them constructively is valuable; naming them accusingly is worse than useless. The framing is always: here is something that is costing us, and here is the specific thing that would fix it.</p>');
    b.push('<h2>Next steps</h2><ol>');
    r.steps.forEach(function (st) { b.push('<li>' + e(st.text) + '</li>'); });
    b.push('</ol>');
    b.push('<p style="color:#666;font-size:9pt">Generated from Executive Failure Modes at kevstemplates.com</p>');
    return B.wordDoc('Executive Failure Modes', b.join(''));
  }

  function markdown(d, r) {
    var f = d.fields, m = [];
    m.push('---');
    m.push('title: "Executive Failure Modes — ' + (f.change_name || 'untitled').replace(/"/g, '') + '"');
    m.push('type: exec-failure-modes');
    m.push('---');
    m.push('');
    r.matched.forEach(function (x) {
      m.push('## ' + x.def.n + ' · ' + x.def.name);
      m.push('');
      m.push('**Signals seen:** ' + x.hits.join('; '));
      m.push('');
      m.push('**Why it is fatal:** ' + x.def.why);
      m.push('');
      m.push('> ' + x.def.say);
      m.push('');
      if (x.def.note) { m.push(x.def.note); m.push(''); }
      m.push('**Tool:** [[' + x.def.tool[0] + ']]');
      m.push('');
    });
    m.push('## Next steps');
    m.push('');
    r.steps.forEach(function (st, i) { m.push((i + 1) + '. ' + st.text); });
    m.push('');
    m.push('See also [[Challenging Upward — Scripts]] · [[Leader Behaviour Contract]].');
    return m.join('\n');
  }

  // --- wiring --------------------------------------------------------------

  function analysis() {
    var d = tool.collect();
    return { d: d, r: analyse(d) };
  }

  function run() {
    var a = analysis();
    var out = tool.q('#efm-output');
    out.innerHTML = render(a.d, a.r);
    out.hidden = false;
    tool.q('#efm-exports').hidden = false;
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return a;
  }

  // Checkboxes are not [data-f], so persist them alongside the fields.
  var STORE = 'bct-exec-failure-v1';
  function snapshot() {
    var d = tool.collect();
    d.signals = {};
    tool.qa('[data-signal]').forEach(function (el) {
      if (el.checked) { d.signals[el.dataset.signal] = 1; }
    });
    return d;
  }
  function restoreAll(data) {
    tool.restore(data);
    tool.qa('[data-signal]').forEach(function (el) {
      el.checked = !!((data && data.signals) || {})[el.dataset.signal];
    });
  }
  function persist(explicit) {
    var stored = true;
    try { localStorage.setItem(STORE, JSON.stringify(snapshot())); } catch (e) { stored = false; }
    var el = tool.q('[data-saved]');
    if (el) {
      el.textContent = explicit
        ? (stored ? 'Saved to this device — it will be here when you come back'
                  : 'This browser will not store data (private mode?) — use Download a copy instead')
        : 'Saved locally';
      el.classList.add('is-on');
      clearTimeout(persist.t);
      persist.t = setTimeout(function () { el.classList.remove('is-on'); }, explicit ? 5000 : 1600);
    }
  }

  tool.root.addEventListener('input', function () { persist(false); });
  tool.root.addEventListener('change', function () { persist(false); });

  tool.wire({
    '#efm-generate': run,
    '#efm-save': function () { persist(true); },
    '#efm-word': function () {
      var a = analysis();
      B.download(B.slugify(a.d.fields.change_name, 'executive-failure-modes') + '.doc', 'application/msword', docHtml(a.d, a.r));
    },
    '#efm-markdown': function () {
      var a = analysis();
      B.download(B.slugify(a.d.fields.change_name, 'executive-failure-modes') + '.md', 'text/markdown;charset=utf-8', markdown(a.d, a.r));
    },
    '#efm-json': function () {
      var d = snapshot();
      B.download(B.slugify(d.fields.change_name, 'executive-failure-modes') + '.json', 'application/json', JSON.stringify(d, null, 2));
    },
    '#efm-import': function (e) {
      tool.importJson(e.target.files && e.target.files[0], function (data) { restoreAll(data); run(); });
    },
    '#efm-print': function () { run(); window.print(); },
    '#efm-clear': function () {
      tool.clear(function () {
        tool.qa('[data-signal]').forEach(function (el) { el.checked = false; });
        try { localStorage.removeItem(STORE); } catch (e) { /* ignore */ }
        tool.q('#efm-output').hidden = true;
        tool.q('#efm-exports').hidden = true;
      });
    }
  });

  try {
    var raw = localStorage.getItem(STORE);
    if (raw) { restoreAll(JSON.parse(raw)); }
  } catch (e) { /* ignore corrupt state */ }

  window.BCTExecFailure = {
    modes: MODES,
    collect: snapshot,
    analyse: analyse,
    run: run,
    markdown: function () { var a = analysis(); return markdown(a.d, a.r); },
    doc: function () { var a = analysis(); return docHtml(a.d, a.r); }
  };
}());
