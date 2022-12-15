import SettingButtonContent from "./SettingButtonContent";
import ToggleButton from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ButtonGroup';
import {useState} from 'react';
import '../GameSettings.css';
import { useNavigate } from "react-router-dom";

function GameSettings(props){

    //this stores the button that is currently set
    let buttonSet = ""; 

    let [radioValue, setRadio] = useState('');
    let [radioValue2, setRadio2] = useState('');

    function changeColor2(event){ 
        let buttonPressed = event.currentTarget;
        setRadio2(buttonPressed.id);
    }

    function changeColor(event){
        let buttonPressed = event.currentTarget;
        setRadio(buttonPressed.id);
    }

    let navigate = useNavigate(); 
    const routeChange = (event) => {
        console.log(`${props.username}`);
        let path = `/home/chess`; 
        navigate(path);
    }

    return( 
        <div> 
            <h1 className="header"> Chess With Friends</h1>
            <div className="gameSettings">
                <div type="radio" aria-label="settings" className="gridButtons">
                    <ToggleButton variant="secondary" id="bullet" className="default" active={radioValue === "bullet"} onClick={changeColor}> 
                        <SettingButtonContent settingName="Bullet" settingDesc="1 minute"/>
                    </ToggleButton> 
                    <ToggleButton variant="secondary" id="blitz-3" className="default" active={radioValue === "blitz-3"} onClick={changeColor}> 
                        <SettingButtonContent settingName="Blitz" settingDesc="3 minutes"/>
                    </ToggleButton> 
                    <ToggleButton variant="secondary" id="blitz-5"className="default" active={radioValue === "blitz-5"} onClick={changeColor}> 
                        <SettingButtonContent settingName="Blitz" settingDesc="5 minutes"/>
                    </ToggleButton> 
                    <ToggleButton variant="secondary" id="rapid" className="default" active={radioValue === "rapid"} onClick={changeColor}> 
                        <SettingButtonContent settingName="Rapid" settingDesc="10 minutes"/>
                    </ToggleButton> 
                    <ToggleButton variant="secondary" id="classical" className="default" active={radioValue === "classical"} onClick={changeColor}> 
                        <SettingButtonContent settingName="Classical" settingDesc="30 minutes"/>
                    </ToggleButton> 
                    <ToggleButton variant="secondary" id="no-limit" className="default" active={radioValue === "no-limit"} onClick={changeColor}> 
                        <SettingButtonContent settingName="No Time Limit" settingDesc=""/>
                    </ToggleButton> 
                </div>
                <div> 
                    <Button className="start-btn" onClick={routeChange}>
                        <SettingButtonContent settingDesc="Start"> </SettingButtonContent>
                    </Button>
                </div>
                <div className="opp-settings"> 
                    <ToggleButton variant="primary" id="friend-pvp" className="default-2" active={radioValue2 === "friend-pvp"} onClick={changeColor2}> 
                        <SettingButtonContent settingDesc="Play with a friend"/>
                    </ToggleButton> 
                    <ToggleButton variant="primary" id="computer" className="default-2" active={radioValue2 === "computer"} onClick={changeColor2}> 
                        <SettingButtonContent settingDesc="Play with the computer"/>
                    </ToggleButton> 
                    <ToggleButton variant="primary" id="friend-online" className="default-2" active={radioValue2 === "friend-online"} onClick={changeColor2}> 
                        <SettingButtonContent settingDesc="Play with a friend online"/>
                    </ToggleButton> 
                </div>
            </div>
        </div>
    )
}

export default GameSettings; 