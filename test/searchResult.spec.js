import React from 'react' ;
import { expect } from 'chai' ;

import SearchResult from '../src/searchResult' ;


import {
    renderIntoDocument ,
    scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils' ;

describe( '测试SearchResult组件' , ()=>{

    it( '先测试loading的状态' , ()=>{

        var initial = {
            isFetch: true
        }

        var searchResult = renderIntoDocument( <SearchResult { ...initial } /> ) ;

        var $loading = scryRenderedDOMComponentsWithClass( searchResult , 'loading' ) ;

        var $error = scryRenderedDOMComponentsWithClass( searchResult , 'error' ) ;

        var $list = scryRenderedDOMComponentsWithClass( searchResult , 'list' ) ;

        expect( $loading.length ).to.be.equal( 1 ) ;

        expect( $error.length ).to.be.equal( 0 )  ;

        expect( $list.length ).to.be.equal( 0 ) ;
    } )

    it( '然后测试error的状态' , ()=>{
        var initial = {
            isFetch: false ,
            error: 'some thing error'
        }
        var searchResult = renderIntoDocument( <SearchResult {...initial} /> ) ;

        var $loading = scryRenderedDOMComponentsWithClass( searchResult , 'loading' ) ;

        var $error = scryRenderedDOMComponentsWithClass( searchResult , 'error' ) ;

        var $list = scryRenderedDOMComponentsWithClass( searchResult , 'list' ) ;

        expect( $loading.length ).to.be.equal( 0 ) ;

        expect( $error.length ).to.be.equal( 1 ) ;

        expect( $list.length ).to.be.equal( 0 ) ;

    } ) ;


    it( '最后测试有数据的状态list' , ()=>{

        var initial = {
            isFetch: false ,
            error: '' ,
            list: [ { full_name: 'java' , stargazers_count: '10' , forks_count: '10' } ,
                    { full_name: 'javascript' , stargazers_count: '100' , forks_count: '1000' } ]
        }

        var searchResult = renderIntoDocument( <SearchResult {...initial} /> ) ;

        var $list = scryRenderedDOMComponentsWithClass( searchResult , 'list' ) ;

        expect( $list[0] ).to.be.ok ;

        var $li = $list[0].getElementsByTagName( 'li' ) ;

        expect( $li.length ).to.be.equal( 2 ) ;

    } )

} ) ;


