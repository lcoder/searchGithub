import React , { Component } from 'react' ;


export default class SearchResult extends Component {
    getListMap(){
        return this.props.list.map( ( item , index )=>{
            return <li key={index}>{item.full_name} stars: { item.stargazers_count } forks_count: { item.forks_count }</li>
        } ) ;
    }
    render(){
        const { isFetch , error } = this.props ;
        return (
            <div>
                { isFetch ?
                    <p className="loading">loading...</p> :
                        error ? <p className="error">{error}</p> :
                            <ul className="list">
                                { this.getListMap() }
                            </ul>
                }
            </div>
        ) ;
    }
}



