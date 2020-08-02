import React from 'react';

import '../style/fruta.css';

const Fruta = (props) => {
    return(
        <div key={props.id} className="card">
            {props.price}-{props.icon}-{props.name}
        </div>        
    )
}

const Frutas = () => {
    const listaFrutas = ["🍌", "🍐", "🍉", "🍇", "🍎", "🥭"];

    const productos = {
        frutas: [    
          {    
            id: 1,    
            name: "Banana",    
            icon: "🍌",    
            price: 3,    
          },    
          {    
            id: 2,    
            name: "Pera",    
            icon: "🍐",    
            price: 6,    
          },    
          {    
            id: 3,    
            name: "Sandía",    
            icon: "🍉",    
            price: 2,    
          },    
          {    
            id: 4,    
            name: "Uvas",    
            icon: "🍇",    
            price: 7,    
          },    
        ],
    
      };

    return (
        <>
        {/*<div>
            {listaFrutas.map(fruta => <div key={fruta}>{fruta}</div>)}
        </div>*/}

        {/*{listaFrutas.map((fruta) => (
            <div key={fruta}>{fruta}</div>
        ))}

        <div>
            {productos.frutas.map((fruta) => 
                <div key={fruta.id} className="card">
                    ${fruta.price}-{fruta.icon}-{fruta.name}
                </div>
            )}
            </div>*/}
        
        <div>
            {productos.frutas.map((fruta2) => 
                <Fruta id={fruta2.id} name={fruta2.name} price={fruta2.price} icon={fruta2.icon} />            
            )}
        </div>    
        </>
    )
}

export default Frutas;