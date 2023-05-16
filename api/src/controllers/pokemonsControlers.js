const axios=require("axios")
const {Pokemon,Type}=require('../db')
const {findAllPokemonsApi,findAllPokemonsDB,filterTypePokemon,findNamePokemon,PokemonsFilterData}=require('./findPokemons')
const URL="https://pokeapi.co/api/v2/pokemon"

const findAllPokemons=async(pag=1,filter,order,name,type)=>{
   
    if (name) return await findNamePokemon(name);
    const pokemonsBD= await findAllPokemonsDB()
    const pokemonsApi=await findAllPokemonsApi()
    let allPokemons=[...pokemonsBD,...pokemonsApi]
    if (type) allPokemons=await filterTypePokemon(type,allPokemons)
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
    //return allPokemons.slice((pag*12)-12,(pag*12));//0-11 12-23 24-35
    return allPokemons
}

const pokemonId=async(idPokemon,source)=>{
    
    const detailPokemon= source==="api"
        ?PokemonsFilterData((await axios.get(`${URL}/${idPokemon}`)).data)
        //:await Pokemon.findByPk(idPokemon)
        : await Pokemon.findAll({
            where: {
                id: idPokemon
            },
            include:{
                model: Type,
                attributes: ['name'],
                through:{
                    attributes:[],
                },
            }
        })
    return detailPokemon;
}

const createPokemon=async(name,height,weight,image,live, attack,defense, speed, types)=>{
    const newPokemon= await Pokemon.create({name,height,weight,image,live, attack,defense, speed});
    newPokemon.addTypes(types)
    return newPokemon;
}

module.exports={createPokemon,pokemonId,findAllPokemons,PokemonsFilterData}