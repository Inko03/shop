
import { createContext,useContext,useEffect,useState } from "react";
const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [cart,setCart]= useState([])

    useEffect(()=>{
        if(sessionStorage.getItem('Cart')){
            const dane = sessionStorage.getItem('Cart')
            setCart(JSON.parse(dane))
        }
    },[])
    const addToCart = (product) =>{
        setCart((prevCart)=>{
            const newCart = [...prevCart,product]
            sessionStorage.setItem("Cart",JSON.stringify(newCart))
            return newCart
        })
    }
    return(
        <CartContext.Provider value={{cart,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart= () =>{
    return useContext(CartContext);
}