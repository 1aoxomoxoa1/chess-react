import ChessGameEngine from "../chess-game-engine";
import Square from "./Square";
import { useState } from "react";
import '../ChessGame.css';
import {handleDragEnd, showMoves} from '../Drag-Drop-Helpers.js'
import { DndContext } from '@dnd-kit/core';


let gameEngine = new ChessGameEngine(); 


function ChessGame(props){

    // const[board, setBoard] = useState(gameEngine.game.board());
    const [formattedBoard, setFormattedBoard] = useState(gameEngine.formatSquares(gameEngine.game.board()))

    console.log(gameEngine);


    //squares is an 1-D array of all of the squares (TO RENDER)
    // let formattedBoard = gameEngine.formatSquares(board); //formattedBoard formats the board to index it
    console.log(formattedBoard);
    let squares = gameEngine.gameStateRenderHelper(formattedBoard);

    return( 
        // I CANT FIGURE OUT HOW TO NEST THE DRAG END ABOVE
        <DndContext 
            onDragStart={(event) => showMoves(event, formattedBoard, setFormattedBoard, gameEngine)} 
            onDragEnd={(event) => handleDragEnd(event, setFormattedBoard, gameEngine)}
            > 
            <div>
                <div className="chess-header"> 
                    <h1> CHESS </h1> 
                    <p> Turn: {gameEngine.game.turn().toUpperCase()} </p>
                </div>
                <div className="chessBoard" onDragEnd={handleDragEnd} > 
                    {
                        squares.map((square) => (
                            square === null
                                ? 
                            <Square/> /*these are squares without any pieces */
                                :
                            <Square square={square.square} type={square.type} color={square.color} /> //these are squares with pieces
                        ))
                    }
                </div>
            </div>
        </DndContext>
    )
}

export default ChessGame;