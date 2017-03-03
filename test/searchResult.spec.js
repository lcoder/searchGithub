import React from 'react' ;
import ReactDOM from 'react-dom' ;
import { expect } from 'chai' ;
import SearchResult from '../src/searchResult' ;


import {
    Simulate ,
    renderIntoDocument ,
    findRenderedDOMComponentWithTag ,
    findRenderedDOMComponentWithClass ,
    scryRenderedDOMComponentsWithClass ,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils' ;



describe( 'searchResult' , ()=>{

    // 测试loading状态
    it( 'loading' , ()=>{

        const initial = {
            isFetch: true , error: '' , list: []
        }

        const searchResult = renderIntoDocument( <SearchResult { ...initial } /> ) ;

        const $loading = findRenderedDOMComponentWithClass( searchResult , 'loading' ) ;

        const $error = scryRenderedDOMComponentsWithClass( searchResult , 'error' ) ;

        const $list = scryRenderedDOMComponentsWithClass( searchResult , 'list' ) ;

        expect( $loading ).to.be.ok ;

        expect( $error.length ).to.be.equal( 0 ) ;

        expect( $list.length ).to.be.equal( 0 ) ;

    } )

    // 测试错误状态
    it( 'error' , ()=>{

        const initial = {
            isFetch: false , error: 'some thing error' , list: []
        }

        const searchResult = renderIntoDocument( <SearchResult { ...initial } /> ) ;

        const $loading = scryRenderedDOMComponentsWithClass( searchResult , 'loading' ) ;

        const $error = scryRenderedDOMComponentsWithClass( searchResult , 'error' ) ;

        const $list = scryRenderedDOMComponentsWithClass( searchResult , 'list' ) ;

        expect( $loading.length ).to.be.equal( 0 ) ;

        expect( $error[0].innerHTML ).to.be.equal( 'some thing error' ) ;

        expect( $list.length ).to.be.equal( 0 ) ;

    } )

    // 测试有数据的状态
    it( 'list' , ()=>{

        const initial = {
            isFetch: false , error: '' , list: [
                { full_name: 'java' , stargazers_count: '10' , forks_count: '10' } ,
                { full_name: 'javascript' , stargazers_count: '100' , forks_count: '1000' }
            ]
        }

        const searchResult = renderIntoDocument( <SearchResult { ...initial } /> ) ;

        const $loading = scryRenderedDOMComponentsWithClass( searchResult , 'loading' ) ;

        const $error = scryRenderedDOMComponentsWithClass( searchResult , 'error' ) ;

        const $list = scryRenderedDOMComponentsWithTag( searchResult , 'ul' ) ;

        expect( $loading.length ).to.be.equal( 0 ) ;

        expect( $error.length ).to.be.equal( 0 ) ;

        var $ul = $list[ 0 ] ;
        expect( $ul ).to.be.ok ;

        var $li = $ul.getElementsByTagName( 'li' ) ;

        expect( $li.length ).to.be.equal( 2 ) ;

    } )

} ) ;


