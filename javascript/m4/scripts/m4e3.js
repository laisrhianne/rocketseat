const input = document.querySelector('#user');
const button = document.querySelector('#enviar');
const list = document.querySelector('#lista');

button.onclick = function () {
  const listItem = document.createElement('li');
  listItem.classList.add('loading');
  listItem.innerHTML = 'Carregando...';
  list.appendChild(listItem);
  axios
    .get(`https://api.github.com/users/${input.value}/repos`)
    .then((res) => {
      listRepo(res.data);
    })
    .catch((e) => {
      list.innerHTML = '';
      if (e.response.status === 404) {
        alert('Usuário não encontrado');
      }
    });
};

function listRepo(repos) {
  list.innerHTML = '';
  
  for (repo of repos) {
        const li = document.createElement('li');
        li.innerHTML = repo.name;
        list.appendChild(li);
        input.value = '';
    }
}