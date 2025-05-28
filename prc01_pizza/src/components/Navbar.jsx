import { useState } from "react"
import Logo from "../assets/pizzaLogo.png"
import { Link } from "react-router-dom"
import RecorderIcon from "@mui/icons-material/Reorder"
import "../styles/Navbar.css"

const Navbar = () => {
    // 피자아이콘-> 화면 좁아지면 햄버거버튼 생김-> 링크
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

    return (
        <div className="navbar">
            <div className="leftside" id={openLinks ? "open" : "close"}>
                <img src={Logo} />
                <div className="hiddenLinks">
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={toggleNavbar}>
                    <RecorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar;