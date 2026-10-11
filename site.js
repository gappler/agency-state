(function () {
  function updateTime() {
    var node = document.getElementById('time');
    if (!node) return;
    node.textContent = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZoneName: 'short'
    }).format(new Date());
  }

  function copyEmail() {
    var address = 'greg' + '@' + 'agencystate.ai';
    var buttons = document.querySelectorAll('.site-meta button');

    function showFeedback() {
      buttons.forEach(function (button) {
        button.textContent = 'copied';
      });
      window.setTimeout(function () {
        buttons.forEach(function (button) {
          button.textContent = 'copy email';
        });
      }, 1600);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(address).then(showFeedback, function () {
        window.location.href = 'mailto:' + address;
      });
      return;
    }

    window.location.href = 'mailto:' + address;
  }

  updateTime();
  window.setInterval(updateTime, 1000);
  window.copyEmail = copyEmail;

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('a[href*="#"]').forEach(function (link) {
      link.addEventListener('click', function (event) {
        var targetUrl = new URL(link.href, window.location.href);
        var sameOrigin = targetUrl.origin === window.location.origin ||
          (targetUrl.protocol === 'file:' && window.location.protocol === 'file:');
        if (!sameOrigin || !targetUrl.hash) return;

        var currentPath = window.location.pathname.split('/').pop() || 'index.html';
        var targetPath = targetUrl.pathname.split('/').pop() || 'index.html';

        if (currentPath !== targetPath) {
          event.preventDefault();
          window.sessionStorage.setItem('anchorTarget', targetUrl.hash);
          window.location.href = targetUrl.pathname + targetUrl.search;
          return;
        }

        var target = document.querySelector(targetUrl.hash);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', targetUrl.hash);
      });
    });

    var anchorTarget = window.sessionStorage.getItem('anchorTarget');
    if (anchorTarget) {
      window.sessionStorage.removeItem('anchorTarget');
      window.requestAnimationFrame(function () {
        var target = document.querySelector(anchorTarget);
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, '', anchorTarget);
      });
    }
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('motion-ready');
    var stack = document.querySelector('.stack-grid');
    var sections = document.querySelectorAll('.section');

    if ('IntersectionObserver' in window) {
      var motionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          motionObserver.unobserve(entry.target);
        });
      }, { threshold: 0, rootMargin: '0px 0px -48px 0px' });

      sections.forEach(function (section) {
        motionObserver.observe(section);
      });
      if (stack) {
        motionObserver.observe(stack);
      }
    } else {
      sections.forEach(function (section) {
        section.classList.add('is-visible');
      });
      if (stack) {
        stack.classList.add('is-visible');
      }
    }
  }
})();
