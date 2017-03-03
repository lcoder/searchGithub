// mocha chai 测试demo
import React from 'react' ;
import ReactDOM from 'react-dom' ;
import { expect } from 'chai' ;
import { Button } from '../src/test' ;

import {
    Simulate ,
    renderIntoDocument ,
    findRenderedDOMComponentWithTag
} from 'react-addons-test-utils' ;


describe( '测试套件和测试用例' , ()=>{
    // 要点expect 表达式    to.be 语法
    it( '测试加法' , ()=>{
        function add( a , b ){
            return a + b ;
        }
        // to to.be语法
        //expect( add( 1 , 1 ) ).to.equal( 2 ) ;
        expect( add( 1 , 1 ) ).to.be.equal( 2 ) ;
    } )

    // renderIntoDocument 在document中根据render渲染出一个真实的dom节点 , 环境要求，dom环境，需要window,document
    it( '测试<Button />的className设置是否正确' , ()=>{

        var button = renderIntoDocument( <Button className="blue" onClick={ ()=>{  } }>我是一个按钮</Button> ) ;

        var $button = findRenderedDOMComponentWithTag( button , 'button' ) ;

        expect( $button ).to.be.ok ;

        // 有真实dom的API

        expect( $button.className ).to.be.equal( 'blue' ) ;

        expect( $button.nodeType ).to.be.equal( 1 ) ;

        expect( $button.innerHTML ).to.be.equal( '我是一个按钮' ) ;

    } )

    it( '测试<Button />的点击事件是否设置正确' , ()=>{

        var message = '' ;

        function handleClick( event ){
            message = 'hello' ;
        }

        var button = renderIntoDocument( <Button className="blue" onClick={ handleClick }/> ) ;

        var $button = findRenderedDOMComponentWithTag( button , 'button' ) ;

        Simulate.click( $button ) ;

        expect( message ).to.be.equal( 'hello' ) ;

    } )

} )




