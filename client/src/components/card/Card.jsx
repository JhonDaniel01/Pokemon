import "./card.styles.css"
const Card=({pokemon})=>{
    console.log(pokemon);
    return(
        <div className="cardContainer">
            <p>{pokemon.name}</p>
            <img src={pokemon.image}/>
            <p>{pokemon.types[0].name}</p>
        </div>
    )
 }
 export default Card;