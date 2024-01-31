import { useCart } from "../contexts/CartContext"
import style from "./product.module.css"

export default function Button({product}){
    const {addToCart} = useCart();
    const handleAddToCart=()=>{
        addToCart(product)
    }
    return(
        <button id={style.button} onClick={handleAddToCart}>Buy</button>
    )
}