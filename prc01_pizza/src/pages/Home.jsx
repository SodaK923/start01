import {Link} from "react-router-dom"
import BannerImage from "../assets/pizza.jpeg"
import "../styles/Home.css"

const Home=()=>{
    return(
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>

        </div>
    );
}
export default Home;