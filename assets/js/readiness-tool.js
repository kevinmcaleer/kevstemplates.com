/* Change Readiness Assessment — interactive tool
 * Mirrors /behavioural-change/change-readiness-assessment/. Browser only.
 *
 * Scoring: five sections of five statements, 1–5 each. Section A is weighted
 * x3, so the maximum is (25 x 3) + 25 + 25 + 25 + 25 = 175.
 */
(function () {
  'use strict';

  var B = window.BCT;
  if (!B) { return; }

  var SECTIONS = [
    {
      key: 'a', letter: 'A', name: 'Sponsorship', weight: 3,
      note: 'Weighted heaviest because active, visible sponsorship is repeatedly identified as the single largest contributor to change success.',
      // Threshold from the source page: A under 15 (weighted) means fix this first.
      floor: 15, floorOn: 'weighted',
      floorAdvice: 'Fix this before anything else. A brilliant plan with an absent sponsor fails.',
      link: ['Sponsor Briefing Pack — Interactive', '/behavioural-change/sponsor-briefing-tool/']
    },
    {
      key: 'b', letter: 'B', name: 'Clarity', weight: 1,
      floorAdvice: 'You cannot design against a barrier you have not named. Run the diagnosis before committing to a date.',
      link: ['Behavioural Diagnosis Canvas — Interactive', '/behavioural-change/diagnosis-tool/']
    },
    {
      key: 'c', letter: 'C', name: 'Capacity and saturation', weight: 1,
      floor: 12, floorOn: 'raw',
      floorAdvice: 'The most valuable advice you can give a senior leader here is sequence or stop something. Bring the list of live initiatives affecting these teams — most leadership teams have never seen it assembled in one place, and it is often genuinely shocking.',
      link: ['Force Field Analysis', '/behavioural-change/force-field-analysis/']
    },
    {
      key: 'd', letter: 'D', name: 'Trust and history', weight: 1,
      floorAdvice: 'Acknowledge the history out loud, early. “We know the 2023 rollout was painful and we know what we got wrong” buys more credibility than any benefits statement. Pretending it did not happen tells people you either were not paying attention or think they were not.',
      link: ['Bridges Transition Model', '/behavioural-change/bridges-transition-model/']
    },
    {
      key: 'e', letter: 'E', name: 'Design quality', weight: 1,
      floorAdvice: 'A design problem masquerading as a change problem. Say so before launch — afterwards it will be read as excuse-making.',
      link: ['Resistance Decoder', '/behavioural-change/resistance-decoder/']
    }
  ];

  var BANDS = [
    { min: 140, label: 'Genuinely ready', read: 'Move.', level: 'good' },
    { min: 105, label: 'Proceed with named fixes', read: 'Proceed, with named fixes for your two weakest sections.', level: 'ok' },
    { min: 70, label: 'Do not launch yet', read: 'You would be spending credibility to buy a date.', level: 'warn' },
    { min: 0, label: 'Scope, sequence or timing', read: 'The honest conversation is about scope, sequence or timing.', level: 'bad' }
  ];

  var tool = B.create('crt-tool', 'bct-change-readiness-v1', {});
  if (!tool) { return; }

  function scoreOf(key, n) {
    var el = tool.q('[data-score="' + key + n + '"]');
    var v = parseInt(el && el.value, 10);
    return isNaN(v) ? null : v;
  }

  function assess(d) {
    var out = { sections: [], total: 0, answered: 0, flags: [], steps: [], stops: [] };

    SECTIONS.forEach(function (sec) {
      var scores = [];
      for (var i = 1; i <= 5; i++) {
        var v = scoreOf(sec.key, i);
        if (v !== null) { scores.push({ n: i, v: v }); }
      }
      var raw = scores.reduce(function (a, x) { return a + x.v; }, 0);
      out.answered += scores.length;
      var s = {
        def: sec,
        scores: scores,
        raw: raw,
        weighted: raw * sec.weight,
        complete: scores.length === 5,
        lows: scores.filter(function (x) { return x.v <= 2; })
      };
      out.sections.push(s);
      out.total += s.weighted;
    });

    out.complete = out.answered === 25;
    out.band = BANDS.filter(function (b) { return out.total >= b.min; })[0];

    // Weakest two by raw score, so sections stay comparable despite the weighting.
    out.weakest = out.sections.slice().sort(function (a, b) { return a.raw - b.raw; }).slice(0, 2);

    // --- stop signals ---
    out.sections.forEach(function (s) {
      if (s.complete && s.raw < 10) {
        out.stops.push({
          section: s,
          text: 'Section ' + s.def.letter + ' (' + s.def.name + ') scored ' + s.raw +
                '/25. Any single section under 10 is a stop signal regardless of total.'
        });
      }
    });

    // --- flags ---
    var f = out.flags;

    if (!out.complete) {
      f.push({
        level: 'warn',
        title: 'Assessment incomplete',
        body: out.answered + ' of 25 statements scored. The total and the band below only mean something once all 25 are answered.'
      });
    }

    out.sections.forEach(function (s) {
      if (!s.def.floor || !s.complete) { return; }
      // A section under 10 already raises a stop signal carrying the same
      // advice — no point saying it twice.
      if (out.stops.some(function (st) { return st.section === s; })) { return; }
      var measure = s.def.floorOn === 'weighted' ? s.weighted : s.raw;
      if (measure < s.def.floor) {
        f.push({
          level: 'danger',
          title: 'Section ' + s.def.letter + ' is under ' + s.def.floor +
                 ' (' + measure + (s.def.floorOn === 'weighted' ? ' weighted' : '') + ')',
          body: s.def.floorAdvice,
          link: s.def.link
        });
      }
    });

    // E1 and E4 are called out specifically on the source page.
    var e = out.sections.filter(function (s) { return s.def.key === 'e'; })[0];
    var e1 = scoreOf('e', 1), e4 = scoreOf('e', 4);
    if ((e1 !== null && e1 <= 2) || (e4 !== null && e4 <= 2)) {
      f.push({
        level: 'danger',
        title: 'You have a design problem masquerading as a change problem',
        body: 'The new way is not better for the person doing it, or it is not easier at the point of use. Say this before launch — afterwards it will be read as excuse-making.',
        link: ['Resistance Decoder', '/behavioural-change/resistance-decoder/']
      });
    }
    if (e) { /* referenced for clarity; scoring already counted above */ }

    out.stops.forEach(function (st) {
      f.push({
        level: 'danger',
        title: 'Stop signal — Section ' + st.section.def.letter,
        body: st.text + ' ' + st.section.def.floorAdvice,
        link: st.section.def.link
      });
    });

    if (out.complete && out.total < 70) {
      f.push({
        level: 'danger',
        title: 'The conversation is about scope, sequence or timing',
        body: 'At ' + out.total + '/175 this is not a plan that needs more communication. Take the options, not the score, to the sponsor.',
        link: ['Challenging Upward — Scripts', '/behavioural-change/challenging-upward-scripts/']
      });
    }

    // --- next steps ---
    out.steps.push({
      text: 'Never lead with the total — it invites an argument about the instrument rather than the substance. Lead with your strongest section: ' +
        (function () {
          var best = out.sections.slice().sort(function (a, b) { return b.raw - a.raw; })[0];
          return best && best.complete ? 'Section ' + best.def.letter + ' (' + best.def.name + '), ' + best.raw + '/25.' : 'once you have scored it.';
        }())
    });
    out.weakest.forEach(function (s) {
      if (!s.complete) { return; }
      out.steps.push({
        text: 'Present Section ' + s.def.letter + ' (' + s.def.name + ', ' + s.raw + '/25) as a decision to make, not a verdict: ' +
              '“Two options — we build that in over three weeks, or we go on the date and accept a materially lower landing. Which do you want?”',
        link: s.def.link
      });
    });
    out.steps.push({
      text: 'Have the three-week fix ready. Bringing a problem without a route through it is what makes people stop inviting you.'
    });
    out.steps.push({
      text: 'Re-run this assessment after the fixes and show the movement — a second data point is far more persuasive than a first.'
    });

    return out;
  }

  // --- rendering -----------------------------------------------------------

  function render(d, r) {
    var e = B.esc, h = [];
    var f = d.fields;

    h.push('<div class="bct-result-head"><h3>' + (f.change_name ? e(f.change_name) : 'Change readiness') + '</h3>' +
      '<p class="bct-complete">' + r.answered + ' of 25 scored</p></div>');

    h.push('<div class="bct-primary bct-band-' + (r.band ? r.band.level : 'warn') + '">');
    h.push('<p class="bct-kicker">Readiness</p>');
    h.push('<p class="bct-barrier">' + (r.band ? e(r.band.label) : '—') +
      ' <span class="bct-score">' + r.total + '/175</span></p>');
    h.push('<p class="bct-reads">' + (r.band ? e(r.band.read) : '') + '</p>');
    h.push('</div>');

    h.push('<h4>Section scores</h4>');
    h.push('<table class="table table-sm bct-scores"><thead><tr>' +
      '<th>Section</th><th>Raw</th><th>Weighted</th><th>Profile</th></tr></thead><tbody>');
    r.sections.forEach(function (s) {
      var pct = Math.round((s.raw / 25) * 100);
      var cls = s.raw < 10 ? 'is-stop' : (s.raw < 15 ? 'is-low' : '');
      h.push('<tr><td>' + s.def.letter + ' · ' + e(s.def.name) +
        (s.def.weight > 1 ? ' <span class="bct-weight">&times;' + s.def.weight + '</span>' : '') + '</td>' +
        '<td>' + (s.complete ? s.raw + '/25' : s.raw + '/25 <em>(partial)</em>') + '</td>' +
        '<td>' + s.weighted + '</td>' +
        '<td><span class="bct-bar ' + cls + '"><span style="width:' + pct + '%"></span></span></td></tr>');
    });
    h.push('</tbody></table>');

    if (r.stops.length) {
      h.push('<p class="bct-stopline">' + r.stops.length + ' stop signal' + (r.stops.length > 1 ? 's' : '') +
        ' — any single section under 10 outranks the total.</p>');
    }

    if (r.flags.length) {
      h.push('<h4>What needs attention</h4>');
      r.flags.forEach(function (fl) {
        h.push('<div class="bct-flag bct-flag-' + fl.level + '"><strong>' + e(fl.title) + '</strong><p>' + e(fl.body) + '</p>' +
          (fl.link ? '<p><a href="' + fl.link[1] + '">' + e(fl.link[0]) + ' &rarr;</a></p>' : '') + '</div>');
      });
    }

    h.push('<h4>How to present this</h4><ol class="bct-steps">');
    r.steps.forEach(function (st) {
      h.push('<li>' + e(st.text) + (st.link ? ' <a href="' + st.link[1] + '">' + e(st.link[0]) + ' &rarr;</a>' : '') + '</li>');
    });
    h.push('</ol>');

    return h.join('');
  }

  // --- exports -------------------------------------------------------------

  function statementRows(r) {
    var rows = [];
    r.sections.forEach(function (s) {
      s.scores.forEach(function (x) {
        var label = tool.q('[data-statement="' + s.def.key + x.n + '"]');
        rows.push([s.def.letter + x.n, label ? label.textContent : '', x.v]);
      });
    });
    return rows;
  }

  function docHtml(d, r) {
    var e = B.esc, f = d.fields, b = [];
    b.push('<h1>Change Readiness Assessment</h1>');
    b.push('<p><strong>Change:</strong> ' + e(f.change_name) + '<br><strong>Assessed by:</strong> ' +
      e(f.assessor) + '<br><strong>Date:</strong> ' + e(f.date) + '</p>');
    b.push('<h2>Result</h2>');
    b.push('<p><strong>' + (r.band ? e(r.band.label) : '') + ' — ' + r.total + '/175.</strong> ' +
      (r.band ? e(r.band.read) : '') + '</p>');
    if (r.stops.length) {
      b.push('<p><strong>Stop signals:</strong> ' + r.stops.map(function (s) { return e(s.text); }).join(' ') + '</p>');
    }
    b.push('<h2>Section scores</h2>');
    b.push(B.htmlTable(['Section', 'Raw /25', 'Weight', 'Weighted'],
      r.sections.map(function (s) { return [s.def.letter + ' · ' + s.def.name, s.raw, '×' + s.def.weight, s.weighted]; })));
    b.push('<h2>Statement scores</h2>');
    b.push(B.htmlTable(['#', 'Statement', 'Score'], statementRows(r)));
    if (f.evidence) { b.push('<h2>Notes</h2><p>' + e(f.evidence) + '</p>'); }
    if (r.flags.length) {
      b.push('<h2>What needs attention</h2>');
      r.flags.forEach(function (fl) { b.push('<p><strong>' + e(fl.title) + '</strong><br>' + e(fl.body) + '</p>'); });
    }
    b.push('<h2>How to present this</h2><ol>');
    r.steps.forEach(function (st) { b.push('<li>' + e(st.text) + '</li>'); });
    b.push('</ol>');
    b.push('<p style="color:#666;font-size:9pt">Generated from the Change Readiness Assessment at kevstemplates.com</p>');
    return B.wordDoc('Change Readiness Assessment', b.join(''));
  }

  function markdown(d, r) {
    var f = d.fields, m = [];
    m.push('---');
    m.push('title: "Change Readiness — ' + (f.change_name || 'untitled').replace(/"/g, '') + '"');
    m.push('type: readiness-assessment');
    m.push('score: ' + r.total);
    m.push('---');
    m.push('');
    m.push('**' + (r.band ? r.band.label : '') + ' — ' + r.total + '/175.** ' + (r.band ? r.band.read : ''));
    m.push('');
    m.push('## Section scores');
    m.push('');
    m.push(B.mdTable(['Section', 'Raw /25', 'Weight', 'Weighted'],
      r.sections.map(function (s) { return [s.def.letter + ' · ' + s.def.name, s.raw, '×' + s.def.weight, s.weighted]; })));
    m.push('');
    m.push('## Statement scores');
    m.push('');
    m.push(B.mdTable(['#', 'Statement', 'Score'], statementRows(r)));
    m.push('');
    if (r.stops.length) {
      m.push('> **Stop signals**');
      r.stops.forEach(function (s) { m.push('> - ' + s.text); });
      m.push('');
    }
    if (r.flags.length) {
      m.push('## What needs attention');
      m.push('');
      r.flags.forEach(function (fl) { m.push('- **' + fl.title + '** — ' + fl.body); });
      m.push('');
    }
    m.push('## How to present this');
    m.push('');
    r.steps.forEach(function (st, i) { m.push((i + 1) + '. ' + st.text); });
    m.push('');
    m.push('See also [[Sponsor Briefing Pack]] · [[Challenging Upward — Scripts]] · [[Force Field Analysis]].');
    return m.join('\n');
  }

  // --- wiring --------------------------------------------------------------

  // Scores live in selects, not [data-f], so they need their own persistence.
  function collectAll() {
    var d = tool.collect();
    d.scores = {};
    SECTIONS.forEach(function (sec) {
      for (var i = 1; i <= 5; i++) {
        var el = tool.q('[data-score="' + sec.key + i + '"]');
        if (el) { d.scores[sec.key + i] = el.value; }
      }
    });
    return d;
  }

  function restoreAll(d) {
    tool.restore(d);
    Object.keys((d && d.scores) || {}).forEach(function (k) {
      var el = tool.q('[data-score="' + k + '"]');
      if (el) { el.value = d.scores[k]; }
    });
  }

  var STORE = 'bct-change-readiness-v1';
  function saveAll(explicit) {
    var okStored = true;
    try { localStorage.setItem(STORE, JSON.stringify(collectAll())); } catch (e) { okStored = false; }
    var el = tool.q('[data-saved]');
    if (el) {
      el.textContent = explicit
        ? (okStored ? 'Saved to this device — it will be here when you come back'
                    : 'This browser will not store data (private mode?) — use Download a copy instead')
        : 'Saved locally';
      el.classList.add('is-on');
      clearTimeout(saveAll.t);
      saveAll.t = setTimeout(function () { el.classList.remove('is-on'); }, explicit ? 5000 : 1600);
    }
  }

  function analysis() {
    var d = collectAll();
    return { d: d, r: assess(d) };
  }

  function run() {
    var a = analysis();
    var out = tool.q('#crt-output');
    out.innerHTML = render(a.d, a.r);
    out.hidden = false;
    tool.q('#crt-exports').hidden = false;
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return a;
  }

  tool.root.addEventListener('input', function () { saveAll(false); });
  tool.root.addEventListener('change', function () { saveAll(false); });

  tool.wire({
    '#crt-generate': run,
    '#crt-save': function () { saveAll(true); },
    '#crt-word': function () {
      var a = analysis();
      B.download(B.slugify(a.d.fields.change_name, 'change-readiness') + '.doc', 'application/msword', docHtml(a.d, a.r));
    },
    '#crt-markdown': function () {
      var a = analysis();
      B.download(B.slugify(a.d.fields.change_name, 'change-readiness') + '.md', 'text/markdown;charset=utf-8', markdown(a.d, a.r));
    },
    '#crt-json': function () {
      var d = collectAll();
      B.download(B.slugify(d.fields.change_name, 'change-readiness') + '.json', 'application/json', JSON.stringify(d, null, 2));
    },
    '#crt-import': function (e) {
      tool.importJson(e.target.files && e.target.files[0], function (data) { restoreAll(data); run(); });
    },
    '#crt-print': function () { run(); window.print(); },
    '#crt-clear': function () {
      tool.clear(function () {
        try { localStorage.removeItem(STORE); } catch (e) { /* ignore */ }
        tool.q('#crt-output').hidden = true;
        tool.q('#crt-exports').hidden = true;
      });
    }
  });

  try {
    var raw = localStorage.getItem(STORE);
    if (raw) { restoreAll(JSON.parse(raw)); }
  } catch (e) { /* ignore corrupt state */ }

  window.BCTReadiness = {
    collect: collectAll,
    assess: assess,
    run: run,
    markdown: function () { var a = analysis(); return markdown(a.d, a.r); },
    doc: function () { var a = analysis(); return docHtml(a.d, a.r); }
  };
}());
