"use client"
import { CartReducer } from "../reducer/reducer";
import { createContext,useContext,useEffect,useReducer,useState} from "react";
const CartContext = createContext();

export const CartProvider = ({children})=>{
            const [loading, setLoading] = useState(true);
            const [CartState,CartDispatch] = useReducer(CartReducer,{"Cart":[],"Like":[]})
         

            useEffect(()=>{
                const storedCart = JSON.parse(sessionStorage.getItem("Cart"))
                const storedLike = JSON.parse(sessionStorage.getItem("Like"))
                if(storedCart||storedLike){
                    CartDispatch({type:"SET_CART",payload:storedCart})
                    CartDispatch({type:"SET_LIKE",payload:storedLike})
                    setLoading(false)
                }else{
                    sessionStorage.setItem('Cart',JSON.stringify(CartState.Cart))
                    sessionStorage.setItem('Like',JSON.stringify(CartState.Like))
                }
             },[])

                 useEffect(()=>{
                    if(!loading){
                        sessionStorage.setItem('Cart',JSON.stringify(CartState.Cart))
                        sessionStorage.setItem('Like',JSON.stringify(CartState.Like))
                    }
                 },[CartState.Cart,CartState.Like])
                 return(
                     <CartContext.Provider value={{CartDispatch,CartState}}>
                         {children}
                     </CartContext.Provider>
                 )
}
export const useCart= () =>{
    return useContext(CartContext);
}