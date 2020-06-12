const button = document.querySelector('.btn');
const box = document.querySelector('.box');

box.style.display = 'grid';
box.style.gridTemplateColumns = '120px 120px 120px 120px 120px 120px 120px 120px 120px 120px';


button.onclick = () => {
    criaQuadrado();
};

criaQuadrado = (e) => {
    const quadrado = document.createElement('div');

    quadrado.style.width = '100px';
    quadrado.style.height = '100px';
    quadrado.style.backgroundColor = '#F00';
    quadrado.style.margin = '20px 20px 20px 20px';

    box.appendChild(quadrado);
}