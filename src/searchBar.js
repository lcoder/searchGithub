import React , { Component } from 'react' ;


export default class SearchBar extends Component {
    constructor( props ){
        super( props ) ;
        this.handleSubmit = this.handleSubmit.bind( this ) ;
    }
    handleSubmit( event ){
        event.preventDefault() ;
        var $input = this.refs.input ,
            value = $input.value ;
        this.props.beginSearch( value ) ;
    }
    render(){
        return (
            <form onSubmit={ this.handleSubmit }>
                <input ref="input" placeholder="type some thing" />
                <button>搜索</button>
            </form>
        ) ;
    }
}


