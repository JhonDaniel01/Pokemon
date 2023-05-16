import {GET_ALL_POKEMON,GET_TYPES,ADD_POKEMON,GET_DETAIL_POKEMON,GET_BY_NAME} from './actions'
let initialState={allPokemons:[],copyPokemons:[],allTypes:[],detailPokemon:[]}

const rootReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_ALL_POKEMON:
            return {...state,allPokemons: action.payload,copyPokemons:action.payload}
        case GET_BY_NAME:
            return {...state,allPokemons: action.payload}
        case GET_DETAIL_POKEMON:
            return {...state,detailPokemon: action.payload}
        case GET_TYPES:
            return {...state,allTypes: action.payload}
        default:
            return state;
    }
}
export default rootReducer; 