const GAMEBOARD = {
    drawBoard() {
        const gameBoard = document.querySelector('.game-board');
        for (let i = 0; i < 9; i++ ){
           let square = document.createElement('button');
           square.setAttribute('class', 'square');
           square.setAttribute('data-square', [i]);
           square.addEventListener('click', e => {
               let index = e.target.dataset.square;
               GAMELOGIC.boardState[index] = GAMELOGIC.currentPlayerMarker;
               GAMELOGIC.checkForDuplicates = e.target;
               GAMELOGIC.markMoves;
               GAMELOGIC.checkForWinner;
           });
           gameBoard.append(square);
          // square.addEventListener
        }
    },
}

const PLAYERS = {
    player1: {
        name: 'Player 1',
        marker: 'x'
    },

    player2: {
        name: 'Player 2',
        marker: 'o'
    }
}

const GAMELOGIC = {
    currentPlayerMarker: `${(PLAYERS.player1.marker)}`,
    boardState: [[0],[1],[2],
                [3],[4],[5],
                [6],[7],[8]],

    set checkForDuplicates(square) {
                if (square.innerText) {
                    return;
                    } else {
                       square.innerText = GAMELOGIC.currentPlayerMarker;
                    }
                },
            
    get markMoves() {
                if (GAMELOGIC.currentPlayerMarker === `${PLAYERS.player1.marker}`) {
                        GAMELOGIC.currentPlayerMarker = `${PLAYERS.player2.marker}`
                } else {
                 GAMELOGIC.currentPlayerMarker = `${PLAYERS.player1.marker}`
                }
            },
                        
    get checkForWinner () { // Checks all winning combinations and returns winner or draw
        if ((GAMELOGIC.boardState[0] === GAMELOGIC.boardState[1] && GAMELOGIC.boardState [1]=== GAMELOGIC.boardState[2]) || 
            (GAMELOGIC.boardState[3] === GAMELOGIC.boardState[4] && GAMELOGIC.boardState [4] === GAMELOGIC.boardState[5]) ||
            (GAMELOGIC.boardState[6] === GAMELOGIC.boardState[7] && GAMELOGIC.boardState [7]=== GAMELOGIC.boardState[8])  ||
            (GAMELOGIC.boardState[0] === GAMELOGIC.boardState[3] && GAMELOGIC.boardState [3]=== GAMELOGIC.boardState[6])  ||
            (GAMELOGIC.boardState[1] === GAMELOGIC.boardState[4] && GAMELOGIC.boardState [4]=== GAMELOGIC.boardState[7])  ||
            (GAMELOGIC.boardState[2] === GAMELOGIC.boardState[5] && GAMELOGIC.boardState [5]=== GAMELOGIC.boardState[8])  ||
            (GAMELOGIC.boardState[0] === GAMELOGIC.boardState[4] && GAMELOGIC.boardState [4]=== GAMELOGIC.boardState[8])  ||
            (GAMELOGIC.boardState[2] === GAMELOGIC.boardState[4] && GAMELOGIC.boardState [4]=== GAMELOGIC.boardState[6])) {
                alert('You have won!');
            } else if (GAMELOGIC.boardState.every((cell) => cell === 'x' || cell === 'o')) {
                console.log('it\'s a draw')
         }
    },
    
    get restartGame() {
        let square = document.querySelectorAll('.game-board button');
        square.forEach(square => square.remove());
        GAMELOGIC.boardState = 
        [[0],[1],[2],
        [3],[4],[5],
        [6],[7],[8]],
        GAMEBOARD.drawBoard();
    }
};


//game initialisation
GAMEBOARD.drawBoard();




/*Need a 3x3 grid of 9 squares
2.	Need two players
3.	Need to determine markers for each player
Player objects with player 1 and player 2
4.	Need to determine who is player 1 and who is player 2
Make player 1s marker the default starting marker 
5.	Player 1 chooses a square and places his marker
6.	Player 2 chooses a square and places his/her marker
7.	Repeat until three in a row is identified or until all squares are filled.  
*/