let gridSize = 16;

const container = document.querySelector("#container");

const gridSizeBtn = document.querySelector("#gridBtn");
gridSizeBtn.addEventListener("click", changeGridSize);

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", clearGrid);

const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", () => {
  location.reload();
});

function clearGrid() {
  container.innerHTML = "";
  grid(gridSize);
}

function changeGridSize() {
  gridSize = prompt("Please enter the new size of the grid");
  container.innerHTML = "";
  if (isNaN(gridSize) || gridSize == 0) {
    location.reload();
  } else {
    grid(gridSize);
  }
}

function randomNumber() {
  return Math.floor(Math.random() * 255);
}

function cellColor(e) {
  return (e.target.style.background = `rgba(${randomNumber()}, ${randomNumber()}, ${randomNumber()}, ${Math.random()}) `);
}

function grid() {
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  for (i = 0; i < gridSize ** 2; i++) {
    const cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    container.appendChild(cell);
    cell.addEventListener("mouseenter", cellColor);
  }
}

grid(gridSize);
