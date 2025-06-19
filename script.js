/*This script creates a grid of squares that change color on hover.
*/
const container = document.getElementById('container');
const gridSize = 16;
const squareSize = 960 / gridSize;

function createGrid(size) {
  container.innerHTML = '';
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }
}

createGrid(gridSize);

/*Hover effect for grid squares*/
function addHoverEffect() {
  const squares = document.querySelectorAll('.grid-square');
  squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = 'black';
    });
  });
}

createGrid(gridSize);
addHoverEffect();

/*Resize*/
const buttonHtml = `<button id="resizeBtn">Resize Grid</button>`;
document.body.insertAdjacentHTML('afterbegin', buttonHtml);

const resizeBtn = document.getElementById('resizeBtn');
resizeBtn.addEventListener('click', () => {
  let newSize = prompt('Enter new grid size (max 100):');
  newSize = Number(newSize);
  if (newSize && newSize > 0 && newSize <= 100) {
    createGrid(newSize);
    addHoverEffect();
  } else {
    alert('Invalid size. Please enter a number between 1 and 100.');
  }
});
