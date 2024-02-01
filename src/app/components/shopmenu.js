import { useCart } from "../contexts/CartContext" 
import style from '../components/shopmenu.module.css'
import { CartProvider } from "../contexts/CartContext";
import Link from "next/link";
export default function Shopmenu(){
    const {CartState} = useCart();
    return(
        <CartProvider>
                    <div id={style.menu}>
            <span id={style.titleMenu}>PULSO</span>
            <div id={style.menuicon}>
                <div id={style.divicon}>
                    <div>
                    <img src='shopicon.png' id={style.icon}/>
                        <Link href='/cart'>
                        <div id={style.popcarts}>
                            {
                                CartState.Cart>0?null:CartState.Cart.map(element=>(
                                    <div className={style.popcart}>
                                        <img className={style.popimg} src={element.img}/>
                                        <span className={style.textpop}>{element.name}</span>
                                        <span className={style.textpop}>{`${element.price}.00zł`}</span>
                                    </div>
                                ))
                            }
                        </div>
                        </Link>
                    </div>
                </div>
                {CartState.Cart.length>0?<span id={style.popup}>{CartState.Cart.length}</span>:null}
            </div>
        </div>
        </CartProvider>
    )
}