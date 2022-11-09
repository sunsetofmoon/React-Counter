import { useState } from "react";
import MainContent from "./MainContent";
import Buttons from "./Buttons";

function Number(props) {
    return (
        <div className="main-number">
            <div className="null">{props.counter}</div>
        </div>
    )
}

export default Number;