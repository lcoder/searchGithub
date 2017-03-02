// hot loading need configuration: { "modules": false }
import 'whatwg-fetch' ;
import React , { Component } from 'react' ;
import SearchBar from './searchBar' ;

export default class App extends Component {
    constructor( props ){
        super( props ) ;

        this.benginSearch = this.benginSearch.bind( this ) ;
    }
    componentDidMount(){

    }
    benginSearch( value ){
        //var value = event.target.value ;
        var url = 'https://api.github.com/search/repositories?q=' + value ;
        url = '/api' ;

        this.props.store.dispatch( { type: 'LOADING' } ) ;

        fetch( url )
        .then(function(response) {
            return response.json()
        }).then( (json)=> {
            var items = json.items ;
            if( json.message ){
                throw new Error( json.message ) ;
            }else{
                this.props.store.dispatch( { type: 'SHOW_LIST' , list: items } ) ;
            }
        }).catch( (ex)=> {
            this.props.store.dispatch( { type: 'SHOW_ERROR' , error: ex + '' } ) ;
            console.log('parsing failed', ex)
        })
    }
    render() {
        const { list , keyword , isFetch , error } = this.props.store.getState() ;

        var listMap = list.map( ( item , index )=>{
            return <li key={index}>{item.full_name} stars: { item.stargazers_count } forks_count: { item.forks_count }</li>
        } ) ;
        return (
            <div>
                <SearchBar value={ keyword } beginSearch={ this.benginSearch } />
                <div>
                    { isFetch ?
                        <p>loading...</p> :
                            error ? <p>{error}</p> :
                                <ul>
                                    { listMap }
                                </ul>
                    }
                </div>
            </div>
        );
    }
}