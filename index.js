document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const listItem = createTodoItem(todoText);
            todoList.appendChild(listItem);
            todoInput.value = '';
        }
    });

    function createTodoItem(text) {
        const listItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                listItem.classList.add('checked');
                todoList.appendChild(listItem);
            } else {
                listItem.classList.remove('checked');
            }
        });

        const todoText = document.createElement('span');
        todoText.textContent = text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(listItem);
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(todoText);
        listItem.appendChild(deleteButton);

        return listItem;
    }
});
