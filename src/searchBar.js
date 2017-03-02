import React , { Component } from 'react' ;
import ReactDOM from 'react-dom' ;

export default class SearchBar extends Component {
    constructor( props ){
        super( props ) ;
        this.handleSubmit = this.handleSubmit.bind( this ) ;

    }
    handleSubmit( e ){
        e.preventDefault() ;
        var $textarea = ReactDOM.findDOMNode( this.refs.textarea ) ;
        if( typeof this.props.beginSearch === 'function' ){
            this.props.beginSearch( $textarea.value ) ;
            $textarea.value = '' ;
        }else{
            console.log( 'props.beginSearch not defined!' ) ;
        }
    }
    render(){
        return (
            <form onSubmit={ this.handleSubmit } >
                <input ref="textarea" placeholder="请输入搜索内容" />
                <button type="submit">搜索</button>
            </form>
        ) ;
    }
}


