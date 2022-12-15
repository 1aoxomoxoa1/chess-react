
//** THIS FUNCTION WILL SET THE GAME STATE BASED ON THE MOVE MADE WITHIN THE EVENT OBJECT
//  * 
//  * @param {event} event -- event object storing information made about the move
//  * @param {*} gameState -- current gameState
//  * @param {*} setGameState 
//  * @param {*} gameEngine 
//  */
export function handleDragEnd(event, setFormattedBoard, gameEngine){
   console.log(event)
   let color = event.active.id.substring(event.active.id.length - 1, event.active.id.length);
   let moveFrom = event.active.id.substring(10, 12);
   let moveTo = event.over.id.substring(event.over.id.length - 2, event.active.id.length);
   let piece = event.active.id.substring(13, 14);

   console.log(`MOVE FROM : ${moveFrom}`);
   console.log(`MOVE TO: ${moveTo}`); 

   console.log(piece);

   let validMoves = gameEngine.game.moves({square: `${moveFrom}`});
   validMoves = gameEngine.refineMoves(validMoves);
   

   //if a move is successfully made
   if(gameEngine.game._turn === color && validMoves.includes(moveTo)){
    gameEngine.game.move({from: moveFrom, to: moveTo});
    setFormattedBoard(gameEngine.formatSquares(gameEngine.game.board()));
    console.log('SET STATE')
   }
   else{ //if a move is not successfully made
      removePrevGreenClasses(gameEngine.formatSquares(gameEngine.game.board())); //remove green move indicators
      setFormattedBoard(gameEngine.formatSquares(gameEngine.game.board())) // and reset state
   }



}

//key -- number row index from game
//value -- matrix row index for formattedBoard
let indexMap = new Map([
   ["8", 0],
   ["7", 1],
   ["6", 2],
   ["5", 3],
   ["4", 4],
   ["3", 5],
   ["2", 6],
   ["1", 7]
]);


//** Function called onDragStart to show valid moves
//  * 
//  * @param {*} event -- event indicated piece that moves
//  * @param {*} formattedBoard -- board Obj current state
//  * @param {*} setFormattedBoard -- fn to reset the state
//  * @param {*} gameEngine -- contains helper methods 
//  */
export function showMoves(event, formattedBoard, setFormattedBoard, gameEngine){
   let color = event.active.id.substring(event.active.id.length - 1, event.active.id.length);
   let moveFrom = event.active.id.substring(10, 12);

   //remove Green highlights if they exist
   removePrevGreenClasses(formattedBoard);

   let validMoves = gameEngine.game.moves({square: `${moveFrom}`});
   validMoves = gameEngine.refineMoves(validMoves);
   let indexes = validMoves.map(element => {
      let substrungEle = element.substring(element.length - 1, element.length)
      return indexMap.get(substrungEle);
   });

   let uniqueIndexes = [... new Set(indexes)];
   console.log(indexes);
   console.log(uniqueIndexes);

   for(let index of uniqueIndexes){
      let formattedRow = formattedBoard[index];
      let squaresToColorize = formattedRow.filter(square => validMoves.includes(square.square));
      for(let object of squaresToColorize){
         if(object.color === null){
            object.color = 'green';
         }else{
            let pieceColor = object.color; 
            object.color = `${pieceColor}-green`;
         }
      } 
   }

   let copyFormattedBoard = formattedBoard.slice();
   setFormattedBoard(copyFormattedBoard);

}

//** THIS FUNCTION WILL REMOVE THE ACTIVE GREEN CLASSNAMES -- IF A PLAYER PICKS UP A PIECE THEN PUTS DOWN
//    GREENS NEED TO BE RESET FROM THE PREV formattedBoard
//  * 
//  * @param {*} formattedBoard 
//  */
function removePrevGreenClasses(formattedBoard){
   for(let i = 0 ; i < formattedBoard.length; i++){
      formattedBoard[i].filter(squareObj => {
         if(squareObj.color === null){
            return squareObj;
         }else{
            let color = squareObj.color;
            if(color === "green"){
               color = null
            }else{
               color = color.substring(0, 1);
            }
            squareObj.color = color;
            return squareObj;
         }
      })
   }
}