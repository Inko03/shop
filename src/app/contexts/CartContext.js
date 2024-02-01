import { CartReducer } from "../reducer/reducer";
import { createContext,useContext,useEffect,useReducer } from "react";
const CartContext = createContext();

export const CartProvider = ({children})=>{
    const cart={
        Cart:JSON.parse(sessionStorage.getItem("Cart")) || []
    }

    const [CartState,CartDispatch] = useReducer(CartReducer,cart)

    useEffect(()=>{
        sessionStorage.setItem('Cart',JSON.stringify(CartState.Cart))
    },[CartState.Cart])

    return(
        <CartContext.Provider value={{CartDispatch,CartState}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart= () =>{
    return useContext(CartContext);
}