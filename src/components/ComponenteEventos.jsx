import React , { useState } from 'react';

function ComponenteEventos() {
    let manejarPulsacionesTeclado = (event) => {
        setState(event.key);
        setState2(state2 + event.key);
    }

    let manejarDown = (event) => {
        if (event.keyCode === 8) {
            setState2(state2.substring(0, state2.length-2))
        }
    }

    const [state, setState] = useState('');
    const [state2, setState2] = useState('');

    return (        
        <div>
            <div style={{ "margin-left": "45px"}}>
                <br/><br/><br/>
                <input onKeyPress={manejarPulsacionesTeclado}
                onKeyDown={manejarDown}></input>
                <br/>
                Has pulsado la tecla: {state}
                <br/>
                Has escrito lo siguiente en el imput: {state2}
            </div>
        </div>
    )
}

export default ComponenteEventos;