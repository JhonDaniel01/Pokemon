import axios from "axios"
export const ADD_POKEMON = "ADD_POKEMON";
export const GET_TYPES = "GET_TYPES";
export const GET_ALL_POKEMON = "GET_ALL_POKEMON";
export const GET_DETAIL_POKEMON = "GET_DETAIL_POKEMON";
export const GET_BY_NAME = "GET_BY_NAME";
export const URL="http://localhost:3001/"


export const getPokemons = () => {
    return async function (dispatch) {
      const response=await axios.get(`${URL}pokemons`)
      //console.log(response.data);
      return dispatch({ type: 'GET_ALL_POKEMON', payload: response.data })
    };
  };
  export const getByName = (name) => {
    return async function (dispatch) {
      const response=await axios.get(`${URL}pokemons?name=${name}`)
      console.log(response.data);
      return dispatch({ type: GET_BY_NAME, payload: response.data })
    };
  };
  export const getDetailPokemon = (id) => {
    return async function (dispatch) {
      const response=await axios.get(`http://localhost:3001/pokemons/${id}`)
      console.log(response.data);
      return dispatch({ type: GET_DETAIL_POKEMON, payload: response.data })
    };
  };
  export const addCharacter = (pokemon) => {
    console.log(pokemon);
    return { type: ADD_POKEMON, payload: pokemon };
  };
