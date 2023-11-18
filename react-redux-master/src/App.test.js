import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import { createRoot } from 'react-dom/client'
 //import * as serviceWorker from './serviceWorker';

import { legacy_createStore as  createStore} from 'redux'
import {Provider} from 'react-redux'
import myReducer from './reducers'
import './index.css'


const myStore = createStore(myReducer);
describe('App', () => {
  it('renders App component', () => {
    render( <Provider store={myStore}> <App/> </Provider>);

    screen.debug();
  });
});



 