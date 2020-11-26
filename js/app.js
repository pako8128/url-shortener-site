const stub_div = document.querySelector('.short-url-wrapper');
const stub  = document.querySelector('.short-url');
const url_form = document.querySelector('form');

stub_div.style.display = "none";

url_form.addEventListener('submit', (event) => {
	event.preventDefault();

	const formdata = new FormData(url_form);
		
	const req = {
		url: formdata.get('url'),
	};

	fetch('https://short-urls-test.herokuapp.com/api/shorten', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(req),
	})
	.then(resp => resp.json())
	.then(data => {
		stub.textContent = "https://short-urls-test.herokuapp.com/" + data.stub;
		stub.setAttribute('href', "https://short-urls-test.herokuapp.com/" + data.stub);
	});

	stub_div.style.display = "flex";
	stub_div.style.animation = "fadeIn";
});
