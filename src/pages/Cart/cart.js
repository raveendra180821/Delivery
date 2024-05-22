import { useContext } from "react"
import "./cart.css"
import { StoreContext } from "../../context/StoreContext"
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const {food_list,cartItems,removeCartItem,getTotalAmount} = useContext(StoreContext);

    const navigate = useNavigate();

    return(
        <div className="cart">

        {getTotalAmount() !== 0 
            ?<>
                <div className="cart-items">
                    <p>Item</p>
                    <p>Name</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <div>
                    {food_list.map((item) =>{
                        if (cartItems[item._id]>0){
                            return(
                                <div>
                                    <div className="cart-item">
                                        <img src={item.image} alt="item-img" />
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>${item.price*cartItems[item._id]}</p>
                                        <IoIosRemoveCircleOutline onClick={() => removeCartItem(item._id)} />
                                    </div>
                                    <hr/>
                                </div>
                            )
                        }return <></>
                    })}
                </div>
                
                <div className="cart-bottom">
                    <div className="cart-total">
                        <h1>Cart Totals</h1>
                        <div>
                            <div className="cart-total-details">
                                <p>Subtotal</p>
                                <p>${getTotalAmount()}</p>
                            </div>
                            <hr/>
                            <div className="cart-total-details">
                                <p>Delivery Fee</p>
                                <p>${2}</p>
                            </div>
                            <hr/>
                            <div className="cart-total-details">
                                <b>Total</b>
                                <b>${getTotalAmount()+ 2}</b>
                            </div>
                        </div>
                        <button onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="cart-promocode">
                        <p>If you have a promo code, Enter it here</p>
                        <div className="cart-promocode-input">
                            <input type="text" disabled />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </>
            :(
                <div className="empty-cart">
                    <img src={assets.empty_cart} alt="empty_cart" />
                    <p>Cart is empty, add items to cart</p>
                </div>
            )}
        </div>
    )
}

export default Cart