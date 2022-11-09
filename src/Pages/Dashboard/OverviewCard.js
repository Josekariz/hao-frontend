import React from "react";
import {HouseDoorFill } from 'react-bootstrap-icons';
import "../Dashboard/Dashboard.css"
import OverviewList
 from "./OverviewList";
function OverviewCard () {
    return (  
        <div className="Container">
            <div className=" innerCard row mx-5 mw-30 ">
                <div className="innerCardCol col -mx-2">
                    <HouseDoorFill size={40}/> 
                    <p>Total Properties</p>
                    
                </div>
                <div className="innerCardCol col mx-2">
                <HouseDoorFill size={40}/> 
                    <p>Total Properties</p>
                    </div>                
                <div className="innerCardCol col mx-2">
                <HouseDoorFill size={40}/> 
                    <p>Total Properties</p>
                </div>
            </div>

            <div className=" innerCard row my-4 mx-5 mw-30 ">
                <div className="innerCardCol col -mx-2">
                    <HouseDoorFill size={40}/> 
                    <p>Total Properties</p>
                    
                </div>
                <div className="innerCardCol col mx-2">
                <HouseDoorFill size={40}/> 
                    <p>Total Properties</p>
                </div>
                <div className="innerCardCol col mx-2">
                <HouseDoorFill size={40}/> 
                    <p>Total Properties</p>
                </div>
            </div>
            <div className="OverviewListData row mx-5">
                <OverviewList/>
            </div>

        </div>
    );
}

export default OverviewCard;