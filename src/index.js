import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux' ;
import reducer from './reducer' ;

const initialState = { list: [] , isFetch: false , error: '' } ;

var store = createStore( reducer , initialState ) ;

function render(){
    ReactDOM.render(
        <App store={ store } /> ,
        document.getElementById('root')
    ) ;
}

render() ;


store.subscribe( render ) ;
