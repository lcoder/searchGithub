

export default function reducer( state = {} , action ){
    switch( action.type ) {
        case 'CHANGE_KEYWORD':
            return { ...state , keyword: action.value } ;
        case 'LOADING':
            return { ...state , isFetch: true , list: [] } ;
        case 'SHOW_LIST':
            return { ...state , isFetch: false , list: action.list } ;
        case 'SHOW_ERROR':
            return { ...state ,  isFetch: false , list: [] , error: action.error } ;
        default :
            return state ;
    }
}


