class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo(data) {
        this.todos.push(data);
        console.log(todos);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.addTodo('Novo todo')
}