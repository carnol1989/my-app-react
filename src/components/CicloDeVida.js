import React, { Component, Fragment } from 'react';

class CicloDeVida extends Component {
    constructor() {
        super();
        console.log('Contructor');
        this.state={
            nombre:''
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('ComponentDidUpdate');
        console.log({prevProps: prevProps, prevState: prevState});
    }

    componentDidMount() {
        console.log('ComponentDiMount');
        this.setTimeoutId = setTimeout(() => this.setState({nombre: 'Carlos'}), 3000);
    }

    onData = () => {
        this.setState({nombre: 'Augusto'});
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount');
        clearTimeout(this.setTimeoutId)
    }

    render() {
        console.log('Render');
        return(
            <div>
                {this.state.nombre}
                <button onClick={this.onData}>Actualizar</button>
            </div>
        )
    }
}

export default class OcultarComponente extends React.Component {
    state = {
        mostrar: true,
    };

    ocultar = () => {
        this.setState({mostrar: false});
    };

    render() {
        return(
            <Fragment>
                {this.state.mostrar && <CicloDeVida/>}
                <br/>
                <button onClick={this.ocultar}>Ocultar</button>
            </Fragment>
        )        
    }
}

//export default CicloDeVida;