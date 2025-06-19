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