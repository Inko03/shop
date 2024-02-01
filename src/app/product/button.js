import { useCart } from "../contexts/CartContext"
import style from "./product.module.css"

export default function Button({product}){
    const {CartDispatch} = useCart();
    return(
        <button id={style.button} onClick={()=>CartDispatch({type:"ADD",payload:product})}>Buy</button>
    )
}