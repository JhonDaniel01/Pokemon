import axios from "axios";
import { useState } from "react";
import {Link} from 'react-router-dom'

 const Create=()=>{
    //name,height,weight,image,live, attack,defense, speed, types
    const [form,setForm]=useState({
        name:"",height:"",weight:"",image:"",live:"", attack:"",defense:"", speed:"", types1:"",types2:""  
    })
    const [error,setError]=useState({
        name:"",height:"",weight:"",image:"",live:"", attack:"",defense:"", speed:"", types1:"",types2:""  
    })
    const handleChange=(event)=>{
        const property=event.target.name
        const value=event.target.value

        validate({...form,[property]:value})
        setForm({...form,[property]:value})
    }
    const validate=(form)=>{
        console.log(form);
        if (/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(form.image)){
        setError((prevState) => ({ ...prevState, image: "" }))}
        else setError((prevState) => ({ ...prevState, image: "Invalid Image" }))

        if (/^[0-9]$|^[1-9][0-9]$|^(100)$/.test(form.live))setError((prevState) => ({ ...prevState, live: "Invalid live" }))
        else setError((prevState) => ({ ...prevState, live: "Invalid live" }))

        // if (/^[0-9]$|^[1-9][0-9]$|^(150)$/.test(form.attack))setError({...error,attack: ""})
        // else setError({...error,attack: "Invalid attack"})

        // if (/^[0-9]$|^[1-9][0-9]$|^(100)$/.test(form.defense))setError({...error,defense: ""})
        // else setError({...error,defense: "Invalid defense"})
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const newPokemon={
            name: form.name,
            height:form.height,
            weight: form.weight,
            image: form.image,
            live: form.live, 
            attack:form.attack,
            defense:form.defense, 
            speed:form.speed, 
            types:[form.types1,form.types2]
        }
        axios.post("http://localhost:3001/pokemons",newPokemon)
        .then(res=>console.log(res)).catch(err=>console.log(err))

    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type="text" value={form.name} onChange={handleChange} name="name"/>
                <span>{error.name}</span>
            </div>
            <div>
                <label>Image: </label>
                <input type="text" value={form.image} onChange={handleChange} name="image"/>
                <span>{error.image}</span>
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
                <label>Type 1: </label>
                <input type="text" value={form.types1} onChange={handleChange} name="types1"/>
            </div>
            <div>
                <label>Type 2: </label>
                <input type="text" value={form.types2} onChange={handleChange} name="types2"/>
            </div>
            <button>Create Pokemon</button>
        </form>
        <Link to="/home"><button>Return</button></Link>
        </div>
    )
 }
 export default Create;