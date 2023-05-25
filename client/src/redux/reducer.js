import {GET_ALL_POKEMON,GET_TYPES,GET_DETAIL_POKEMON,GET_BY_NAME,FILTER_FRONT,CLEAR_DETAIL} from './actions'
let initialState={allPokemons:[],copyAllPokemons:[],allTypes:[],detailPokemon:[]}

const rootReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_ALL_POKEMON:
            return {...state,allPokemons: action.payload,copyAllPokemons:action.payload}
        case GET_BY_NAME:
            return {...state,allPokemons: action.payload}
        case GET_DETAIL_POKEMON:
            return {...state,detailPokemon: action.payload}
        case GET_TYPES:
            return {...state,allTypes: action.payload}
        case FILTER_FRONT:
            console.log(action.payload);
            return {...state,allPokemons: action.payload} 
        case CLEAR_DETAIL:
            return {...state,detailPokemon: action.payload}    
        default:
            return state;
    }
}
export default rootReducer; 