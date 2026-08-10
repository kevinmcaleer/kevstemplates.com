/* ADKAR stuck-step finder — interactive tool
 * Mirrors /behavioural-change/adkar-individual-change/. Browser only.
 *
 * The order is strict. You cannot fix a Desire gap with more Knowledge — but
 * that is exactly what organisations do, so the tool checks your intended
 * next action against the step that is actually blocked.
 */
(function () {
  'use strict';

  var B = window.BCT;
  if (!B) { return; }

  var STEPS = [
    {
      key: 'a', letter: 'A', name: 'Awareness',
      state: 'I understand why this change is happening',
      stuck: 'They have heard the announcement but not the reason.',
      helps: 'The business case, in their language — delivered by their manager, not a town hall.',
      question: 'Can you tell me why we are making this change?',
      link: ['Manager Conversation Guide', '/behavioural-change/manager-conversation-guide/']
    },
    {
      key: 'd', letter: 'D', name: 'Desire',
      state: 'I have decided to participate',
      stuck: 'They get it and still will not.',
      helps: 'What is in it for them, involvement in the design, and addressing the personal cost honestly.',
      question: 'What is your personal view on it — do you want it to happen?',
      link: ['Resistance Decoder — Interactive', '/behavioural-change/resistance-tool/']
    },
    {
      key: 'k', letter: 'K', name: 'Knowledge',
      state: 'I know how to change',
      stuck: 'Willing, but does not know how.',
      helps: 'Training, job aids, coaching.',
      question: 'Do you know how to do the new thing?',
      link: ['Intervention Design Worksheet', '/behavioural-change/intervention-design-worksheet/']
    },
    {
      key: 'ab', letter: 'A', name: 'Ability',
      state: 'I can actually do it in my job',
      stuck: 'Knows it in the classroom, fails at the desk.',
      helps: 'Practice, time, support at the moment of use, and removing obstacles.',
      question: 'When you sat down to actually do it, what happened?',
      link: ['Nudge Library', '/behavioural-change/nudge-library/']
    },
    {
      key: 'r', letter: 'R', name: 'Reinforcement',
      state: 'It is sticking',
      stuck: 'Did it for three weeks, then reverted.',
      helps: 'Recognition, measurement, consequences and system defaults.',
      question: 'What would make you keep doing it in six months?',
      link: ['Embedding and Reinforcement', '/behavioural-change/embedding-and-reinforcement/']
    }
  ];

  // What people are usually about to do, and which step it actually addresses.
  var ACTIONS = {
    comms: { label: 'Send more communications', addresses: ['a'] },
    training: { label: 'Book more training', addresses: ['k'] },
    jobaids: { label: 'Produce job aids or a quick reference', addresses: ['k', 'ab'] },
    floorwalk: { label: 'Put support at the desk — floorwalkers, protected practice time', addresses: ['ab'] },
    recognition: { label: 'Set up recognition or a reward scheme', addresses: ['r'] },
    defaults: { label: 'Change the system defaults or make fields mandatory', addresses: ['ab', 'r'] },
    escalate: { label: 'Escalate to their manager', addresses: ['d'] },
    involve: { label: 'Involve them in the design', addresses: ['d'] }
  };

  // Group patterns, from the rolled-up table.
  var PATTERNS = [
    {
      test: function (s) { return s.a !== null && s.a <= 2; },
      name: 'Low Awareness across the board',
      meaning: 'Comms failed or never reached the line.',
      fix: 'Managers cascade, not email.',
      link: ['Manager Conversation Guide', '/behavioural-change/manager-conversation-guide/']
    },
    {
      test: function (s) { return s.a >= 4 && s.d !== null && s.d <= 3; },
      name: 'High Awareness, low Desire',
      meaning: 'They understand and object. That is not a comms problem.',
      fix: 'You have a real design or trust problem.',
      link: ['Resistance Decoder — Interactive', '/behavioural-change/resistance-tool/']
    },
    {
      test: function (s) { return s.d >= 4 && s.k !== null && s.k <= 3; },
      name: 'High Desire, low Knowledge',
      meaning: 'Enthusiasm outrunning enablement.',
      fix: 'Training and job aids — this is the one case where training is the right answer.',
      link: ['Intervention Design Worksheet', '/behavioural-change/intervention-design-worksheet/']
    },
    {
      test: function (s) { return s.k >= 4 && s.ab !== null && s.ab <= 3; },
      name: 'High Knowledge, low Ability',
      meaning: 'Classic training-without-support.',
      fix: 'Floorwalkers, protected practice time, prompts at the moment of use.',
      link: ['Nudge Library', '/behavioural-change/nudge-library/']
    },
    {
      test: function (s) {
        return s.a >= 4 && s.d >= 4 && s.k >= 4 && s.ab >= 4 && s.r !== null && s.r <= 3;
      },
      name: 'Everything high, low Reinforcement',
      meaning: 'You are 90 days from full reversion.',
      fix: 'Reinforcement, urgently — recognition in the management rhythm and the behaviour in system defaults.',
      link: ['Embedding and Reinforcement', '/behavioural-change/embedding-and-reinforcement/']
    }
  ];

  var tool = B.create('adkar-tool', 'bct-adkar-v1', {});
  if (!tool) { return; }

  function scores() {
    var s = {};
    STEPS.forEach(function (st) {
      var el = tool.q('[data-adkar="' + st.key + '"]');
      var v = parseInt(el && el.value, 10);
      s[st.key] = isNaN(v) ? null : v;
    });
    return s;
  }

  function analyse(d) {
    var out = { flags: [], steps: [], scores: scores(), patterns: [] };
    var s = out.scores;

    // Stop at the first score of 3 or below — that is the barrier.
    out.barrier = null;
    for (var i = 0; i < STEPS.length; i++) {
      var v = s[STEPS[i].key];
      if (v === null) { break; }
      if (v <= 3) { out.barrier = STEPS[i]; out.barrierIndex = i; break; }
    }

    out.answered = STEPS.filter(function (st) { return s[st.key] !== null; }).length;

    var f = out.flags;

    if (!out.answered) {
      f.push({
        level: 'info',
        title: 'Nothing scored yet',
        body: 'Ask the five questions in order and score each 1–5. Stop at the first low score — that is your barrier, and everything after it is noise until it is cleared.'
      });
      return out;
    }

    if (!out.barrier && out.answered === STEPS.length) {
      f.push({
        level: 'info',
        title: 'No step is blocked',
        body: 'Every step scored above 3. If the behaviour still is not happening, ADKAR is not the right lens — it says little about systems, incentives, power or the physical environment.',
        link: ['COM-B and the Behaviour Change Wheel', '/behavioural-change/com-b-and-the-behaviour-change-wheel/']
      });
    }

    // The main event: does the planned action address the blocked step?
    var action = ACTIONS[d.fields.action];
    if (action && out.barrier) {
      var addresses = action.addresses.indexOf(out.barrier.key) > -1;
      if (!addresses) {
        var target = STEPS.filter(function (st) { return action.addresses.indexOf(st.key) > -1; })
          .map(function (st) { return st.name; }).join(' and ');
        f.push({
          level: 'danger',
          title: 'That will not fix it',
          body: '“' + action.label + '” addresses ' + target + '. Your barrier is ' + out.barrier.name +
                '. The order is strict — you cannot fix a ' + out.barrier.name + ' gap with more ' + target +
                '. This is the most common and most expensive mistake in the model: when people resist, organisations send more training.',
          link: out.barrier.link
        });
      } else {
        f.push({
          level: 'info',
          title: 'That is the right kind of move',
          body: '“' + action.label + '” addresses ' + out.barrier.name + ', which is where you are blocked.'
        });
      }
    } else if (!action && out.barrier) {
      f.push({
        level: 'info',
        title: 'What were you about to do?',
        body: 'Pick your intended next action above and the tool will tell you whether it addresses the step that is actually blocked.'
      });
    }

    if (out.barrier && out.barrierIndex < STEPS.length - 1) {
      f.push({
        level: 'warn',
        title: 'Do not work on the later steps yet',
        body: 'Everything after ' + out.barrier.name + ' is wasted effort until it is cleared. ' +
              STEPS.slice(out.barrierIndex + 1).map(function (st) { return st.name; }).join(', ') +
              ' can wait.'
      });
    }

    if (d.fields.mode === 'A group') {
      PATTERNS.forEach(function (p) {
        if (p.test(s)) { out.patterns.push(p); }
      });
      if (!out.patterns.length && out.answered === STEPS.length) {
        f.push({
          level: 'info',
          title: 'No standard group pattern matched',
          body: 'Sample 10–15 people across roles and score each — the pattern across the sample tells you where the programme is failing, which a single score cannot.'
        });
      }
    }

    // --- next steps ---
    if (out.barrier) {
      out.steps.push({
        text: 'Work on ' + out.barrier.name + ' and nothing else until it clears. ' + out.barrier.helps,
        link: out.barrier.link
      });
    }
    if (d.fields.mode === 'An individual') {
      out.steps.push({ text: 'Ask the five questions of a few more people before you spend anything. One person is a conversation; ten is a diagnosis.' });
    } else {
      out.steps.push({ text: 'Sample 10–15 people across roles rather than the loudest few — the spread is the data.' });
    }
    out.steps.push({
      text: 'Ask the leadership team to privately score themselves on this change. The spread in the room is usually the most revealing data you will get all quarter, and it is often a Desire gap at the top that nobody has said aloud.'
    });
    out.steps.push({
      text: 'Pair this with COM-B before designing. ADKAR tells you where the gap is, not what intervention to use — and it says little about systems, incentives or environment.',
      link: ['COM-B and the Behaviour Change Wheel', '/behavioural-change/com-b-and-the-behaviour-change-wheel/']
    });

    return out;
  }

  // --- rendering -----------------------------------------------------------

  function render(d, r) {
    var e = B.esc, h = [];
    var f = d.fields;

    h.push('<div class="bct-result-head"><h3>' +
      (f.subject ? e(f.subject) : 'ADKAR') + '</h3>' +
      '<p class="bct-complete">' + r.answered + ' of 5 scored</p></div>');

    h.push('<div class="bct-adkar-track">');
    STEPS.forEach(function (st, i) {
      var v = r.scores[st.key];
      var cls = 'is-unscored';
      if (v !== null) { cls = v <= 3 ? 'is-blocked' : 'is-clear'; }
      if (r.barrier && r.barrier.key === st.key) { cls += ' is-barrier'; }
      if (r.barrier && i > r.barrierIndex) { cls += ' is-later'; }
      h.push('<span class="bct-adkar-step ' + cls + '"><strong>' + st.letter + '</strong>' +
        '<span class="bct-adkar-name">' + e(st.name) + '</span>' +
        '<span class="bct-adkar-score">' + (v === null ? '—' : v) + '</span></span>');
    });
    h.push('</div>');

    if (r.barrier) {
      h.push('<div class="bct-primary">');
      h.push('<p class="bct-kicker">Blocked at</p>');
      h.push('<p class="bct-barrier">' + e(r.barrier.name) + ' <span class="bct-score">' + r.scores[r.barrier.key] + '/5</span></p>');
      h.push('<p class="bct-reads">“' + e(r.barrier.state) + '” — ' + e(r.barrier.stuck) + '</p>');
      h.push('<p class="bct-mode-why"><strong>What actually helps:</strong> ' + e(r.barrier.helps) + '</p>');
      h.push('</div>');
    }

    if (r.patterns.length) {
      h.push('<h4>Group pattern</h4>');
      r.patterns.forEach(function (p) {
        h.push('<div class="bct-decode"><p class="bct-decode-type">' + e(p.name) + '</p>' +
          '<p><strong>Meaning:</strong> ' + e(p.meaning) + '</p>' +
          '<p><strong>Fix:</strong> ' + e(p.fix) + ' <a href="' + p.link[1] + '">' + e(p.link[0]) + ' &rarr;</a></p></div>');
      });
    }

    if (r.flags.length) {
      h.push('<h4>What needs attention</h4>');
      r.flags.forEach(function (fl) {
        h.push('<div class="bct-flag bct-flag-' + fl.level + '"><strong>' + e(fl.title) + '</strong><p>' + e(fl.body) + '</p>' +
          (fl.link ? '<p><a href="' + fl.link[1] + '">' + e(fl.link[0]) + ' &rarr;</a></p>' : '') + '</div>');
      });
    }

    if (r.steps.length) {
      h.push('<h4>Your next steps</h4><ol class="bct-steps">');
      r.steps.forEach(function (st) {
        h.push('<li>' + e(st.text) + (st.link ? ' <a href="' + st.link[1] + '">' + e(st.link[0]) + ' &rarr;</a>' : '') + '</li>');
      });
      h.push('</ol>');
    }

    return h.join('');
  }

  // --- exports -------------------------------------------------------------

  function docHtml(d, r) {
    var e = B.esc, f = d.fields, b = [];
    b.push('<h1>ADKAR — where they are stuck</h1>');
    b.push('<p><strong>Change:</strong> ' + e(f.change_name) + '<br><strong>Assessed:</strong> ' + e(f.subject) + '</p>');
    b.push(B.htmlTable(['Step', 'Score', 'Internal state'],
      STEPS.map(function (st) { return [st.name, r.scores[st.key] === null ? '—' : r.scores[st.key], st.state]; })));
    if (r.barrier) {
      b.push('<h2>Blocked at ' + e(r.barrier.name) + '</h2>');
      b.push('<p>' + e(r.barrier.stuck) + '</p>');
      b.push('<p><strong>What actually helps:</strong> ' + e(r.barrier.helps) + '</p>');
    }
    if (r.patterns.length) {
      b.push('<h2>Group pattern</h2>');
      b.push(B.htmlTable(['Pattern', 'Meaning', 'Fix'],
        r.patterns.map(function (p) { return [p.name, p.meaning, p.fix]; })));
    }
    if (r.flags.length) {
      b.push('<h2>What needs attention</h2>');
      r.flags.forEach(function (fl) { b.push('<p><strong>' + e(fl.title) + '</strong><br>' + e(fl.body) + '</p>'); });
    }
    b.push('<h2>Next steps</h2><ol>');
    r.steps.forEach(function (st) { b.push('<li>' + e(st.text) + '</li>'); });
    b.push('</ol>');
    b.push('<p style="color:#666;font-size:9pt">Generated from ADKAR at kevstemplates.com</p>');
    return B.wordDoc('ADKAR — where they are stuck', b.join(''));
  }

  function markdown(d, r) {
    var f = d.fields, m = [];
    m.push('---');
    m.push('title: "ADKAR — ' + (f.change_name || 'untitled').replace(/"/g, '') + '"');
    m.push('type: adkar');
    m.push('---');
    m.push('');
    m.push(B.mdTable(['Step', 'Score', 'Internal state'],
      STEPS.map(function (st) { return [st.name, r.scores[st.key] === null ? '—' : r.scores[st.key], st.state]; })));
    m.push('');
    if (r.barrier) {
      m.push('## Blocked at ' + r.barrier.name);
      m.push('');
      m.push(r.barrier.stuck);
      m.push('');
      m.push('**What actually helps:** ' + r.barrier.helps);
      m.push('');
    }
    if (r.flags.length) {
      m.push('## What needs attention');
      m.push('');
      r.flags.forEach(function (fl) { m.push('- **' + fl.title + '** — ' + fl.body); });
      m.push('');
    }
    m.push('## Next steps');
    m.push('');
    r.steps.forEach(function (st, i) { m.push((i + 1) + '. ' + st.text); });
    m.push('');
    m.push('See also [[COM-B and the Behaviour Change Wheel]] · [[Resistance Decoder]].');
    return m.join('\n');
  }

  // --- wiring --------------------------------------------------------------

  var STORE = 'bct-adkar-v1';
  function snapshot() {
    var d = tool.collect();
    d.adkar = scores();
    return d;
  }
  function restoreAll(data) {
    tool.restore(data);
    Object.keys((data && data.adkar) || {}).forEach(function (k) {
      var el = tool.q('[data-adkar="' + k + '"]');
      if (el && data.adkar[k] !== null) { el.value = data.adkar[k]; }
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

  function analysis() {
    var d = snapshot();
    return { d: d, r: analyse(d) };
  }

  function run() {
    var a = analysis();
    var out = tool.q('#adkar-output');
    out.innerHTML = render(a.d, a.r);
    out.hidden = false;
    tool.q('#adkar-exports').hidden = false;
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return a;
  }

  tool.root.addEventListener('input', function () { persist(false); });
  tool.root.addEventListener('change', function () { persist(false); });

  tool.wire({
    '#adkar-generate': run,
    '#adkar-save': function () { persist(true); },
    '#adkar-word': function () {
      var a = analysis();
      B.download(B.slugify(a.d.fields.change_name, 'adkar') + '.doc', 'application/msword', docHtml(a.d, a.r));
    },
    '#adkar-markdown': function () {
      var a = analysis();
      B.download(B.slugify(a.d.fields.change_name, 'adkar') + '.md', 'text/markdown;charset=utf-8', markdown(a.d, a.r));
    },
    '#adkar-json': function () {
      var d = snapshot();
      B.download(B.slugify(d.fields.change_name, 'adkar') + '.json', 'application/json', JSON.stringify(d, null, 2));
    },
    '#adkar-import': function (e) {
      tool.importJson(e.target.files && e.target.files[0], function (data) { restoreAll(data); run(); });
    },
    '#adkar-print': function () { run(); window.print(); },
    '#adkar-clear': function () {
      tool.clear(function () {
        try { localStorage.removeItem(STORE); } catch (e) { /* ignore */ }
        tool.q('#adkar-output').hidden = true;
        tool.q('#adkar-exports').hidden = true;
      });
    }
  });

  try {
    var raw = localStorage.getItem(STORE);
    if (raw) { restoreAll(JSON.parse(raw)); }
  } catch (e) { /* ignore corrupt state */ }

  window.BCTAdkar = {
    steps: STEPS,
    actions: ACTIONS,
    collect: snapshot,
    analyse: analyse,
    run: run,
    markdown: function () { var a = analysis(); return markdown(a.d, a.r); },
    doc: function () { var a = analysis(); return docHtml(a.d, a.r); }
  };
}());
