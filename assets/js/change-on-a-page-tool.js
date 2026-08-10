/* Change on a Page — interactive tool
 * Mirrors /behavioural-change/change-on-a-page/. Browser only.
 * Can pre-fill from a saved Behavioural Diagnosis Canvas.
 */
(function () {
  'use strict';

  var B = window.BCT;
  if (!B) { return; }

  var TABLES = {
    'cop-changes':      { name: 'changes', cols: ['aspect', 'today', 'future'], preset: ['aspect'] },
    'cop-behaviours':   { name: 'behaviours', cols: ['who', 'does', 'instead', 'barrier'] },
    'cop-interventions':{ name: 'interventions', cols: ['behaviour', 'barrier', 'intervention', 'owner', 'by'] },
    'cop-stops':        { name: 'stops', cols: ['stops', 'owner', 'date'] },
    'cop-roles':        { name: 'roles', cols: ['role', 'name', 'commitments'], preset: ['role'] },
    'cop-metrics':      { name: 'metrics', cols: ['type', 'metric', 'baseline', 'target', 'when', 'source'], preset: ['type'] },
    'cop-sequence':     { name: 'sequence', cols: ['wave', 'who', 'date', 'gate'], preset: ['wave'] },
    'cop-risks':        { name: 'risks', cols: ['risk', 'mitigation', 'owner'] },
    'cop-decisions':    { name: 'decisions', cols: ['decision', 'by', 'who', 'consequence'] }
  };

  var COMB_LABELS = {
    phys_cap: 'Physical Capability',
    psych_cap: 'Psychological Capability',
    phys_opp: 'Physical Opportunity',
    soc_opp: 'Social Opportunity',
    refl_mot: 'Reflective Motivation',
    auto_mot: 'Automatic Motivation'
  };

  var tool = B.create('cop-tool', 'bct-change-on-a-page-v1', TABLES);
  if (!tool) { return; }

  function analyse(d) {
    var out = { flags: [], steps: [] };
    var f = out.flags;

    if (!d.stops.length) {
      f.push({
        level: 'danger',
        title: 'The “what people stop doing” table is empty',
        body: 'If this table is empty, the plan is not finished. Nothing gets added to a full day without something coming off.'
      });
    }

    if (!d.decisions.length) {
      f.push({
        level: 'danger',
        title: 'No decisions requested from leadership',
        body: 'This is the most important table on the page. It converts the document from a status report into a request — a page with no ask gets noted and filed.'
      });
    }

    if (!d.fields.not_changing) {
      f.push({
        level: 'warn',
        title: 'You have not said what is NOT changing',
        body: 'People overestimate scope. This line is free reassurance and it costs you nothing.'
      });
    }

    if (d.behaviours.length > 5) {
      f.push({
        level: 'warn',
        title: 'More than five behaviours',
        body: 'You have ' + d.behaviours.length + '. One side of A4 — if it does not fit, you have not decided enough.',
        link: ['Target Behaviour Definition', '/behavioural-change/target-behaviour-definition/']
      });
    }

    var noBarrier = d.behaviours.filter(function (b) { return b.does && !b.barrier; });
    if (noBarrier.length) {
      f.push({
        level: 'warn',
        title: noBarrier.length + ' behaviour' + (noBarrier.length > 1 ? 's have' : ' has') + ' no barrier identified',
        body: 'Without the barrier you are guessing at the intervention. Run the diagnosis first.',
        link: ['Behavioural Diagnosis Canvas — Interactive', '/behavioural-change/diagnosis-tool/']
      });
    }

    var uncovered = d.behaviours.filter(function (b, i) {
      var ref = 'B' + (i + 1);
      return b.does && !d.interventions.some(function (x) {
        return x.behaviour === ref || (x.behaviour && b.does && x.behaviour.toLowerCase() === b.does.toLowerCase());
      });
    });
    if (uncovered.length && d.interventions.length) {
      f.push({
        level: 'warn',
        title: uncovered.length + ' behaviour' + (uncovered.length > 1 ? 's have' : ' has') + ' no intervention',
        body: 'Every behaviour in the vital few needs something being done about its barrier, with an owner and a date.',
        link: ['Intervention Design Worksheet', '/behavioural-change/intervention-design-worksheet/']
      });
    }

    var noBaseline = d.metrics.filter(function (m) { return m.metric && !m.baseline; });
    if (noBaseline.length) {
      f.push({
        level: 'warn',
        title: noBaseline.length + ' metric' + (noBaseline.length > 1 ? 's have' : ' has') + ' no baseline',
        body: 'Capture the baseline before you start or you will never be able to show it moved.',
        link: ['Measurement Plan — Leading and Lagging', '/behavioural-change/measurement-plan-leading-and-lagging/']
      });
    }

    var leading = d.metrics.filter(function (m) { return /leading/i.test(m.type) && m.metric; });
    if (d.metrics.length && !leading.length) {
      f.push({
        level: 'warn',
        title: 'No leading measures',
        body: 'Lagging measures tell you whether it worked, months late. Leading measures tell you in time to change something.',
        link: ['Measurement Plan — Leading and Lagging', '/behavioural-change/measurement-plan-leading-and-lagging/']
      });
    }

    var sponsor = d.roles.filter(function (r) { return /sponsor/i.test(r.role) && r.name; });
    if (!sponsor.length) {
      f.push({
        level: 'warn',
        title: 'No named sponsor',
        body: 'A role with no name attached is not a commitment.',
        link: ['Sponsor Briefing Pack — Interactive', '/behavioural-change/sponsor-briefing-tool/']
      });
    }

    var ownerless = d.stops.filter(function (s) { return s.stops && !s.owner; });
    if (ownerless.length) {
      f.push({
        level: 'warn',
        title: 'Something stops but nobody owns stopping it',
        body: 'Stopping things is harder than starting them and never happens by itself. Name who switches it off.'
      });
    }

    if (!d.fields.why_sentence) {
      f.push({
        level: 'danger',
        title: 'No “why” sentence',
        body: 'It has to be one sentence a frontline person would repeat accurately. If you cannot write it, the page cannot do its job.'
      });
    }

    // --- steps ---
    out.steps.push({ text: 'Version it in the filename and keep the old versions. When someone says “that is not what we agreed”, you will want the history.' });
    if (!d.stops.length) {
      out.steps.push({ text: 'Fill in what people stop doing before you circulate this — it is the credibility test for the whole plan.' });
    }
    if (!d.decisions.length) {
      out.steps.push({ text: 'Add the decisions you need from leadership, with dates and the consequence of delay.' });
    }
    out.steps.push({ text: 'Circulate before the meeting, not during. A page read in the meeting gets skimmed and argued with; a page read beforehand gets decided.' });
    out.steps.push({
      text: 'Produce the exec version for the board conversation.',
      link: ['The One-Page Board Narrative', '/behavioural-change/the-one-page-board-narrative/']
    });
    out.steps.push({ text: 'Change one thing after every review and say what you changed and who prompted it. It proves consultation is real.' });

    return out;
  }

  // Pre-fill from a saved Behavioural Diagnosis Canvas.
  function fromDiagnosis(data) {
    if (!data || !data.fields || !data.comb) { return false; }
    var f = data.fields;
    function set(k, v) {
      var el = tool.q('[data-f="' + k + '"]');
      if (el && v && !el.value) { el.value = v; }
    }
    set('initiative', f.changing ? 'Changing ' + f.changing : '');
    set('sponsor', f.sponsor);
    set('owner', f.role);
    set('why_sentence', f.changing && f.so_that ? 'We are changing ' + f.changing + ' so that ' + f.so_that + '.' : '');
    set('date', f.deadline);

    // Lowest COM-B score becomes the primary barrier against each behaviour.
    var lowest = null;
    Object.keys(data.comb).forEach(function (k) {
      var s = parseInt(data.comb[k].score, 10);
      if (!isNaN(s) && (lowest === null || s < lowest.score)) { lowest = { key: k, score: s }; }
    });
    var barrier = lowest ? COMB_LABELS[lowest.key] : '';

    if (data.behaviours && data.behaviours.length) {
      tool.fillRows('cop-behaviours', TABLES['cop-behaviours'].cols, data.behaviours.map(function (b) {
        return { who: b.who, does: b.behaviour, instead: '', barrier: barrier };
      }));
      tool.fillRows('cop-interventions', TABLES['cop-interventions'].cols, data.behaviours.map(function (b, i) {
        return { behaviour: 'B' + (i + 1), barrier: barrier, intervention: '', owner: '', by: '' };
      }));
    }

    if (data.risks && data.risks.length) {
      tool.fillRows('cop-risks', TABLES['cop-risks'].cols, data.risks.slice(0, 3).map(function (r) {
        return { risk: r.risk, mitigation: r.action, owner: '' };
      }));
    }

    tool.save();
    return true;
  }

  // --- rendering -----------------------------------------------------------

  function render(d, r) {
    var e = B.esc, f = d.fields, h = [];

    h.push('<div class="bct-result-head"><h3>' + (f.initiative ? e(f.initiative) : 'Change on a Page') + '</h3>' +
      '<p class="bct-complete">' + e(f.version || 'v0.1') + (f.date ? ' · ' + e(f.date) : '') + '</p></div>');

    h.push('<div class="bct-onepager">');
    h.push('<p class="bct-why">' + (f.why_sentence ? e(f.why_sentence) : '<em>No why sentence yet</em>') + '</p>');
    if (f.why_not) { h.push('<p><strong>What happens if we do not:</strong> ' + e(f.why_not) + '</p>'); }
    if (f.not_changing) { h.push('<p><strong>What is NOT changing:</strong> ' + e(f.not_changing) + '</p>'); }

    function grid(title, head, rows, empty) {
      h.push('<h5>' + e(title) + '</h5>');
      if (!rows.length) { h.push('<p class="bct-empty">' + e(empty) + '</p>'); return; }
      h.push('<table class="table table-sm"><thead><tr>');
      head.forEach(function (c) { h.push('<th>' + e(c) + '</th>'); });
      h.push('</tr></thead><tbody>');
      rows.forEach(function (row) {
        h.push('<tr>');
        row.forEach(function (c) { h.push('<td>' + e(c) + '</td>'); });
        h.push('</tr>');
      });
      h.push('</tbody></table>');
    }

    grid('What changes', ['', 'Today', 'From'], d.changes.map(function (x) { return [x.aspect, x.today, x.future]; }), 'Nothing recorded.');
    grid('The vital few behaviours', ['#', 'Who', 'Does what, when', 'Instead of', 'Primary barrier'],
      d.behaviours.map(function (x, i) { return ['B' + (i + 1), x.who, x.does, x.instead, x.barrier]; }), 'No behaviours yet.');
    grid('What we are doing about each barrier', ['Behaviour', 'Barrier', 'Intervention', 'Owner', 'By'],
      d.interventions.map(function (x) { return [x.behaviour, x.barrier, x.intervention, x.owner, x.by]; }), 'No interventions yet.');
    grid('What people stop doing', ['Stops', 'Owner of stopping it', 'Date'],
      d.stops.map(function (x) { return [x.stops, x.owner, x.date]; }),
      'Empty — the plan is not finished.');
    grid('Who does what', ['Role', 'Name', 'Their commitments'],
      d.roles.map(function (x) { return [x.role, x.name, x.commitments]; }), 'No roles named.');
    grid('How we will know', ['', 'Metric', 'Baseline', 'Target', 'When', 'Source'],
      d.metrics.map(function (x) { return [x.type, x.metric, x.baseline, x.target, x.when, x.source]; }), 'No measures yet.');
    grid('Sequence', ['Wave', 'Who', 'Date', 'Gate to proceed'],
      d.sequence.map(function (x) { return [x.wave, x.who, x.date, x.gate]; }), 'No sequence yet.');
    grid('Top risks', ['Risk', 'Mitigation', 'Owner'],
      d.risks.map(function (x) { return [x.risk, x.mitigation, x.owner]; }), 'No risks recorded.');
    grid('Decisions needed from leadership', ['Decision', 'By when', 'Who decides', 'Consequence of delay'],
      d.decisions.map(function (x) { return [x.decision, x.by, x.who, x.consequence]; }),
      'Empty — this is the table that turns the page into a request.');

    if (f.question1 || f.question2) {
      h.push('<h5>Open questions</h5><ol>');
      [f.question1, f.question2].filter(Boolean).forEach(function (s) { h.push('<li>' + e(s) + '</li>'); });
      h.push('</ol>');
    }
    h.push('</div>');

    if (r.flags.length) {
      h.push('<h4>What needs attention</h4>');
      r.flags.forEach(function (fl) {
        h.push('<div class="bct-flag bct-flag-' + fl.level + '"><strong>' + e(fl.title) + '</strong><p>' + e(fl.body) + '</p>' +
          (fl.link ? '<p><a href="' + fl.link[1] + '">' + e(fl.link[0]) + ' &rarr;</a></p>' : '') + '</div>');
      });
    }

    h.push('<h4>Using it</h4><ol class="bct-steps">');
    r.steps.forEach(function (st) {
      h.push('<li>' + e(st.text) + (st.link ? ' <a href="' + st.link[1] + '">' + e(st.link[0]) + ' &rarr;</a>' : '') + '</li>');
    });
    h.push('</ol>');

    return h.join('');
  }

  // --- exports -------------------------------------------------------------

  function docHtml(d, r) {
    var e = B.esc, f = d.fields, b = [];
    b.push('<h1>' + e(f.initiative || '[Initiative name]') + ' — Change on a Page</h1>');
    b.push('<p><strong>Version:</strong> ' + e(f.version || 'v0.1') + ' &nbsp; <strong>Date:</strong> ' + e(f.date) +
      ' &nbsp; <strong>Owner:</strong> ' + e(f.owner) + ' &nbsp; <strong>Sponsor:</strong> ' + e(f.sponsor) + '</p>');
    b.push('<h2>Why</h2><p>' + e(f.why_sentence) + '</p>');
    if (f.why_not) { b.push('<p><strong>What happens if we do not:</strong> ' + e(f.why_not) + '</p>'); }
    b.push('<h2>What changes</h2>');
    b.push(B.htmlTable(['', 'Today', 'From'], d.changes.map(function (x) { return [x.aspect, x.today, x.future]; })));
    if (f.not_changing) { b.push('<p><strong>What is NOT changing:</strong> ' + e(f.not_changing) + '</p>'); }
    b.push('<h2>The vital few behaviours</h2>');
    b.push(B.htmlTable(['#', 'Who', 'Does what, when', 'Instead of', 'Primary barrier'],
      d.behaviours.map(function (x, i) { return ['B' + (i + 1), x.who, x.does, x.instead, x.barrier]; })));
    b.push('<h2>What we are doing about each barrier</h2>');
    b.push(B.htmlTable(['Behaviour', 'Barrier', 'Intervention', 'Owner', 'By'],
      d.interventions.map(function (x) { return [x.behaviour, x.barrier, x.intervention, x.owner, x.by]; })));
    b.push('<h2>What people stop doing</h2>');
    b.push(B.htmlTable(['Stops', 'Owner of stopping it', 'Date'],
      d.stops.map(function (x) { return [x.stops, x.owner, x.date]; }),
      'Empty — the plan is not finished. Nothing gets added to a full day without something coming off.'));
    b.push('<h2>Who does what</h2>');
    b.push(B.htmlTable(['Role', 'Name', 'Their commitments'],
      d.roles.map(function (x) { return [x.role, x.name, x.commitments]; })));
    b.push('<h2>How we will know</h2>');
    b.push(B.htmlTable(['', 'Metric', 'Baseline', 'Target', 'When', 'Source'],
      d.metrics.map(function (x) { return [x.type, x.metric, x.baseline, x.target, x.when, x.source]; })));
    b.push('<h2>Sequence</h2>');
    b.push(B.htmlTable(['Wave', 'Who', 'Date', 'Gate to proceed'],
      d.sequence.map(function (x) { return [x.wave, x.who, x.date, x.gate]; })));
    b.push('<h2>Top risks</h2>');
    b.push(B.htmlTable(['Risk', 'Mitigation', 'Owner'],
      d.risks.map(function (x) { return [x.risk, x.mitigation, x.owner]; })));
    b.push('<h2>Decisions needed from leadership</h2>');
    b.push(B.htmlTable(['Decision', 'By when', 'Who decides', 'Consequence of delay'],
      d.decisions.map(function (x) { return [x.decision, x.by, x.who, x.consequence]; }),
      'Empty — a page with no ask gets noted and filed.'));
    if (f.question1 || f.question2) {
      b.push('<h2>Open questions</h2><ol>' +
        [f.question1, f.question2].filter(Boolean).map(function (s) { return '<li>' + e(s) + '</li>'; }).join('') + '</ol>');
    }
    if (r.flags.length) {
      b.push('<h2>What needs attention</h2>');
      r.flags.forEach(function (fl) { b.push('<p><strong>' + e(fl.title) + '</strong><br>' + e(fl.body) + '</p>'); });
    }
    b.push('<p style="color:#666;font-size:9pt">Generated from Change on a Page at kevstemplates.com</p>');
    return B.wordDoc((f.initiative || 'Change') + ' — Change on a Page', b.join(''));
  }

  function markdown(d, r) {
    var f = d.fields, m = [];
    m.push('---');
    m.push('title: "' + (f.initiative || 'Change on a Page').replace(/"/g, '') + ' — Change on a Page"');
    m.push('type: change-on-a-page');
    m.push('version: "' + (f.version || 'v0.1').replace(/"/g, '') + '"');
    m.push('---');
    m.push('');
    m.push('# ' + (f.initiative || '[Initiative name]') + ' — Change on a Page');
    m.push('');
    m.push('**Version:** ' + (f.version || 'v0.1') + ' **Date:** ' + (f.date || '___') +
      ' **Owner:** ' + (f.owner || '___') + ' **Sponsor:** ' + (f.sponsor || '___'));
    m.push('');
    m.push('## Why');
    m.push('');
    m.push('> ' + (f.why_sentence || '___'));
    m.push('');
    if (f.why_not) { m.push('**What happens if we do not:** ' + f.why_not); m.push(''); }
    m.push('## What changes');
    m.push('');
    m.push(B.mdTable(['', 'Today', 'From'], d.changes.map(function (x) { return [x.aspect, x.today, x.future]; })));
    m.push('');
    if (f.not_changing) { m.push('**What is NOT changing:** ' + f.not_changing); m.push(''); }
    m.push('## The vital few behaviours');
    m.push('');
    m.push(B.mdTable(['#', 'Who', 'Does what, when', 'Instead of', 'Primary barrier'],
      d.behaviours.map(function (x, i) { return ['B' + (i + 1), x.who, x.does, x.instead, x.barrier]; })));
    m.push('');
    m.push('## What we are doing about each barrier');
    m.push('');
    m.push(B.mdTable(['Behaviour', 'Barrier (COM-B)', 'Intervention', 'Owner', 'By'],
      d.interventions.map(function (x) { return [x.behaviour, x.barrier, x.intervention, x.owner, x.by]; })));
    m.push('');
    m.push('## What people stop doing');
    m.push('');
    m.push(B.mdTable(['Stops', 'Owner of stopping it', 'Date'],
      d.stops.map(function (x) { return [x.stops, x.owner, x.date]; })));
    m.push('');
    m.push('## Who does what');
    m.push('');
    m.push(B.mdTable(['Role', 'Name', 'Their commitments'],
      d.roles.map(function (x) { return [x.role, x.name, x.commitments]; })));
    m.push('');
    m.push('## How we will know');
    m.push('');
    m.push(B.mdTable(['', 'Metric', 'Baseline', 'Target', 'When', 'Source'],
      d.metrics.map(function (x) { return [x.type, x.metric, x.baseline, x.target, x.when, x.source]; })));
    m.push('');
    m.push('## Sequence');
    m.push('');
    m.push(B.mdTable(['Wave', 'Who', 'Date', 'Gate to proceed'],
      d.sequence.map(function (x) { return [x.wave, x.who, x.date, x.gate]; })));
    m.push('');
    m.push('## Top risks');
    m.push('');
    m.push(B.mdTable(['Risk', 'Mitigation', 'Owner'],
      d.risks.map(function (x) { return [x.risk, x.mitigation, x.owner]; })));
    m.push('');
    m.push('## Decisions needed from leadership');
    m.push('');
    m.push(B.mdTable(['Decision', 'By when', 'Who decides', 'Consequence of delay'],
      d.decisions.map(function (x) { return [x.decision, x.by, x.who, x.consequence]; })));
    m.push('');
    if (f.question1 || f.question2) {
      m.push('## Open questions');
      m.push('');
      [f.question1, f.question2].filter(Boolean).forEach(function (s, i) { m.push((i + 1) + '. ' + s); });
      m.push('');
    }
    if (r.flags.length) {
      m.push('## What needs attention');
      m.push('');
      r.flags.forEach(function (fl) { m.push('- **' + fl.title + '** — ' + fl.body); });
      m.push('');
    }
    m.push('See also [[The One-Page Board Narrative]] · [[Measurement Plan — Leading and Lagging]].');
    return m.join('\n');
  }

  // --- wiring --------------------------------------------------------------

  function analysis() {
    var d = tool.collect();
    return { d: d, r: analyse(d) };
  }

  function run() {
    var a = analysis();
    var out = tool.q('#cop-output');
    out.innerHTML = render(a.d, a.r);
    out.hidden = false;
    tool.q('#cop-exports').hidden = false;
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return a;
  }

  tool.wire({
    '#cop-generate': run,
    '#cop-save': function () { tool.saveNow(); },
    '#cop-word': function () {
      var a = analysis();
      B.download(B.slugify(a.d.fields.initiative, 'change-on-a-page') + '.doc', 'application/msword', docHtml(a.d, a.r));
    },
    '#cop-markdown': function () {
      var a = analysis();
      B.download(B.slugify(a.d.fields.initiative, 'change-on-a-page') + '.md', 'text/markdown;charset=utf-8', markdown(a.d, a.r));
    },
    '#cop-json': function () {
      B.download(B.slugify(tool.collect().fields.initiative, 'change-on-a-page') + '.json',
        'application/json', JSON.stringify(tool.collect(), null, 2));
    },
    '#cop-import': function (e) {
      tool.importJson(e.target.files && e.target.files[0], function (data) { tool.restore(data); run(); });
    },
    '#cop-import-diagnosis': function (e) {
      var input = e.target;
      tool.importJson(input.files && input.files[0], function (data) {
        if (!fromDiagnosis(data)) {
          window.alert('That does not look like a saved Behavioural Diagnosis Canvas.');
          return;
        }
        run();
      });
      input.value = '';
    },
    '#cop-print': function () { run(); window.print(); },
    '#cop-clear': function () {
      tool.clear(function () {
        tool.q('#cop-output').hidden = true;
        tool.q('#cop-exports').hidden = true;
      });
    }
  });

  tool.load();

  window.BCTChangePage = {
    collect: tool.collect,
    analyse: analyse,
    run: run,
    fromDiagnosis: fromDiagnosis,
    markdown: function () { var a = analysis(); return markdown(a.d, a.r); },
    doc: function () { var a = analysis(); return docHtml(a.d, a.r); }
  };
}());
