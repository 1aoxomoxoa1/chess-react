import {determineSquareColor, determineImgUrl} from "../squareHelper.js";
import '../Square.css';
import Piece from "./Piece.js";

function Square({square, type, color}){

    let squareColor = determineSquareColor(square, color); 

    //imgURL is null if there is no piece in the current square
    let imgUrl = determineImgUrl(type, color);

    let dragIdx; 
    if(imgUrl !== null) {
        dragIdx = `${square}-${type}-${color}`;
    }else{
        dragIdx = null; 
    }
    
    let dropIdx = `${square}`;

    return(
        //each piece is hosted in a flex container
        <div className={`square ${squareColor}`}> 
            <Piece src={imgUrl} dropIdx={dropIdx} dragIdx={dragIdx} className="piece"/>
        </div>
    )
}

export default Square;