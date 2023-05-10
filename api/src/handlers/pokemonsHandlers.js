const {createPokemon,pokemonId,findAllPokemons,PokemonsFilterData}=require('../controllers/pokemonsControlers')

const getPokemonsHandler=async(req,res)=>{
    //res.status(200).json({Pokemons:"Trae todos los pokemons"}) 
   
    try {
        const {page,filter,order,name,type}=req.query;
        const pokemons=await findAllPokemons(page,filter,order,name,type);
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const getIdPokemonHandler=async(req,res)=>{
    //res.status(200).json({IdPokemon:"Muestra el detalle de un pokemon por Id"})
    const {idPokemon}=req.params;
    const source=isNaN(idPokemon)?"bdd":"api";
    try {
        const detailPokemon= await pokemonId(idPokemon,source);
        res.status(200).json( detailPokemon);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const postPokemonHandler=async(req,res)=>{
    try {
        const {name,height,weight,image,live, attack,defense, speed, types}=req.body;
        const newPokemon= await createPokemon(name,height,weight,image,live, attack,defense, speed, types);
        res.status(201).json(newPokemon);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports={getPokemonsHandler,getIdPokemonHandler,postPokemonHandler}