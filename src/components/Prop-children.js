import React from 'react';

const Parent = ({children}) => {
    console.log(children);
    return (
        <div>
            {children}
        </div>
    )
}
const PropChildren = () => {
    return (
        <div>
            <Parent>
                Soy Carlos
                <p>Holiwis</p>
            </Parent>
        </div>
    )
}

export default PropChildren;