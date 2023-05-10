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
        res.status(200).json( PokemonsFilterData(detailPokemon));
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const postPokemonHandler=(req,res)=>{
    res.status(200).json({postPokemon:"Crea un nuevo pokemon en la Bd"})
}

module.exports={getPokemonsHandler,getIdPokemonHandler,postPokemonHandler}