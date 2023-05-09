const { Router } = require('express');
const {getPokemonsHandler,getIdPokemonHandler,postPokemonHandler}= require('../handlers/pokemonsHandlers')

const pokemonsRouter=Router();

pokemonsRouter.get("/",getPokemonsHandler);
pokemonsRouter.get("/:idPokemon",getIdPokemonHandler);
pokemonsRouter.post("/", postPokemonHandler);

module.exports=pokemonsRouter;