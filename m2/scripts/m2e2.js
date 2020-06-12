const button = document.querySelector('.btn');
const box = document.querySelector('.box');

box.style.display = 'grid';
box.style.gridTemplateColumns =
  '120px 120px 120px 120px 120px 120px 120px 120px 120px 120px';

button.onclick = () => {
  criaQuadrado();
};

criaQuadrado = (e) => {
  const quadrado = document.createElement('div');

  quadrado.style.width = '100px';
  quadrado.style.height = '100px';
  quadrado.style.backgroundColor = 'red';
  quadrado.style.margin = '20px 20px 20px 20px';

  box.appendChild(quadrado);
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

box.addEventListener('mouseover', (e) => {
  const square = e.target;
  const squareClass = square.className;
  let cor = getRandomColor();
  // const css = `.random { background-color: ${cor} }`;
  if (squareClass !== 'box'){
      square.setAttribute(
        'style',
        `background-color: ${cor}; width:100px; height: 100px; margin: 20px 20px 20px 20px;`
      );
      box.style.display = 'grid';
      box.style.gridTemplateColumns =
        '120px 120px 120px 120px 120px 120px 120px 120px 120px 120px';
  }
});
