import React from 'react';

//props: palabra reservada para obtener propiedades
/*const Button = (props) => {
    return (
        <div>
            <button>
                {props.text}
            </button>
        </div>
    )
}*/

//Destructuración
const Button = ({text, number, lista}) => {
    return (
        <div>
            <p>{number}</p>
            <p>{lista[0]}</p>
            <button>{text}</button>
        </div>
    )
}

export default Button;