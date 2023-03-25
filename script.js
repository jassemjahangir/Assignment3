// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

let testVar = 0;



// Add a row
function addR() {

    let tableRef = document.getElementById("grid");
    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(-1);
    if (numRows === 0)
        numCols = 1;
    // Insert a cell in the row at index 0
    for (let i = 0; i < numCols; i++) {
        newRow.insertCell(0);
    }
    //let newCell = newRow.insertCell(0);
    numRows = numRows + 1;



}

// Add a column
function addC() {
    let tableRef = document.getElementById("grid");
    numCols = numCols + 1;
    if (numRows === 0) {
        numRows = 1;
        let newRow = tableRef.insertRow(-1);
        newRow.insertCell(0);
    }
    else {
        tableRef = document.getElementById("grid");
        let lastRow = document.getElementsByTagName("tr")
        for (let i = 0; i < numRows; i++) {
            //let myTd = document.createElement("td");
            lastRow[i].insertCell(0);
        }

    }
}

// Remove a row
function removeR() {
    if (numRows !== 0) {
        let table = document.querySelector("table");
        table.deleteRow(-1);
        numRows = numRows - 1
        if (numRows === 0) {
            clearAll();
        }
    }

}

// Remove a column
function removeC() {
    //alert("Clicked Remove Col"); // Replace this line with your code.
    if (numCols !== 0) {
        let myRows = document.getElementsByTagName("tr")
        for (let i = 0; i < numRows; i++) {
            //let myTd = document.createElement("td");
            myRows[i].deleteCell(-1);
        }
        numCols = numCols - 1
        if (numCols === 0) {
            clearAll();
        }
    }

}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU() {
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll() {
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll() {
    let captureGrid = document.getElementById("grid");
    //console.log(captureGrid);
    captureGrid.innerHTML = ''; // clear all cells' 
    // ? restore all cells to their initial color (e.g., white)
    numRows = 0;
    numCols = 0;
}