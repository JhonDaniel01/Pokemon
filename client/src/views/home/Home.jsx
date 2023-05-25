import { useEffect,useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { getPokemons, getByName,getTypes, filterFront} from "../../redux/actions";
import {selectFilterType, selecOrder,selectFiterOrigin} from "./functions"

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
    
    const nPag=Math.ceil((allPokemons?.length)/12)
    const paginas=[];
    let pokemons=[]

    useEffect(()=>{
        dispatch(getPokemons())
        dispatch(getTypes())
    },[dispatch])

    const handleChange=(event)=>{
        setSearch(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        dispatch(getByName(search))
    }
    

    if (allPokemons[0]){
        if (allPokemons[0].error){
            alert(allPokemons[0].error);
            dispatch(getPokemons())}
        else pokemons=allPokemons?.slice((pag*12)-12,(pag*12));//0-11 12-23 24-35
    }
    for (let i = 0; i < nPag; i++) {
        paginas.push(i+1)
    }

    const pagHandler=(event)=>{
        setPag(event.target.name)
    }
    const handleChangeOrder=(event)=>{
        setPag(1);
        const order=event.target.value
        dispatch(getPokemons(order))
    }
    
    
    const handleChangeType=(event)=>{
        const type=event.target.value;
        if (type==="noFilterType")dispatch(getPokemons())
        else dispatch(getPokemons(undefined,type))
    }
    
   
    const handleChangeFilOrder=(event)=>{
        const origin=event.target.value
        let filter=[]
        const regex = /^([0-9])+$/

        if(origin==="DataBase"){
            filter=copyAllPokemons.filter(pokemon=>!regex.test(pokemon.id))
        }
        if(origin==="Api"){
            filter=copyAllPokemons.filter(pokemon=>regex.test(pokemon.id))
        }
        if (origin==="all") filter=allPokemons
        
        if (filter.length>0)dispatch(filterFront(filter))
        else alert("No se encontraron pokemons con los criterios especificados")
   }

    return(
        <div className="homeContainer">
            <h2>Home</h2>
            <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
        <div className="filters">
            {selecOrder(handleChangeOrder)}
            {selectFilterType(handleChangeType,allTypes)}            
            {selectFiterOrigin(handleChangeFilOrder)}
        </div>
        <div className="pagin">
            {paginas.map(pagi=><button name={pagi} onClick={pagHandler} className={pagi==pag?"paginSelect":""}>{pagi}</button>) }
         </div>
            <Cards  allPokemons={pokemons}/>
        </div>
    )
 }
 export default Home;