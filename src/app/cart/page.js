'use client'
import style from "./page.module.css";
import { CartProvider } from "../contexts/CartContext";
import ShowCart from "../components/showcart"
export default function Page(){
    return(
        <CartProvider>
                    <div id={style.cart}>
                        <h1>Koszyk</h1>
                        <ShowCart/>
                    </div>
        </CartProvider>
    )
}