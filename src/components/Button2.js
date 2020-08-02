import React from 'react';

class Button2 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div>{this.props.text}</div>
        )
    }
}

export default Button2;