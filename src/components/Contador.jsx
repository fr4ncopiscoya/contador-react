import React from "react";
import '../css/Contador.css'

function Contador({ numClicks }) {
    return (
        <>
            <div className="counter">
                {numClicks}
            </div>

        </>
    )
}

export default Contador;