import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux' ;

function reducer( state = {} , action ){
    switch( action.type ) {
        case 'CHANGE_KEYWORD':
            return { ...state , keyword: action.value } ;
        case 'LOADING':
            return { ...state , isFetch: true , list: [] } ;
        case 'SHOW_LIST':
            return { ...state , isFetch: false , list: action.list } ;
        case 'SHOW_ERROR':
            return { ...state ,  isFetch: false , list: [] , error: action.error } ;
        default :
            return state ;
    }
}

const initialState = { keyword: '' , list: [] , isFetch: false , error: '' } ;
var store = createStore( reducer , initialState ) ;



function render(){
    ReactDOM.render(
        <App store={ store } /> ,
        document.getElementById('root')
    ) ;
}

render() ;


store.subscribe( render ) ;
