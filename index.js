const form = document.getElementById('contactoForm');
const submit = document.getElementById('contactoEnviar');

console.log(form);

form.addEventListener('submit', (event) => {

	event.preventDefault();

	const name = document.getElementById('contactoNombre').value;
	const email = document.getElementById('contactoEmail').value;
	const asunto = document.getElementById('contactoAsunto').value;
	const message = document.getElementById('contactoTextArea').value;

	if (!name || !email || !message) {
		alert('Please fill out all fields.');
		return;
	}

	submit.setAttribute('href', `mailto:thomas.r.pufahl@gmail.com?subject=${asunto} | ${name}&body=${message}`)
	submit.click();
})
