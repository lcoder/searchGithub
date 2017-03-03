import React , { Component } from 'react' ;


export class Button extends Component {
    render(){
        const { className , onClick , children } = this.props ;
        return (
            <button className={className} onClick={onClick}>{children}</button>
        ) ;
    }
}

