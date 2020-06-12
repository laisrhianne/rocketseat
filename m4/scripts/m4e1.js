const input = document.querySelector('#idade');
const button = document.querySelector('#enviar');
const display = document.querySelector('#display');

function checaIdade(idade) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (idade >= 18) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

button.onclick = function () {
  checaIdade(input.value)
    .then(() => {
      display.innerHTML = 'Maior ou igual a 18';
    })
    .catch(() => {
      display.innerHTML = 'Menor que 18';
    });
};
