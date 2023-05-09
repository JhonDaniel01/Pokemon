
const getPokemonsHandler=(req,res)=>{
    res.status(200).json({Pokemons:"Trae todos los pokemons"})
}

const getIdPokemonHandler=(req,res)=>{
    res.status(200).json({IdPokemon:"Muestra el detalle de un pokemon por Id"})
}

const postPokemonHandler=(req,res)=>{
    res.status(200).json({postPokemon:"Crea un nuevo pokemon en la Bd"})
}

module.exports={getPokemonsHandler,getIdPokemonHandler,postPokemonHandler}