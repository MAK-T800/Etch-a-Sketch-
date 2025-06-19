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
      square.style.backgroundColor = 'red';
      square.style.opacity = 1; // Reset opacity on hover
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

/*Additional functionality to reset the grid*/
function addHoverEffect() {
  const squares = document.querySelectorAll('.grid-square');
  squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
      // Generate random RGB values
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
  });
}
