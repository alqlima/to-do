let data = [];

function rendTodo() {
	
	document.querySelector('.todo').innerHTML = '';

	data.forEach(task => {
		let li = document.createElement('li');
		
		li.innerHTML = `
			<input type="checkbox" id="task-${task.id}">
			<label for="task-${task.id}">${task.title}</label>
			<button tyoe="button">x</button>
		`;
		
		li.querySelector('input').addEventListener("change", e => {
			if(e.target.checked) {
				li.classList.add('complete');
			} else {
				li.classList.remove('complete');
			}
		})
		li.querySelector('button').addEventListener('click', e => {
			let button = e.target;
			let li = button.parentNode;
			let input = li.querySelector('input');
			let id = input.id;
			let idArray = id.split('-');
			let todoId = idArray[1];
			
			data = data.filter(task => (task.id != parseInt(todoId)))
			
			rendTodo();
		})
		document.querySelector('.todo').append(li);
	});
}

document.querySelector('#new-task').addEventListener("keyup", e => {
	if (e.key === 'Enter') {
		console.log(e.target.value);
		
		data.push({
			id: data.length + 1,
			title: e.target.value
		});
		e.target.value = '';
		rendTodo();
	} 
});
rendTodo();
