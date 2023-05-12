import {GET_ALL_POKEMON,GET_TYPES,ADD_POKEMON,GET_DETAIL_POKEMON,} from './actions'
let initialState={allPokemons:[{name: 'Jhon',image: '123',types:['Fuego','tierra']}],allTypes:[]}

const rootReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_ALL_POKEMON:
            return {
                ...state,
                allPokemons: action.payload}
        default:
            return state;
    }
}
export default rootReducer; 