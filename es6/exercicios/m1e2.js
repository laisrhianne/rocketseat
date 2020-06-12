const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map((user) => user.idade);
console.log(idades);

const rocketseat = usuarios.filter(
  (user) => user.empresa === 'Rocketseat' && user.idade >= 18
);
console.log(rocketseat);

const google = usuarios.find(user => {
    return user.empresa === 'Google';
});
console.log(google);

const idades2 = usuarios.map(user => {
    user.idade *= 2;
    return user;
}).filter(user => user.idade <= 50);
console.log(idades2);