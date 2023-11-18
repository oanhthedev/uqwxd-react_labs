import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { createRoot } from 'react-dom/client'
 //import * as serviceWorker from './serviceWorker';

import { legacy_createStore as  createStore} from 'redux'
import {Provider} from 'react-redux'
import myReducer from './reducers'
import './index.css'

//Create the store
const myStore = createStore(myReducer);

//This will console log the current state everytime the state changes
myStore.subscribe(()=>console.log(myStore.getState()));

//Enveloping the App inside the Provider, ensures that the states in the store are available

//throughout the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
<Provider store={myStore}> <App/> </Provider>
);
// // const container = document.getElementById('root');
// const root = createRoot(container); 
// root.render(<Provider store={myStore}> <App tab="counter"/> </Provider>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
