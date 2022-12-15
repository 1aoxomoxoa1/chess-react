import { useSearchParams } from "react-router-dom";
import { createContext } from "react";
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameSettings from "./GameSettings";


const UserContext = createContext(); 


function HomePage(props){
   
    //We use the useSearchParams hook to get the usename from the login page
    let [searchParams, setSearchParams] = useSearchParams();
    let username = searchParams.get("username");

    console.log(props.username)


    return( 
        <UserContext.Provider value={username}> 
        <div className="page-background second-background"> 
            <h2 id="welcome"> Welcome {username}! </h2> 

            <div id="game-settings"> 
                <GameSettings username={username}> </GameSettings>
            </div>
        </div> 
        </UserContext.Provider>
    )
    
}

export default HomePage;