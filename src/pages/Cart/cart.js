import { useContext } from "react"
import "./cart.css"
import { StoreContext } from "../../context/StoreContext"
import { IoIosRemoveCircleOutline } from "react-icons/io";

const Cart = () => {

    const {food_list,cartItems,removeFromCart} = useContext(StoreContext)

    return(
        <div className="cart">

            <div className="cart-items">
                <p>Item</p>
                <p>Item Name</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total Price</p>
                <p>Remove</p>
            </div>
            {food_list.map((item) =>{
                for (let cartItem in cartItems){
                    if (cartItems[cartItem]>0){
                        return(
                            <div>
                                <div className="cart-item">
                                    <img src={item.image} alt="item-img" />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[cartItem]}</p>
                                    <p>${item.price*cartItems[cartItem]}</p>
                                    <IoIosRemoveCircleOutline onClick={() => removeFromCart(item._id)} />
                                </div>
                                <hr/>
                            </div>
                        )
                    }     
                }
                return <></>
            })}
        </div>
    )
}

export default Cart