/* Behavioural Diagnosis Canvas — interactive tool
 *
 * Runs entirely in the browser; the site has no backend. State autosaves to
 * localStorage. The diagnosis follows the mapping shortcut on
 * /behavioural-change/com-b-and-the-behaviour-change-wheel/ — keep the two in
 * step if that page changes.
 */
(function () {
  'use strict';

  var STORE = 'bct-diagnosis-canvas-v1';
  var root = document.getElementById('bct-tool');
  if (!root) { return; }

  // --- COM-B components, in canvas order -----------------------------------

  var COMB = [
    {
      key: 'phys_cap',
      label: 'Physical Capability',
      functions: ['Training', 'Enablement'],
      reads: 'People do not have the skills, strength or stamina to do it.',
      pages: [
        ['Intervention Design Worksheet', '/behavioural-change/intervention-design-worksheet/'],
        ['EAST — Easy Attractive Social Timely', '/behavioural-change/east-easy-attractive-social-timely/']
      ]
    },
    {
      key: 'psych_cap',
      label: 'Psychological Capability',
      functions: ['Education', 'Training', 'Enablement'],
      reads: 'People do not know what to do, when to do it, or how to decide.',
      pages: [
        ['Intervention Design Worksheet', '/behavioural-change/intervention-design-worksheet/'],
        ['Manager Conversation Guide', '/behavioural-change/manager-conversation-guide/'],
        ['Comms and Narrative Plan', '/behavioural-change/comms-and-narrative-plan/']
      ]
    },
    {
      key: 'phys_opp',
      label: 'Physical Opportunity',
      functions: ['Restriction', 'Environmental restructuring', 'Enablement'],
      reads: 'The environment, time, tools or access make it hard or impossible.',
      pages: [
        ['EAST — Easy Attractive Social Timely', '/behavioural-change/east-easy-attractive-social-timely/'],
        ['Nudge Library', '/behavioural-change/nudge-library/'],
        ['Intervention Design Worksheet', '/behavioural-change/intervention-design-worksheet/']
      ]
    },
    {
      key: 'soc_opp',
      label: 'Social Opportunity',
      functions: ['Restriction', 'Environmental restructuring', 'Modelling', 'Enablement'],
      reads: 'Norms, peers and what managers actually accept point the other way.',
      pages: [
        ['Social Norms and Influence', '/behavioural-change/social-norms-and-influence/'],
        ['Champion Network Playbook', '/behavioural-change/champion-network-playbook/'],
        ['Leader Behaviour Contract', '/behavioural-change/leader-behaviour-contract/']
      ]
    },
    {
      key: 'refl_mot',
      label: 'Reflective Motivation',
      functions: ['Education', 'Persuasion', 'Incentivisation', 'Coercion'],
      reads: 'People have weighed it up and do not believe it is better.',
      pages: [
        ['Objection Handling Bank', '/behavioural-change/objection-handling-bank/'],
        ['Resistance Decoder', '/behavioural-change/resistance-decoder/'],
        ['Comms and Narrative Plan', '/behavioural-change/comms-and-narrative-plan/']
      ]
    },
    {
      key: 'auto_mot',
      label: 'Automatic Motivation',
      functions: ['Persuasion', 'Incentivisation', 'Coercion', 'Environmental restructuring', 'Modelling', 'Enablement'],
      reads: 'Habit, emotion and muscle memory carry people down the old path.',
      pages: [
        ['Habit Loop and Behavioural Drift', '/behavioural-change/habit-loop-and-behavioural-drift/'],
        ['Nudge Library', '/behavioural-change/nudge-library/'],
        ['Embedding and Reinforcement', '/behavioural-change/embedding-and-reinforcement/']
      ]
    }
  ];

  // Phrases that mean "we have an opinion", not evidence.
  var ASSUMPTION = /\b(we assume|assum\w*|we think|i think|we believe|we feel|steering|probably|presumably|gut|obviously|everyone knows|common sense)\b/i;
  // Success described as system usage or milestones rather than behaviour.
  var MILESTONE = /\b(go.?live|golive|milestone|roll.?out|deploy\w*|launch\w*|logged in|log.?ins?|licen[cs]e|adoption rate|usage stats?|% ?(of )?users?|training completed|attendance)\b/i;
  // Internal states you cannot film.
  var UNFILMABLE = /\b(understand\w*|believe\w*|aware\w*|buy.?in|engag\w*|support\w*|committ\w*|mindset|culture|feel\w*|know\w*|appreciat\w*|embrace\w*|align\w*)\b/i;
  // Words suggesting a group is a leadership population.
  var LEADERS = /\b(leader\w*|exec\w*|director\w*|manager\w*|senior|sponsor|head of|chief|c-?suite|smt|elt|board|supervisor\w*)\b/i;

  // --- state ---------------------------------------------------------------

  function q(sel, ctx) { return (ctx || root).querySelector(sel); }
  function qa(sel, ctx) { return Array.prototype.slice.call((ctx || root).querySelectorAll(sel)); }
  function val(el) { return el && el.value ? el.value.trim() : ''; }

  function rowsFrom(tbodyId, cols) {
    var body = q('#' + tbodyId);
    if (!body) { return []; }
    return qa('tr', body).map(function (tr) {
      var o = {};
      cols.forEach(function (c) {
        var el = q('[data-col="' + c + '"]', tr);
        o[c] = val(el);
      });
      return o;
    }).filter(function (o) {
      return cols.some(function (c) { return o[c]; });
    });
  }

  function collect() {
    var d = { fields: {}, comb: {} };
    qa('[data-f]').forEach(function (el) { d.fields[el.dataset.f] = val(el); });
    d.groups = rowsFrom('bct-groups', ['group', 'count', 'now', 'instead', 'priority']);
    d.behaviours = rowsFrom('bct-behaviours', ['behaviour', 'who', 'trigger', 'current']);
    d.risks = rowsFrom('bct-risks', ['risk', 'likelihood', 'impact', 'action']);
    COMB.forEach(function (c) {
      d.comb[c.key] = {
        score: val(q('[data-comb-score="' + c.key + '"]')),
        evidence: val(q('[data-comb-evidence="' + c.key + '"]'))
      };
    });
    return d;
  }

  function restore(d) {
    if (!d) { return; }
    Object.keys(d.fields || {}).forEach(function (k) {
      var el = q('[data-f="' + k + '"]');
      if (el) { el.value = d.fields[k]; }
    });
    fillRows('bct-groups', ['group', 'count', 'now', 'instead', 'priority'], d.groups);
    fillRows('bct-behaviours', ['behaviour', 'who', 'trigger', 'current'], d.behaviours);
    fillRows('bct-risks', ['risk', 'likelihood', 'impact', 'action'], d.risks);
    COMB.forEach(function (c) {
      var v = (d.comb || {})[c.key] || {};
      var s = q('[data-comb-score="' + c.key + '"]');
      var e = q('[data-comb-evidence="' + c.key + '"]');
      if (s && v.score) { s.value = v.score; }
      if (e && v.evidence) { e.value = v.evidence; }
    });
  }

  function fillRows(tbodyId, cols, data) {
    if (!data || !data.length) { return; }
    var body = q('#' + tbodyId);
    if (!body) { return; }
    while (qa('tr', body).length < data.length) { addRow(tbodyId); }
    var trs = qa('tr', body);
    data.forEach(function (o, i) {
      cols.forEach(function (c) {
        var el = q('[data-col="' + c + '"]', trs[i]);
        if (el && o[c]) { el.value = o[c]; }
      });
    });
  }

  function save() {
    try { localStorage.setItem(STORE, JSON.stringify(collect())); } catch (e) { /* private mode */ }
    flagSaved();
  }

  var savedTimer;
  function flagSaved() {
    var el = q('#bct-saved');
    if (!el) { return; }
    el.textContent = 'Saved locally';
    el.classList.add('is-on');
    clearTimeout(savedTimer);
    savedTimer = setTimeout(function () { el.classList.remove('is-on'); }, 1600);
  }

  function load() {
    try {
      var raw = localStorage.getItem(STORE);
      if (raw) { restore(JSON.parse(raw)); }
    } catch (e) { /* ignore corrupt state */ }
  }

  // --- row management ------------------------------------------------------

  function addRow(tbodyId) {
    var body = q('#' + tbodyId);
    if (!body) { return; }
    var last = body.lastElementChild;
    if (!last) { return; }
    var clone = last.cloneNode(true);
    qa('input, select, textarea', clone).forEach(function (el) {
      if (el.tagName === 'SELECT') { el.selectedIndex = 0; } else { el.value = ''; }
    });
    body.appendChild(clone);
  }

  // --- diagnosis -----------------------------------------------------------

  function scored(d) {
    return COMB.map(function (c) {
      var raw = parseInt(d.comb[c.key].score, 10);
      return {
        def: c,
        score: isNaN(raw) ? null : raw,
        evidence: d.comb[c.key].evidence
      };
    }).filter(function (r) { return r.score !== null; });
  }

  function diagnose(d) {
    var out = { flags: [], steps: [], barriers: [], functions: [], complete: 0 };
    var s = scored(d);

    if (s.length) {
      var min = Math.min.apply(null, s.map(function (r) { return r.score; }));
      out.barriers = s.filter(function (r) { return r.score === min; });
      out.lowest = min;
      var fns = {};
      out.barriers.forEach(function (b) {
        b.def.functions.forEach(function (f) { fns[f] = (fns[f] || 0) + 1; });
      });
      // Functions shared by every tied barrier come first.
      out.functions = Object.keys(fns).sort(function (a, b) { return fns[b] - fns[a]; });
    }

    // --- flags ---
    var f = out.flags;

    if (out.barriers.length >= 3) {
      f.push({
        level: 'warn',
        title: 'The scan is not discriminating between barriers',
        body: out.barriers.length + ' components are tied at ' + out.lowest + '/5, which puts ' +
          out.functions.length + ' of the nine intervention functions on your shortlist — that is not a shortlist. ' +
          'Re-score with one specific behaviour and one specific group in mind; a real diagnosis nearly always separates.',
        link: ['Barrier Analysis — COM-B Interview Guide', '/behavioural-change/barrier-analysis-com-b-interview-guide/']
      });
    }

    if (s.length < COMB.length) {
      f.push({
        level: 'warn',
        title: 'The COM-B scan is incomplete',
        body: 'You have scored ' + s.length + ' of ' + COMB.length + ' components. The lowest score is your primary barrier, so an unscored component could be the real blocker.'
      });
    }

    var noEvidence = s.filter(function (r) { return !r.evidence; });
    if (noEvidence.length) {
      f.push({
        level: 'warn',
        title: 'Scores without evidence',
        body: 'No evidence recorded for: ' + noEvidence.map(function (r) { return r.def.label; }).join(', ') + '. A score you cannot justify is a guess.',
        link: ['Barrier Analysis — COM-B Interview Guide', '/behavioural-change/barrier-analysis-com-b-interview-guide/']
      });
    }

    var assumed = s.filter(function (r) { return r.evidence && ASSUMPTION.test(r.evidence); });
    if (assumed.length) {
      f.push({
        level: 'danger',
        title: 'This is an opinion, not a diagnosis',
        body: 'The evidence for ' + assumed.map(function (r) { return r.def.label; }).join(', ') + ' reads as assumption. Go and have six conversations before you design anything.',
        link: ['Barrier Analysis — COM-B Interview Guide', '/behavioural-change/barrier-analysis-com-b-interview-guide/']
      });
    }

    var successText = [d.fields.see1, d.fields.see2, d.fields.see3, d.fields.stop].join(' ');
    if (successText.trim() && MILESTONE.test(successText)) {
      f.push({
        level: 'warn',
        title: 'Success is described as a milestone, not a behaviour',
        body: 'Phrases like go-live, rollout or adoption rate describe the project, not what someone does differently on an ordinary Tuesday.',
        link: ['Target Behaviour Definition', '/behavioural-change/target-behaviour-definition/']
      });
    }

    if (d.groups.length && !d.groups.some(function (g) { return LEADERS.test(g.group); })) {
      f.push({
        level: 'warn',
        title: 'No leadership group listed',
        body: 'Leaders almost always have to change too, and are almost always left off this table.',
        link: ['Leader Behaviour Contract', '/behavioural-change/leader-behaviour-contract/']
      });
    }

    var unfilmable = d.behaviours.filter(function (b) { return b.behaviour && UNFILMABLE.test(b.behaviour); });
    if (unfilmable.length) {
      f.push({
        level: 'danger',
        title: 'Some behaviours fail the film test',
        body: 'You cannot film someone "understanding" or "being engaged". Rewrite as an observable act: ' +
          unfilmable.map(function (b) { return '“' + b.behaviour + '”'; }).join('; '),
        link: ['Target Behaviour Definition', '/behavioural-change/target-behaviour-definition/']
      });
    }

    if (d.behaviours.length > 5) {
      f.push({
        level: 'warn',
        title: 'More than five behaviours',
        body: 'You have ' + d.behaviours.length + '. Cut back to the vital few and reject the rest out loud, or you will dilute everything.'
      });
    }

    var never = d.behaviours.filter(function (b) { return b.current === 'Never'; });
    if (never.length) {
      f.push({
        level: 'info',
        title: never.length + ' behaviour' + (never.length > 1 ? 's are' : ' is') + ' not happening at all',
        body: 'Start here — these need the most design effort, and there is no bright spot to copy from within the group.'
      });
    }

    if (!d.fields.benefit_individual) {
      f.push({
        level: 'danger',
        title: 'No individual benefit identified',
        body: 'If there is nothing in it for the person doing the behaviour, that is your real problem, and no amount of comms will paper over it. Say so early.'
      });
    }
    if (!d.fields.benefit_cost) {
      f.push({
        level: 'warn',
        title: 'The cost to the individual is blank',
        body: 'Every new behaviour costs someone time, effort, status, autonomy or comfort. Naming it is what makes the rest credible.'
      });
    }
    if (!d.fields.bright_spot) {
      f.push({
        level: 'info',
        title: 'No bright spot recorded',
        body: 'Somewhere this is already happening, even partially. It is the cheapest source of solutions and the most credible evidence you can put in front of a sceptic.',
        link: ['Switch — Rider Elephant Path', '/behavioural-change/switch-rider-elephant-path/']
      });
    }
    if (!d.fields.unknown1 && !d.fields.unknown2 && !d.fields.unknown3) {
      f.push({
        level: 'info',
        title: 'No open questions listed',
        body: 'Naming your uncertainties builds far more credibility with a sponsor than a confident plan built on assumptions — and it protects you when one of them turns out to matter.'
      });
    }

    var hot = d.risks.filter(function (r) {
      return r.risk && /high/i.test(r.likelihood) && /high/i.test(r.impact);
    });
    if (hot.length) {
      f.push({
        level: 'warn',
        title: hot.length + ' high/high risk' + (hot.length > 1 ? 's' : ''),
        body: hot.map(function (r) { return r.risk; }).join('; ') + '. Put these in front of the sponsor now, not at the first exception report.',
        link: ['Sponsor Briefing Pack', '/behavioural-change/sponsor-briefing-pack/']
      });
    }

    // --- next steps ---
    var steps = out.steps;

    if (!d.behaviours.length) {
      steps.push({
        text: 'Define at least one observable target behaviour — nothing downstream works without it.',
        link: ['Target Behaviour Definition', '/behavioural-change/target-behaviour-definition/']
      });
    }

    if (out.barriers.length) {
      var names = out.barriers.map(function (b) { return b.def.label; }).join(' and ');
      steps.push({
        text: 'Design against ' + names + ' (scored ' + out.lowest + '/5) — not against the barrier you assumed. ' +
              'Use the intervention functions below as your shortlist.',
        link: ['Intervention Design Worksheet', '/behavioural-change/intervention-design-worksheet/']
      });
      out.barriers.forEach(function (b) {
        b.def.pages.forEach(function (p) {
          if (!steps.some(function (st) { return st.link && st.link[1] === p[1]; })) {
            steps.push({ text: 'For ' + b.def.label + ': ' + p[0] + '.', link: p });
          }
        });
      });
    } else {
      steps.push({
        text: 'Score all six COM-B components with evidence — the lowest score tells you what kind of intervention can work.',
        link: ['COM-B and the Behaviour Change Wheel', '/behavioural-change/com-b-and-the-behaviour-change-wheel/']
      });
    }

    if (assumed.length || noEvidence.length) {
      steps.push({
        text: 'Run six barrier-analysis conversations before committing to a design.',
        link: ['Barrier Analysis — COM-B Interview Guide', '/behavioural-change/barrier-analysis-com-b-interview-guide/']
      });
    }

    steps.push({
      text: 'Test the design small before scaling — pick one team, set a comparison and a baseline.',
      link: ['Pilot Design and Experiment Card', '/behavioural-change/pilot-design-and-experiment-card/']
    });
    steps.push({
      text: 'Agree leading and lagging measures now, while you can still capture a baseline.',
      link: ['Measurement Plan — Leading and Lagging', '/behavioural-change/measurement-plan-leading-and-lagging/']
    });
    steps.push({
      text: 'Summarise this on one page for the sponsor.',
      link: ['Change on a Page', '/behavioural-change/change-on-a-page/']
    });

    // --- completeness ---
    var required = ['changing', 'so_that', 'sponsor', 'see1', 'benefit_individual', 'benefit_cost', 'bright_spot'];
    var done = required.filter(function (k) { return d.fields[k]; }).length;
    done += d.groups.length ? 1 : 0;
    done += d.behaviours.length ? 1 : 0;
    done += s.length === COMB.length ? 1 : 0;
    out.complete = Math.round((done / (required.length + 3)) * 100);

    return out;
  }

  // --- rendering -----------------------------------------------------------

  function esc(s) {
    return String(s === undefined || s === null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function render(d, r) {
    var h = [];
    var title = d.fields.changing
      ? 'Changing ' + esc(d.fields.changing)
      : 'Behavioural diagnosis';

    h.push('<div class="bct-result-head">');
    h.push('<h3>' + title + '</h3>');
    h.push('<p class="bct-complete">Canvas ' + r.complete + '% complete</p>');
    h.push('</div>');

    if (r.barriers.length) {
      h.push('<div class="bct-primary">');
      h.push('<p class="bct-kicker">Primary barrier' + (r.barriers.length > 1 ? 's (tied)' : '') + '</p>');
      h.push('<p class="bct-barrier">' + r.barriers.map(function (b) { return esc(b.def.label); }).join(' &middot; ') +
             ' <span class="bct-score">' + r.lowest + '/5</span></p>');
      h.push('<p class="bct-reads">' + esc(r.barriers[0].def.reads) + '</p>');
      h.push('<p class="bct-kicker">Intervention functions that can work</p>');
      // Joined with a space, not '' — the chips are visually separated by CSS,
      // but without whitespace in the DOM the text content runs together when
      // copied, read aloud, or rendered without styles.
      h.push('<p class="bct-functions">' + r.functions.map(function (fn) {
        return '<span class="bct-fn">' + esc(fn) + '</span>';
      }).join(' ') + '</p>');
      if (r.functions.indexOf('Coercion') > -1) {
        h.push('<p class="bct-coercion">Coercion appears on this list. It works, fast, and it is almost always the wrong first move — reserve it for genuine safety or regulatory non-negotiables, and only after you have made the right behaviour easy.</p>');
      }
      h.push('</div>');
    }

    if (r.flags.length) {
      h.push('<h4>What needs attention</h4>');
      r.flags.forEach(function (fl) {
        h.push('<div class="bct-flag bct-flag-' + fl.level + '">');
        h.push('<strong>' + esc(fl.title) + '</strong>');
        h.push('<p>' + esc(fl.body) + '</p>');
        if (fl.link) { h.push('<p><a href="' + fl.link[1] + '">' + esc(fl.link[0]) + ' &rarr;</a></p>'); }
        h.push('</div>');
      });
    }

    h.push('<h4>Your next steps, in order</h4>');
    h.push('<ol class="bct-steps">');
    r.steps.forEach(function (st) {
      h.push('<li>' + esc(st.text) +
        (st.link ? ' <a href="' + st.link[1] + '">' + esc(st.link[0]) + ' &rarr;</a>' : '') + '</li>');
    });
    h.push('</ol>');

    return h.join('');
  }

  // --- exports -------------------------------------------------------------

  function slug(d) {
    var base = (d.fields.changing || 'behavioural-diagnosis').toLowerCase()
      .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48);
    return base || 'behavioural-diagnosis';
  }

  function download(name, mime, content) {
    var blob = new Blob([content], { type: mime });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
  }

  function table(head, rows) {
    if (!rows.length) { return '<p><em>Not completed.</em></p>'; }
    var h = '<table border="1" cellspacing="0" cellpadding="6" style="border-collapse:collapse;width:100%"><tr>';
    head.forEach(function (c) { h += '<th align="left">' + esc(c) + '</th>'; });
    h += '</tr>';
    rows.forEach(function (r) {
      h += '<tr>';
      r.forEach(function (c) { h += '<td>' + esc(c) + '</td>'; });
      h += '</tr>';
    });
    return h + '</table>';
  }

  function buildDocHtml(d, r) {
    var f = d.fields;
    var b = [];
    b.push('<h1>Behavioural Diagnosis Canvas</h1>');
    b.push('<p><strong>We are changing</strong> ' + esc(f.changing) + ' <strong>so that</strong> ' + esc(f.so_that) + '</p>');
    b.push('<p><strong>Deadline / go-live:</strong> ' + esc(f.deadline) +
           '<br><strong>Sponsor:</strong> ' + esc(f.sponsor) +
           '<br><strong>My role:</strong> ' + esc(f.role) + '</p>');

    if (r.barriers.length) {
      b.push('<h2>Diagnosis</h2>');
      b.push('<p><strong>Primary barrier:</strong> ' +
        r.barriers.map(function (x) { return esc(x.def.label); }).join(' and ') +
        ' (' + r.lowest + '/5)</p>');
      b.push('<p><strong>Intervention functions that can work:</strong> ' + esc(r.functions.join(', ')) + '</p>');
    }

    b.push('<h2>What success looks like</h2>');
    b.push('<p>Six months from now, someone walking the floor would see:</p><ul>' +
      [f.see1, f.see2, f.see3].filter(Boolean).map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') +
      '</ul>');
    if (f.stop) { b.push('<p>And they would stop seeing: ' + esc(f.stop) + '</p>'); }

    b.push('<h2>Who has to do something differently</h2>');
    b.push(table(['Group', 'How many', 'Does now', 'Must do instead', 'Priority'],
      d.groups.map(function (g) { return [g.group, g.count, g.now, g.instead, g.priority]; })));

    b.push('<h2>The vital few behaviours</h2>');
    b.push(table(['#', 'Behaviour', 'Who', 'When / trigger', 'Currently'],
      d.behaviours.map(function (x, i) { return ['B' + (i + 1), x.behaviour, x.who, x.trigger, x.current]; })));

    b.push('<h2>COM-B barrier scan</h2>');
    b.push(table(['Component', 'Score', 'Evidence'],
      COMB.map(function (c) {
        return [c.label, d.comb[c.key].score || '—', d.comb[c.key].evidence];
      })));

    b.push('<h2>Bright spots</h2><p>' + esc(f.bright_spot) + '</p>');
    if (f.bright_copy) { b.push('<p><strong>What we can copy:</strong> ' + esc(f.bright_copy) + '</p>'); }

    b.push('<h2>What is in it for them</h2>');
    b.push('<p><strong>For the organisation:</strong> ' + esc(f.benefit_org) + '</p>');
    b.push('<p><strong>For the individual:</strong> ' + esc(f.benefit_individual) + '</p>');
    b.push('<p><strong>What it costs them:</strong> ' + esc(f.benefit_cost) + '</p>');

    b.push('<h2>The honest risks</h2>');
    b.push(table(['Risk', 'Likelihood', 'Impact', 'What I would do'],
      d.risks.map(function (x) { return [x.risk, x.likelihood, x.impact, x.action]; })));

    b.push('<h2>What I do not know yet</h2><ol>' +
      [f.unknown1, f.unknown2, f.unknown3].filter(Boolean).map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') +
      '</ol>');
    if (f.unknown_how) { b.push('<p><strong>How I will find out, by when:</strong> ' + esc(f.unknown_how) + '</p>'); }

    if (r.flags.length) {
      b.push('<h2>What needs attention</h2>');
      r.flags.forEach(function (fl) {
        b.push('<p><strong>' + esc(fl.title) + '</strong><br>' + esc(fl.body) + '</p>');
      });
    }

    b.push('<h2>Next steps</h2><ol>');
    r.steps.forEach(function (st) {
      b.push('<li>' + esc(st.text) + (st.link ? ' (' + esc(st.link[0]) + ')' : '') + '</li>');
    });
    b.push('</ol>');
    b.push('<p style="color:#666;font-size:9pt">Generated from the Behavioural Diagnosis Canvas at kevstemplates.com</p>');

    return '<html xmlns:o="urn:schemas-microsoft-com:office:office" ' +
      'xmlns:w="urn:schemas-microsoft-com:office:word" ' +
      'xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8">' +
      '<title>Behavioural Diagnosis Canvas</title>' +
      '<style>body{font-family:Calibri,Arial,sans-serif;font-size:11pt;line-height:1.4}' +
      'h1{font-size:20pt}h2{font-size:14pt;margin-top:18pt}th{background:#eee}</style>' +
      '</head><body>' + b.join('') + '</body></html>';
  }

  function buildMarkdown(d, r) {
    var f = d.fields;
    var m = [];
    m.push('---');
    m.push('title: "Behavioural Diagnosis — ' + (f.changing || 'untitled').replace(/"/g, '') + '"');
    m.push('type: diagnosis');
    m.push('sponsor: "' + (f.sponsor || '').replace(/"/g, '') + '"');
    m.push('deadline: "' + (f.deadline || '').replace(/"/g, '') + '"');
    m.push('---');
    m.push('');
    m.push('We are changing **' + (f.changing || '___') + '** so that **' + (f.so_that || '___') + '**.');
    m.push('');
    m.push('- **Deadline / go-live:** ' + (f.deadline || '___'));
    m.push('- **Sponsor:** ' + (f.sponsor || '___'));
    m.push('- **My role:** ' + (f.role || '___'));
    m.push('');

    if (r.barriers.length) {
      m.push('## Diagnosis');
      m.push('');
      m.push('**Primary barrier:** ' + r.barriers.map(function (x) { return x.def.label; }).join(' and ') +
             ' (' + r.lowest + '/5)');
      m.push('');
      m.push('**Intervention functions that can work:** ' + r.functions.join(', '));
      m.push('');
      m.push('See [[COM-B and the Behaviour Change Wheel]].');
      m.push('');
    }

    m.push('## 2 · What success looks like');
    m.push('');
    [f.see1, f.see2, f.see3].filter(Boolean).forEach(function (s) { m.push('- ' + s); });
    if (f.stop) { m.push(''); m.push('And they would **stop** seeing: ' + f.stop); }
    m.push('');

    m.push('## 3 · Who has to do something differently');
    m.push('');
    m.push('| Group | Roughly how many | Does now | Must do instead | Priority |');
    m.push('|---|---|---|---|---|');
    d.groups.forEach(function (g) {
      m.push('| ' + [g.group, g.count, g.now, g.instead, g.priority].join(' | ') + ' |');
    });
    m.push('');

    m.push('## 4 · The vital few behaviours');
    m.push('');
    m.push('| # | Behaviour | Who | When / trigger | Currently |');
    m.push('|---|---|---|---|---|');
    d.behaviours.forEach(function (x, i) {
      m.push('| B' + (i + 1) + ' | ' + [x.behaviour, x.who, x.trigger, x.current].join(' | ') + ' |');
    });
    m.push('');
    m.push('Create a note per behaviour from [[T — Behaviour Note]].');
    m.push('');

    m.push('## 5 · COM-B barrier scan');
    m.push('');
    m.push('| Component | Score | Evidence |');
    m.push('|---|---|---|');
    COMB.forEach(function (c) {
      m.push('| ' + c.label + ' | ' + (d.comb[c.key].score || '_') + ' | ' + (d.comb[c.key].evidence || '') + ' |');
    });
    m.push('');

    m.push('## 6 · Bright spots');
    m.push('');
    m.push(f.bright_spot || '___');
    if (f.bright_copy) { m.push(''); m.push('**What we can copy:** ' + f.bright_copy); }
    m.push('');

    m.push('## 7 · What is genuinely in it for them');
    m.push('');
    m.push('- **For the organisation:** ' + (f.benefit_org || '___'));
    m.push('- **For the individual:** ' + (f.benefit_individual || '___'));
    m.push('- **What it costs them:** ' + (f.benefit_cost || '___'));
    m.push('');

    m.push('## 8 · The honest risks');
    m.push('');
    m.push('| Risk | Likelihood | Impact | What I would do |');
    m.push('|---|---|---|---|');
    d.risks.forEach(function (x) {
      m.push('| ' + [x.risk, x.likelihood, x.impact, x.action].join(' | ') + ' |');
    });
    m.push('');

    m.push('## 9 · What I do not know yet');
    m.push('');
    [f.unknown1, f.unknown2, f.unknown3].filter(Boolean).forEach(function (s, i) {
      m.push((i + 1) + '. ' + s);
    });
    if (f.unknown_how) { m.push(''); m.push('**How I will find out, by when:** ' + f.unknown_how); }
    m.push('');

    if (r.flags.length) {
      m.push('## What needs attention');
      m.push('');
      r.flags.forEach(function (fl) { m.push('- **' + fl.title + '** — ' + fl.body); });
      m.push('');
    }

    m.push('## Next steps');
    m.push('');
    r.steps.forEach(function (st, i) {
      m.push((i + 1) + '. ' + st.text + (st.link ? ' — [[' + st.link[0] + ']]' : ''));
    });
    m.push('');

    return m.join('\n');
  }

  // --- wiring --------------------------------------------------------------

  function run() {
    var d = collect();
    var r = diagnose(d);
    var out = q('#bct-output');
    out.innerHTML = render(d, r);
    out.hidden = false;
    q('#bct-exports').hidden = false;
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return { d: d, r: r };
  }

  root.addEventListener('input', save);
  root.addEventListener('change', save);

  qa('[data-add-row]').forEach(function (btn) {
    btn.addEventListener('click', function () { addRow(btn.dataset.addRow); });
  });

  q('#bct-generate').addEventListener('click', run);

  q('#bct-save').addEventListener('click', function () {
    save();
    var el = q('#bct-saved');
    if (el) {
      el.textContent = 'Saved to this device — it will be here when you come back';
      el.classList.add('is-on');
      clearTimeout(savedTimer);
      savedTimer = setTimeout(function () { el.classList.remove('is-on'); }, 4000);
    }
  });

  q('#bct-word').addEventListener('click', function () {
    var d = collect(), r = diagnose(d);
    download(slug(d) + '.doc', 'application/msword', buildDocHtml(d, r));
  });

  q('#bct-markdown').addEventListener('click', function () {
    var d = collect(), r = diagnose(d);
    download(slug(d) + '.md', 'text/markdown;charset=utf-8', buildMarkdown(d, r));
  });

  q('#bct-json').addEventListener('click', function () {
    download(slug(collect()) + '.json', 'application/json', JSON.stringify(collect(), null, 2));
  });

  q('#bct-import').addEventListener('change', function (e) {
    var file = e.target.files && e.target.files[0];
    if (!file) { return; }
    var reader = new FileReader();
    reader.onload = function () {
      try {
        restore(JSON.parse(reader.result));
        save();
        run();
      } catch (err) {
        window.alert('That file could not be read as a saved canvas.');
      }
    };
    reader.readAsText(file);
  });

  q('#bct-print').addEventListener('click', function () { run(); window.print(); });

  q('#bct-clear').addEventListener('click', function () {
    if (!window.confirm('Clear the whole canvas? This cannot be undone.')) { return; }
    qa('input, select, textarea').forEach(function (el) {
      if (el.type === 'file') { return; }
      if (el.tagName === 'SELECT') { el.selectedIndex = 0; } else { el.value = ''; }
    });
    try { localStorage.removeItem(STORE); } catch (e) { /* ignore */ }
    q('#bct-output').hidden = true;
    q('#bct-exports').hidden = true;
  });

  load();

  // Exposed so the page can be checked end-to-end without a backend.
  window.BCTDiagnosis = {
    collect: collect,
    diagnose: diagnose,
    run: run,
    markdown: function () { var d = collect(); return buildMarkdown(d, diagnose(d)); },
    doc: function () { var d = collect(); return buildDocHtml(d, diagnose(d)); }
  };
}());
