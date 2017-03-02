// hot loading need configuration: { "modules": false }
import 'whatwg-fetch' ;
import React , { Component } from 'react' ;


export default class App extends Component {
    constructor( props ){
        super( props ) ;
        this.state = {
            keyword: '' ,
            list: [] ,
            isFetch: false ,
            error: ''
        } ;
        this.benginSearch = this.benginSearch.bind( this ) ;
        this.handleChange = this.handleChange.bind( this ) ;
    }
    componentDidMount(){

    }
    handleChange( event ){
        this.setState( {
            keyword: event.target.value
        } )
    }
    benginSearch(){
        var value = this._input.value ;
        var url = 'https://api.github.com/search/repositories?q=' + value ;
        url = '/api' ;
        this.setState( {
            isFetch: true
        } ) ;
        fetch( url )
        .then(function(response) {
            return response.json()
        }).then( (json)=> {
            var items = json.items ;
            if( json.message ){
                throw new Error( json.message ) ;
            }else{
                this.setState( {
                    list: items ,
                    isFetch: false ,
                    error: ''
                } ) ;
            }
        }).catch( (ex)=> {
            this.setState( {
                list: [] ,
                isFetch: false ,
                error: ex + ''
            } )
            console.log('parsing failed', ex)
        })
    }
    render() {
        var list = this.state.list.map( ( item , index )=>{
            return <li key={index}>{item.full_name} stars: { item.stargazers_count } forks_count: { item.forks_count }</li>
        } ) ;
        return (
            <div>
                <div>
                    <input ref={ (e)=>{ this._input = e } } onChange={this.handleChange} value={this.state.keyword} placeholder="请输入搜索内容" />
                    <button onClick={ this.benginSearch }>搜索</button>
                </div>
                <div>
                    { this.state.isFetch ?
                        <p>loading...</p> :
                            this.state.error ? <p>{this.state.error}</p> :
                                <ul>
                                    { list }
                                </ul>
                    }
                </div>
            </div>
        );
    }
}