export const handleChange=(event)=>{
    setSearch(event.target.value)
}

export const handleSubmit=(event)=>{
    event.preventDefault()
    dispatch(getByName(search))
}
export const pagHandler=(event)=>{
    setPag(event.target.name)
}
export const handleChangeOrder=(event)=>{
    const order=event.target.value
    dispatch(getPokemons(order))
}

export const selectFilterType=()=>{
    return(
        <form action="#">
        <label >Filter by type: </label>
        <select name="filterType" id="filterType" onChange={handleChangeType}>
            <option value="noFilterType" >--Select Type--</option>
            {allTypes.map(type=> <option value={type.name} >{type.name}</option>)}
        </select>
        </form>
    )
}
export const handleChangeType=(event)=>{
    console.log(event);
    const type=event.target.value;
    dispatch(getPokemons(type,type))
}

export const selectFiterOrigin=()=>{
    return(
        <div>
        <form action="#">
        <label >filter by data source: </label>
        <select name="filterOrigin" id="filtOrigin" onChange={handleChangeFilOrder}>
            <option >--Selec Origin--</option>
            <option value="DataBase" >Data Base</option>
            <option value="Api" >Api</option>
        </select>
        </form>
        </div>
        
    )
}
export const handleChangeFilOrder=(event)=>{
    filterOrigin(event.target.value)
}
export const filterOrigin=(origin)=>{
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