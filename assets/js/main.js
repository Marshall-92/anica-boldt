// Zollstock-Zahlen passend zur Bildschirmbreite erzeugen
(function () {
  var nums = document.querySelector('.ruler__nums');
  if (nums) {
    var render = function () {
      var count = Math.ceil(window.innerWidth / 60) + 1;
      if (nums.childElementCount === count) return;
      var frag = document.createDocumentFragment();
      for (var i = 1; i <= count; i++) {
        var s = document.createElement('span');
        s.textContent = i;
        frag.appendChild(s);
      }
      nums.replaceChildren(frag);
    };
    render();
    window.addEventListener('resize', render, { passive: true });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();

// Telefonsprechzeiten: heutigen Tag markieren und Status anzeigen (Zeit in Europe/Berlin)
(function () {
  var status = document.getElementById('hours-status');
  if (!status || !window.Intl) return;
  var SLOTS = { 0: [[6, 18]], 6: [[6, 18]], 1: [[6, 8], [16, 21]], 2: [[6, 8], [16, 21]], 3: [[6, 8], [16, 21]], 4: [[6, 8], [16, 21]], 5: [[6, 8], [16, 21]] };
  var DAYS = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  var MAP = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  try {
    var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Berlin', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
    var get = function (t) { return parts.filter(function (p) { return p.type === t; })[0].value; };
    var day = MAP[get('weekday')];
    var now = parseInt(get('hour'), 10) + parseInt(get('minute'), 10) / 60;

    document.querySelectorAll('.hours__row').forEach(function (row) {
      if (row.getAttribute('data-days').split(',').indexOf(String(day)) > -1) row.classList.add('is-today');
    });

    var open = SLOTS[day].some(function (s) { return now >= s[0] && now < s[1]; });
    var text;
    if (open) {
      text = 'Gerade ist Telefonsprechzeit.';
    } else {
      var next = null;
      for (var i = 0; i < 8 && !next; i++) {
        var d = (day + i) % 7;
        SLOTS[d].forEach(function (s) { if (!next && (i > 0 || s[0] > now)) next = { d: d, h: s[0], i: i }; });
      }
      var when = next.i === 0 ? 'heute' : next.i === 1 ? 'morgen' : 'am ' + DAYS[next.d];
      text = 'Nächste Telefonsprechzeit: ' + when + ' ab ' + next.h + ' Uhr.';
    }
    status.textContent = text;
    status.hidden = false;
  } catch (e) { /* Status ist optional */ }
})();
