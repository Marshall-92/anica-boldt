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
