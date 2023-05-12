import Card from "../card/Card";
import "./cards.styles.css"
const Cards=({allPokemons})=>{
    console.log(allPokemons,'cards');
    return(
        <div className="cardsContainer">
            {allPokemons && allPokemons.map(pokemon=>{
                return <Card pokemon={pokemon}/>
            }) }
            
        </div>
    )
 }
 export default Cards;