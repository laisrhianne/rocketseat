const input = document.querySelector('.todo');
const button = document.querySelector('.add');
const list = document.querySelector('.todos');

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

if(todos){
    for (todo of todos) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${todo}</strong> <a href="#">Excluir</a>`;
        listItem.querySelector('strong').setAttribute('style', 'font-weight: normal;');
        list.appendChild(listItem);
        input.value = '';
    }
}

button.onclick = () => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${input.value}</strong> <a href="#">Excluir</a>`;
    listItem.querySelector('strong').setAttribute('style', 'font-weight: normal;');
    list.appendChild(listItem);
    todos.push(input.value);
    input.value = '';
    saveToStorage();
}

list.addEventListener('click', (e) => {
    const excluir = e.target;
    const li = excluir.parentNode;
    const strong = li.querySelector('strong'); 
    if(excluir.innerHTML === 'Excluir'){
        list.removeChild(li);
        const indice = todos.find(strong.value);
        todos.pop(indice);
    }
    saveToStorage();
});

function saveToStorage () {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}