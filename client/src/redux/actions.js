import axios from "axios"
export const ADD_POKEMON = "ADD_POKEMON";
export const GET_TYPES = "GET_TYPES";
export const GET_ALL_POKEMON = "GET_ALL_POKEMON";
export const GET_DETAIL_POKEMON = "GET_DETAIL_POKEMON";
export const GET_BY_NAME = "GET_BY_NAME";
export const FILTER_FRONT = "FILTER_FRONT";
export const CLEAR_DETAIL= "CLEAR_DETAIL"
export const URL="http://localhost:3001/"


export const getPokemons = (order="",type="") => {
    return async function (dispatch) {
      const response=await axios.get(`${URL}pokemons?order=${order}&&type=${type}`)
      //console.log(response.data);
      return dispatch({ type: GET_ALL_POKEMON, payload: response.data })
    };
  };
  export const getTypes = () => {
    return async function (dispatch) {
      const response=await axios.get(`${URL}types`)
      //console.log(response.data);
      return dispatch({ type:GET_TYPES , payload: response.data })
    };
  };
  export const getByName = (name) => {
    return async function (dispatch) {
    const response=await axios.get(`${URL}pokemons?name=${name}`)
        console.log(response);
        return dispatch({ type: GET_BY_NAME, payload: response.data })
     };
  };
  export const getDetailPokemon = (id) => {
    return async function (dispatch) {
      const response=await axios.get(`http://localhost:3001/pokemons/${id}`)
      return dispatch({ type: GET_DETAIL_POKEMON, payload: response.data })
    };
  };
  export const clearDetailPokemon = () => {
    return function (dispatch) {
      return dispatch({ type: CLEAR_DETAIL, payload: [] })}
  };
  export const addCharacter = (pokemon) => {
    console.log(pokemon);
    return { type: ADD_POKEMON, payload: pokemon };
  };

  export const filterFront=(filterData)=>{
    console.log(filterData);
    return function (dispatch){return dispatch({type: FILTER_FRONT, payload: filterData })}
  }