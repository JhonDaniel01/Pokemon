import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetailPokemon } from '../../redux/actions'
import {Link} from 'react-router-dom'
import './detail.styles.css'

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
            <img className='imag' src={detailPokemon?.image}/>
            <div className='containerText1'>
                <h2>Live: {detailPokemon.live}</h2>
                <h2>attack: {detailPokemon.attack}</h2>
                <h2>defense: {detailPokemon.defense}</h2>
                <h2>speed: {detailPokemon.speed}</h2>
            </div>
            <div className='containerText2'>
                <h2>height: {detailPokemon.height}</h2>
                <h2>weight: {detailPokemon.weight}</h2>
                <h2>Types:</h2>
                {detailPokemon.types.map(type=><h3>{type.name}</h3>)}            
            </div>
            </>
            ):(<h3>Loading...</h3>)}
            <Link to="/home"><button>Regresar</button></Link>
        </div>
            )
 }
 export default Detail;