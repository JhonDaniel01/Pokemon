import axios from "axios";
import { useState } from "react";


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
        if (/^[0-9]$|^[1-9][0-9]$|^(100)$/.test(form.height))console.log("Height correcto")
        else console.log("Height incorrecto")
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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type="text" value={form.name} onChange={handleChange} name="name"/>
                <span></span>
            </div>
            <div>
                <label>Image: </label>
                <input type="text" value={form.image} onChange={handleChange} name="image"/>
            </div>
            <div>
                <label>life: </label>
                <input type="text" value={form.live} onChange={handleChange} name="live"/>
            </div>
            <div>
                <label>Attack: </label>
                <input type="text" value={form.attack} onChange={handleChange} name="attack"/>
            </div>
            <div>
                <label>Defense: </label>
                <input type="text" value={form.defense} onChange={handleChange} name="defense"/>
            </div>
            <div>
                <label>Speed: </label>
                <input type="text" value={form.speed} onChange={handleChange} name="speed"/>
            </div>
            <div>
                <label>Height: </label>
                <input type="text" value={form.height} onChange={handleChange} name="height"/>
            </div>
            <div>
                <label>Weight: </label>
                <input type="text" value={form.weight} onChange={handleChange} name="weight"/>
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
    )
 }
 export default Create;