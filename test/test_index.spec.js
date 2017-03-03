import React , { Component } from 'react' ;
import { expect } from 'chai' ;
import { Button } from '../src/testComponents' ;

import {
    Simulate ,
    renderIntoDocument ,
    findRenderedDOMComponentWithTag
} from 'react-addons-test-utils'



describe( '测试组件' , ()=>{

    it( '测试按钮' , ()=>{
        var message = '' ;
        function handleClick(){
            message = 'hello' ;
        }

        const instanceOfButton = renderIntoDocument( <Button onClick={ handleClick() } /> ) ;

        const $button = findRenderedDOMComponentWithTag( instanceOfButton , 'button' ) ;

        expect( $button ).to.be.ok ;

        Simulate.click( $button ) ;

        expect( message ).to.be.equal( 'hello' ) ;

    } )


} ) ;