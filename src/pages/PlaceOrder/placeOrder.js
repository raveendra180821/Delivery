import React, { useContext } from "react"
import "./placeOrder.css"
import { useNavigate } from "react-router-dom"
import { StoreContext } from "../../context/StoreContext"

const PlaceOrder = () => {

    const {getTotalAmount} = useContext(StoreContext);

    const navigate = useNavigate();

    return(
        <form className="place-order">
            <div className="place-order-left">
                <h1>Delivery Information</h1>
                <div className="multi-fields">
                    <input type="text" placeholder="First Name" required/>
                    <input type="text" placeholder="Last Name" required/>
                </div>
                <input type="email" placeholder="Enter Email" required/>
                <input type="text" placeholder="Street" />
                <div className="multi-fields">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                </div>
                <div className="multi-fields">
                    <input type="number" placeholder="Zipcode" />
                    <input type="text" placeholder="Country" />
                </div>
                <input className="mobile" type="number" placeholder="Mobile" />
            </div>

            <div className="place-order-right">
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
                    <button onClick={() => navigate()}>PROCEED TO PAY</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder
