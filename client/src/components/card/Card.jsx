import {Link} from 'react-router-dom'
import "./card.styles.css"
const Card=({pokemon})=>{
    //console.log(pokemon);
    const {name,image,types,id}=pokemon
    return(
        <Link to={`home/${id}`}>
        <div className="cardContainer">
            <h1>{name}</h1>
            <img src={image}/>
            <h1>{types[0].name}</h1>
        </div>
        </Link>
    )
 }
 export default Card;