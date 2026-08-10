/* Shared plumbing for the Behavioural Change Toolkit's interactive tools.
 *
 * Everything runs in the browser — the site has no backend. Load this before
 * any of the individual tool scripts.
 */
window.BCT = (function () {
  'use strict';

  function esc(s) {
    return String(s === undefined || s === null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function slugify(s, fallback) {
    var base = String(s || '').toLowerCase()
      .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48);
    return base || fallback || 'download';
  }

  function download(name, mime, content) {
    var url = URL.createObjectURL(new Blob([content], { type: mime }));
    var a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
  }

  // Word opens HTML with the msword MIME type, which avoids pulling in a zip
  // library just to emit a .docx.
  function wordDoc(title, bodyHtml) {
    return '<html xmlns:o="urn:schemas-microsoft-com:office:office" ' +
      'xmlns:w="urn:schemas-microsoft-com:office:word" ' +
      'xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8">' +
      '<title>' + esc(title) + '</title>' +
      '<style>body{font-family:Calibri,Arial,sans-serif;font-size:11pt;line-height:1.4}' +
      'h1{font-size:20pt}h2{font-size:14pt;margin-top:18pt}th{background:#eee}' +
      'table{border-collapse:collapse;width:100%}td,th{border:1px solid #999;padding:5pt}</style>' +
      '</head><body>' + bodyHtml + '</body></html>';
  }

  function htmlTable(head, rows, emptyNote) {
    if (!rows.length) { return '<p><em>' + esc(emptyNote || 'Not completed.') + '</em></p>'; }
    var h = '<table><tr>';
    head.forEach(function (c) { h += '<th align="left">' + esc(c) + '</th>'; });
    h += '</tr>';
    rows.forEach(function (r) {
      h += '<tr>';
      r.forEach(function (c) { h += '<td>' + esc(c) + '</td>'; });
      h += '</tr>';
    });
    return h + '</table>';
  }

  function mdTable(head, rows) {
    var out = ['| ' + head.join(' | ') + ' |', '|' + head.map(function () { return '---'; }).join('|') + '|'];
    rows.forEach(function (r) {
      out.push('| ' + r.map(function (c) { return String(c || '').replace(/\|/g, '\\|'); }).join(' | ') + ' |');
    });
    return out.join('\n');
  }

  // Load a script on demand — used for PptxGenJS, which is ~470KB and should
  // not be on the critical path for people who never export a deck.
  var loaded = {};
  function loadScript(src) {
    if (loaded[src]) { return loaded[src]; }
    loaded[src] = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = function () {
        loaded[src] = null;
        reject(new Error('Could not load ' + src));
      };
      document.head.appendChild(s);
    });
    return loaded[src];
  }

  // --- per-tool instance ---------------------------------------------------

  function create(rootId, storeKey, tables) {
    var root = document.getElementById(rootId);
    if (!root) { return null; }

    function q(sel) { return root.querySelector(sel); }
    function qa(sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }
    function val(el) { return el && el.value ? el.value.trim() : ''; }

    function rowsFrom(id, cols) {
      var body = q('#' + id);
      if (!body) { return []; }
      return Array.prototype.slice.call(body.querySelectorAll('tr')).map(function (tr) {
        var o = {};
        cols.forEach(function (c) { o[c] = val(tr.querySelector('[data-col="' + c + '"]')); });
        return o;
      }).filter(function (o) {
        // Keep a row only if something beyond its pre-filled label was entered.
        return cols.some(function (c) { return o[c] && !isPreset(id, c); });
      });
    }

    // Columns that ship with a value (row labels such as "Sponsor") should not
    // by themselves make a row count as completed.
    function isPreset(id, col) {
      var spec = tables[id];
      return !!(spec && spec.preset && spec.preset.indexOf(col) > -1);
    }

    function addRow(id) {
      var body = q('#' + id);
      if (!body || !body.lastElementChild) { return; }
      var clone = body.lastElementChild.cloneNode(true);
      Array.prototype.slice.call(clone.querySelectorAll('input, select, textarea')).forEach(function (el) {
        if (el.tagName === 'SELECT') { el.selectedIndex = 0; } else { el.value = ''; }
      });
      body.appendChild(clone);
    }

    function fillRows(id, cols, data) {
      if (!data || !data.length) { return; }
      var body = q('#' + id);
      if (!body) { return; }
      while (body.querySelectorAll('tr').length < data.length) { addRow(id); }
      var trs = Array.prototype.slice.call(body.querySelectorAll('tr'));
      data.forEach(function (o, i) {
        cols.forEach(function (c) {
          var el = trs[i].querySelector('[data-col="' + c + '"]');
          if (el && o[c]) { el.value = o[c]; }
        });
      });
    }

    function collect() {
      var d = { fields: {} };
      qa('[data-f]').forEach(function (el) { d.fields[el.dataset.f] = val(el); });
      Object.keys(tables).forEach(function (id) {
        d[tables[id].name] = rowsFrom(id, tables[id].cols);
      });
      return d;
    }

    function restore(d) {
      if (!d) { return; }
      Object.keys(d.fields || {}).forEach(function (k) {
        var el = q('[data-f="' + k + '"]');
        if (el) { el.value = d.fields[k]; }
      });
      Object.keys(tables).forEach(function (id) {
        fillRows(id, tables[id].cols, d[tables[id].name]);
      });
    }

    var savedTimer;
    function flagSaved(message, ms) {
      var el = q('[data-saved]');
      if (!el) { return; }
      el.textContent = message || 'Saved locally';
      el.classList.add('is-on');
      clearTimeout(savedTimer);
      savedTimer = setTimeout(function () { el.classList.remove('is-on'); }, ms || 1600);
    }

    function save() {
      try { localStorage.setItem(storeKey, JSON.stringify(collect())); } catch (e) { /* private mode */ }
      flagSaved();
    }

    // Explicit save, for the button. Confirms for longer than the autosave
    // flicker, and says plainly that the work will still be here.
    function saveNow() {
      var stored = true;
      try {
        localStorage.setItem(storeKey, JSON.stringify(collect()));
      } catch (e) {
        stored = false;
      }
      flagSaved(stored
        ? 'Saved to this device — it will be here when you come back'
        : 'This browser will not store data (private mode?) — use Download a copy instead', 5000);
    }

    function load() {
      try {
        var raw = localStorage.getItem(storeKey);
        if (raw) { restore(JSON.parse(raw)); }
      } catch (e) { /* ignore corrupt state */ }
    }

    function clear(onDone) {
      if (!window.confirm('Clear this form? This cannot be undone.')) { return; }
      qa('input, select, textarea').forEach(function (el) {
        if (el.type === 'file' || el.dataset.keep !== undefined) { return; }
        if (el.tagName === 'SELECT') { el.selectedIndex = 0; } else { el.value = ''; }
      });
      try { localStorage.removeItem(storeKey); } catch (e) { /* ignore */ }
      if (onDone) { onDone(); }
    }

    // Wire the conventions every tool page shares.
    function wire(handlers) {
      root.addEventListener('input', save);
      root.addEventListener('change', save);

      qa('[data-add-row]').forEach(function (btn) {
        btn.addEventListener('click', function () { addRow(btn.dataset.addRow); });
      });

      Object.keys(handlers).forEach(function (sel) {
        var el = q(sel);
        if (!el) { return; }
        var ev = (el.tagName === 'INPUT' && el.type === 'file') ? 'change' : 'click';
        el.addEventListener(ev, handlers[sel]);
      });
    }

    function importJson(file, onLoaded) {
      if (!file) { return; }
      var reader = new FileReader();
      reader.onload = function () {
        try {
          onLoaded(JSON.parse(reader.result));
          save();
        } catch (err) {
          window.alert('That file could not be read as a saved form.');
        }
      };
      reader.readAsText(file);
    }

    return {
      root: root, q: q, qa: qa, val: val,
      collect: collect, restore: restore, save: save, saveNow: saveNow, load: load, clear: clear,
      addRow: addRow, fillRows: fillRows, wire: wire, importJson: importJson
    };
  }

  return {
    esc: esc,
    slugify: slugify,
    download: download,
    wordDoc: wordDoc,
    htmlTable: htmlTable,
    mdTable: mdTable,
    loadScript: loadScript,
    create: create
  };
}());
