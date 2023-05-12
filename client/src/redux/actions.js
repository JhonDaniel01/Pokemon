import axios from "axios"
export const ADD_POKEMON = "ADD_POKEMON";
export const GET_TYPES = "GET_TYPES";
export const GET_ALL_POKEMON = "GET_ALL_POKEMON";
export const GET_DETAIL_POKEMON = "GET_ALL_POKEMON";
export const URL="http://localhost:3001/"


export const getPokemons = () => {
    return async function (dispatch) {
      const response=await axios.get(`http://localhost:3001/pokemons`)
      console.log(response.data);
      return dispatch({ type: 'GET_ALL_POKEMON', payload: response.data })
    };
  };
  
  export const removeCharacter = (id) => {
    console.log(id);
    return { type: GET_DETAIL_POKEMON, payload: id };
  };
  export const addCharacter = (pokemon) => {
    console.log(pokemon);
    return { type: ADD_POKEMON, payload: pokemon };
  };
