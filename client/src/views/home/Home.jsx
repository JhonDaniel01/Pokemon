import { useEffect,useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { getPokemons, getByName,getTypes, filterFront} from "../../redux/actions";

import Cards from "../../components/cards/Cards";
import Navbar from "../../components/navbar/Navbar";
import "./home.styles.css"
const Home=()=>{
    const dispatch=useDispatch();
    const allPokemons=useSelector((state)=>state.allPokemons);
    const allTypes=useSelector((state)=>state.allTypes);
    const copyAllPokemons=useSelector((state)=>state.copyAllPokemons);
    
    const [search,setSearch]=useState("");
    const [pag,setPag]=useState(1);
    
    const handleChange=(event)=>{
        //event.preventDefault()
        setSearch(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        dispatch(getByName(search))
    }
    // const handleSubmit=(event)=>{
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
        const order=event.target.value
        dispatch(getPokemons(order))
    }
    
    const selectFilterType=()=>{
        return(
            <form action="#">
            <label for="filterType">Filter by type: </label>
            <select name="filterType" id="filterType" onChange={handleChangeType}>
                <option value="noFilterType" >--Select Type--</option>
                {allTypes.map(type=> <option value={type.name} >{type.name}</option>)}
            </select>
            </form>
        )
    }
    const handleChangeType=(event)=>{
        console.log(event);
        const type=event.target.value;
        dispatch(getPokemons(type,type))
    }
 
    const selectFiterOrigin=()=>{
        return(
            <form action="#">
            <label for="filtOrigin">filter by data source: </label>
            <select name="filterOrigin" id="filtOrigin" onChange={handleChangeFilOrder}>
                <option >--Selec Origin--</option>
                <option value="DataBase" >Data Base</option>
                <option value="Api" >Api</option>
            </select>
            </form>
            
        )
    }
    const handleChangeFilOrder=(event)=>{
        filterOrigin(event.target.value)
    }
   const filterOrigin=(origin)=>{
        let filter=[]
        const regex = /^([0-9])+$/
        if(origin==="DataBase"){
            filter=copyAllPokemons.filter(pokemon=>!regex.test(pokemon.id))
            dispatch(filterFront(filter));
        }
        if(origin==="Api"){
            filter=copyAllPokemons.filter(pokemon=>regex.test(pokemon.id))
            dispatch(filterFront(filter));
        }
   }
    return(
        <div className="homeContainer">
            <h2>Home</h2>
            <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
            <form action="#">
                <label>Order: </label>
                <select name="order" id="order" onChange={handleChangeOrder}>
                    <option value="noOrder" >--Select order--</option>
                    <option value="nameDes" >Name A-Z</option>
                    <option value="nameAsc" >Name Z-A</option>
                    <option value="attackDes" >Attack May-Men</option>
                    <option value="attackAsc" >Attack Men-May</option>
                </select>
            </form>
            {selectFilterType()}            
            {selectFiterOrigin()}
            <div className="pagin">
                {paginas.map(pag=><button name={pag} onClick={pagHandler}>{pag}</button>) }
            </div>
            <Cards  allPokemons={pokemons}/>
        </div>
    )
 }
 export default Home;