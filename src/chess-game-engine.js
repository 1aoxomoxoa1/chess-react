import { Chess } from "chess.js";


    const numbersToLetters = new Map([
        [1, 'a'],
        [2, 'b'],
        [3, 'c'],
        [4, 'd'],
        [5, 'e'],
        [6, 'f'],
        [7, 'g'],
        [8, 'h'],
    ]);

class ChessGameEngine{

    constructor(){
        this.game = new Chess(); 
    }

    stringify_board(){
        return this.game.ascii(); 
    }


    //** FUNCTION WILL REFORMAT THE NULL CELLS IN THE GAME STATE TO INCLUDE INDEXES FOR THEM
    //  * 
    //  * @param {*} gameState ~ 2x2 matrix containing objects
    //  */
    formatSquares(gameState){
        //for storing the new gameStae
        let newGameState = [];
        let newRow = []; 

        //used for indexing the chessboard
        let rowCtr = 9;
        let squareCtr; 
        
        for(let row of gameState){ 
            //iterates over each row (8) of the gameState (board)
            
            rowCtr--;
            squareCtr = 0; //reset the square number (1 - 8) each row
            newRow = []; 

            for(let square of row){
                //iterates over each square (8) of the row individual objects
                squareCtr++; 

                if(square !== null){ //if a piece exists in the square
                    newRow.push(square)
                }else{//if square is null
                    let newSquareObject = {
                        square: `${numbersToLetters.get(squareCtr)}${String(rowCtr)}`,
                        type: null,
                        color: null
                    }
                    newRow.push(newSquareObject); 
                }
            }
            newGameState.push(newRow);
        }

        return newGameState;
    }

    //** THIS FUNCTION TURNS gameState INTO 1-D MATRIX TO HELP RENDER EASIER
    //  * 
    //  * @param {*} gameState  ~ 2x2 matrix containing objects repr. current gameState
    //  * @return {array} squares ~ 1-D matrix containing all the objects
    //  */
    gameStateRenderHelper(gameState){
        let squares = []; 
        for(let row of gameState){ 
            for(let square of row){
                squares.push(square);
            }
        }
        return squares;
    }

    //**
    //  * 
    //  * @param {str} piece -- str indicating type of piece ['p', 'n' , 'r'];
    //  * @param {[str, .. ]} validMoves -- indicating valid moves for piece
    //  * @returns  valid moves without the letter of the piece in front of it
    //  */
    refineMoves(validMoves){
        // if(piece !== 'p'){
        //     console.log(`BEFORE MAP ${validMoves.join(",  ")}`)
        //     validMoves = validMoves.map((move) => move.substring(move.length - 2, move.length));
        //     console.log(validMoves);
        // }

        console.log(`BEFORE MAP ${validMoves.join(",  ")}`)
        validMoves = validMoves.map((move) => move.substring(move.length - 2, move.length));
        console.log(validMoves);

        return validMoves;
    }



}

export default ChessGameEngine;