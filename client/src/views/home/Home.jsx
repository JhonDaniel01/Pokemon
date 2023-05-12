import { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { getPokemons } from "../../redux/actions";
import Cards from "../../components/cards/Cards";
import Navbar from "../../components/navbar/Navbar";
import "./home.styles.css"
const Home=()=>{
    const dispatch=useDispatch();
    const allPokemons=useSelector((state)=>state.allPokemons);
    useEffect(()=>{
        dispatch(getPokemons())
        return (()=>{/*didmount*/})
    },[dispatch])
    console.log(allPokemons);
    return(
        <div className="homeContainer">
            <h2>Home</h2>
            <Navbar></Navbar>
            <Cards allPokemons={allPokemons}/>
        </div>
    )
 }
 export default Home;