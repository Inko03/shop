'use client'
import style from "./product.module.css"
import Menu from '../components/shopmenu'
import Button from "./button"
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
                    <img id={style.img} src='but9.jpg'/>
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
                        <Button product={{id:1,img:"but9.jpg",name:"Laura",price:300,size:36}}/>
                    <div id={style.divdesc}> <span id={style.desc}>Botki dla kobiet to eleganckie buty o długości cholewki zakrywającej kostkę, zapewniające stylową i komfortową ochronę przed zimową aurą. Stanowią doskonałe połączenie modnego designu i praktyczności, idealne zarówno do codziennych stylizacji, jak i bardziej formalnych okazji.</span></div>
                    <img id={style.img} src='but9.jpg'/>
                    <img id={style.img} src='but9.jpg'/>
            </div>
        </CartProvider>
    )
}