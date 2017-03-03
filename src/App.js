// hot loading need configuration: { "modules": false }
import 'whatwg-fetch' ;
import React , { Component } from 'react' ;
import SearchBar from './searchBar' ;
import SearchResult from './searchResult' ;

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
            console.log('parsing failed', ex )
        })
    }
    render() {
        const { list , keyword , isFetch , error } = this.props.store.getState() ;

        return (
            <div>
                <SearchBar value={ keyword } beginSearch={ this.benginSearch } />
                <SearchResult isFetch={isFetch} error={error} list={list} />
            </div>
        );
    }
}