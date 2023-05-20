import { useEffect,useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { getPokemons, getByName,getTypes} from "../../redux/actions";

import Cards from "../../components/cards/Cards";
import Navbar from "../../components/navbar/Navbar";
import "./home.styles.css"
const Home=()=>{
    const dispatch=useDispatch();
    const allPokemons=useSelector((state)=>state.allPokemons);
    const allTypes=useSelector((state)=>state.allTypes);
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
        dispatch(getTypes())
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
    const handleChangeOrder=(event)=>{
        const typeOrder=event.target.value
        pokemons=[];
        dispatch(getPokemons(typeOrder))
    }
    console.log(allTypes)
    const selectFilter=()=>{
        return(
            <form action="#">
            <label for="filterType">Filter for Type: </label>
            <select name="filterType" id="filtType">
                {allTypes.map(type=> <option value={type.name}>{type.name}</option>)}
            </select>
            <input type="submit" value="Filter" />
        </form>

        )
    }
    return(
        <div className="homeContainer">
            <h2>Home</h2>
            <Navbar handleChange={handleChange} handleSubmit={handelSubmit}/>
            <form>
                <label>Order:</label><br/>
                <label> Name Z-A</label>
                <input type="radio" name="Order" value="nameAsc" onChange={handleChangeOrder}/><br/>
                <label> Name A-Z</label>
                <input type="radio" name="Order" value="nameDes" onChange={handleChangeOrder}/><br/>
                <label> Attack May-Men</label>
                <input type="radio" name="Order" value="attackAsc" onChange={handleChangeOrder}/><br/>
                <label>  Attack Men-May</label>
                <input type="radio" name="Order" value="attackDes" onChange={handleChangeOrder}/>
            </form>
            {selectFilter()}
            <div className="pagin">
                {paginas.map(pag=><button name={pag} onClick={pagHandler}>{pag}</button>) }
            </div>
            <Cards  allPokemons={pokemons}/>
        </div>
    )
 }
 export default Home;