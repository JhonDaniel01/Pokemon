const axios=require("axios")
const {Pokemon,Type}=require('../db')
const URL="https://pokeapi.co/api/v2/pokemon"

const findAllPokemonsApi=async()=>{
     const allPokemonsApi=await(axios.get(`${URL}`));
     console.log(allPokemonsApi);
     return allPokemonsApi.data.results;
}

const findAllPokemonsDB=async()=>{
    return await Pokemon.findAll({
        include:{
            model: Type,
            atributes: ['name'],
            through:{
                atributes:[],
            },
        }
    })
}
const filterGenreGame=async()=>{

}
const findNameGame=async()=>{

}
const PokemonsFilterData=(pokemon)=>{
    const pokemonFilter={
            id:pokemon.id,
            name:pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            image: pokemon.sprites.other.dream_world.front_default,
            live: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            speed: pokemon.stats[5].base_stat,
            types: pokemon.types.map(type=>type.type)
        };
    //console.log(pokemonFilter);
    return pokemonFilter;
}

module.exports={findAllPokemonsApi,findAllPokemonsDB,filterGenreGame,findNameGame,PokemonsFilterData}