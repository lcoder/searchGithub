import React from 'react' ;
import ReactDOM from 'react-dom' ;
import { expect } from 'chai' ;
import SearchBar from '../src/searchBar' ;


import {
    Simulate ,
    renderIntoDocument ,
    findRenderedDOMComponentWithTag ,
    findRenderedDOMComponentWithClass ,
    scryRenderedDOMComponentsWithClass ,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils' ;


describe( 'SearchBar' , ()=>{

    it( 'can begin search' , ()=>{
        var message ;

        function beginSearch( msg ){
            message = msg ;
        }
        const instance = renderIntoDocument(
            <SearchBar beginSearch={beginSearch} />
        ) ;

        const $input = findRenderedDOMComponentWithTag( instance , 'input' ) ;

        $input.value = 'some message' ;

        const $form = findRenderedDOMComponentWithTag( instance , 'form' ) ;

        Simulate.submit( $form ) ;

        expect( message ).to.equal( 'some message' ) ;
    } ) ;

} ) ;

