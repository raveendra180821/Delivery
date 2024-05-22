import React from "react";
import { menu_list } from "../../assets/assets";
import './exploreMenu.css'

const ExploreMenu = (props) => {
    
    const {category, setCategory} = props

    return(
        <div className="explore-menu" id="exploreMenu">
            <h1>Explore Our Menu</h1>
            <p className="menu-description">Dive into our menu, where a world of flavors awaits. From savory classics to exotic specialties, find your perfect dish.</p>
            <div className="menu-list">
                {menu_list.map((item, index) => {
                    return(
                        <div key={index} className="menu-list-item" onClick={()=>setCategory(prevSate => prevSate === item.menu_name? "All": item.menu_name)}>
                            <img src={item.menu_image} alt="menu-img" className={category === item.menu_name ? "active-menu": ""}/>
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu