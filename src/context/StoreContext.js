import { createContext,useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId) => {
        if(cartItems[itemId]){
            setCartItems(prev => ({...prev, [itemId]: prev[itemId]+1}))
        }else{
            setCartItems(prev => ({...prev, [itemId]: 1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems(prev => ({...prev, [itemId]: prev[itemId]-1}))
    }

    const removeCartItem = (itemId) => {
        setCartItems(() => {
            delete cartItems[itemId]
        })
    }

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        removeCartItem
    }
    console.log(cartItems)

    return(
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider