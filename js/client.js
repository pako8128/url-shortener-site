const stub_div = document.querySelector('#stub-div');
const stub  = document.querySelector('#stub');
const url_form = document.querySelector('#url-form');

stub_div.setAttribute('hidden', true);

url_form.addEventListener('submit', (event) => {
	event.preventDefault();

	const req = {
		url: url_form.url,
	};

	fetch('http://short-url-test.herokuapp.com/api/shorten', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(req),
	})
	.then(resp => resp.json())
	.then(data => stub.setAttribute('value', data.stub));

	stub_div.removeAttribute('hidden');
});
