import React from "react";

import { useState } from 'react';

function Header({ name, age, color }) {
    const [crush, setCrush] = useState("");

    function showCrush() {
        if (name === 'Simon') {
            setCrush("Evgi");
        }
        else if (name === 'David') {
            setCrush("Sandra");
        }
        else if (name === 'Gis') {
            setCrush("Steis");
        }
        else {
            setCrush("Klara");
        }
    }

    return (
        <header>
            <h1 style={{color: color}} onClick={() => showCrush()}>
                I'm {name} and I'm {age} years old.<br/>
                
                {crush === "" ? "" : "My crush is " + crush}
            </h1>
        </header>
    )
}

export default Header;