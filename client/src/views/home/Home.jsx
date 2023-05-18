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
    const [pag,setPag]=useState(1);

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
    const nPag=Math.ceil((allPokemons?.length)/12)
    const paginas=[];
    
    let pokemons=allPokemons?.slice((pag*12)-12,(pag*12));//0-11 12-23 24-35
    for (let i = 0; i < nPag; i++) {
        paginas.push(i+1)
        
    }
    const pagHandler=(event)=>{
        setPag(event.target.name)
    }
    return(
        <div className="homeContainer">
            <h2>Home</h2>
            <Navbar handleChange={handleChange} handleSubmit={handelSubmit}/>
            {paginas.map(pag=><button name={pag} onClick={pagHandler}>{pag}</button>) }
            <Cards  allPokemons={pokemons}/>
        </div>
    )
 }
 export default Home;