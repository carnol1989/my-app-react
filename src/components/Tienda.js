import React, { Fragment } from 'react';

const Comida = () => {
    return (
        <Fragment>
            <li>Pan</li>
            <li>Ajo</li>
            <li>Salsas</li>
        </Fragment>
    )
}

const Bebida = () => {
    return(
        <>
            <li>Gaseosa</li>
            <li>Jugos</li>
        </>
    )
}

const Tienda = () => {
    return(
        //1er ejemplo
        /*<Fragment>
            <div>Hola</div>
            <p>Trio</p>
            <div>Monstruoso</div>
        </Fragment>*/

        <ul>
            <Comida/>
            <Bebida/>
        </ul>
    )
}

export default Tienda;