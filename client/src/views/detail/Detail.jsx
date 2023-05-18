import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetailPokemon } from '../../redux/actions'
import './detail.styles.css'
import Card from '../../components/card/Card'
const Detail=()=>{
    const dispatch=useDispatch()
    const detailPokemon=useSelector((state)=>state.detailPokemon)
    const {id}=useParams();
    useEffect(()=>{
        dispatch(getDetailPokemon(id))
    },[])
    //const {name,image,types,id}=detailPokemon
    console.log(detailPokemon);
    return(
        <div className="detailContainer">
        {detailPokemon.types ?(
            <>
            <h1>{detailPokemon.name}</h1>
            <img src={detailPokemon?.image}/>
            <h1>Live: {detailPokemon.live}</h1>
            <h1>attack: {detailPokemon.attack}</h1>
            <h1>defense: {detailPokemon.defense}</h1>
            <h1>speed: {detailPokemon.speed}</h1>
            <h1>height: {detailPokemon.height}</h1>
            <h1>weight: {detailPokemon.weight}</h1>
            <h1>Types:</h1>
            {detailPokemon.types.map(type=><h2>{type.name}</h2>)}            
            </>
            ):(<h3>Loading...</h3>)}
        </div>
            )
 }
 export default Detail;