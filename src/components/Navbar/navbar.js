import { useContext, useState } from "react"
import "./navbar.css"
import { assets } from "../../assets/assets"
import { Link } from "react-router-dom"
import { StoreContext } from "../../context/StoreContext"

const Navbar = ({setShowLogin}) => {

    const {getTotalAmount} = useContext(StoreContext)
    
    const [menuItem, setMenuItem] = useState("Home")
    const [showMenu, setShowMenu] = useState(true)

    const onclickMenuItem = (event) => {
        const activeMenuItem = event.target.textContent;
        setMenuItem(activeMenuItem);
        
    }

    

    return(
        <div className="navbar">
            <Link to='/'><img onClick={() => setShowMenu(true)} src={assets.Food_delivery_logo} alt="logo" className="logo"/></Link>
            {showMenu && 
                (
                    <ul className="menu">
                        <Link to="/" onClick={onclickMenuItem} className={menuItem==="Home"?"active menu-item": "menu-item"}>Home</Link>
                        <a href="#exploreMenu" onClick={onclickMenuItem} className={menuItem==="Menu"?"active menu-item": "menu-item"}>Menu</a>
                        <a href="#appDownload" onClick={onclickMenuItem} className={menuItem==="Mobile-App"?"active menu-item": "menu-item"}>Mobile-App</a>
                        <a href="#footer" onClick={onclickMenuItem} className={menuItem==="Contact Us"?"active menu-item": "menu-item"}>Contact Us</a>
                    </ul>
                )
            }
            <div className="navbar-right">
                <img src={assets.search_icon} className="search-icon" alt="search-icon" />
                <div className="navbar-cart">
                    <Link to='/cart'><img onClick={() => setShowMenu(false)} src={assets.basket_icon} class="cart-icon" alt="cart" /></Link>
                    <div className={getTotalAmount() === 0 ? "" : "cart-status-dot"}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar