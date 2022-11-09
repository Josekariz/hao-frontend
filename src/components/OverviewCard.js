import React from "react";
import {HouseDoorFill } from 'react-bootstrap-icons';
import "../Assets/css/main.css"

function OverviewCard () {
    return (  
        <div className="Container">
            <div className="row">
                <div className="innerCard col -mx-2">
                    <div className="row">
                    <HouseDoorFill size={40}/> 
                    </div>
                    <div className="row">
                    <p>Total Properties</p>
                    </div>
                </div>
                <div className="innerCard col mx-2"></div>
                <div className="innerCard col mx-2"></div>
            </div>
        </div>
    );
}

export default OverviewCard;