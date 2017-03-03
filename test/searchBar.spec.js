import React , { Component } from 'react' ;
import { expect } from 'chai' ;
import SearchBar from '../src/searchBar' ;

import {
    Simulate ,
    renderIntoDocument ,
    findRenderedDOMComponentWithTag
} from 'react-addons-test-utils' ;


describe( '测试SearchBar组件' , ()=>{
    var keyword = '' ;
    function beginSearch( value ){
        keyword = value ;
    }

    it( '能发送搜索内容' , ()=>{

        var searchBar = renderIntoDocument( <SearchBar beginSearch={ beginSearch } /> ) ;

        var $input = findRenderedDOMComponentWithTag( searchBar , 'input' ) ;
        var $form = findRenderedDOMComponentWithTag( searchBar , 'form' ) ;

        $input.value = 'hello' ;

        Simulate.submit( $form ) ;

        expect( keyword ).to.be.equal( 'hello' ) ;

    } ) ;



} ) ;

