import React , { Component } from 'react' ;
import { expect } from 'chai' ;
import { Button } from '../src/test' ;


import {
    Simulate ,
    renderIntoDocument ,
    findRenderedDOMComponentWithClass ,
    findRenderedDOMComponentWithTag
} from 'react-addons-test-utils' ;


describe( '测试Button' , ()=>{
    function add( a , b ){ return a + b ; }

    it( '测试加法运算' , ()=>{

        expect( add( 1 , 1 ) ).to.be.equal( 2 ) ;

    } ) ;

    it( '测试button添加className' , ()=>{

        var button = renderIntoDocument( <Button className="blue">我是按钮</Button> ) ;

        var $button = findRenderedDOMComponentWithTag( button , 'button' ) ;

        expect( $button ).to.be.ok ;

        expect( $button.nodeType ).to.be.equal( 1 ) ;

        expect( $button.className ).to.be.equal( 'blue' ) ;

        expect( $button.innerHTML ).to.be.equal( '我是按钮' ) ;

    } ) ;

    it( '测试点击事件' , ()=>{

        var message = '' ;
        function handleClick(){
            message = 'hello' ;
        }

        var button = renderIntoDocument( <Button className="blue" onClick={ handleClick }>我是按钮</Button> ) ;

        var $button = findRenderedDOMComponentWithTag( button , 'button' ) ;

        Simulate.click( $button ) ;

        expect( message ).to.be.equal( 'hello' ) ;


    } ) ;



} ) ;







