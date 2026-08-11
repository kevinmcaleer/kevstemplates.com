/* Diffusion of Innovations — interactive tool
 * Mirrors /behavioural-change/diffusion-of-innovations/. Browser only.
 *
 * Answers the question every rollout faces: who first? The answer is almost
 * never the loudest sceptic, and almost always the Early Adopters.
 */
(function () {
  'use strict';

  var B = window.BCT;
  if (!B) { return; }

  var GROUPS = [
    {
      id: 'innovators', name: 'Innovators', pct: '2.5%',
      needs: 'Novelty, early access',
      use: 'Useful for testing, but poor advocates — peers see them as unrepresentative enthusiasts.',
      warnAsTarget: 'Innovators are poor advocates. Their endorsement does not transfer, because peers discount them as enthusiasts who would adopt anything. Use them to test, then let Early Adopters carry it.'
    },
    {
      id: 'early_adopters', name: 'Early Adopters', pct: '13.5%',
      needs: 'To be seen as ahead, and respected',
      use: 'Your target. Opinion leaders — everything hinges on them.',
      target: true
    },
    {
      id: 'early_majority', name: 'Early Majority', pct: '34%',
      needs: 'Proof it works here, with people like them',
      use: 'Will not move until Early Adopters vouch.',
      warnAsTarget: 'The Early Majority will not move until Early Adopters have vouched for it. Targeting them first means asking for proof you have not generated yet.'
    },
    {
      id: 'late_majority', name: 'Late Majority', pct: '34%',
      needs: 'Norms, and the old option becoming inconvenient',
      use: 'Move when it is clearly the majority behaviour.',
      warnAsTarget: 'The Late Majority move on norms, not argument. Until the new way is visibly the majority behaviour, there is nothing here for your effort to work with.'
    },
    {
      id: 'laggards', name: 'Laggards', pct: '16%',
      needs: 'Necessity',
      use: 'Do not spend your energy here.',
      warnAsTarget: 'Do not spend your energy here. Laggards move on necessity — when the old route is gone — and every hour spent on them is an hour not spent generating the proof that would move everyone else.'
    }
  ];

  var ATTRIBUTES = [
    {
      key: 'advantage', name: 'Relative advantage',
      question: 'Is it visibly better for the user, not just the organisation?',
      fix: 'If the user cannot name what they get out of it, you have a benefits problem rather than a comms problem. Find the individual benefit or change the design.',
      link: ['Behavioural Diagnosis Canvas — Interactive', '/behavioural-change/diagnosis-tool/']
    },
    {
      key: 'compatibility', name: 'Compatibility',
      question: 'Does it fit existing values and ways of working?',
      fix: 'Reduce the distance between the new way and how people already work, or name the conflict openly rather than letting people discover it.',
      link: ['Resistance Decoder — Interactive', '/behavioural-change/resistance-tool/']
    },
    {
      key: 'complexity', name: 'Simplicity',
      question: 'How easy is it to understand and use? (5 = simple)',
      fix: 'Take steps out. Complexity is the one attribute you can almost always design down, and it is cheaper than any campaign.',
      link: ['EAST — Easy Attractive Social Timely', '/behavioural-change/east-easy-attractive-social-timely/']
    },
    {
      key: 'trialability', name: 'Trialability',
      question: 'Can people try it without commitment or risk?',
      fix: 'Create a way to try it that costs nothing to abandon. A reversible trial converts far more people than a persuasive argument.',
      link: ['Pilot Design and Experiment Card', '/behavioural-change/pilot-design-and-experiment-card/']
    },
    {
      key: 'observability', name: 'Observability',
      question: 'Can others see the results?',
      fix: 'Make the doing and the benefit visible — who is doing it and what they are getting. This is the most commonly neglected attribute, and diffusion stalls without it regardless of how good the change is.',
      link: ['Social Norms and Influence', '/behavioural-change/social-norms-and-influence/'],
      neglected: true
    }
  ];

  // The markers that identify an Early Adopter — not the org chart.
  var MARKERS = [
    { key: 'asked', label: 'Others ask them before deciding' },
    { key: 'competence', label: 'Respected for competence, not just seniority' },
    { key: 'frustrated', label: 'Already frustrated with the current way' },
    { key: 'connected', label: 'Socially connected across teams' },
    { key: 'credible', label: 'Credible to the sceptics — a bit critical themselves' }
  ];

  var CANDIDATE_ROWS = 8;

  var WAVES = [
    ['0 — Pilot', 'One team, high early-adopter density, sympathetic manager', 'Learn and fix. Expect to change the design.'],
    ['1', 'Early adopters across sites', 'Generate local proof stories'],
    ['2', 'Early majority, region by region', 'Momentum; publish adoption trends'],
    ['3', 'Late majority', 'Norms, and the old route made inconvenient'],
    ['4', 'Stragglers', 'Manager-led, individual, quiet']
  ];

  var tool = B.create('dif-tool', 'bct-diffusion-v1', {});
  if (!tool) { return; }

  function attrScores() {
    var s = {};
    ATTRIBUTES.forEach(function (a) {
      var el = tool.q('[data-attr="' + a.key + '"]');
      var v = parseInt(el && el.value, 10);
      s[a.key] = isNaN(v) ? null : v;
    });
    return s;
  }

  function candidates() {
    var list = [];
    for (var i = 0; i < CANDIDATE_ROWS; i++) {
      var nameEl = tool.q('[data-cand-name="' + i + '"]');
      var name = nameEl && nameEl.value ? nameEl.value.trim() : '';
      var marks = MARKERS.filter(function (m) {
        var el = tool.q('[data-cand="' + i + '-' + m.key + '"]');
        return el && el.checked;
      });
      if (name || marks.length) {
        list.push({ name: name || '(unnamed)', markers: marks, score: marks.length });
      }
    }
    return list;
  }

  function analyse(d) {
    var out = { flags: [], steps: [], waves: WAVES, attributes: [], candidates: [] };
    var s = attrScores();

    ATTRIBUTES.forEach(function (a) {
      out.attributes.push({ def: a, score: s[a.key] });
    });
    var scored = out.attributes.filter(function (a) { return a.score !== null; });
    out.blockers = scored.filter(function (a) { return a.score <= 2; });
    if (scored.length) {
      var min = Math.min.apply(null, scored.map(function (a) { return a.score; }));
      out.weakest = scored.filter(function (a) { return a.score === min; });
    }

    out.candidates = candidates().sort(function (a, b) { return b.score - a.score; });
    out.network = out.candidates.filter(function (c) { return c.score >= 3; });

    var f = out.flags;

    if (!scored.length && !out.candidates.length) {
      f.push({
        level: 'info',
        title: 'Nothing entered yet',
        body: 'Score the five attributes and list the people others actually go to. Both feed the same question: who first?'
      });
      return out;
    }

    // --- the rule most rollouts break ---
    if (d.fields.start_sceptic === 'Yes') {
      if (d.fields.sceptic_right === 'Yes') {
        f.push({
          level: 'info',
          title: 'That is not resistance, it is free consultancy',
          body: 'If the sceptic is technically right about a design flaw, they are the most valuable input you have. Fix the design and credit them — then start the rollout with the Early Adopters.',
          link: ['Resistance Decoder — Interactive', '/behavioural-change/resistance-tool/']
        });
      } else {
        f.push({
          level: 'danger',
          title: 'Do not start with the loudest sceptic',
          body: 'There is a persistent instinct — often from a well-meaning exec — to win over the most vocal critic first. In practice you spend disproportionate effort, usually fail, and hand the sceptic a public platform during the fragile early phase. Start with the Early Adopters and build visible local proof. The sceptic is far more movable when 60% of their peers have already moved and the argument has been settled without them.'
        });
      }
    }

    var target = GROUPS.filter(function (g) { return g.id === d.fields.target_group; })[0];
    if (target && target.warnAsTarget) {
      f.push({
        level: target.id === 'laggards' || target.id === 'innovators' ? 'danger' : 'warn',
        title: 'Starting with the ' + target.name + ' will not work',
        body: target.warnAsTarget
      });
    } else if (target && target.target) {
      f.push({
        level: 'info',
        title: 'Early Adopters is the right first target',
        body: 'Opinion leaders — everything hinges on them. They need to be seen as ahead, and respected, so give them something to be visibly first at.'
      });
    }

    // --- attribute blockers ---
    out.blockers.forEach(function (a) {
      f.push({
        level: 'danger',
        title: a.def.name + ' is a spread blocker (' + a.score + '/5)',
        body: a.def.fix + ' Anything at 2 or below is a spread blocker you can design around before launch — usually more cheaply than any comms campaign.',
        link: a.def.link
      });
    });

    var obs = out.attributes.filter(function (a) { return a.def.neglected; })[0];
    if (obs && obs.score !== null && obs.score <= 3 && !out.blockers.some(function (a) { return a.def.neglected; })) {
      f.push({
        level: 'warn',
        title: 'Observability is the most commonly neglected attribute',
        body: 'If nobody can see who is doing the new thing and what they are getting from it, diffusion stalls regardless of how good it is.',
        link: obs.def.link
      });
    }

    // --- the network ---
    if (!out.candidates.length) {
      f.push({
        level: 'warn',
        title: 'You have not identified your Early Adopters',
        body: 'Not the org chart. Look for the people others ask before deciding, respected for competence rather than seniority, already frustrated with the current way, connected across teams, and credible to the sceptics.'
      });
    } else if (!out.network.length) {
      f.push({
        level: 'warn',
        title: 'No candidate carries three or more markers',
        body: 'The people you have listed may be available rather than influential. Run the sociogram before you commit the pilot to them.'
      });
    }

    if (d.fields.sociogram !== 'Yes') {
      f.push({
        level: 'info',
        title: 'Run the two-question sociogram',
        body: 'Ask 15 people who they go to when they are not sure how to do something here, and whose opinion on this change they would actually take seriously. Tally the names. The top five to eight are your network, and they are frequently not who leadership expected — which is what makes the list worth bringing to the sponsor.',
        link: ['Champion Network Playbook', '/behavioural-change/champion-network-playbook/']
      });
    }

    if (/laggard|resist|sceptic|difficult|slow/i.test(d.fields.wave_labels || '')) {
      f.push({
        level: 'danger',
        title: 'Never label a wave by attitude',
        body: 'Never announce a wave plan that implies Wave 4 people are laggards. Label waves by geography or function — the moment people work out they are in the “laggards” wave, you have created the attitude you were describing.'
      });
    }

    // --- next steps ---
    if (out.network.length) {
      out.steps.push({
        text: 'Start with ' + out.network.slice(0, 3).map(function (c) { return c.name; }).join(', ') +
              ' — they carry the most Early Adopter markers. Give them something to be visibly first at.',
        link: ['Champion Network Playbook', '/behavioural-change/champion-network-playbook/']
      });
    }
    if (out.blockers.length) {
      out.steps.push({
        text: 'Fix ' + out.blockers.map(function (a) { return a.def.name.toLowerCase(); }).join(' and ') +
              ' before launch rather than after. A spread blocker is cheaper to design out than to communicate around.'
      });
    }
    out.steps.push({
      text: 'Pick one pilot team with high early-adopter density and a sympathetic manager, and expect to change the design as a result.',
      link: ['Pilot Design and Experiment Card', '/behavioural-change/pilot-design-and-experiment-card/']
    });
    out.steps.push({
      text: 'Publish adoption trends rather than totals once Wave 2 starts. The Early Majority need proof it works here, with people like them.',
      link: ['Social Norms and Influence', '/behavioural-change/social-norms-and-influence/']
    });
    out.steps.push({ text: 'Label your waves by geography or function, and never by attitude.' });

    return out;
  }

  // --- rendering -----------------------------------------------------------

  function render(d, r) {
    var e = B.esc, h = [];
    var f = d.fields;

    h.push('<div class="bct-result-head"><h3>' +
      (f.change_name ? e(f.change_name) : 'Who first?') + '</h3>' +
      '<p class="bct-complete">' + r.network.length + ' in your network</p></div>');

    if (r.network.length) {
      h.push('<div class="bct-primary">');
      h.push('<p class="bct-kicker">Start with</p>');
      h.push('<p class="bct-barrier">' + e(r.network[0].name) +
        ' <span class="bct-score">' + r.network[0].score + '/5</span></p>');
      h.push('<p class="bct-reads">Opinion leaders are the whole game — the Early Majority will not move until these people have vouched for it.</p>');
      h.push('</div>');
    }

    if (r.candidates.length) {
      h.push('<h4>Your candidates, ranked</h4>');
      h.push('<table class="table table-sm bct-scores"><thead><tr><th>Person</th><th>Markers</th><th class="bct-narrow">Score</th></tr></thead><tbody>');
      r.candidates.forEach(function (c) {
        h.push('<tr class="' + (c.score >= 3 ? 'is-network' : '') + '"><td>' + e(c.name) + '</td>' +
          '<td>' + (c.markers.length
            ? c.markers.map(function (m) { return '<span class="bct-fn">' + e(m.label) + '</span>'; }).join(' ')
            : '<em class="bct-missing">none ticked</em>') + '</td>' +
          '<td>' + c.score + '/5</td></tr>');
      });
      h.push('</tbody></table>');
    }

    var scored = r.attributes.filter(function (a) { return a.score !== null; });
    if (scored.length) {
      h.push('<h4>Will it spread?</h4>');
      h.push('<table class="table table-sm bct-scores"><thead><tr><th>Attribute</th><th class="bct-narrow">Score</th><th>Profile</th></tr></thead><tbody>');
      r.attributes.forEach(function (a) {
        var pct = a.score === null ? 0 : Math.round((a.score / 5) * 100);
        var cls = a.score === null ? '' : (a.score <= 2 ? 'is-stop' : (a.score <= 3 ? 'is-low' : ''));
        h.push('<tr><td>' + e(a.def.name) + '</td><td>' + (a.score === null ? '—' : a.score + '/5') + '</td>' +
          '<td><span class="bct-bar ' + cls + '"><span style="width:' + pct + '%"></span></span></td></tr>');
      });
      h.push('</tbody></table>');
    }

    h.push('<h4>Your wave plan</h4>');
    h.push('<table class="table table-sm bct-scores"><thead><tr><th class="bct-narrow">Wave</th><th>Who</th><th>Aim</th></tr></thead><tbody>');
    r.waves.forEach(function (w) {
      h.push('<tr><td>' + e(w[0]) + '</td><td>' + e(w[1]) + '</td><td>' + e(w[2]) + '</td></tr>');
    });
    h.push('</tbody></table>');
    h.push('<p class="bct-help">Label these by geography or function before you publish them, never by attitude.</p>');

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
    b.push('<h1>Diffusion — who first?</h1>');
    b.push('<p><strong>Change:</strong> ' + e(f.change_name) + '</p>');
    b.push('<h2>Your candidates, ranked</h2>');
    b.push(B.htmlTable(['Person', 'Markers', 'Score'],
      r.candidates.map(function (c) {
        return [c.name, c.markers.map(function (m) { return m.label; }).join('; '), c.score + '/5'];
      })));
    b.push('<h2>Will it spread?</h2>');
    b.push(B.htmlTable(['Attribute', 'Score', 'Question'],
      r.attributes.map(function (a) { return [a.def.name, a.score === null ? '—' : a.score + '/5', a.def.question]; })));
    b.push('<h2>Wave plan</h2>');
    b.push(B.htmlTable(['Wave', 'Who', 'Aim'], r.waves.map(function (w) { return [w[0], w[1], w[2]]; })));
    b.push('<p>Label waves by geography or function, never by attitude.</p>');
    if (r.flags.length) {
      b.push('<h2>What needs attention</h2>');
      r.flags.forEach(function (fl) { b.push('<p><strong>' + e(fl.title) + '</strong><br>' + e(fl.body) + '</p>'); });
    }
    b.push('<h2>Next steps</h2><ol>');
    r.steps.forEach(function (st) { b.push('<li>' + e(st.text) + '</li>'); });
    b.push('</ol>');
    b.push('<p style="color:#666;font-size:9pt">Generated from Diffusion of Innovations at kevstemplates.com</p>');
    return B.wordDoc('Diffusion — who first?', b.join(''));
  }

  function markdown(d, r) {
    var f = d.fields, m = [];
    m.push('---');
    m.push('title: "Diffusion — ' + (f.change_name || 'untitled').replace(/"/g, '') + '"');
    m.push('type: diffusion');
    m.push('---');
    m.push('');
    m.push('> Do not start with the loudest sceptic. Start with the Early Adopters and build visible local proof.');
    m.push('');
    m.push('## Your candidates, ranked');
    m.push('');
    m.push(B.mdTable(['Person', 'Markers', 'Score'],
      r.candidates.map(function (c) {
        return [c.name, c.markers.map(function (x) { return x.label; }).join('; '), c.score + '/5'];
      })));
    m.push('');
    m.push('## Will it spread?');
    m.push('');
    m.push(B.mdTable(['Attribute', 'Score', 'Question'],
      r.attributes.map(function (a) { return [a.def.name, a.score === null ? '—' : a.score + '/5', a.def.question]; })));
    m.push('');
    m.push('## Wave plan');
    m.push('');
    m.push(B.mdTable(['Wave', 'Who', 'Aim'], r.waves.map(function (w) { return [w[0], w[1], w[2]]; })));
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
    m.push('See also [[Champion Network Playbook]] · [[Social Norms and Influence]] · [[Pilot Design and Experiment Card]].');
    return m.join('\n');
  }

  // --- wiring --------------------------------------------------------------

  var STORE = 'bct-diffusion-v1';
  function snapshot() {
    var d = tool.collect();
    d.attributes = attrScores();
    d.candidates = [];
    for (var i = 0; i < CANDIDATE_ROWS; i++) {
      var nameEl = tool.q('[data-cand-name="' + i + '"]');
      var row = { name: nameEl ? nameEl.value : '', markers: {} };
      MARKERS.forEach(function (m) {
        var el = tool.q('[data-cand="' + i + '-' + m.key + '"]');
        if (el && el.checked) { row.markers[m.key] = 1; }
      });
      d.candidates.push(row);
    }
    return d;
  }

  function restoreAll(data) {
    tool.restore(data);
    Object.keys((data && data.attributes) || {}).forEach(function (k) {
      var el = tool.q('[data-attr="' + k + '"]');
      if (el && data.attributes[k] !== null) { el.value = data.attributes[k]; }
    });
    ((data && data.candidates) || []).forEach(function (row, i) {
      var nameEl = tool.q('[data-cand-name="' + i + '"]');
      if (nameEl && row.name) { nameEl.value = row.name; }
      MARKERS.forEach(function (m) {
        var el = tool.q('[data-cand="' + i + '-' + m.key + '"]');
        if (el) { el.checked = !!(row.markers || {})[m.key]; }
      });
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
    var out = tool.q('#dif-output');
    out.innerHTML = render(a.d, a.r);
    out.hidden = false;
    tool.q('#dif-exports').hidden = false;
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return a;
  }

  tool.root.addEventListener('input', function () { persist(false); });
  tool.root.addEventListener('change', function () { persist(false); });

  tool.wire({
    '#dif-generate': run,
    '#dif-save': function () { persist(true); },
    '#dif-word': function () {
      var a = analysis();
      B.download(B.slugify(a.d.fields.change_name, 'diffusion') + '.doc', 'application/msword', docHtml(a.d, a.r));
    },
    '#dif-markdown': function () {
      var a = analysis();
      B.download(B.slugify(a.d.fields.change_name, 'diffusion') + '.md', 'text/markdown;charset=utf-8', markdown(a.d, a.r));
    },
    '#dif-json': function () {
      var d = snapshot();
      B.download(B.slugify(d.fields.change_name, 'diffusion') + '.json', 'application/json', JSON.stringify(d, null, 2));
    },
    '#dif-import': function (e) {
      tool.importJson(e.target.files && e.target.files[0], function (data) { restoreAll(data); run(); });
    },
    '#dif-print': function () { run(); window.print(); },
    '#dif-clear': function () {
      tool.clear(function () {
        tool.qa('[data-cand]').forEach(function (el) { el.checked = false; });
        try { localStorage.removeItem(STORE); } catch (e) { /* ignore */ }
        tool.q('#dif-output').hidden = true;
        tool.q('#dif-exports').hidden = true;
      });
    }
  });

  try {
    var raw = localStorage.getItem(STORE);
    if (raw) { restoreAll(JSON.parse(raw)); }
  } catch (e) { /* ignore corrupt state */ }

  window.BCTDiffusion = {
    groups: GROUPS,
    attributes: ATTRIBUTES,
    markers: MARKERS,
    collect: snapshot,
    analyse: analyse,
    run: run,
    markdown: function () { var a = analysis(); return markdown(a.d, a.r); },
    doc: function () { var a = analysis(); return docHtml(a.d, a.r); }
  };
}());
