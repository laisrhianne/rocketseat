const usuarios = [
    {
        nome: 'Diego',
        habilidades: ['Javascript', 'ReactJS', 'Redux']
    },
    {
        nome: 'Gabriel',
        habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
    }
];

function printSkills(users){
    for (let user of users){
        const skills = user.habilidades.join(', ');
        const texto = `O ${user.nome} possui as habilidades: ${skills}`;
        console.log(texto);
    }
}

printSkills(usuarios);