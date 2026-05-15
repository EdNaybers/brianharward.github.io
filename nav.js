/* Brian Harward site — primary nav toggle
   Wires up the .nav-toggle hamburger button to open/close .primary-nav
   on small screens. Progressive: if JS fails, full nav still renders below header. */
(function () {
  function init() {
    var btn = document.querySelector('.nav-toggle');
    var nav = document.getElementById('primary-nav');
    if (!btn || !nav) return;

    function setOpen(open) {
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      nav.classList.toggle('is-open', open);
      document.body.classList.toggle('nav-open', open);
    }

    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') !== 'true';
      setOpen(open);
    });

    // Close when a nav link is tapped (mobile)
    nav.addEventListener('click', function (e) {
      var t = e.target;
      if (t && t.tagName === 'A' && window.matchMedia('(max-width: 860px)').matches) {
        setOpen(false);
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        btn.focus();
      }
    });

    // Reset state if user resizes back to desktop
    var mq = window.matchMedia('(min-width: 861px)');
    function onChange() { if (mq.matches) setOpen(false); }
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else mq.addListener(onChange);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
