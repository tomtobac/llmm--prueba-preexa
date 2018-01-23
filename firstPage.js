// https://developer.mozilla.org/es/docs/Web/API/GlobalEventHandlers/onload
window.onload = function() {
	var titles = document.querySelectorAll('.smallTitle');
	titles.forEach(function(title) {
		title.addEventListener('click', function(e) {
			var target = e.target;
			// https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling
			target.nextElementSibling.classList.toggle('u-display-none');
		});
	});
}
