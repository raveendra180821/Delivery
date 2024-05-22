import React, {useContext} from "react";
import { assets } from "../../assets/assets";
import './foodItem.css'
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({item}) => {
    const {_id, name, image, description, price} = item

    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

    return(
        <div className="food-item">
            <div className="food-item-img-container">
                <img src={image} alt="food_item" className="food-item-img"/>
                {!cartItems[_id]
                    ? <img onClick={() => addToCart(_id)} src={assets.add_icon_white} alt="add-to-cart" className="add-to-cart" />
                    : <div className="add-remove-items">
                        <img onClick={() => removeFromCart(_id)} src={assets.remove_icon_red} alt="remove-icon" />
                        <p>{cartItems[_id]}</p>
                        <img onClick= {() => addToCart(_id)} src={assets.add_icon_green} alt="add-icon" />
                      </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p className="food-item-name">{name}</p>
                    <img src={assets.rating_starts} alt="rating" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="price">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem