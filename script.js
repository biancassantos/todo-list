const taskInput = document.querySelector('#task-input');
const addBtn = document.querySelector('#add-btn');
const list = document.querySelector('.todo-list');

displayList();

addBtn.addEventListener('click', () => {
    if (taskInput.value === "") {
        alert('Please write something to add a task.');
    } else {
        let item = document.createElement('li')
        item.innerHTML = `
            ${taskInput.value}
            <button class="delete-btn">x</button>
        `;
        list.appendChild(item);
    }
    taskInput.value = "";
    saveData();
});

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();

    } else if (e.target.className === 'delete-btn') {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    let jsonData = JSON.stringify(list.innerHTML)
    localStorage.setItem("todo-list", jsonData);
}

function displayList() {
    let htmlData = JSON.parse(localStorage.getItem("todo-list"));
    list.innerHTML = htmlData;
}
