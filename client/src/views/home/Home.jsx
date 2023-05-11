import Cards from "../../components/cards/Cards";
import Navbar from "../../components/navbar/Navbar";
import "./home.styles.css"
const Home=()=>{
    return(
        <div className="homeContainer">
            <h2>Home</h2>
            <Navbar></Navbar>
            <Cards></Cards>
        </div>
    )
 }
 export default Home;