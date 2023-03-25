// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

let testVar = 0;


// function initializeGrid() {
//     if (numRows === 0 && numCols === 0) {
//         let myGrid = document.getElementById("grid");
//         let myTr = document.createElement("tr"); // create a tr element
//         myTr.setAttribute("class", "myRows");
//         let myTd = document.createElement("td"); // create a td element
//         myTd.setAttribute("class", "myCols");
//         myTr.appendChild(myTd); // tr > td
//         document.getElementById("grid").appendChild(myTr); // add it under grid
//         numRows = 1;
//         numCols = 1;
//     }

// }

// Add a row
function addR() {
    // if (numRows === 0 && numCols === 0)
    //     initializeGrid();
    // else {
    //     //afterwards copy previous tr and it after the tr
    //     let myGrid = document.getElementById("grid") // get the table
    //     let lastRow = myGrid.insertRow(-1); // add tr and capture
    //     let rowSize = document.getElementsByTagName("tr").length
    //     let newRow = myGrid.insertRow(-1); // add tr and capture
    //     //let newCell = newRow.insertCell(0); // add td into tr and capture
    //     for (let i = 0; i < numCols; i++) {
    //         newRow.insertCell(i); // add td into tr and capture
    //     }
    //     numRows = numRows + 1;
    // }
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
    //alert("Clicked Remove Row"); // Replace this line with your code.
    // let myGrid = document.getElementById("grid")
    // let newRow = myGrid.insertRow(-1); // add tr and capture
    // let newCell = newRow.insertCell(0); // add td into tr and capture

    let myGrid = document.getElementById("grid")
    let newRow = myGrid.insertRow(-1); // add tr and capture
    let newCell = newRow.insertCell(0); // add td into tr and capture
    newRow.insertCell(0);
    newRow.insertCell(0);
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
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