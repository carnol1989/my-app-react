import React from 'react';
import PropTypes from 'prop-types';

const Hijo = (props) => {
    return (
        <div>
            <p>{props.nombre}</p>
            <p>{props.edad}</p>
        </div>
    )
}

Hijo.prototype = {
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number
}

Hijo.defaultProps = {
    nombre: 'Augusto',
    edad: 18
}

const ValidacionProps = () => {
    return (
        <Hijo nombre='Carlos' edad={30} />
        //<Hijo edad={30} />
        //<Hijo  />
    )
}

export default ValidacionProps;