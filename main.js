const form = document.querySelector('#to-do-form');
const input = document.querySelector('#new-item');
const ul = document.querySelector('#to-do-list');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	if (input.value === '') {
		alert('Please enter a task.');
	} else {
		const li = document.createElement('li');
		const checkbox = document.createElement('input');
		const span = document.createElement('span');
		const button = document.createElement('button');

		checkbox.type = 'checkbox';
		span.textContent = input.value;
		button.textContent = 'Delete';

		li.appendChild(checkbox);
		li.appendChild(span);
		li.appendChild(button);
		ul.appendChild(li);

		input.value = '';

		button.addEventListener('click', function() {
			ul.removeChild(li);
		});

		checkbox.addEventListener('change', function() {
			if (this.checked) {
				span.style.textDecoration = 'line-through';
				span.style.color = '#C0C8D6';
			} else {
				span.style.textDecoration = 'none';
				span.style.color = '#000';
			}
		});
	}
});
