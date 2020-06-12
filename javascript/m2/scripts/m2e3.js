const lista = document.querySelector('.nomes');

let nomes = ['Laís', 'Bru', 'Jojo', 'Manu', 'Jhon'];

for (let nome of nomes) {
    const listItem = document.createElement('li');
    listItem.innerHTML = nome;
    lista.appendChild(listItem);
}
