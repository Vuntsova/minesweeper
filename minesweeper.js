//Function that is going to create an array board which is going to contain rows which is going to contain columns inside of them. board = [[' '],[' '],[' ']]

//numberOfRows - the ammaount of row arrays in the board array;
//numberOfColumns - the ' ' inside each row
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
//outside the loop creating an empty array board, later we will push the rows inside of it.
    let board = [];
//for the amount numberOfRows given when the function is called we are going to loop
    for(let rowIndex = 0; rowIndex < numberOfRows; rowIndex++){
//everytime loop runs will generate an row that is going to be an empty array;
        const row = [];
//for the amount numberOfColumns given when the function is called we are going to loop
        for(let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++){
//everytime loop runs will push to row ' ', so each row will contain one ' ';
            row.push(' ');
        };
//for the amount numberOfRows given when the function is called we will push rows in the board array.
        board.push(row);
    };
//outside the loops and inside the function we are going to return the board.
    return board;
};
//we repeat the same steps with some exeptions that are going to be comented
//********************************* generateBombBoard ******************************************/

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) =>{
    let board = [];

    for(let rowIndex = 0; rowIndex < numberOfRows; rowIndex++){

        let row = [];

        for(let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++){
//here we are not pushing anything for now because later we will have this code console.log(board.map(row => row.join(' | ')).join('\n')); We are going to join those "empty rows" with ' | '
            row.push(null);
        }
        
        board.push(row);
    };
//this code will create the bombs. For now numberOfBombsPlaced is 0 but as long numberOfBombsPlaced < numberOfBombs it will keep adding 1 bomb on each loop numberOfBombsPlaced++; and it will specify where is the bord those to be showed as 'B': board[randomRowIndex][randomColumnIndex] = 'B';
    let numberOfBombsPlaced = 0;

        while(numberOfBombsPlaced < numberOfBombs){
// The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
            let randomRowIndex = Math.floor(Math.random() * numberOfRows);
            
            let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

            if(board[randomRowIndex][randomColumnIndex] === null){
                board[randomRowIndex][randomColumnIndex] = 'B';
                numberOfBombsPlaced++;
            };
        };

    return board;
};

//******************************* generateBombBoard END *****************************************/

//******************************* getNumberOfNeighborBombs ************************************/
const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) =>{
    const neighborOffsets = [
        [-1,-1],
        [-1,0],
        [1-0],
        [0,1],
        [0,-1],
        [1,-1],
        [1,0],
        [1,1]
    ];
    numberOfRows = bombBoard.length;
    numberOfRows = bombBoard[0].lenght;

    numberOfBombs = 0;

    neighborOffsets.forEach(offset =>{
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];

    if(neighborRowIndex >= 0 && neighborRowIndex < rowIndex && neighborColumnIndex >=0 && neighborColumnIndex < columnIndex){
        if(bombBoard[neighborRowIndex][neighborColumnIndex] === "B"){
            numberOfBombs++
        }
    };

    });

    return numberOfBombs;
};
//******************************* getNumberOfNeighborBombs END ********************************/

//******************************* flipTile ************************************/

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex)=>{
    if(playerBoard[rowIndex][columnIndex] !== ' '){
        console.log("This tile has already been flipped!");
        return;
    }else if(bombBoard[rowIndex][columnIndex] === 'B'){
        playerBoard[rowIndex][columnIndex] === 'B';
        
    }else{
        playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
        
    };
};
//******************************* flipTile END ********************************/


//this function prints our board: the parameter is board:
//bard = [ 
    // row:[ null, 'B', null, null, null, 'B' ],
    // row:[ null, null, null, null, null, 'B' ],
    // row:[ null, null, 'B', null, null, null ],
    // row:[ null, 'B', null, null, null, null ],
    // row:[ 'B', null, 'B', null, null, 'B' ] 
//] This is how the board would look like with the push(null). That is why we need for each row element in the board to join them with ' | ' and then start each row in the like by '\n' and this is because if we do not do that our boards would look like this:

// Player Board:

// [ '  |   |   |   |   |  ',
//   '  |   |   |   |   |  ',
//   '  |   |   |   |   |  ',
//   '  |   |   |   |   |  ',
//   '  |   |   |   |   |  ' ]

// Bomb Board:

// [ 'B |  | B | B |  | ',
//   ' | B |  |  |  | B',
//   ' |  |  | B |  | ',
//   'B |  |  |  | B | ',
//   ' |  |  |  |  | ' ]

const printBoard = board =>{
    console.log(
        board.map(row => row.join(' | '))  .join('\n')
    );

};

let playerBoard = generatePlayerBoard(3,3);
let bombBoard = generateBombBoard(3,3,3);
console.log('\n'+"Player Board:"+ '\n');
printBoard(playerBoard);

console.log('\n' + "Bomb Board:" + '\n');
printBoard(bombBoard);

console.log('\n');

flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board:'+'\n');
printBoard(playerBoard);

console.log('\n');


