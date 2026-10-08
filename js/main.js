document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var header = document.querySelector('.site-header');
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      header.classList.toggle('open');
      var expanded = header.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    // Close menu when a nav link is tapped
    header.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('open');
      });
    });
  }
});
