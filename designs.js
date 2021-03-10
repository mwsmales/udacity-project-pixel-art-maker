// VARIABLES
var brushColour = '#000';

// FUNCTIONS
// function to create the grid
function makeGrid(gridHeight, gridWidth) {
    // get the parent table
    var parentTable = document.querySelector('#pixelCanvas');
    
    // delete any previous grid
    parentTable.textContent = '';
    
    //insert X table rows
    for (var r = 0; r < gridHeight; r ++) {
        //create a row
        var newRow = document.createElement('tr');
        parentTable.appendChild(newRow);
        //create cells to populate the row
        for (var c = 0; c < gridWidth; c++) {    
            var newCell = document.createElement('td');
            newRow.appendChild(newCell); 
            addGridCellEvent(newCell);       
        }
    }
}

// function to add a listener to a grid element
function addGridCellEvent(targetCell) {
    targetCell.addEventListener('click', function () {
        if (targetCell.bgColor == brushColour) {
            targetCell.bgColor = '';
        } else {
            targetCell.bgColor = brushColour;
        }
    })
}

// Function to limit grid dim to a 'sensible' number to avoid killing browser 
function validateInput(gridDim) {
    var newGridDim = gridDim;
    if (gridDim <= 0) {
        newGridDim = 1;
    } else if (gridDim >20) {
        newGridDim = 20;
    }
    return newGridDim;
}

// EVENTS: FOR THE TWO FORMS ON THE PAGE
// event: target = grid size button.  Type = click.  Listener = get the grid height and width, then run the makeGrid function
const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', function() {
    // check that input is valid and if so check it
    var gridHeight = validateInput(submitButton.parentElement.height.value);
    var gridWidth = validateInput(submitButton.parentElement.width.value);

    // make the grid
    newGrid = makeGrid(gridHeight, gridWidth);
});

// event: target = the colour selector.  Listner: update brush colour
const colorPicker = document.querySelector('#colorPicker');
colorPicker.addEventListener('change', function() {
    brushColour = colorPicker.value;
})

// event: target = grid.  Listener: update cell colour  
// Note: we add the listener after the grid is created, otherwise we have no target for the listener
//function addGridListeners() {
//    parentTable.addEventListener('click', function (eventObject) {
//        if (eventObject.target.bgColor == brushColour) {
//            eventObject.target.bgColor = '';
//        } else {
//            eventObject.target.bgColor = brushColour;
//        }
//    })
//}


