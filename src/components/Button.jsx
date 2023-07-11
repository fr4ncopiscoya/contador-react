import React from "react";
import '../css/Button.css'

function Button({ text, btnaction, click }) {
    return (
        <>
            <button className={btnaction ? 'btn-click' : 'btn-restart'} onClick={click}>
                {text}
            </button>
        </>
    );
}

export default Button; 