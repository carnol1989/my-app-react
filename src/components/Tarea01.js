import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/tarea01.css';

const Item = (props) => {
    return (
        <div className="item">
            <h5 className="quantity">{props.quantity}</h5>
            <div>
                <h5>{props.name}</h5>
                <h6 className="text-muted">{props.description}</h6>
            </div>
            <div className="badge badge-info">{props.category}</div>
            <h5 className="price"> S/ {props.price}</h5>
        </div>
    );
}

Item.prototype = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    quantity: PropTypes.number,
    category: PropTypes.string,
    price: PropTypes.number.isRequired
}

const ItemList = () => {
    const items = [
        {
            name: 'Cereales con chocolate',
            description: 'Cereales rellenos de chocolate',
            quantity: 2,
            category: 'Cereales',
            price: 5,
        },
        {
            name: 'Hamburguesa con queso',
            description: 'Hamburguesa rica y saludable',
            quantity: 1,
            category: 'Fast-food',
            price: 15,
        },
        {
            name: 'Agua mineral',
            description: 'Agua de un charco del Himalaya',
            quantity: 2,
            category: 'Bebida',
            price: 5,
        },
    ];
    
    return (
        <ul className="item-list">
            {items.map((elemento, index) => 
                <li key={index}>
                    <Item name={elemento.name} description={elemento.description} quantity={elemento.quantity} 
                        category={elemento.category} price={elemento.price} />
                 </li>
            )}
        </ul>
    );
}

export default ItemList;

/* En el return  de ItemList usa un map para iterar una lista del componente Item. Agregar proptypes
y  obligar a que se le pase valor a la prop añadiendo .isRequired a cualquiera de los tipos de name y price */