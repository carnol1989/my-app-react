import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Stateful from './components/Stateful.js';
import Stateless from './components/Stateless.js';
import HolaMundo from './components/HolaMundo.js';
import Button from './components/Button.js';
import Button2 from './components/Button2.js';
import PropChildren from './components/Prop-children.js';
import ValidacionProps from './components/Validacion-props.js';
import ManejoEventos from './components/ManejoEventos.js';
import Tienda from './components/Tienda.js';
import Frutas from './components/Frutas.js';
import CicloDeVida from './components/CicloDeVida.js';
import Tarea01 from './components/Tarea01.js';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/*<Stateful />
    <Stateless />
    <HolaMundo />
    <Button text='Soy Props' number={2} lista={['frutas']} />
    <Button2 text='Soy Props 2' number={2} lista={['frutas']} />
    <PropChildren />
    <ValidacionProps />
    <ManejoEventos />
    <Tienda />
    <Frutas />
    <CicloDeVida />*/}
    <Tarea01 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
