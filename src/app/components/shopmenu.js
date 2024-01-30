import { useCart } from "../contexts/CartContext" 
import style from '../components/shopmenu.module.css'
export default function Shopmenu(){
    const {cart} = useCart();
    console.log(cart.length)
    return(
        <div id={style.menu}>
            <span id={style.titleMenu}>PULSO</span>
            <div id={style.menuicon}>
                <div id={style.divicon}>
                    <div>
                    <img src='shopicon.png' id={style.icon}/>
                        <div id={style.popcarts}>
                            {cart.map(element=>(
                                <div className={style.popcart}>
                                    <img className={style.popimg} src={element.img}/>
                                    <span className={style.textpop}>{element.name}</span>
                                    <span className={style.textpop}>{`${element.price}.00zł`}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {cart.length>0?<span id={style.popup}>{cart.length}</span>:null}
            </div>
        </div>
    )
}