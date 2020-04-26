import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import App from './App';
import RouletteGun from './state-drills/RouletteGun'
//import HelloWorld from './state-drills/HelloWorld'
 //pass in store (object with all the info to manipulate) as a prop
ReactDOM.render(<RouletteGun />, document.getElementById('root')); //renders App into the element with 'root' Id
//ReactDOM.render(<HelloWorld />, document.getElementById('root'))
// putting store={store} in App makes the prop 'store' in App.js populate with values that trickle down to all the other sub-components
// without this, the default store is empty