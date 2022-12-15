import '../Square.css';
import {CSS} from '@dnd-kit/utilities';
import Draggable from './Draggable';
import Droppable from './Droppable';

function Piece({src, dragIdx, dropIdx, isTurn}){


    return( 
        src === null 
        ? 
        <Droppable idx={dropIdx}  className='piece-empty-sqaure'> 
            <div className='testing'>
            </div>
        </Droppable>
        : 
        <Droppable idx={dropIdx}>  
            <Draggable idx={dragIdx}> 
                <img src={src} className="piece-img"/> 
            </Draggable>      
        </Droppable>
    )
}

export default Piece; 