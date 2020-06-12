function temHabilidade (skills) {
    const aux = skills.indexOf('Javascript');
    if (aux === -1) {
        return false;
    }
    else {
        return true;
    }
}

const skills = ['Javascript', 'ReactJS', 'React Native'];
console.log(temHabilidade(skills));