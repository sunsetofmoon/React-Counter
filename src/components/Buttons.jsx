import MainContent from "./MainContent";
import reset1 from "./img/refresh 1.png"
import { useState } from "react";

function Buttons(props) {

    function plus() {
        props.setCounter(props.counter + 3)
    }

    function reset() {
        props.setCounter(0)
    }

    function minus() {
        if (props.counter > 0, props.counter > 1)

            props.setCounter(props.counter - 2)
    }


    return (
        <div className="main-buttons">
            <button className="plus" onClick={plus}>+</button>
            <button className="reset1" onClick={reset}><img src={reset1} alt="reset-button" /></button>
            <button className="minus" onClick={minus}>-</button>
        </div>
    )
}

export default Buttons;