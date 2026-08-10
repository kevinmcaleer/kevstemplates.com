/* Habit Loop / drift explainer — interactive tool
 * Mirrors /behavioural-change/habit-loop-and-behavioural-drift/. Browser only.
 *
 * The early spike is not adoption — it is novelty plus surveillance. The real
 * number is week 12, when nobody is looking.
 */
(function () {
  'use strict';

  var B = window.BCT;
  if (!B) { return; }

  var CAUSES = [
    {
      id: 'attention',
      name: 'Attention withdrawal',
      sign: 'Adoption falls the week the programme team stands down',
      why: 'Nothing was wrong with the behaviour — the thing holding it up was someone watching. When that stops, so does the behaviour, because nothing structural replaced the attention.',
      counter: 'Hand to the line with a named owner and a live metric before you leave, not after.',
      link: ['Embedding and Reinforcement', '/behavioural-change/embedding-and-reinforcement/']
    },
    {
      id: 'effort',
      name: 'Effort accumulation',
      sign: '“It is fine normally, but not when we are busy”',
      why: 'The new way is only easier on an average day. On the worst day people revert, the exception becomes the excuse, and the excuse becomes the norm.',
      counter: 'The new way must be easier than the old on the worst day, not the average one. Test your process at peak load, understaffed, on a Friday.',
      link: ['EAST — Easy Attractive Social Timely', '/behavioural-change/east-easy-attractive-social-timely/'],
      killer: true
    },
    {
      id: 'reward',
      name: 'Reward extinction',
      sign: 'Early recognition stopped, and the behaviour stopped with it',
      why: 'The behaviour was running on programme-supplied recognition. Programmes end; the recognition ended with it, and nothing in the standing rhythm picked it up.',
      counter: 'Move recognition into the standing management rhythm rather than the programme.',
      link: ['Embedding and Reinforcement', '/behavioural-change/embedding-and-reinforcement/']
    },
    {
      id: 'competing',
      name: 'Competing change',
      sign: 'A new priority landed and displaced it',
      why: 'Capacity is finite. A newer initiative arrived with more attention attached and took the space this one occupied.',
      counter: 'Sequence changes, and show the sponsor the full list of what is live.',
      link: ['Change Readiness Assessment — Interactive', '/behavioural-change/readiness-tool/']
    }
  ];

  var STRUCTURAL = [
    'System defaults and mandatory fields — the strongest lever available',
    'The standing meeting agenda — if it is not discussed, it is not real',
    'Onboarding — new joiners should never learn the old way exists',
    'Objectives and performance conversations',
    'Whatever the leadership team asks about — organisations optimise for what gets asked'
  ];

  var tool = B.create('drift-tool', 'bct-drift-v1', {});
  if (!tool) { return; }

  function analyse(d) {
    var out = { causes: [], flags: [], steps: [], structural: STRUCTURAL };

    CAUSES.forEach(function (c) {
      var el = tool.q('[data-cause="' + c.id + '"]');
      if (el && el.checked) { out.causes.push(c); }
    });

    var f = out.flags;
    var shape = d.fields.shape;

    if (!out.causes.length && !shape) {
      f.push({
        level: 'info',
        title: 'Nothing selected yet',
        body: 'Pick the shape your adoption curve made, and tick the signs you recognise.'
      });
      return out;
    }

    if (shape === 'Spiked, then fell away') {
      f.push({
        level: 'info',
        title: 'The spike was never adoption',
        body: 'It was novelty plus surveillance — everyone knows they are being watched in week one. The real number is what you see at week 12 when nobody is looking, and that lower number is your true baseline rather than a failure.'
      });
    }

    if (shape === 'Never really started') {
      f.push({
        level: 'warn',
        title: 'This is not drift',
        body: 'Drift is a behaviour that started and decayed. If it never started, you have a barrier that was never cleared, and reinforcement will not touch it.',
        link: ['Behavioural Diagnosis Canvas — Interactive', '/behavioural-change/diagnosis-tool/']
      });
    }

    if (d.fields.reported === 'Yes') {
      f.push({
        level: 'danger',
        title: 'You reported an early number as success',
        body: 'Never report week-2 adoption as success. You will be held to a number that was always going to fall, and the fall will read as failure rather than as the true baseline arriving.'
      });
    }

    var killer = out.causes.filter(function (c) { return c.killer; });
    if (killer.length) {
      f.push({
        level: 'danger',
        title: 'Effort accumulation is the killer',
        body: 'Of the four, this is the one that ends behaviours permanently. Test your process at peak load, understaffed, on a Friday. If it fails then it will fail for good, because the exception becomes the excuse and the excuse becomes the norm.'
      });
    }

    if (d.fields.dates !== 'Yes') {
      f.push({
        level: 'warn',
        title: 'Set the drift check dates before go-live, not after',
        body: 'Booked afterwards, they get dropped when the team is stood down — which is exactly the moment they matter.',
        link: ['Drift Check — 30 60 90', '/behavioural-change/drift-check-30-60-90/']
      });
    }

    if (out.causes.length > 1) {
      f.push({
        level: 'info',
        title: out.causes.length + ' causes at once',
        body: 'They compound. Take the structural fixes first — they hold when attention does not.'
      });
    }

    // --- next steps ---
    out.causes.forEach(function (c) {
      out.steps.push({ text: c.name + ': ' + c.counter, link: c.link });
    });
    out.steps.push({
      text: 'Plan a deliberate week-8 re-intervention. Most programmes have disbanded by then, which is precisely when reinforcement is worth most.'
    });
    out.steps.push({
      text: 'Get the behaviour into a system default or a mandatory field. Structural reinforcement is the only kind that survives the programme.',
      link: ['Embedding and Reinforcement', '/behavioural-change/embedding-and-reinforcement/']
    });
    out.steps.push({
      text: 'Name who senior keeps asking about it, and put it in their standing agenda. The behaviour will last exactly as long as someone senior keeps asking.'
    });

    return out;
  }

  // --- rendering -----------------------------------------------------------

  function render(d, r) {
    var e = B.esc, h = [];
    var f = d.fields;

    h.push('<div class="bct-result-head"><h3>' +
      (f.change_name ? e(f.change_name) : 'Drift') + '</h3>' +
      '<p class="bct-complete">' + r.causes.length + ' of 4 causes</p></div>');

    if (f.shape) {
      h.push('<div class="bct-primary">');
      h.push('<p class="bct-kicker">Your curve</p>');
      h.push('<p class="bct-barrier">' + e(f.shape) + '</p>');
      h.push('<p class="bct-reads">The early spike is not adoption. It is novelty plus surveillance — everyone knows they are being watched in week one. The real number is week 12, when nobody is looking.</p>');
      h.push('</div>');
    }

    if (r.causes.length) {
      h.push('<h4>What is causing it</h4>');
      r.causes.forEach(function (c) {
        h.push('<div class="bct-decode' + (c.killer ? ' is-killer' : '') + '">');
        h.push('<p class="bct-decode-type">' + e(c.name) + (c.killer ? ' <span class="bct-score">the killer</span>' : '') + '</p>');
        h.push('<p class="bct-decode-heard">“' + e(c.sign) + '”</p>');
        h.push('<p><strong>Why it happens:</strong> ' + e(c.why) + '</p>');
        h.push('<p><strong>Counter:</strong> ' + e(c.counter) +
          ' <a href="' + c.link[1] + '">' + e(c.link[0]) + ' &rarr;</a></p>');
        h.push('</div>');
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

      h.push('<h4>Make it structural</h4>');
      h.push('<p class="bct-help">The most reliable reinforcement is not motivational. Get the behaviour into:</p><ul class="bct-steps">');
      r.structural.forEach(function (s) { h.push('<li>' + e(s) + '</li>'); });
      h.push('</ul>');
      h.push('<blockquote class="bct-reframe">The blunt version for a sponsor: the behaviour will last exactly as long as someone senior keeps asking about it. Design who that is, and put it in their standing agenda.</blockquote>');
    }

    return h.join('');
  }

  // --- exports -------------------------------------------------------------

  function docHtml(d, r) {
    var e = B.esc, f = d.fields, b = [];
    b.push('<h1>Behavioural drift — what is causing it</h1>');
    b.push('<p><strong>Change:</strong> ' + e(f.change_name) + '<br><strong>Curve:</strong> ' + e(f.shape) + '</p>');
    b.push('<p>The early spike is not adoption. It is novelty plus surveillance. The real number is week 12, when nobody is looking.</p>');
    b.push('<h2>Causes</h2>');
    b.push(B.htmlTable(['Cause', 'Sign', 'Why it happens', 'Counter'],
      r.causes.map(function (c) { return [c.name, c.sign, c.why, c.counter]; })));
    if (r.flags.length) {
      b.push('<h2>What needs attention</h2>');
      r.flags.forEach(function (fl) { b.push('<p><strong>' + e(fl.title) + '</strong><br>' + e(fl.body) + '</p>'); });
    }
    b.push('<h2>Next steps</h2><ol>');
    r.steps.forEach(function (st) { b.push('<li>' + e(st.text) + '</li>'); });
    b.push('</ol>');
    b.push('<h2>Make it structural</h2><ul>');
    r.structural.forEach(function (s) { b.push('<li>' + e(s) + '</li>'); });
    b.push('</ul>');
    b.push('<p style="color:#666;font-size:9pt">Generated from Habit Loop and Behavioural Drift at kevstemplates.com</p>');
    return B.wordDoc('Behavioural drift', b.join(''));
  }

  function markdown(d, r) {
    var f = d.fields, m = [];
    m.push('---');
    m.push('title: "Drift — ' + (f.change_name || 'untitled').replace(/"/g, '') + '"');
    m.push('type: drift');
    m.push('---');
    m.push('');
    m.push('> The early spike is not adoption. It is novelty plus surveillance. The real number is week 12.');
    m.push('');
    m.push('## Causes');
    m.push('');
    m.push(B.mdTable(['Cause', 'Sign', 'Counter'],
      r.causes.map(function (c) { return [c.name, c.sign, c.counter]; })));
    m.push('');
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
    m.push('See also [[Drift Check — 30 60 90]] · [[Embedding and Reinforcement]].');
    return m.join('\n');
  }

  // --- wiring --------------------------------------------------------------

  var STORE = 'bct-drift-v1';
  function snapshot() {
    var d = tool.collect();
    d.causes = {};
    tool.qa('[data-cause]').forEach(function (el) {
      if (el.checked) { d.causes[el.dataset.cause] = 1; }
    });
    return d;
  }
  function restoreAll(data) {
    tool.restore(data);
    tool.qa('[data-cause]').forEach(function (el) {
      el.checked = !!((data && data.causes) || {})[el.dataset.cause];
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
    var out = tool.q('#drift-output');
    out.innerHTML = render(a.d, a.r);
    out.hidden = false;
    tool.q('#drift-exports').hidden = false;
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return a;
  }

  tool.root.addEventListener('input', function () { persist(false); });
  tool.root.addEventListener('change', function () { persist(false); });

  tool.wire({
    '#drift-generate': run,
    '#drift-save': function () { persist(true); },
    '#drift-word': function () {
      var a = analysis();
      B.download(B.slugify(a.d.fields.change_name, 'drift') + '.doc', 'application/msword', docHtml(a.d, a.r));
    },
    '#drift-markdown': function () {
      var a = analysis();
      B.download(B.slugify(a.d.fields.change_name, 'drift') + '.md', 'text/markdown;charset=utf-8', markdown(a.d, a.r));
    },
    '#drift-json': function () {
      var d = snapshot();
      B.download(B.slugify(d.fields.change_name, 'drift') + '.json', 'application/json', JSON.stringify(d, null, 2));
    },
    '#drift-import': function (e) {
      tool.importJson(e.target.files && e.target.files[0], function (data) { restoreAll(data); run(); });
    },
    '#drift-print': function () { run(); window.print(); },
    '#drift-clear': function () {
      tool.clear(function () {
        tool.qa('[data-cause]').forEach(function (el) { el.checked = false; });
        try { localStorage.removeItem(STORE); } catch (e) { /* ignore */ }
        tool.q('#drift-output').hidden = true;
        tool.q('#drift-exports').hidden = true;
      });
    }
  });

  try {
    var raw = localStorage.getItem(STORE);
    if (raw) { restoreAll(JSON.parse(raw)); }
  } catch (e) { /* ignore corrupt state */ }

  window.BCTDrift = {
    causes: CAUSES,
    collect: snapshot,
    analyse: analyse,
    run: run,
    markdown: function () { var a = analysis(); return markdown(a.d, a.r); },
    doc: function () { var a = analysis(); return docHtml(a.d, a.r); }
  };
}());
