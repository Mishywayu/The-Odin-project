const drawContainer = document.querySelector("#draw-grid");
const resetButton = document.querySelector("#reset");
const resizeText = document.querySelector("#grid-size");
const resizeSlider = document.querySelector("#resize");
const resizeApply = document.querySelector("#apply");

function createDiv() {
  let div = document.createElement("div");
  div.classList.add("draw-box");

  return div;
}

function createCanvas(size) {
  for (i = 0; i < Math.pow(size, 2); i++) {
    let div = createDiv();
    div.addEventListener("mouseover", (e) => {
      div.style.backgroundColor = "black";
    });
    drawContainer.appendChild(div);
  }
  drawContainer.style.gridTemplateColumns = `repeat(${resizeSlider.value}, 1fr)`;
}

function reset() {
  let drawCells = document.querySelectorAll(".draw-box");
  drawCells.forEach((element) => {
    element.remove();
  });
  createCanvas(resizeSlider.value);
}

resetButton.addEventListener("click", (e) => {
  reset();
});

resizeSlider.addEventListener("input", (e) => {
  let size = resizeSlider.value;
  resizeText.textContent = `Grid size: ${size}x${size}`;
  reset();
});

resizeSlider.value = 16;
resizeText.textContent = "Grid size: 16x16";

createCanvas(resizeSlider.value);
