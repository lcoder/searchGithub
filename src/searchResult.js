import React , { Component } from 'react' ;



export default class SearchResult extends Component {
    getList(){
        return this.props.list.map( ( item , index )=>{
            return <li key={index}>repository: {item.full_name}____stars: {item.stargazers_count}____forks:{item.forks_count}</li>
        } ) ;
    }
    render(){
        const { isFetch , error } = this.props ;
        return (
            <div>
                {
                    isFetch ? <p className="loading">加载中....</p> :
                    error ? <p className="error">{error}</p> :
                    <ul className="list">
                        { this.getList() }
                    </ul>
                }
            </div>
        ) ;

    }
}


