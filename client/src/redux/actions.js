import axios from ("axios")
export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";
export const GET_CHARACTERS = "GET_CHARACTERS";

export const getCharacters = () => {
    // return function (dispatch) {
    //   fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((response) => response.json())
    //     .then((data) => dispatch({ type: "GET_CHARACTERS", payload: data }));
    // };
    return function (dispatch) {
      axios("https://jsonplaceholder.typicode.com/users").then((data) =>
        dispatch({ type: GET_CHARACTERS, payload: data.data })
      );
    };
  };
  
  export const removeCharacter = (id) => {
    console.log(id);
    return { type: REMOVE_CHARACTER, payload: id };
  };
  export const addCharacter = (character) => {
    console.log(character);
    return { type: ADD_CHARACTER, payload: character };
  };
