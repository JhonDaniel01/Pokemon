import { useEffect,useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { getPokemons, getByName } from "../../redux/actions";

import Cards from "../../components/cards/Cards";
import Navbar from "../../components/navbar/Navbar";
import "./home.styles.css"
const Home=()=>{
    const dispatch=useDispatch();
    const allPokemons=useSelector((state)=>state.allPokemons);
    //const [findPokemon,setFindPokemon]=useState(allPokemons);
    const [search,setSearch]=useState("");

    const handleChange=(event)=>{
        event.preventDefault()
        setSearch(event.target.value)
    }

    const handelSubmit=(event)=>{
        event.preventDefault()
        dispatch(getByName(search))
    }
    // const handelSubmit=(event)=>{
    //     event.preventDefault()
    //     const filter=allPokemons.filter(pokemon=>pokemon.name.includes(search))
    //     console.log(filter);
    //     setFindPokemon(filter)
    // }
    useEffect(()=>{
        dispatch(getPokemons())
        return (()=>{/*didmount*/})
    },[dispatch])
 
    return(
        <div className="homeContainer">
            <h2>Home</h2>
            <Navbar handleChange={handleChange} handleSubmit={handelSubmit}/>
            <Cards allPokemons={allPokemons}/>
        </div>
    )
 }
 export default Home;