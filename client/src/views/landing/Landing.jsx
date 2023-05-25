import {Link} from 'react-router-dom'
import "./landing.styles.css"
const Landing=()=>{
    return(
        <div className="container">
            <Link to="/home"><button>Start</button></Link>
        </div>
    )
 }
 export default Landing;