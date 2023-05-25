import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { validate } from "./validate";
import { useDispatch, useSelector } from "react-redux";
import "./create.styles.css"

 const Create=()=>{
    const allTypes=useSelector((state)=>state.allTypes);
   ;
    const [form,setForm]=useState({
        name:"",height:"",weight:"",image:"",live:"", attack:"",defense:"", speed:"", type1:"",type2:""  
    })
    const [error,setError]=useState({
        name:"",height:"",weight:"",image:"",live:"", attack:"",defense:"", speed:"", type1:"",type2:""  
    })
  
    const selectType=(numType)=>{
        return(
            <div>
            <label for="filterType">Select {numType}: </label>
            <select name={numType} id="filterType" onChange={handleChange}>
                <option value="noFilterType" >--Select Type--</option>
                {allTypes.map(type=> <option name={numType} value={type.id} >{type.name}</option>)}
            </select>
            </div>
        )
    }
    const handleChange=(event)=>{
        const property=event.target.name
        const value=event.target.value
        console.log(event);
        setError(validate({...form,[property]:value}))
        setForm({...form,[property]:value})
    }
    
    const handleSubmit=(event)=>{
        
        const newPokemon={
            name: form.name,
            height:form.height,
            weight: form.weight,
            image: form.image,
            live: form.live, 
            attack:form.attack,
            defense:form.defense, 
            speed:form.speed, 
            types:[form.type1,form.type2]
        }
        axios.post("http://localhost:3001/pokemons",newPokemon)
        .then(res=>console.log(res)).catch(err=>console.log(err))
        alert("Pokemon creado con exito")
    }
    return(
        <div className="form">
            <h1>Create Pokemon</h1>
        <form onSubmit={handleSubmit} className="inputs">
            <div>
                <label>Name: </label>
                <input type="text" value={form.name} onChange={handleChange} name="name"/>
                <span>{error.name}</span>
            </div>
            <div>
                <label>Image: </label>
                <input type="text" value={form.image} onChange={handleChange} name="image"/>
                <span >{error.image}</span>
            </div>
            <div>
                <label>life: </label>
                <input type="text" value={form.live} onChange={handleChange} name="live"/>
                {!error.live ? null : <span>{error.live}</span>}
            </div>
            <div>
                <label>Attack: </label>
                <input type="text" value={form.attack} onChange={handleChange} name="attack"/>
                <span>{error.attack}</span>
            </div>
            <div>
                <label>Defense: </label>
                <input type="text" value={form.defense} onChange={handleChange} name="defense"/>
                <span>{error.defense}</span>
            </div>
            <div>
                <label>Speed: </label>
                <input type="text" value={form.speed} onChange={handleChange} name="speed"/>
                <span>{error.speed}</span>
            </div>
            <div>
                <label>Height: </label>
                <input type="text" value={form.height} onChange={handleChange} name="height"/>
                <span>{error.height}</span>
            </div>
            <div>
                <label>Weight: </label>
                <input type="text" value={form.weight} onChange={handleChange} name="weight"/>
                <span>{error.weight}</span>
            </div>
            <div>
                {selectType("type1")}
                {selectType("type2")}
                <span>{error.type1}</span>
            </div>
            {Object.keys(error).length==0 ? <button>Create Pokemon</button>:null}
        <Link to="/home"><button>Return</button></Link>
        </form>
        </div>
    )
 }
 export default Create;