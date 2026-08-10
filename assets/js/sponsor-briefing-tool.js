/* Sponsor Briefing Pack — interactive tool
 * Mirrors /behavioural-change/sponsor-briefing-pack/. Browser only.
 */
(function () {
  'use strict';

  var B = window.BCT;
  if (!B) { return; }

  var TABLES = {
    'sbp-quotes': { name: 'quotes', cols: ['quote', 'who'] },
    'sbp-decisions': { name: 'decisions', cols: ['decision', 'by', 'consequence'] }
  };

  var tool = B.create('sbp-tool', 'bct-sponsor-briefing-v1', TABLES);
  if (!tool) { return; }

  // A sponsor ask that is not concrete enough to say yes to.
  var VAGUE = /^(visible support|be supportive|support(ing)? (the|this) change|champion (it|the change)|back (us|the change)|be an advocate|sponsor it|be engaged|show leadership|be present)\.?$/i;

  // Cause -> sign -> fix, from the disengagement table on the source page.
  var DISENGAGEMENT = {
    'Generic support, no action': {
      cause: 'They do not understand the ask',
      fix: 'Make it three specific things with dates. That is what section 3 of this form is for — if your asks are vague, this is why.',
      link: null
    },
    'Delegates everything, avoids specifics': {
      cause: 'They do not believe in it',
      fix: 'Have the honest conversation rather than working around it.',
      link: ['Challenging Upward — Scripts', '/behavioural-change/challenging-upward-scripts/']
    },
    'Cancels, sends deputies': {
      cause: 'Too busy / competing priorities',
      fix: 'Reduce the ask to the one thing that matters most, and drop the other two for now.',
      link: null
    },
    'Vague on cross-functional issues': {
      cause: 'Blocked by their own peers',
      fix: 'Help them with the peer conversation — do not leave them to it. Peer alignment is the most underestimated part of the role.',
      link: ['Leader Behaviour Contract', '/behavioural-change/leader-behaviour-contract/']
    },
    'Cannot make decisions when asked': {
      cause: 'They were never really the sponsor',
      fix: 'Find who actually decides. This is common and rarely acknowledged — and the sooner you name it, the more of your credibility survives.',
      link: ['Executive Failure Modes', '/behavioural-change/executive-failure-modes/']
    }
  };

  var AGENDA = [
    ['5 min', 'Their words', '“Before I say anything — in your own words, why are we doing this?” Listen precisely. If they cannot do it fluently, that is your first finding, and it is a big one.'],
    ['10 min', 'The evidence', 'Barrier data and three verbatim quotes, then the reframe: “Almost none of this is people being resistant. Most of it is things the organisation has done to itself. Some of those only you can fix.”'],
    ['15 min', 'The ask', 'Three specific things. Not “visible support”.'],
    ['10 min', 'The dip', 'Draw the curve. “Performance will dip for around six weeks. When it dips, people will come to you saying it is not working. What will you do?” Get the answer in the room.'],
    ['5 min', 'The deal', 'What you will give them, and what you need back.']
  ];

  function asks(d) {
    return [
      { n: 1, label: 'Remove a barrier only you can remove', text: d.fields.ask1, by: d.fields.ask1_by },
      { n: 2, label: 'Do something visible, repeatedly', text: d.fields.ask2, by: 'ongoing' },
      { n: 3, label: 'Say something specific, in their own words', text: d.fields.ask3, by: d.fields.ask3_by }
    ];
  }

  function analyse(d) {
    var out = { flags: [], steps: [] };
    var f = out.flags;
    var a = asks(d);

    var missing = a.filter(function (x) { return !x.text; });
    if (missing.length) {
      f.push({
        level: 'danger',
        title: 'The ask is incomplete',
        body: 'Missing: ' + missing.map(function (x) { return 'ask ' + x.n + ' (' + x.label.toLowerCase() + ')'; }).join(', ') +
              '. Most sponsors want to do this and do not know what it means in practice. Your job is to make it concrete enough to say yes to.'
      });
    }

    var vague = a.filter(function (x) { return x.text && VAGUE.test(x.text); });
    if (vague.length) {
      f.push({
        level: 'danger',
        title: 'Some asks are not concrete enough to say yes to',
        body: vague.map(function (x) { return '“' + x.text + '”'; }).join('; ') +
              ' — that is a sentiment, not an action. Name the specific barrier, the specific visible act, or the specific sentence.'
      });
    }

    if (a[0].text && !a[0].by) {
      f.push({ level: 'warn', title: 'Ask 1 has no date', body: 'A barrier removal without a date is an intention. Put a date on it in the meeting.' });
    }

    if (d.fields.fluent === 'No') {
      f.push({
        level: 'danger',
        title: 'The sponsor cannot say why in their own words',
        body: 'That is your first finding, and it is a big one. Everything downstream inherits this sentence — fix it before design starts.',
        link: ['The One-Page Board Narrative', '/behavioural-change/the-one-page-board-narrative/']
      });
    } else if (!d.fields.fluent) {
      f.push({
        level: 'info',
        title: 'You have not tested whether they can say why',
        body: 'Open the meeting with it. It is five minutes and it tells you more than the rest of the hour.'
      });
    }

    if (d.fields.decision_test === 'No') {
      f.push({
        level: 'danger',
        title: 'You have a sponsorship problem, not a delivery problem',
        body: 'A small decision request that does not come back inside a week means the named sponsor has neither the authority nor the appetite. Find who actually decides.',
        link: ['Executive Failure Modes', '/behavioural-change/executive-failure-modes/']
      });
    } else if (!d.fields.decision_test) {
      f.push({
        level: 'info',
        title: 'The nominal-sponsor test has not been run',
        body: 'Test it early with a small decision request. If it does not come back inside a week, you have your answer.'
      });
    }

    if (!d.fields.dip_response) {
      f.push({
        level: 'warn',
        title: 'No pre-commitment for the dip',
        body: 'A sponsor who has pre-committed to holding their nerve behaves completely differently when the dip arrives than one meeting it cold. Get the answer in the room, before it happens.',
        link: ['Bridges Transition Model', '/behavioural-change/bridges-transition-model/']
      });
    }

    if (!d.fields.peers) {
      f.push({
        level: 'warn',
        title: 'Peer alignment not addressed',
        body: 'The most underestimated part of the role. A sponsor who is aligned but whose peers are not leaves managers with contradictory instructions — and managers resolve contradictions by doing nothing. Ask directly which peer is not with us.'
      });
    }

    if (!d.decisions.length) {
      f.push({
        level: 'warn',
        title: 'No decisions requested',
        body: 'A report with no ask trains the sponsor that you do not need them, and then you cannot get them back when you do.'
      });
    }

    var sign = d.fields.sign;
    if (sign && DISENGAGEMENT[sign]) {
      var dz = DISENGAGEMENT[sign];
      out.disengagement = dz;
      f.push({
        level: 'warn',
        title: 'Disengagement signal: ' + dz.cause,
        body: dz.fix,
        link: dz.link
      });
    }

    // --- next steps ---
    out.steps.push({ text: 'Book the 45 minutes one-to-one, not a slot in a governance meeting. This is the highest-leverage hour in the programme.' });
    if (missing.length || vague.length) {
      out.steps.push({ text: 'Rewrite the three asks so each names a specific action with a date before you walk in.' });
    }
    if (!d.fields.evidence) {
      out.steps.push({
        text: 'Bring barrier data and three verbatim quotes — the reframe only lands if it is evidenced.',
        link: ['Barrier Analysis — COM-B Interview Guide', '/behavioural-change/barrier-analysis-com-b-interview-guide/']
      });
    }
    out.steps.push({
      text: 'Agree the fortnightly one-pager format: what moved, what I need from you, what I am worried about. Always include an ask and always include a worry.'
    });
    out.steps.push({
      text: 'Turn the three commitments into a written contract the sponsor keeps.',
      link: ['Leader Behaviour Contract', '/behavioural-change/leader-behaviour-contract/']
    });
    if (d.fields.decision_test === 'No' || sign === 'Cannot make decisions when asked') {
      out.steps.push({
        text: 'Escalate the sponsorship gap explicitly rather than absorbing it.',
        link: ['Challenging Upward — Scripts', '/behavioural-change/challenging-upward-scripts/']
      });
    }

    return out;
  }

  // --- rendering -----------------------------------------------------------

  function render(d, r) {
    var e = B.esc;
    var f = d.fields;
    var h = [];
    var a = asks(d);

    h.push('<div class="bct-result-head"><h3>' +
      (f.change_name ? e(f.change_name) : 'Sponsor briefing') + '</h3>' +
      '<p class="bct-complete">' + (f.sponsor_name ? e(f.sponsor_name) : 'Sponsor not named') + '</p></div>');

    h.push('<h4>The one-page sponsor brief</h4>');
    h.push('<div class="bct-brief">');
    h.push('<p class="bct-brief-title">' + (f.change_name ? e(f.change_name) : '[Change name]') + ' — what I need from you</p>');
    h.push('<p><strong>In one sentence:</strong> ' + (f.one_sentence ? e(f.one_sentence) : '<em>not yet written</em>') + '</p>');
    h.push('<p><strong>Your three commitments:</strong></p><ol>');
    a.forEach(function (x) {
      h.push('<li>' + (x.text ? e(x.text) : '<em>' + e(x.label) + ' — not yet agreed</em>') +
        (x.by ? ' <span class="bct-by">by ' + e(x.by) + '</span>' : '') + '</li>');
    });
    h.push('</ol>');
    if (d.decisions.length) {
      h.push('<p><strong>Decisions I will need from you:</strong></p><ul>');
      d.decisions.forEach(function (x) {
        h.push('<li>' + e(x.decision) + (x.by ? ' — by ' + e(x.by) : '') +
          (x.consequence ? ' <em>(' + e(x.consequence) + ')</em>' : '') + '</li>');
      });
      h.push('</ul>');
    }
    h.push('<p><strong>What will happen that will worry you:</strong> performance will dip for around ' +
      e(f.dip_weeks || 'six') + ' weeks from ' + (f.dip_start ? e(f.dip_start) : '[date]') + '. That is expected, not failure.' +
      (f.dip_response ? ' You have agreed that when it dips you will: ' + e(f.dip_response) : '') + '</p>');
    h.push('<p><strong>What I will give you:</strong> a one-page update every fortnight — what moved, what I need, what worries me.</p>');
    h.push('</div>');

    h.push('<h4>Your 45-minute run sheet</h4>');
    h.push('<table class="table table-sm bct-agenda"><tbody>');
    AGENDA.forEach(function (row, i) {
      h.push('<tr><td class="bct-agenda-time">' + e(row[0]) + '</td><td><strong>' +
        (i + 1) + ' · ' + e(row[1]) + '</strong><br><span class="bct-agenda-note">' + e(row[2]) + '</span></td></tr>');
    });
    h.push('</tbody></table>');

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
    var e = B.esc, f = d.fields, a = asks(d), b = [];
    b.push('<h1>' + e(f.change_name || 'Change') + ' — what I need from you</h1>');
    b.push('<p><strong>Sponsor:</strong> ' + e(f.sponsor_name) + (f.sponsor_role ? ', ' + e(f.sponsor_role) : '') +
           '<br><strong>Prepared by:</strong> ' + e(f.prepared_by) + '<br><strong>Date:</strong> ' + e(f.date) + '</p>');
    b.push('<h2>In one sentence</h2><p>' + e(f.one_sentence) + '</p>');
    if (f.why_not) { b.push('<p><strong>What happens if we do not:</strong> ' + e(f.why_not) + '</p>'); }

    b.push('<h2>Your three commitments</h2>');
    b.push(B.htmlTable(['#', 'Commitment', 'By'],
      a.map(function (x) { return [x.n, x.text || '(not yet agreed) ' + x.label, x.by || '']; })));

    if (f.evidence) { b.push('<h2>The evidence</h2><p>' + e(f.evidence) + '</p>'); }
    if (d.quotes.length) {
      b.push(B.htmlTable(['What we heard', 'Who from'], d.quotes.map(function (x) { return [x.quote, x.who]; })));
    }

    b.push('<h2>Decisions I will need from you</h2>');
    b.push(B.htmlTable(['Decision', 'By when', 'Consequence of delay'],
      d.decisions.map(function (x) { return [x.decision, x.by, x.consequence]; }),
      'No decisions requested — a page with no ask gets noted and filed.'));

    b.push('<h2>The dip</h2><p>Performance will dip for around ' + e(f.dip_weeks || 'six') +
      ' weeks from ' + e(f.dip_start || '[date]') + '. That is expected, not failure.</p>');
    if (f.dip_response) { b.push('<p><strong>Agreed response when it dips:</strong> ' + e(f.dip_response) + '</p>'); }

    b.push('<h2>The deal</h2>');
    b.push('<p><strong>What I will do:</strong> bring you a one-pager every fortnight with what is moving, what I need from you, and what I am worried about. I will not bring you problems without options.</p>');
    b.push('<p><strong>What I need from you:</strong> ' +
      e(f.deal_need || 'a decision within a week when I ask for one, and to tell me straight when you disagree rather than going quiet.') + '</p>');

    if (f.peers) { b.push('<h2>Peer alignment</h2><p>' + e(f.peers) + '</p>'); }

    b.push('<h2>Your 45-minute run sheet</h2>');
    b.push(B.htmlTable(['Time', 'Section', 'What to cover'], AGENDA.map(function (x) { return [x[0], x[1], x[2]]; })));

    if (r.flags.length) {
      b.push('<h2>What needs attention</h2>');
      r.flags.forEach(function (fl) { b.push('<p><strong>' + e(fl.title) + '</strong><br>' + e(fl.body) + '</p>'); });
    }

    b.push('<p style="color:#666;font-size:9pt">Generated from the Sponsor Briefing Pack at kevstemplates.com</p>');
    return B.wordDoc((f.change_name || 'Sponsor briefing') + ' — what I need from you', b.join(''));
  }

  function markdown(d, r) {
    var f = d.fields, a = asks(d), m = [];
    m.push('---');
    m.push('title: "Sponsor Briefing — ' + (f.change_name || 'untitled').replace(/"/g, '') + '"');
    m.push('type: sponsor-briefing');
    m.push('sponsor: "' + (f.sponsor_name || '').replace(/"/g, '') + '"');
    m.push('---');
    m.push('');
    m.push('> **' + (f.change_name || '[Change name]') + '** — what I need from you');
    m.push('');
    m.push('**In one sentence:** ' + (f.one_sentence || '___'));
    m.push('');
    m.push('## Your three commitments');
    m.push('');
    a.forEach(function (x) {
      m.push(x.n + '. ' + (x.text || '_' + x.label + '_') + (x.by ? ' — by ' + x.by : ''));
    });
    m.push('');
    m.push('## Decisions I will need from you');
    m.push('');
    m.push(B.mdTable(['Decision', 'By when', 'Consequence of delay'],
      d.decisions.map(function (x) { return [x.decision, x.by, x.consequence]; })));
    m.push('');
    m.push('## The dip');
    m.push('');
    m.push('Performance will dip for around ' + (f.dip_weeks || 'six') + ' weeks from ' + (f.dip_start || '[date]') + '. See [[Bridges Transition Model]].');
    if (f.dip_response) { m.push(''); m.push('**Agreed response:** ' + f.dip_response); }
    m.push('');
    m.push('## The deal');
    m.push('');
    m.push('- **What I will do:** a one-pager every fortnight — what moved, what I need, what worries me.');
    m.push('- **What I need:** ' + (f.deal_need || 'a decision within a week when I ask for one.'));
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
    m.push('See also [[Sponsor Briefing Pack]] · [[Leader Behaviour Contract]] · [[Executive Failure Modes]].');
    return m.join('\n');
  }

  var TEAL = '3F8F92';

  function buildDeck(d) {
    var f = d.fields, a = asks(d);
    var p = new window.PptxGenJS();
    p.layout = 'LAYOUT_16x9';
    p.title = (f.change_name || 'Change') + ' — what I need from you';

    function slide(heading) {
      var s = p.addSlide();
      s.addShape(p.ShapeType.rect, { x: 0, y: 0, w: '100%', h: 0.55, fill: { color: TEAL } });
      s.addText(heading, { x: 0.4, y: 0.06, w: 9, h: 0.42, fontSize: 18, bold: true, color: 'FFFFFF' });
      return s;
    }

    // Title
    var t = p.addSlide();
    t.addShape(p.ShapeType.rect, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: TEAL } });
    t.addText(f.change_name || '[Change name]', { x: 0.6, y: 1.9, w: 8.8, h: 1, fontSize: 34, bold: true, color: 'FFFFFF' });
    t.addText('What I need from you', { x: 0.6, y: 2.9, w: 8.8, h: 0.6, fontSize: 22, color: 'E6F4F4' });
    t.addText([f.sponsor_name, f.sponsor_role, f.date].filter(Boolean).join('  ·  '),
      { x: 0.6, y: 4.3, w: 8.8, h: 0.4, fontSize: 13, color: 'D2EAEA' });

    // Why
    var s1 = slide('In one sentence');
    s1.addText(f.one_sentence || 'Not yet written', { x: 0.6, y: 1.2, w: 8.8, h: 1.6, fontSize: 24, bold: true, color: '1A1A1A' });
    if (f.why_not) {
      s1.addText('What happens if we do not: ' + f.why_not, { x: 0.6, y: 3.0, w: 8.8, h: 1, fontSize: 15, color: '444444' });
    }

    // Commitments
    var s2 = slide('Your three commitments');
    s2.addText(a.map(function (x) {
      return {
        text: x.text || '(' + x.label + ' — not yet agreed)',
        options: { bullet: { type: 'number' }, fontSize: 17, breakLine: true, color: '1A1A1A' }
      };
    }).concat(a.filter(function (x) { return x.by; }).length ? [] : []),
      { x: 0.7, y: 1.15, w: 8.6, h: 3.4, lineSpacingMultiple: 1.3 });
    var byLine = a.filter(function (x) { return x.text && x.by; })
      .map(function (x) { return x.n + ': by ' + x.by; }).join('   ·   ');
    if (byLine) { s2.addText(byLine, { x: 0.7, y: 4.5, w: 8.6, h: 0.4, fontSize: 12, color: '666666' }); }

    // Decisions
    var s3 = slide('Decisions I need from you');
    if (d.decisions.length) {
      var rows = [[
        { text: 'Decision', options: { bold: true, fill: { color: 'EFEFEF' } } },
        { text: 'By when', options: { bold: true, fill: { color: 'EFEFEF' } } },
        { text: 'If it slips', options: { bold: true, fill: { color: 'EFEFEF' } } }
      ]].concat(d.decisions.map(function (x) { return [x.decision, x.by, x.consequence]; }));
      s3.addTable(rows, { x: 0.6, y: 1.15, w: 8.8, fontSize: 13, border: { pt: 0.5, color: 'CCCCCC' }, colW: [4.6, 1.8, 2.4] });
    } else {
      s3.addText('No decisions requested.\n\nA page with no ask gets noted and filed.',
        { x: 0.6, y: 1.4, w: 8.8, h: 1.5, fontSize: 17, color: 'B45309' });
    }

    // The dip
    var s4 = slide('What will happen that will worry you');
    s4.addText('Performance will dip for around ' + (f.dip_weeks || 'six') + ' weeks from ' + (f.dip_start || '[date]') + '.',
      { x: 0.6, y: 1.2, w: 8.8, h: 0.8, fontSize: 20, bold: true, color: '1A1A1A' });
    s4.addText('That is normal, not failure. People will come to you saying it is not working.',
      { x: 0.6, y: 2.1, w: 8.8, h: 0.7, fontSize: 15, color: '444444' });
    if (f.dip_response) {
      s4.addText('Agreed: when it dips, you will ' + f.dip_response,
        { x: 0.6, y: 3.0, w: 8.8, h: 1.2, fontSize: 15, bold: true, color: '17605F' });
    }

    // The deal
    var s5 = slide('The deal');
    s5.addText([
      { text: 'What I will do', options: { bold: true, fontSize: 16, breakLine: true, color: TEAL } },
      { text: 'A one-pager every fortnight: what moved, what I need from you, what I am worried about. No problems without options.', options: { fontSize: 14, breakLine: true, color: '1A1A1A' } },
      { text: ' ', options: { fontSize: 8, breakLine: true } },
      { text: 'What I need from you', options: { bold: true, fontSize: 16, breakLine: true, color: TEAL } },
      { text: f.deal_need || 'A decision within a week when I ask for one, and to tell me straight when you disagree rather than going quiet.', options: { fontSize: 14, color: '1A1A1A' } }
    ], { x: 0.6, y: 1.2, w: 8.8, h: 3.4 });

    return p;
  }

  // --- wiring --------------------------------------------------------------

  function analysis() {
    var d = tool.collect();
    return { d: d, r: analyse(d) };
  }

  function run() {
    var a = analysis();
    var out = tool.q('#sbp-output');
    out.innerHTML = render(a.d, a.r);
    out.hidden = false;
    tool.q('#sbp-exports').hidden = false;
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return a;
  }

  tool.wire({
    '#sbp-generate': run,
    '#sbp-save': function () { tool.saveNow(); },
    '#sbp-word': function () {
      var a = analysis();
      B.download(B.slugify(a.d.fields.change_name, 'sponsor-briefing') + '.doc', 'application/msword', docHtml(a.d, a.r));
    },
    '#sbp-markdown': function () {
      var a = analysis();
      B.download(B.slugify(a.d.fields.change_name, 'sponsor-briefing') + '.md', 'text/markdown;charset=utf-8', markdown(a.d, a.r));
    },
    '#sbp-json': function () {
      B.download(B.slugify(tool.collect().fields.change_name, 'sponsor-briefing') + '.json',
        'application/json', JSON.stringify(tool.collect(), null, 2));
    },
    '#sbp-import': function (e) {
      tool.importJson(e.target.files && e.target.files[0], function (data) { tool.restore(data); run(); });
    },
    '#sbp-print': function () { run(); window.print(); },
    '#sbp-clear': function () {
      tool.clear(function () {
        tool.q('#sbp-output').hidden = true;
        tool.q('#sbp-exports').hidden = true;
      });
    },
    '#sbp-pptx': function () {
      var btn = tool.q('#sbp-pptx');
      var label = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Building deck…';
      B.loadScript('https://cdn.jsdelivr.net/npm/pptxgenjs@3.12.0/dist/pptxgen.bundle.js')
        .then(function () {
          var a = analysis();
          return buildDeck(a.d).writeFile({ fileName: B.slugify(a.d.fields.change_name, 'sponsor-briefing') + '.pptx' });
        })
        .then(function () { btn.disabled = false; btn.textContent = label; })
        .catch(function () {
          btn.disabled = false;
          btn.textContent = label;
          window.alert('The PowerPoint builder could not be loaded. It comes from a CDN, so this usually means no connection. Word and Markdown work offline.');
        });
    }
  });

  tool.load();

  window.BCTSponsor = {
    collect: tool.collect,
    analyse: analyse,
    run: run,
    markdown: function () { var a = analysis(); return markdown(a.d, a.r); },
    doc: function () { var a = analysis(); return docHtml(a.d, a.r); },
    deck: buildDeck
  };
}());
