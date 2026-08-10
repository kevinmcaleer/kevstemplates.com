/* Choose Your Tool — interactive router
 * Mirrors /behavioural-change/choose-your-tool/. Browser only.
 *
 * A decision tree for when you do not know where to start. No form state and
 * nothing to save — you pick a situation, it routes you.
 */
(function () {
  'use strict';

  var B = window.BCT;
  if (!B) { return; }

  var root = document.getElementById('router-tool');
  if (!root) { return; }

  var SITUATIONS = [
    {
      id: 'notusing',
      label: 'People are not using the new system',
      branch: {
        question: 'Do you know <strong>why</strong> yet — from talking to them, not from a survey?',
        options: [
          {
            label: 'No, not yet',
            read: 'Then that is the next thing, and it is cheap. Six conversations will tell you more than a 400-response survey.',
            routes: [['Barrier Analysis — COM-B Interview Guide', '/behavioural-change/barrier-analysis-com-b-interview-guide/']]
          },
          {
            label: 'They can’t — skill, tools, access',
            read: 'A Capability or Opportunity problem. Look at Training and Enablement rather than persuasion.',
            routes: [
              ['Behavioural Diagnosis Canvas — Interactive', '/behavioural-change/diagnosis-tool/'],
              ['Intervention Design Worksheet', '/behavioural-change/intervention-design-worksheet/']
            ]
          },
          {
            label: 'They won’t — they do not see the point',
            read: 'A Motivation problem. Before you spend anything on it, check the attribution: managers reliably over-attribute to attitude, and assuming “won’t” when it is “can’t” is the single most common error in this whole toolkit.',
            routes: [
              ['Resistance Decoder — Interactive', '/behavioural-change/resistance-tool/'],
              ['Social Norms and Influence', '/behavioural-change/social-norms-and-influence/']
            ],
            warn: true
          },
          {
            label: 'They forget',
            read: 'A habit problem — prompts and defaults, not training.',
            routes: [
              ['Habit Loop drift explainer', '/behavioural-change/drift-tool/'],
              ['Nudge Library', '/behavioural-change/nudge-library/']
            ]
          }
        ]
      }
    },
    {
      id: 'plan',
      label: 'We need a change plan by Friday',
      read: 'Fill in the one-pager, then produce the exec version from it. If you have 90 minutes with the right people first, run the diagnosis workshop and the plan writes itself.',
      routes: [
        ['Change on a Page — Interactive', '/behavioural-change/change-on-a-page-tool/'],
        ['The One-Page Board Narrative', '/behavioural-change/the-one-page-board-narrative/'],
        ['Workshop — Behavioural Diagnosis (90 min)', '/behavioural-change/workshop-behavioural-diagnosis-90-min/']
      ]
    },
    {
      id: 'sponsor',
      label: 'The sponsor is not showing up',
      read: 'Make the ask concrete, then make it visible, then escalate if it continues. Active, visible sponsorship is repeatedly identified as the largest single contributor to change success — a quiet sponsor is not a minor risk, it is the risk.',
      routes: [
        ['Sponsor Briefing Pack — Interactive', '/behavioural-change/sponsor-briefing-tool/'],
        ['Leader Behaviour Contract', '/behavioural-change/leader-behaviour-contract/'],
        ['Challenging Upward — Scripts', '/behavioural-change/challenging-upward-scripts/']
      ]
    },
    {
      id: 'saydo',
      label: 'Leadership say the right things but do the opposite',
      read: 'The organisation reads behaviour, not memos. One leader visibly bypassing the new process undoes six weeks of comms.',
      routes: [
        ['Executive Failure Modes — Interactive', '/behavioural-change/exec-failure-tool/'],
        ['Leader Behaviour Contract', '/behavioural-change/leader-behaviour-contract/']
      ]
    },
    {
      id: 'resistance',
      label: 'There is a lot of resistance',
      read: 'Decode it first. Resistance is almost always one of: an unclear ask, a real cost you have not acknowledged, loss of status or competence, prior broken promises, or a genuinely bad design. Only the last one is your fault, and only the last one is a compliment.',
      routes: [['Resistance Decoder — Interactive', '/behavioural-change/resistance-tool/']]
    },
    {
      id: 'drift',
      label: 'We rolled out and adoption spiked then dropped',
      read: 'Textbook drift. The spike was novelty and supervision; the drop is the true baseline. Design for the drop.',
      routes: [
        ['Habit Loop drift explainer', '/behavioural-change/drift-tool/'],
        ['Drift Check — 30 60 90', '/behavioural-change/drift-check-30-60-90/'],
        ['Embedding and Reinforcement', '/behavioural-change/embedding-and-reinforcement/']
      ]
    },
    {
      id: 'measure',
      label: 'How do we know if it is working?',
      read: 'If your only metric is “training completed” you are measuring attendance, not change.',
      routes: [['Measurement Plan — Leading and Lagging', '/behavioural-change/measurement-plan-leading-and-lagging/']]
    },
    {
      id: 'culture',
      label: 'We need to change the culture',
      read: 'You cannot change culture directly. You change behaviours; culture is the residue. Force the aspiration — “more collaborative”, “more accountable” — into observable actions. If you cannot film it, it is not a behaviour.',
      routes: [['Target Behaviour Definition', '/behavioural-change/target-behaviour-definition/']]
    },
    {
      id: 'saturation',
      label: 'Everyone is exhausted — there is too much change',
      read: 'Real and legitimate. The honest advice to a senior leader is often to sequence, or stop something. Bring them the list of what is already running.',
      routes: [['Change Readiness Assessment — Interactive', '/behavioural-change/readiness-tool/']]
    },
    {
      id: 'stuck',
      label: 'One person or team is stuck and I do not know why',
      read: 'Work the five steps in order and stop at the first low score — everything after it is noise until it clears.',
      routes: [['ADKAR stuck-step finder', '/behavioural-change/adkar-tool/']]
    }
  ];

  function esc(s) { return B.esc(s); }

  function routeList(routes) {
    return '<ul class="bct-router-routes">' + routes.map(function (r) {
      return '<li><a href="' + r[1] + '">' + esc(r[0]) + ' &rarr;</a></li>';
    }).join('') + '</ul>';
  }

  function showResult(sit, opt) {
    var out = document.getElementById('router-output');
    var h = [];
    h.push('<div class="bct-result-head"><h3>' + esc(sit.label) + '</h3>' +
      (opt ? '<p class="bct-complete">' + esc(opt.label.replace(/<[^>]*>/g, '')) + '</p>' : '') + '</div>');

    var read = opt ? opt.read : sit.read;
    var routes = opt ? opt.routes : sit.routes;

    h.push('<div class="bct-primary' + (opt && opt.warn ? ' bct-band-warn' : '') + '">');
    h.push('<p class="bct-kicker">What this usually means</p>');
    h.push('<p class="bct-reads">' + esc(read) + '</p>');
    h.push('</div>');

    h.push('<h4>Go here</h4>');
    h.push(routeList(routes));

    h.push('<p class="bct-help"><a href="#router-start" data-router-reset>Start again</a> · ' +
      '<a href="/behavioural-change/choose-your-tool/">Read the full decision tree &rarr;</a></p>');

    out.innerHTML = h.join('');
    out.hidden = false;
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function showBranch(sit) {
    var out = document.getElementById('router-output');
    var h = [];
    h.push('<div class="bct-result-head"><h3>' + esc(sit.label) + '</h3></div>');
    h.push('<p class="bct-router-question">' + sit.branch.question + '</p>');
    h.push('<div class="bct-router-options">');
    sit.branch.options.forEach(function (o, i) {
      h.push('<button type="button" class="btn btn-outline-primary bct-router-option" data-branch="' + i + '">' +
        esc(o.label) + '</button>');
    });
    h.push('</div>');
    out.innerHTML = h.join('');
    out.hidden = false;
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });

    Array.prototype.slice.call(out.querySelectorAll('[data-branch]')).forEach(function (btn) {
      btn.addEventListener('click', function () {
        showResult(sit, sit.branch.options[parseInt(btn.dataset.branch, 10)]);
      });
    });
  }

  function reset() {
    var out = document.getElementById('router-output');
    out.hidden = true;
    out.innerHTML = '';
    document.getElementById('router-start').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Render the situation buttons from the data.
  var start = document.getElementById('router-start');
  start.innerHTML = SITUATIONS.map(function (s) {
    return '<button type="button" class="btn btn-outline-secondary bct-router-situation" data-situation="' +
      s.id + '">' + esc(s.label) + '</button>';
  }).join('');

  start.addEventListener('click', function (ev) {
    var btn = ev.target.closest('[data-situation]');
    if (!btn) { return; }
    var sit = SITUATIONS.filter(function (s) { return s.id === btn.dataset.situation; })[0];
    if (!sit) { return; }
    if (sit.branch) { showBranch(sit); } else { showResult(sit, null); }
  });

  document.addEventListener('click', function (ev) {
    if (ev.target.closest('[data-router-reset]')) {
      ev.preventDefault();
      reset();
    }
  });

  window.BCTRouter = {
    situations: SITUATIONS,
    show: function (id, branchIndex) {
      var sit = SITUATIONS.filter(function (s) { return s.id === id; })[0];
      if (!sit) { return false; }
      if (sit.branch && branchIndex !== undefined) {
        showResult(sit, sit.branch.options[branchIndex]);
      } else if (sit.branch) {
        showBranch(sit);
      } else {
        showResult(sit, null);
      }
      return true;
    },
    reset: reset
  };
}());
