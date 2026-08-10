/* Resistance Decoder — interactive tool
 * Mirrors /behavioural-change/resistance-decoder/. Browser only.
 *
 * Resistance is data, not defiance. This logs what you actually heard and
 * decodes which of the seven things it is, because the seven have completely
 * different first moves.
 */
(function () {
  'use strict';

  var B = window.BCT;
  if (!B) { return; }

  var TABLES = {
    'rd-observations': { name: 'observations', cols: ['heard', 'who', 'setting', 'type'] }
  };

  var TYPES = {
    1: {
      n: 1,
      label: 'I do not understand what you want',
      actually: 'An awareness and clarity gap — not resistance at all.',
      move: 'Script the critical move so there is nothing left to interpret. Most “resistance” is this.',
      link: ['Target Behaviour Definition', '/behavioural-change/target-behaviour-definition/'],
      notResistance: true
    },
    2: {
      n: 2,
      label: 'This costs me something you have not acknowledged',
      actually: 'A real cost — time, effort, status, autonomy, exposure — that nobody has named.',
      move: 'Name the cost out loud, first, before they do. “This adds about four minutes per call and we have not taken anything off you yet — here is what we are removing.” Acknowledgement is disproportionately effective; denial is disproportionately damaging.',
      link: ['Force Field Analysis', '/behavioural-change/force-field-tool/']
    },
    3: {
      n: 3,
      label: 'I will look incompetent',
      actually: 'Loss of hard-won mastery. It hits your most experienced people hardest — who are usually your most influential.',
      move: 'Protect status. Give experts a role in the new world early — design input, super-user, trainer. Never let a respected expert be publicly a beginner.',
      link: ['Bridges Transition Model', '/behavioural-change/bridges-transition-model/']
    },
    4: {
      n: 4,
      label: 'I have seen this before',
      actually: 'Rational learned behaviour. Waiting it out has worked for them before.',
      move: 'Acknowledge the history explicitly, then show something structurally different this time — a switched-off legacy system, a leader visibly changing, a decision that cost something. Words will not do it; only evidence.',
      link: ['Change Readiness Assessment', '/behavioural-change/readiness-tool/']
    },
    5: {
      n: 5,
      label: 'This is being done to me',
      actually: 'Loss of agency.',
      move: 'Give away real decisions — actual design choices, not what colour the intranet page should be. Co-design is the most reliable generator of commitment there is, and usually cheaper than the comms campaign it replaces.',
      link: ['Champion Network Playbook', '/behavioural-change/champion-network-playbook/']
    },
    6: {
      n: 6,
      label: 'This conflicts with what you are also asking me to do',
      actually: 'A genuine systemic contradiction. Targets, incentives or another initiative pull the other way.',
      move: 'This one is your job. Take the contradiction upward and get it resolved. If a leader will not resolve it, that is the answer — and people will read it correctly.',
      link: ['Challenging Upward — Scripts', '/behavioural-change/challenging-upward-scripts/']
    },
    7: {
      n: 7,
      label: 'Your design is bad',
      actually: 'They are right.',
      move: 'Test it: can they describe a specific scenario where it fails? Have others independently raised it? Does it survive when you walk the process yourself? If yes, change the design and say publicly who told you.',
      link: ['Objection Handling Bank', '/behavioural-change/objection-handling-bank/']
    }
  };

  // The decoder table, as patterns. Where the source page gives two candidate
  // types for a phrase, both are kept and the first move is the disambiguator.
  var PATTERNS = [
    { re: /\b(do ?n'?t|don’t|haven'?t|no) (have )?time\b|too busy\b/i, types: [2], probe: 'Find out what comes off their plate.' },
    { re: /\bwon'?t work here\b|\bwould ?n'?t work here\b|\bnot work here\b/i, types: [7, 4], probe: 'Ask for the specific scenario.' },
    { re: /\b(we )?tried (this|that|it)( before)?\b|\bblow over\b|\blast time\b|\bin 20\d\d\b/i, types: [4], probe: 'Acknowledge the history; show what is structurally different.' },
    { re: /\bwhatever you need\b|\bit'?s fine\b|\bfine, whatever\b|\bif you say so\b/i, types: [4, 5], probe: 'Compliance without commitment — probe privately.' },
    { re: /\bwho (signed|decided|authorised|approved)\b|\bnobody asked\b|\bno one asked\b|\bwas ?n'?t consulted\b/i, types: [5], probe: 'Agency — involve them in a real decision.' },
    { re: /\bold way was (quicker|faster)\b|\bquicker before\b|\bfaster before\b|\bused to be quicker\b/i, types: [2, 7], probe: 'Time it yourself. They may be right.' },
    { re: /\bmy (team|staff|lads|guys|people) (wo ?n'?t|will not|are ?n'?t going to)\b/i, types: [3], probe: 'Their own concern, displaced — ask what they think, privately.' },
    { re: /\bedge case\b|\bwhat about when\b|\bcorner case\b|\bwhat happens if\b/i, types: [2, 3], probe: 'Name the cost; protect status.' },
    { re: /\bdo ?n'?t understand\b|\bnot clear\b|\bconfus\w*\b|\bwhat exactly\b|\bwhat do you want me to\b/i, types: [1], probe: 'Script the critical move.' },
    { re: /\bwhich (one )?do you want\b|\bconflict\w*\b|\bcontradic\w*\b|\bat the same time\b|\balso asking\b/i, types: [6], probe: 'Take the contradiction upward.' },
    { re: /\blook (stupid|incompetent|daft|an idiot)\b|\bbeen doing this for \d+\b|\bstart again\b|\bback to square one\b/i, types: [3], probe: 'Protect status.' },
    { re: /\bdoes ?n'?t work\b|\bfails when\b|\bbroken\b|\bwill not scale\b|\bwo ?n'?t scale\b/i, types: [7], probe: 'Ask for the specific scenario, then walk the process yourself.' }
  ];

  var tool = B.create('rd-tool', 'bct-resistance-decoder-v1', TABLES);
  if (!tool) { return; }

  function decode(text) {
    if (!text) { return null; }
    for (var i = 0; i < PATTERNS.length; i++) {
      if (PATTERNS[i].re.test(text)) {
        return { types: PATTERNS[i].types, probe: PATTERNS[i].probe, auto: true };
      }
    }
    return null;
  }

  function analyse(d) {
    var out = { items: [], counts: {}, flags: [], steps: [], undecoded: 0 };

    d.observations.forEach(function (o) {
      if (!o.heard && !o.who) { return; }
      var chosen = parseInt(o.type, 10);
      var item = { heard: o.heard, who: o.who, setting: o.setting };

      if (!isNaN(chosen) && TYPES[chosen]) {
        item.types = [TYPES[chosen]];
        item.source = 'you';
      } else {
        var guess = decode(o.heard);
        if (guess) {
          item.types = guess.types.map(function (n) { return TYPES[n]; });
          item.probe = guess.probe;
          item.source = 'decoded';
        } else {
          item.types = [];
          item.source = 'unknown';
          out.undecoded++;
        }
      }

      item.types.forEach(function (t) {
        out.counts[t.n] = (out.counts[t.n] || 0) + 1;
      });
      out.items.push(item);
    });

    out.total = out.items.length;

    var f = out.flags;

    if (!out.total) {
      f.push({
        level: 'info',
        title: 'Nothing logged yet',
        body: 'Write down what you actually heard, as close to verbatim as you can. The exact words are what carry the diagnosis.'
      });
      return out;
    }

    // Type 1 is not resistance, and the page says most of it is this.
    var clarity = out.counts[1] || 0;
    if (clarity) {
      f.push({
        level: 'info',
        title: clarity + ' of ' + out.total + ' is a clarity gap, not resistance',
        body: 'Nobody here is refusing — they do not know what you are asking. That is on us and it is fixable this week.',
        link: ['Target Behaviour Definition', '/behavioural-change/target-behaviour-definition/']
      });
    }

    if (out.counts[7]) {
      f.push({
        level: 'danger',
        title: 'Someone is telling you the design is wrong',
        body: 'This is the most valuable resistance you will get and the easiest to mishandle. Run the three tests: can they describe a specific scenario where it fails, have others independently raised it, and does it survive when you walk the process yourself? If yes, change the design and say publicly who told you — nothing builds credibility faster than a visible design change credited to a frontline objector.'
      });
    }

    if (out.counts[6]) {
      f.push({
        level: 'danger',
        title: 'There is a systemic contradiction to resolve',
        body: 'Targets, incentives or another initiative are pulling the other way. This one is not theirs to fix and not fixable by persuasion — take it upward.',
        link: ['Challenging Upward — Scripts', '/behavioural-change/challenging-upward-scripts/']
      });
    }

    var public_ = out.items.filter(function (i) { return /group|meeting|public/i.test(i.setting); });
    if (public_.length) {
      f.push({
        level: 'warn',
        title: 'Some of this surfaced in a group setting',
        body: 'Never diagnose resistance in public. Publicly labelling someone resistant guarantees the position hardens — take these to a one-to-one before you act on them.'
      });
    }

    var quiet = out.items.filter(function (i) { return /corridor|silen|quiet|private/i.test(i.setting); });
    if (quiet.length) {
      f.push({
        level: 'warn',
        title: 'Quiet resistance recorded',
        body: 'The loudest objector is rarely the biggest risk — loud is engaged. The quiet compliance of a whole shift is more dangerous and much harder to see. Silence in the room with noise in the corridor is usually a trust problem rather than an objection.',
        link: ['Change Readiness Assessment', '/behavioural-change/readiness-tool/']
      });
    }

    if (d.fields.changed === 'No') {
      f.push({
        level: 'danger',
        title: 'Nothing has changed in response to any of this',
        body: 'If nothing about the plan ever changes in response to feedback, people learn that consultation is theatre — and they only need to learn it once.'
      });
    } else if (!d.fields.changed) {
      f.push({
        level: 'info',
        title: 'Have you changed anything yet?',
        body: 'You have to actually change something. Answer this honestly before the next session.'
      });
    }

    var voices = {};
    out.items.forEach(function (i) { if (i.who) { voices[i.who.toLowerCase()] = 1; } });
    if (out.total >= 3 && Object.keys(voices).length === 1) {
      f.push({
        level: 'warn',
        title: 'This is one person, not a pattern',
        body: 'Everything logged here comes from the same voice. Before you redesign anything, check whether anyone else has independently raised it.'
      });
    }

    if (out.undecoded) {
      f.push({
        level: 'info',
        title: out.undecoded + ' could not be decoded automatically',
        body: 'Pick the type yourself from the seven, or write down more of what was actually said — the specific words are what carry the diagnosis.'
      });
    }

    // --- next steps ---
    out.steps.push({ text: 'Take each of these to a one-to-one, not a group. Publicly labelling someone resistant guarantees the position hardens.' });
    if (out.counts[7]) {
      out.steps.push({ text: 'Run the three design tests on the objections in type 7, and if they hold, change the design and credit the person who raised it publicly.' });
    }
    if (out.counts[6]) {
      out.steps.push({
        text: 'Book the conversation to resolve the contradiction. Bring the two conflicting asks written side by side.',
        link: ['Challenging Upward — Scripts', '/behavioural-change/challenging-upward-scripts/']
      });
    }
    if (out.counts[2]) {
      out.steps.push({
        text: 'Name the unacknowledged cost out loud before they do, and pair it with what you are removing.',
        link: ['Force Field Analysis', '/behavioural-change/force-field-tool/']
      });
    }
    out.steps.push({
      text: 'Take the reframe below to your sponsor. It moves the conversation from character to design and positions you as someone who brings solutions rather than complaints.',
      link: ['Sponsor Briefing Pack', '/behavioural-change/sponsor-briefing-tool/']
    });
    out.steps.push({ text: 'Change one thing and say who prompted it. Consultation people can see working is worth more than any amount of comms.' });

    out.reframe = buildReframe(out);
    return out;
  }

  // The sponsor script from the source page, with your actual numbers in it.
  function buildReframe(r) {
    var parts = [];
    var clarity = r.counts[1] || 0;
    var cost = r.counts[2] || 0;
    var design = r.counts[7] || 0;
    var contradiction = r.counts[6] || 0;

    parts.push('Let us split it.');
    if (clarity) {
      parts.push(clarity + ' of the ' + r.total + ' is people not being clear what we are asking — that is on us and it is fixable this week.');
    }
    if (cost) {
      parts.push(cost + ' is a real cost we have not acknowledged, which we should name openly.');
    }
    if (contradiction) {
      parts.push(contradiction + ' is a contradiction between what we are asking and what they are already measured on — that one needs you.');
    }
    if (design) {
      parts.push(design + ' is people telling us the design has a flaw. I would rather find out now. Can I bring you the ' +
        design + ' specific one' + (design > 1 ? 's' : '') + ' that I think ' + (design > 1 ? 'are' : 'is') + ' right?');
    }
    if (parts.length === 1) {
      parts.push('Most of what we are hearing is not refusal — it is people responding to something we have built. Let me bring you the specifics rather than a headline.');
    }
    return parts.join(' ');
  }

  // --- rendering -----------------------------------------------------------

  function render(d, r) {
    var e = B.esc, h = [];
    var f = d.fields;

    h.push('<div class="bct-result-head"><h3>' +
      (f.change_name ? e(f.change_name) : 'Resistance decoded') + '</h3>' +
      '<p class="bct-complete">' + r.total + ' logged</p></div>');

    if (!r.total) {
      h.push('<div class="bct-flag bct-flag-info"><strong>Nothing logged yet</strong><p>Write down what you actually heard, as close to verbatim as you can.</p></div>');
      return h.join('');
    }

    h.push('<div class="bct-primary">');
    h.push('<p class="bct-kicker">Resistance is data, not defiance</p>');
    h.push('<p class="bct-reads">Here is what the ' + r.total + ' you logged actually break down into.</p>');
    h.push('<div class="bct-mix">');
    Object.keys(r.counts).sort().forEach(function (n) {
      var t = TYPES[n];
      h.push('<span class="bct-mix-item' + (t.notResistance ? ' is-clarity' : '') + '">' +
        '<strong>' + r.counts[n] + '</strong> &times; type ' + n + ' — ' + e(t.label) + '</span>');
    });
    h.push('</div></div>');

    h.push('<h4>What you heard, decoded</h4>');
    r.items.forEach(function (i) {
      h.push('<div class="bct-decode">');
      h.push('<p class="bct-decode-heard">“' + e(i.heard || 'no words recorded') + '”' +
        (i.who ? ' <span class="bct-decode-who">— ' + e(i.who) + (i.setting ? ', ' + e(i.setting) : '') + '</span>' : '') + '</p>');
      if (!i.types.length) {
        h.push('<p class="bct-missing">Could not decode this automatically — pick a type from the seven.</p>');
      } else {
        i.types.forEach(function (t) {
          h.push('<p class="bct-decode-type"><span class="bct-rank">' + t.n + '</span> ' + e(t.label) +
            (i.source === 'decoded' && i.types.length > 1 ? ' <em>(or)</em>' : '') + '</p>');
          h.push('<p class="bct-decode-actually"><strong>Actually:</strong> ' + e(t.actually) + '</p>');
          h.push('<p class="bct-decode-move"><strong>Do:</strong> ' + e(t.move) +
            (t.link ? ' <a href="' + t.link[1] + '">' + e(t.link[0]) + ' &rarr;</a>' : '') + '</p>');
        });
        if (i.probe) {
          h.push('<p class="bct-decode-probe"><strong>First move:</strong> ' + e(i.probe) + '</p>');
        }
      }
      h.push('</div>');
    });

    if (r.reframe) {
      h.push('<h4>For your sponsor</h4>');
      h.push('<p class="bct-help">When a leader says “we are getting a lot of resistance”, reframe it with the actual split:</p>');
      h.push('<blockquote class="bct-reframe">' + e(r.reframe) + '</blockquote>');
    }

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

  function rowsFor(r) {
    return r.items.map(function (i) {
      return [
        i.heard,
        i.who,
        i.setting,
        i.types.map(function (t) { return t.n + ' · ' + t.label; }).join(' or ') || 'undecoded',
        i.types.length ? i.types[0].move : ''
      ];
    });
  }

  function docHtml(d, r) {
    var e = B.esc, f = d.fields, b = [];
    b.push('<h1>Resistance Decoder</h1>');
    b.push('<p><strong>Change:</strong> ' + e(f.change_name) + '<br><strong>Logged by:</strong> ' + e(f.owner) + '</p>');
    b.push('<p><em>Resistance is data, not defiance.</em></p>');
    b.push('<h2>What you heard, decoded</h2>');
    b.push(B.htmlTable(['What you heard', 'Who from', 'Setting', 'Most likely type', 'First move'], rowsFor(r)));
    if (r.reframe) {
      b.push('<h2>For your sponsor</h2><p>' + e(r.reframe) + '</p>');
    }
    if (r.flags.length) {
      b.push('<h2>What needs attention</h2>');
      r.flags.forEach(function (fl) { b.push('<p><strong>' + e(fl.title) + '</strong><br>' + e(fl.body) + '</p>'); });
    }
    b.push('<h2>Next steps</h2><ol>');
    r.steps.forEach(function (st) { b.push('<li>' + e(st.text) + '</li>'); });
    b.push('</ol>');
    b.push('<p style="color:#666;font-size:9pt">Generated from the Resistance Decoder at kevstemplates.com</p>');
    return B.wordDoc('Resistance Decoder', b.join(''));
  }

  function markdown(d, r) {
    var f = d.fields, m = [];
    m.push('---');
    m.push('title: "Resistance Decoder — ' + (f.change_name || 'untitled').replace(/"/g, '') + '"');
    m.push('type: resistance-decoder');
    m.push('logged: ' + r.total);
    m.push('---');
    m.push('');
    m.push('> Resistance is data, not defiance.');
    m.push('');
    m.push('## What you heard, decoded');
    m.push('');
    m.push(B.mdTable(['What you heard', 'Who from', 'Setting', 'Most likely type', 'First move'], rowsFor(r)));
    m.push('');
    if (r.reframe) {
      m.push('## For your sponsor');
      m.push('');
      m.push('> ' + r.reframe);
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
    m.push('## Next steps');
    m.push('');
    r.steps.forEach(function (st, i) { m.push((i + 1) + '. ' + st.text + (st.link ? ' — [[' + st.link[0] + ']]' : '')); });
    m.push('');
    m.push('See also [[Bridges Transition Model]] · [[Objection Handling Bank]] · [[Force Field Analysis]].');
    return m.join('\n');
  }

  // --- wiring --------------------------------------------------------------

  function analysis() {
    var d = tool.collect();
    return { d: d, r: analyse(d) };
  }

  function run() {
    var a = analysis();
    var out = tool.q('#rd-output');
    out.innerHTML = render(a.d, a.r);
    out.hidden = false;
    tool.q('#rd-exports').hidden = false;
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return a;
  }

  tool.wire({
    '#rd-generate': run,
    '#rd-save': function () { tool.saveNow(); },
    '#rd-word': function () {
      var a = analysis();
      B.download(B.slugify(a.d.fields.change_name, 'resistance-decoder') + '.doc', 'application/msword', docHtml(a.d, a.r));
    },
    '#rd-markdown': function () {
      var a = analysis();
      B.download(B.slugify(a.d.fields.change_name, 'resistance-decoder') + '.md', 'text/markdown;charset=utf-8', markdown(a.d, a.r));
    },
    '#rd-json': function () {
      B.download(B.slugify(tool.collect().fields.change_name, 'resistance-decoder') + '.json',
        'application/json', JSON.stringify(tool.collect(), null, 2));
    },
    '#rd-import': function (e) {
      tool.importJson(e.target.files && e.target.files[0], function (data) { tool.restore(data); run(); });
    },
    '#rd-print': function () { run(); window.print(); },
    '#rd-clear': function () {
      tool.clear(function () {
        tool.q('#rd-output').hidden = true;
        tool.q('#rd-exports').hidden = true;
      });
    }
  });

  tool.load();

  window.BCTResistance = {
    collect: tool.collect,
    analyse: analyse,
    decode: decode,
    run: run,
    markdown: function () { var a = analysis(); return markdown(a.d, a.r); },
    doc: function () { var a = analysis(); return docHtml(a.d, a.r); }
  };
}());
