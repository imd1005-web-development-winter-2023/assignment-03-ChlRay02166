//form where task is inputed
const form = document.querySelector('#to-do-form');
const input = document.querySelector('#new-item');
const ul = document.querySelector('#to-do-list');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	//will return text if blank
	if (input.value === '') {
		alert('Please enter a task.');
	//creates the tasks with text/checkbox/button
	} else {
		const todo = document.createElement('todo');
		const checkbox = document.createElement('input');
		const span = document.createElement('span');
		const button = document.createElement('button');

		checkbox.type = 'checkbox';
		span.textContent = input.value;
		button.textContent = 'Delete';
        
		//add at the end of the list
		todo.appendChild(checkbox);
		todo.appendChild(span);
		todo.appendChild(button);
		ul.appendChild(todo);

		input.value = '';

		//delete button/removes the to do
		button.addEventListener('click', function() {
			ul.removeChild(todo);
		});

        //if checked, strike through/color change
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
