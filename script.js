document.addEventListener('click', function (event) {
  var anchor = event.target.closest('.anchor');
  if (!anchor) return;

  var url = new URL(anchor.getAttribute('href'), window.location.href).href;
  if (!navigator.clipboard) return;

  navigator.clipboard.writeText(url).then(function () {
    var original = anchor.textContent;
    anchor.textContent = '✅';
    setTimeout(function () {
      anchor.textContent = original;
    }, 1200);
  });
});

// Lightbox: click any .post-photo to view it large, without leaving the post.
(function () {
  var overlay, img;

  function buildOverlay() {
    overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    img = document.createElement('img');
    img.className = 'lightbox-img';

    var close = document.createElement('button');
    close.className = 'lightbox-close';
    close.setAttribute('aria-label', 'Close');
    close.textContent = '×';

    overlay.appendChild(img);
    overlay.appendChild(close);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function (event) {
      if (event.target === overlay || event.target === close) closeLightbox();
    });
  }

  function openLightbox(src, alt) {
    if (!overlay) buildOverlay();
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', function (event) {
    var photo = event.target.closest('.post-photo');
    if (!photo) return;
    openLightbox(photo.src, photo.alt);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeLightbox();
  });
})();
