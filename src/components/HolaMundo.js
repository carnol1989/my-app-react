import React from 'react';

const HolaMundo = () => {
    const mostrar = true;
    return (
        <div className="card">
            <img src="https://avatars2.githubusercontent.com/u/39895671?s=400&v=4" />
            {mostrar && <p>Soy verdadero</p>}
        </div>
    )
}

export default HolaMundo;