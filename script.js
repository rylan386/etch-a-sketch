const grid = document.querySelector(".grid");
const input = document.getElementById("input");
const reset = document.getElementById("reset");
const gridSize = document.querySelector(".gridsize");
let color = document.getElementById("color");
let number = document.getElementById("number");
let active = false;
let colorValue;

function createGrid() {
    colorValue = document.getElementById("color").value;
    let value = document.getElementById("input").value;
    number.textContent = `${value} x ${value}`;
    clearGrid();
    for (let i = 0; i < value * value; i++){
        const div = document.createElement("div");
        grid.appendChild(div);
        div.classList.add("gridsize");
        grid.setAttribute('style', `grid-template-columns: repeat(${value}, 2fr); grid-template-rows: repeat(${value}, 2fr);`);
    }
    grid.style.boxShadow =`0 0 30px ${colorValue}`;
    grid.style.borderColor = colorValue;
    draw(colorValue) 
}

function clearGrid(){
    let currentGrid = document.getElementsByClassName("gridsize");
    while(currentGrid.length > 0) {
        currentGrid[0].parentNode.removeChild(currentGrid[0]);
    }
}

function draw(colorValue){                                           
    let gridColors = document.querySelectorAll('.gridsize');
    for (let gridColor of gridColors){
        
        gridColor.addEventListener('mousedown', () => {
            gridColor.style.backgroundColor = colorValue;             
        })  
        
        gridColor.addEventListener('mousemove', () => {
            if (active)
            gridColor.style.backgroundColor = colorValue;                 
        })
    }            
}

color.addEventListener('change', () => {   
    colorValue = document.getElementById("color").value;     
    draw(colorValue);
    grid.style.boxShadow =`0 0 30px ${colorValue}`;
    grid.style.borderColor = colorValue;  
} )

grid.addEventListener('mousedown', () => {      
    active = true;  
});   

grid.addEventListener('mouseup', () => {      
    active = false;  
});

input.addEventListener("input", createGrid); 

reset.addEventListener("click", () => { location.reload() });

createGrid()

