/* Force Field Analysis — interactive tool
 * Mirrors /behavioural-change/force-field-analysis/. Browser only.
 *
 * The whole point of Lewin's tool is that removing a restraint beats adding a
 * driver, so the output ranks restraints and builds the sponsor ask from them.
 */
(function () {
  'use strict';

  var B = window.BCT;
  if (!B) { return; }

  var TABLES = {
    'ff-driving':     { name: 'driving', cols: ['force', 'strength', 'strengthen'] },
    'ff-restraining': { name: 'restraining', cols: ['force', 'strength', 'remove', 'cost', 'owner', 'decides', 'asked'] }
  };

  // Called out on the source page as the most common single cause of stalled
  // tech adoption, and worth its own warning.
  var PARALLEL_RUNNING = /\b(old system|legacy|parallel|both systems|still works|not (been )?turned off|no switch.?off|old route|old process still)\b/i;

  var tool = B.create('ff-tool', 'bct-force-field-v1', TABLES);
  if (!tool) { return; }

  function num(v) {
    var n = parseInt(v, 10);
    return isNaN(n) ? 0 : n;
  }

  function analyse(d) {
    var out = { flags: [], steps: [] };

    var driving = d.driving.filter(function (x) { return x.force; });
    var restraining = d.restraining.filter(function (x) { return x.force; });

    out.driving = driving;
    out.restraining = restraining;
    out.drivingTotal = driving.reduce(function (a, x) { return a + num(x.strength); }, 0);
    out.restrainingTotal = restraining.reduce(function (a, x) { return a + num(x.strength); }, 0);
    out.net = out.drivingTotal - out.restrainingTotal;

    // Strongest restraints first — this is the list that becomes the sponsor ask.
    out.topRestraints = restraining.slice().sort(function (a, b) {
      return num(b.strength) - num(a.strength);
    }).slice(0, 3);

    out.stalled = restraining.length > 0 && out.restrainingTotal >= out.drivingTotal;

    var f = out.flags;

    if (!driving.length && !restraining.length) {
      f.push({
        level: 'info',
        title: 'Nothing recorded yet',
        body: 'List the forces pushing towards the change and the forces holding the current state, then score each 1–5.'
      });
      return out;
    }

    if (out.stalled) {
      f.push({
        level: 'danger',
        title: 'The change will not happen at current settings',
        body: 'Restraining forces total ' + out.restrainingTotal + ' against driving forces at ' + out.drivingTotal +
              '. That holds regardless of how good the intent is. Something has to be removed from the right-hand column.'
      });
    }

    if (restraining.length && driving.length > restraining.length) {
      f.push({
        level: 'warn',
        title: 'More drivers listed than restraints',
        body: 'You have ' + driving.length + ' driving forces and only ' + restraining.length +
              '. Groups find drivers easy and restraints uncomfortable, so this usually means the restraint side is under-explored rather than genuinely short. Work the prompt list again.'
      });
    }

    var parallel = restraining.filter(function (x) { return PARALLEL_RUNNING.test(x.force); });
    if (parallel.length) {
      f.push({
        level: 'danger',
        title: 'The old way is still available',
        body: 'Running the old route in parallel “just for a transition period” is the most common single cause of stalled tech adoption. It is always defended on risk grounds, and the transition period always extends. Get a hard switch-off date agreed before go-live, with a named owner — and if the answer is “we cannot”, that is important information about the real level of confidence in the new system.'
      });
    }

    var noPlan = restraining.filter(function (x) { return !x.remove; });
    if (noPlan.length) {
      f.push({
        level: 'warn',
        title: noPlan.length + ' restraint' + (noPlan.length > 1 ? 's have' : ' has') + ' no removal plan',
        body: 'A restraint you have named but not planned against is just a complaint. Say what would have to happen, even if the answer is uncomfortable.',
        link: ['Intervention Design Worksheet', '/behavioural-change/intervention-design-worksheet/']
      });
    }

    var noOwner = out.topRestraints.filter(function (x) { return !x.owner || !x.decides; });
    if (noOwner.length) {
      f.push({
        level: 'warn',
        title: 'Your strongest restraints have no owner or decider',
        body: noOwner.length + ' of your top ' + out.topRestraints.length +
              ' are missing who owns the thing causing it or who decides. Without those two names it cannot become an ask, only an observation.',
        link: ['Sponsor Briefing Pack — Interactive', '/behavioural-change/sponsor-briefing-tool/']
      });
    }

    var strengthenOnly = driving.filter(function (x) { return x.strengthen; }).length;
    if (strengthenOnly && !restraining.filter(function (x) { return x.remove; }).length) {
      f.push({
        level: 'danger',
        title: 'You are planning to add pressure, not remove restraint',
        body: 'Every plan here strengthens a driver and none removes a restraint. Adding drivers to a system that is also restrained produces tension, stress and eventual snap-back. Removing the restraint lets the behaviour flow.'
      });
    }

    var unscored = driving.concat(restraining).filter(function (x) { return !x.strength; });
    if (unscored.length) {
      f.push({
        level: 'info',
        title: unscored.length + ' force' + (unscored.length > 1 ? 's are' : ' is') + ' unscored',
        body: 'The totals below only count scored forces, so the balance is understated.'
      });
    }

    // --- next steps ---
    if (out.topRestraints.length) {
      out.steps.push({
        text: 'Take your ' + out.topRestraints.length + ' strongest restraint' +
          (out.topRestraints.length > 1 ? 's' : '') + ' to the sponsor as the ask. It is far more useful than “we need more visible support” because it is specific, decidable, and mostly within their gift — removing organisational restraints is exactly what a sponsor is for.',
        link: ['Sponsor Briefing Pack — Interactive', '/behavioural-change/sponsor-briefing-tool/']
      });
    }
    if (parallel.length) {
      out.steps.push({ text: 'Get a hard switch-off date for the old route, with a named owner, before go-live.' });
    }
    out.steps.push({
      text: 'Work the restraint list with a group rather than alone — the visual does work a table does not, and people name restraints in a room that they will not name in a survey.',
      link: ['Workshop — Behavioural Diagnosis (90 min)', '/behavioural-change/workshop-behavioural-diagnosis-90-min/']
    });
    out.steps.push({
      text: 'Check whether what looks like resistance is actually an unremoved restraint.',
      link: ['Resistance Decoder', '/behavioural-change/resistance-decoder/']
    });
    if (out.stalled) {
      out.steps.push({
        text: 'If the restraints cannot be removed, the honest conversation is about scope, sequence or timing — not more communication.',
        link: ['Challenging Upward — Scripts', '/behavioural-change/challenging-upward-scripts/']
      });
    }

    return out;
  }

  // --- rendering -----------------------------------------------------------

  function render(d, r) {
    var e = B.esc, h = [];
    var f = d.fields;
    var max = Math.max(r.drivingTotal, r.restrainingTotal, 1);

    h.push('<div class="bct-result-head"><h3>' +
      (f.change_name ? e(f.change_name) : 'Force field analysis') + '</h3>' +
      '<p class="bct-complete">' + r.driving.length + ' driving &middot; ' + r.restraining.length + ' restraining</p></div>');

    h.push('<div class="bct-primary ' + (r.stalled ? 'bct-band-bad' : 'bct-band-good') + '">');
    h.push('<p class="bct-kicker">The balance</p>');
    h.push('<p class="bct-barrier">' +
      (r.stalled ? 'Will not happen at current settings' : 'Driving forces ahead') +
      ' <span class="bct-score">' + r.drivingTotal + ' v ' + r.restrainingTotal + '</span></p>');

    h.push('<div class="bct-ff-scale">');
    h.push('<div class="bct-ff-row"><span class="bct-ff-label">Driving</span>' +
      '<span class="bct-ff-track"><span class="bct-ff-bar is-driving" style="width:' +
      Math.round((r.drivingTotal / max) * 100) + '%"></span></span>' +
      '<span class="bct-ff-num">' + r.drivingTotal + '</span></div>');
    h.push('<div class="bct-ff-row"><span class="bct-ff-label">Restraining</span>' +
      '<span class="bct-ff-track"><span class="bct-ff-bar is-restraining" style="width:' +
      Math.round((r.restrainingTotal / max) * 100) + '%"></span></span>' +
      '<span class="bct-ff-num">' + r.restrainingTotal + '</span></div>');
    h.push('</div>');

    h.push('<p class="bct-reads">' + (r.stalled
      ? 'Restraining forces meet or exceed driving forces. Removing a restraint is usually cheaper and more effective than adding a driver.'
      : 'Net ' + (r.net > 0 ? '+' : '') + r.net + '. Still work the restraint side — removing a restraint is usually cheaper and more effective than adding a driver.') + '</p>');
    h.push('</div>');

    if (r.topRestraints.length) {
      h.push('<h4>Your sponsor ask</h4>');
      h.push('<p class="bct-help">The strongest restraints, as things to be decided rather than reported.</p>');
      r.topRestraints.forEach(function (x, i) {
        h.push('<div class="bct-restraint">');
        h.push('<p class="bct-restraint-head"><span class="bct-rank">' + (i + 1) + '</span> ' +
          e(x.force) + ' <span class="bct-score">' + (x.strength || '—') + '/5</span></p>');
        h.push('<dl class="bct-restraint-dl">');
        [['What would have to happen', x.remove],
         ['What it costs', x.cost],
         ['Who owns the thing causing it', x.owner],
         ['Who decides', x.decides],
         ['Asked by', x.asked]].forEach(function (pair) {
          h.push('<dt>' + e(pair[0]) + '</dt><dd>' + (pair[1] ? e(pair[1]) : '<em class="bct-missing">not yet answered</em>') + '</dd>');
        });
        h.push('</dl></div>');
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
    b.push('<h1>Force Field Analysis</h1>');
    b.push('<p><strong>Change being analysed:</strong> ' + e(f.change_name) + '</p>');
    b.push('<h2>The balance</h2>');
    b.push('<p><strong>Driving ' + r.drivingTotal + ' v restraining ' + r.restrainingTotal + '.</strong> ' +
      (r.stalled
        ? 'Restraining forces meet or exceed driving forces, so the change will not happen at current settings.'
        : 'Net ' + (r.net > 0 ? '+' : '') + r.net + '.') + '</p>');
    b.push('<h2>Driving forces</h2>');
    b.push(B.htmlTable(['Force', 'Strength', 'Can we strengthen it? How?'],
      r.driving.map(function (x) { return [x.force, x.strength, x.strengthen]; })));
    b.push('<h2>Restraining forces</h2>');
    b.push(B.htmlTable(['Force', 'Strength', 'Remove or weaken it how?', 'Cost'],
      r.restraining.map(function (x) { return [x.force, x.strength, x.remove, x.cost]; })));
    if (r.topRestraints.length) {
      b.push('<h2>The sponsor ask</h2>');
      b.push('<p>Removing organisational restraints is exactly what a sponsor is for. These are specific, decidable and mostly within their gift.</p>');
      b.push(B.htmlTable(['Restraint', 'What would have to happen', 'Cost', 'Owner', 'Who decides', 'Asked by'],
        r.topRestraints.map(function (x) { return [x.force, x.remove, x.cost, x.owner, x.decides, x.asked]; })));
    }
    if (r.flags.length) {
      b.push('<h2>What needs attention</h2>');
      r.flags.forEach(function (fl) { b.push('<p><strong>' + e(fl.title) + '</strong><br>' + e(fl.body) + '</p>'); });
    }
    if (r.steps.length) {
      b.push('<h2>Next steps</h2><ol>');
      r.steps.forEach(function (st) { b.push('<li>' + e(st.text) + '</li>'); });
      b.push('</ol>');
    }
    b.push('<p style="color:#666;font-size:9pt">Generated from the Force Field Analysis at kevstemplates.com</p>');
    return B.wordDoc('Force Field Analysis', b.join(''));
  }

  function markdown(d, r) {
    var f = d.fields, m = [];
    m.push('---');
    m.push('title: "Force Field Analysis — ' + (f.change_name || 'untitled').replace(/"/g, '') + '"');
    m.push('type: force-field');
    m.push('driving: ' + r.drivingTotal);
    m.push('restraining: ' + r.restrainingTotal);
    m.push('---');
    m.push('');
    m.push('**Driving ' + r.drivingTotal + ' v restraining ' + r.restrainingTotal + '.** ' +
      (r.stalled ? 'The change will not happen at current settings.' : 'Net ' + (r.net > 0 ? '+' : '') + r.net + '.'));
    m.push('');
    m.push('> Removing a restraining force is usually cheaper and more effective than adding a driving force.');
    m.push('');
    m.push('## Driving forces');
    m.push('');
    m.push(B.mdTable(['Force', 'Strength', 'Can we strengthen it? How?'],
      r.driving.map(function (x) { return [x.force, x.strength, x.strengthen]; })));
    m.push('');
    m.push('## Restraining forces');
    m.push('');
    m.push(B.mdTable(['Force', 'Strength', 'Remove or weaken it how?', 'Cost'],
      r.restraining.map(function (x) { return [x.force, x.strength, x.remove, x.cost]; })));
    m.push('');
    if (r.topRestraints.length) {
      m.push('## The sponsor ask');
      m.push('');
      m.push(B.mdTable(['Restraint', 'What would have to happen', 'Cost', 'Owner', 'Who decides', 'Asked by'],
        r.topRestraints.map(function (x) { return [x.force, x.remove, x.cost, x.owner, x.decides, x.asked]; })));
      m.push('');
      m.push('See [[Sponsor Briefing Pack]].');
      m.push('');
    }
    if (r.flags.length) {
      m.push('## What needs attention');
      m.push('');
      r.flags.forEach(function (fl) { m.push('- **' + fl.title + '** — ' + fl.body); });
      m.push('');
    }
    if (r.steps.length) {
      m.push('## Next steps');
      m.push('');
      r.steps.forEach(function (st, i) { m.push((i + 1) + '. ' + st.text + (st.link ? ' — [[' + st.link[0] + ']]' : '')); });
      m.push('');
    }
    m.push('See also [[Resistance Decoder]] · [[Intervention Design Worksheet]].');
    return m.join('\n');
  }

  // --- prompt list ---------------------------------------------------------

  // Clicking a common restraint drops it into the table rather than making
  // people retype it. Groups recognise several of these immediately.
  function wirePrompts() {
    tool.qa('[data-prompt]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var body = tool.q('#ff-restraining');
        var rows = Array.prototype.slice.call(body.querySelectorAll('tr'));
        var target = rows.filter(function (tr) {
          return !tr.querySelector('[data-col="force"]').value;
        })[0];
        if (!target) {
          tool.addRow('ff-restraining');
          rows = Array.prototype.slice.call(body.querySelectorAll('tr'));
          target = rows[rows.length - 1];
        }
        target.querySelector('[data-col="force"]').value = btn.dataset.prompt;
        btn.disabled = true;
        btn.classList.add('is-used');
        tool.save();
      });
    });
  }

  // --- wiring --------------------------------------------------------------

  function analysis() {
    var d = tool.collect();
    return { d: d, r: analyse(d) };
  }

  function run() {
    var a = analysis();
    var out = tool.q('#ff-output');
    out.innerHTML = render(a.d, a.r);
    out.hidden = false;
    tool.q('#ff-exports').hidden = false;
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return a;
  }

  tool.wire({
    '#ff-generate': run,
    '#ff-save': function () { tool.saveNow(); },
    '#ff-word': function () {
      var a = analysis();
      B.download(B.slugify(a.d.fields.change_name, 'force-field') + '.doc', 'application/msword', docHtml(a.d, a.r));
    },
    '#ff-markdown': function () {
      var a = analysis();
      B.download(B.slugify(a.d.fields.change_name, 'force-field') + '.md', 'text/markdown;charset=utf-8', markdown(a.d, a.r));
    },
    '#ff-json': function () {
      B.download(B.slugify(tool.collect().fields.change_name, 'force-field') + '.json',
        'application/json', JSON.stringify(tool.collect(), null, 2));
    },
    '#ff-import': function (e) {
      tool.importJson(e.target.files && e.target.files[0], function (data) { tool.restore(data); run(); });
    },
    '#ff-print': function () { run(); window.print(); },
    '#ff-clear': function () {
      tool.clear(function () {
        tool.qa('[data-prompt]').forEach(function (b) { b.disabled = false; b.classList.remove('is-used'); });
        tool.q('#ff-output').hidden = true;
        tool.q('#ff-exports').hidden = true;
      });
    }
  });

  wirePrompts();
  tool.load();

  window.BCTForceField = {
    collect: tool.collect,
    analyse: analyse,
    run: run,
    markdown: function () { var a = analysis(); return markdown(a.d, a.r); },
    doc: function () { var a = analysis(); return docHtml(a.d, a.r); }
  };
}());
