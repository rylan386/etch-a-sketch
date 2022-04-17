const grid = document.querySelector(".grid");
const input = document.getElementById("input");
const reset = document.getElementById("reset");
let number = document.getElementById("number");


function createGrid() {
    for (let i = 0; i < 50; i++){
        const div = document.createElement("div");
        grid.appendChild(div);
        div.classList.add("gridsize");
        grid.setAttribute("style", `grid-template-columns: repeat(8, 2fr); grid-template-rows: repeat(8, 2fr);`);
    }
}

function clearGrid(){
    let currentGrid = document.getElementsByClassName("gridsize");
    while(currentGrid.length > 0) {
        currentGrid[0].parentNode.removeChild(currentGrid[0]);
    }
}

input.addEventListener("input", updateValue)

function updateValue() {
    let value = document.getElementById("input").value
    number.textContent = `${value} x ${value}`;
    clearGrid();
    for (let i = 0; i < value * value; i++) {
        const div = document.createElement("div");
        grid.appendChild(div);
        div.classList.add("gridsize");
    }
    grid.setAttribute('style', `grid-template-columns: repeat(${value}, 2fr); grid-template-rows: repeat(${value}, 2fr);`);
}

reset.addEventListener("click", resetPage)

function resetPage() {
    location.reload()
}

createGrid();

