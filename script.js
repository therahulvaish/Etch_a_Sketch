const container = document.getElementById('container');
const resetButton = document.getElementById('reset');
const resizeButton = document.getElementById('resize');

function createGrid(size) {
  container.innerHTML = ''; // Clear existing grid
  const squareSize = 960 / size; // Calculate size of each square

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Add hover effect
    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = getRandomColor();
    });

    container.appendChild(square);
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

resetButton.addEventListener('click', () => {
  const squares = container.querySelectorAll('.grid-square');
  squares.forEach(square => square.style.backgroundColor = '');
});

resizeButton.addEventListener('click', () => {
  let newSize = parseInt(prompt('Enter new grid size (max 100):', 16));
  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert('Invalid size! Please enter a number between 1 and 100.');
  }
});

// Initial grid creation
createGrid(16);
