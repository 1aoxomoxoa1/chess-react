import { useEffect } from "react";
import React, {createContext, useState} from "react";

//create context here, return in the function
const UserContext = createContext({});

export function UsernameProvider(props){ 
 
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    //function that sets the username when the login button is clicked
    const login = (user) => {
        setUser(user); 
    }

    

    //object storing the values we need to handle logging in
    const usernameContextValue = { 
        login, 
        loggedIn
    }

    return(
        //this returns a provider for the username, 
        //which we will wrap around our app
        <UserContext.Provider 
          value={usernameContextValue}
          {...props}
        /> 
    )
}

export const useUsernameContext = () => React.useContext(UserContext);


