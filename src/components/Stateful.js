import React from 'react';

class Stateful extends React.Component {
    //1ra forma
    /*render() {
        return (
            <div>Hola Grupo</div>
        )
    }*/

    //2da forma
    state = {
        text: "Hola Grupo de Conocimiento",
    }

    render() {
        return <div>{this.state.text}</div>;
    }
}

export default Stateful;