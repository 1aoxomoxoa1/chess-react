import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./components/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {useUsernameContext} from "./components/UsernameContext.js"
import ChessGame from "./components/ChessGame";
import {handleDragEnd} from './Drag-Drop-Helpers.js'

let user = "";
export const UserContext = React.createContext(); 


function App() {
  return (
      <div className="App"> 
        <Router> 
        <UserContext.Provider value={user}> 
            <Routes> 
                <Route path="/" element={<LoginPage/>} username={user}/>
                <Route path="/home/*" element={<HomePage/>} username={user} />
                <Route path="/home/chess" element={<ChessGame/>} />
            </Routes>
          </UserContext.Provider>
        </Router>
      </div>
  );
}

export default App;
