const lista = document.querySelector('.nomes');
const input = document.querySelector('.input-nome');
const button = document.querySelector('.add-btn');

let nomes = ['Laís', 'Bru', 'Jojo', 'Manu', 'Jhon'];

for (let nome of nomes) {
    const listItem = document.createElement('li');
    listItem.innerHTML = nome;
    lista.appendChild(listItem);
}

function adicionar() {
    const item = document.createElement('li');
    item.innerHTML = input.value;
    lista.appendChild(item);
    input.value = '';
}
