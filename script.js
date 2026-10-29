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
