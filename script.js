var btn = document.getElementById('menuBtn');
var nav = document.getElementById('navLinks');

btn.addEventListener('click', function() {
  nav.classList.toggle('open');
  btn.textContent = nav.classList.contains('open') ? 'x' : '=';
});

nav.querySelectorAll('a').forEach(function(a) {
  a.addEventListener('click', function() {
    nav.classList.remove('open');
    btn.textContent = '=';
  });
});
