import React from "react";

function SettingButtonContent(props){

    return( 
        <React.Fragment> 
            <h4> {props.settingName} </h4>
            <p> {props.settingDesc} </p> 
        </React.Fragment> 
    )
}

export default SettingButtonContent;