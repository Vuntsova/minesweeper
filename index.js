const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let board = [];

    for(let i = 0; i < numberOfRows; i++){
        let row = [];
        for(let x = 0; x < numberOfColumns; x++){
            row.push(' ');
        };
        board.push(row);
    };
    return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) =>{
    let board = [];

    for(let rowIndex = 0; rowIndex < numberOfRows; rowIndex++){
        let row = [];
        for(let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++){
            row.push(null);
            board.push(row);
        };
        let numberOfBombsPlaced = 0;

        while(numberOfBombsPlaced < numberOfBombs){
            // The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
            let randomRowIndex = Math.floor(Math.random() * numberOfRows);
            let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

            board[randomRowIndex][randomColumnIndex] = 'B';
            numberOfBombsPlaced++;
        };

        
    };

    return board;
};

const printBoard = board =>{
    board.map(row => row.join(' | ')).join('\n');
    console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(2,3);
let bombBoard = generateBombBoard(2,3,4);
console.log("Player Board");
printBoard(playerBoard);

console.log("Bomb Board");
printBoard(bombBoard);
