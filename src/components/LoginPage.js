import '../LoginPage.css'
import {createContext, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function LoginPage(props){

    const[username, setUsername] = useState('');

    let navigate = useNavigate(); 
    const routeChange = (event) => {
        event.preventDefault(); 
        let path = `/home/?username=${username}`; 
        navigate(path);
        props.username = username; 

    }

    return( 
        <div className="page-background"> 
            <div className='login-form'> 
            <form > 
                <label id="label" htmlFor="username"> Enter your username: </label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} id="username"/> 
                <input type="submit" value="Join" onClick={routeChange}/> 
            </form>
            </div>
        </div> 
    )
}


export default LoginPage;