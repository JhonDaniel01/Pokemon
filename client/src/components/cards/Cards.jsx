import Card from "../card/Card";
import "./cards.styles.css"
const Cards=({allPokemons})=>{
    //console.log(allPokemons,'cards');https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png
    return(
        <div className="cardsContainer">
            {allPokemons.length>0?(allPokemons.map(pokemon=>{
                return <Card pokemon={pokemon} key={pokemon.id}/>
            }))
            :(<img src="https://24.media.tumblr.com/tumblr_md2qy86zYp1qmwn4mo1_500.gif" alt="Loading"/>)}
            
        </div>
    )
 }
 export default Cards;