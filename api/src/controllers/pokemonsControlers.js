const axios=require("axios")
const {Pokemon,Types}=require('../db')
const {findAllPokemonsApi,findAllPokemonsDB,filterGenreGame,findNameGame,PokemonsFilterData}=require('./findPokemons')
const URL="https://pokeapi.co/api/v2/pokemon"

const findAllPokemons=async(pag=1,filter,order,name,type)=>{
    const pokemonsBD= await findAllPokemonsDB()
    const pokemonsApi=await findAllPokemonsApi()
    let allPokemons=await[...pokemonsBD,...pokemonsApi]
    if (type) allPokemons=await filterGenreGame(type,pokemonsApi)
    if (name) allPokemons=await findNameGame(name);
    switch (filter) {
        case "api":
            allPokemons=pokemonsApi;
            break;
        case "bd":
            allPokemons=pokemonsBD;
            break;
    }
    switch (order) {
       case "nameAsc":
            allPokemons.sort((x, y) => y.name.localeCompare(x.name)); //Ordenar nombre menor a mayor
            break;
        case "nameDes":
            allPokemons.sort((x, y) => x.name.localeCompare(y.name)); //Ordenar nombre mayor a menor
            break;
        case "attackAsc":
            allPokemons.sort((y, x) => y.attack - x.attack); //Ordenar attack menor a mayor
            break;
        case "attackDes":
            allPokemons.sort((y, x) => x.attack - y.attack); //Ordenar rating mayor a menor
            break;
    }
    //allPokemons.sort((y, x) => x.rating - y.rating); //Ordenar rating mayor a menor
    //allPokemons.sort((y, x) => y.rating - x.rating); //Ordenar rating menor a mayor
    //allPokemons.sort((x, y) => x.name.localeCompare(y.name)); //Ordenar nombre mayor a menor
    //allPokemons.sort((x, y) => y.name.localeCompare(x.name)); //Ordenar nombre menor a mayor
    console.log(allPokemons)
        
    return allPokemons.slice((pag*15)-15,(pag*15));//0-14 15-29 30-44
}

const pokemonId=async(idPokemon,source)=>{
    
    const detailPokemon= source==="api"
        ?PokemonsFilterData((await axios.get(`${URL}/${idPokemon}`)).data)
        :await Pokemon.findByPk(idPokemon)
    return detailPokemon;
}

const createPokemon=async(name,height,weight,image,live, attack,defense, speed, types)=>{
    const newPokemon= await Pokemon.create({name,height,weight,image,live, attack,defense, speed});
    newPokemon.addTypes(types)
    return newPokemon;
}

module.exports={createPokemon,pokemonId,findAllPokemons,PokemonsFilterData}