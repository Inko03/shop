'use client'
import style from "./product.module.css"
import Menu from '../components/shopmenu'
import { CartProvider } from "../contexts/CartContext"
export default function Products(){
    return(
        <CartProvider>
            <Menu/>
                <div id={style.product}>
                    <div id={style.divtitle}>
                        <h1 id={style.title}>Laura</h1>
                        <span id={style.numer}>Nr.123a12</span>
                    </div>
                    <img id={style.img} src='but1.jpg'/>
                    <div id={style.divprice}> <span id={style.price}>300.00zł</span></div>
                    <div id={style.sizes}>
                        <div className={style.size}>36</div>
                        <div className={style.size}>36</div>
                        <div className={style.size}>36</div>
                        <div className={style.size}>36</div>
                        <div className={style.size}>36</div>
                        <div className={style.size}>36</div>
                        <div className={style.size}>36</div>
                    </div>
                    <button id={style.button}>Buy</button>
            </div>
        </CartProvider>
    )
}