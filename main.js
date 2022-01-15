createGameBoard(3);
let gameState = Array.from(document.querySelectorAll('.boardCell')); //forms Array from board
let currentPlayerMarker = 'x';
let currentPlayer = 'player1';

//create Gameboard
function createGameBoard(n){
    const gameBoard = document.querySelector('.game-board');
    const playerTurn = function() {
        if (currentPlayerMarker === 'x') {
            return currentPlayerMarker = 'o';
        } else {
            return currentPlayerMarker = 'x';
        }
    };
    for (let i = 0; i < n*n; i++ ) {
        const boardCell = document.createElement('button');
        boardCell.setAttribute('class','boardCell');
        boardCell.addEventListener('click', e => {
            if (e.target.innerText === 'x' || e.target.innerText === 'o'){ //check for duplication
                return;
            } else {
            e.target.innerText = playerTurn(); //indicate players choice on board
            gameState[gameState.indexOf(e.target)] = currentPlayerMarker; //change array to players choice
            gameLogic.checkForWinner(); //check for winner 
             }});
        gameBoard.append(boardCell);
    }   
}

//Create Players 
function createPlayer(name) {
    return {
    name,
    get win() {
        console.log(`${name} has won the match!`)
    }
    }
}

//Game Logic - 
const gameLogic = {
    playGame() {
    },
    checkForWinner () { // Checks all winning combinations and returns winner or draw
        if (gameState[0] === gameState[1] && gameState [1]=== gameState[2]) {
            } else if (gameState[3] === gameState[4] && gameState [4] === gameState[5])  {
            console.log(`${currentplayer} wins`)
            } else if (gameState[6] === gameState[7] && gameState [7]=== gameState[8])  {
                console.log(`${currentplayer} wins`)
            } else if (gameState[0] === gameState[3] && gameState [3]=== gameState[6])  {
                console.log(`${currentplayer} wins`)
            } else if (gameState[1] === gameState[4] && gameState [4]=== gameState[7])  {
                console.log(`${currentplayer} wins`)
            } else if (gameState[2] === gameState[5] && gameState [5]=== gameState[8])  {
                console.log(`${currentplayer} wins`)
            } else if (gameState[0] === gameState[4] && gameState [4]=== gameState[8])  {
                console.log(`${currentplayer} wins`)
            } else if (gameState[2] === gameState[4] && gameState [4]=== gameState[6])  {
                console.log(`${currentplayer} wins`)
            } else if (gameState.every((cell) => cell === 'x' || cell === 'o')) {
                console.log('it\'s a draw')
            } else {
                return;
         }}};