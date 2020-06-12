const input = document.querySelector('#user');
const button = document.querySelector('#enviar');
const list = document.querySelector('#lista');

button.onclick = function () {
  axios
    .get(`https://api.github.com/users/${input.value}/repos`)
    .then((res) => {
      listRepo(res.data);
    })
    .catch((e) => {
      console.warn(e);
    });
};

function listRepo(repos) {
    for (repo of repos) {
        const li = document.createElement('li');
        li.innerHTML = repo.name;
        list.appendChild(li);
        input.value = '';
    }
}