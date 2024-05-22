import { createContext,useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    let [isCartEmpty, setIsCartEmpty] = useState(true);

    const addToCart = (itemId) => {
        if(cartItems[itemId]){
            setCartItems(prev => ({...prev, [itemId]: prev[itemId]+1}))
        }else{
            setCartItems(prev => ({...prev, [itemId]: 1}))
        }
        setIsCartEmpty(false)
    }

    const removeFromCart = (itemId) => {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId]-1}))
    }

    const removeCartItem = (itemId) => {
        setCartItems(prev => ({...prev, [itemId]: 0}))
    }

    const getTotalAmount = () => {
        let totalAmout = 0;

        for (let cartItem in cartItems){
            if (cartItems[cartItem]>0){
                let itemInfo = food_list.find((foodItem) => foodItem._id === cartItem);
                totalAmout += itemInfo.price * cartItems[cartItem]
            }
        }
        return totalAmout
    }



    const contextValue = {
        isCartEmpty,
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        removeCartItem,
        getTotalAmount
    }
    console.log(cartItems)

    return(
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider