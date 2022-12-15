export function determineSquareColor(square, color){
    //for a, c, e, g -- evens are white
    //for b, d, f, h -- evens are black

    let evensWhite = ["a", "c", "e", "g"];

    let className; 
    let letter = square.substring(0, 1); 
    let number = Number(square.substring(1, 2)); 

    console.log(color);
    
    //if the square has a color && not 'b' or 'w'
    if(color !== null && color.length > 1){
        color = color.substring(color.length - 5, color.length);
    }

    if(color === "green"){
        console.log("setting class");
        className = "green-square"
    }else{
        if(evensWhite.includes(letter)){ //for columns a, c, e, g
            if(number % 2 === 0){
                className = "white-square"
            }else{
                className = "black-square"
            }
        }else{
            if(number % 2 === 0){
                className = "black-square";
            }else{
                className = "white-square"; 
            }
        }
    }

    return className; 
}


//**
//  * 
//  * @param {str || null} type -- letter indicating type of piece || null if no piece
//  * @param {str || null} color -- w or b indicating color of piece || null if no piece
//  * @returns {str || null} --- str for url if piece exists at squre || null if no piece
//  */
export function determineImgUrl(type, color){
    //if there is not piece , return imgUrl of null
    if(type === null){
        return null; 
    }

    color = color.substring(0, 1); 

    let piece = color + type.toUpperCase(); 
    let url = `/images/pieces-images/${piece}.png`
    return url;
}