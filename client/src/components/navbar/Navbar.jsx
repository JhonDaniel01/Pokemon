import {Link} from 'react-router-dom'
import "./navbar.styles.css"

const Navbar=({handleChange,handleSubmit})=>{
    return(
        <div className="seachBox">
            <form onChange={handleChange}>
                <input placeholder="Search" type="search"></input>
                <button type="submit" onClick={handleSubmit}>Search</button>
            </form>
            <div className='bContainer'>
            <Link to="/home"><button>Home</button></Link>
            <Link to="/create"><button>Create</button></Link>
            </div>
        </div>
    )
 }
 export default Navbar;