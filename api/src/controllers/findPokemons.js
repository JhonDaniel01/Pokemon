const axios=require("axios")
const {Pokemon,Type}=require('../db')
const {Op}=require('sequelize')
const URL="https://pokeapi.co/api/v2/pokemon"
const amountPokemonsApi=10;

const findAllPokemonsApi=async()=>{
     const allPokemons=(await axios.get(`${URL}?limit=${amountPokemonsApi}`)).data.results;
     const allPokemonsApi=[];
     
     for (let pokemon of allPokemons) {
        const pokemonApi=(await axios.get(pokemon.url)).data
        allPokemonsApi.push(PokemonsFilterData(pokemonApi));
     }

     //const allPokemonsApi= await Promise.all(promisePokemons)
     //allPokemonsApi=await promisePokemons;
     //console.log(promisePokemons);
     //return allPokemonsApi;
     return allPokemonsApi;
}

const findAllPokemonsDB=async()=>{
    return await Pokemon.findAll({
        include:{
            model: Type,
            attributes: ['name'],
            through:{
                attributes:[],
            },
        }
    })
}
const filterTypePokemon=async(type,pokemons)=>{
   
    const filterType= pokemons.filter(pokemon=>{
        let flag=false;
        for (let i = 0; i < pokemon.types.length; i++) {
            if (pokemon.types[i].name==type)flag=true;
        }
        return flag;
    })
    // const filterTypeDb= await Pokemon.findAll({
        
    //     include:{
    //         model: Type,
    //         where: {
    //             name: type
    //         },
    //         attributes: ['name'],
    //         through:{
    //             attributes:[],
    //         },
    //     }
    // })
    // return [...filterType,filterTypeDb]
    return filterType;
}
const findNamePokemon=async(name)=>{
    const namePokemonDb= await Pokemon.findAll({
        where: {
            name: name
        },
        include:{
            model: Type,
            attributes: ['name'],
            through:{
                attributes:[],
            },
        }
    })
    try {
        const namePokemonApi=PokemonsFilterData((await axios.get(`${URL}/${name}`)).data)
        namePokemonDb.push(namePokemonApi);
    } catch (error) {}
      
    return namePokemonDb;
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

module.exports={findAllPokemonsApi,findAllPokemonsDB,filterTypePokemon,findNamePokemon,PokemonsFilterData}