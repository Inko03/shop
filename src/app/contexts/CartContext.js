"use client"
import { CartReducer } from "../reducer/reducer";
import { createContext,useContext,useEffect,useReducer,useState} from "react";
const CartContext = createContext();

export const CartProvider = ({children})=>{
            const [loading, setLoading] = useState(true);
            const [CartState,CartDispatch] = useReducer(CartReducer,{"Cart":[]})
         

            useEffect(()=>{
                const storedData = JSON.parse(sessionStorage.getItem("Cart"))
                CartDispatch({type:"SET_CART",payload:storedData})
                setLoading(false)
                console.log(storedData)
             },[])

                 useEffect(()=>{
                    if(!loading){
                        sessionStorage.setItem('Cart',JSON.stringify(CartState.Cart))
                    }
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