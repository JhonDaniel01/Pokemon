import "./navbar.styles.css"
const Navbar=({handleChange,handleSubmit})=>{
    return(
        <div className="seachBox">
            <form onChange={handleChange}>
                <input placeholder="Search" type="search"></input>
                <button type="submit" onClick={handleSubmit}>Search</button>
            </form>
        </div>
    )
 }
 export default Navbar;