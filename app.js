function resize() {
	let innerWidth, innerHeight, outerWidth, outerHeight;
	innerWidth = window.innerWidth;
	innerHeight = window.innerHeight;
	outerHeight = window.outerHeight;
	outerWidth = window.outerWidth;
	document.getElementById('innerWidth').innerText = innerWidth + 'px';
	document.getElementById('innerHeight').innerText = innerHeight + 'px';
	document.getElementById('outerWidth').innerText = outerWidth + 'px';
	document.getElementById('outerHeight').innerText = outerHeight + 'px';
}

// Implementing timing events
let x = setInterval(resize, 1);
