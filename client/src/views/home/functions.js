export const selectFilterType=(handleChangeType,allTypes)=>{
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
export const selecOrder=(handleChangeOrder)=>{
    return (
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
    )
}

export  const selectFiterOrigin=(handleChangeFilOrder)=>{
    return(
        <div>
        <form action="#">
        <label >filter by data source: </label>
        <select name="filterOrigin" id="filtOrigin" onChange={handleChangeFilOrder}>
            <option value="all">--Selec Origin--</option>
            <option value="DataBase" >Data Base</option>
            <option value="Api" >Api</option>
        </select>
        </form>
        </div> 
    )
}