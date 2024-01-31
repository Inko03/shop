import style from "./showcart.module.css"
import { useCart } from "../contexts/CartContext"
export default function Showcart(){
    const {cart}=useCart();
    return(
        <>
        {cart.map((element)=>(
                    <div id={style.showcart} key={element.id}>
                        <img className={style.cartimg} src={`${element.img}`}/>
                        <span>{`${element.price}.00zł`}</span>
                        <span>{element.sernum}</span>
                        <button className={style.button}>Delet</button>
                    </div>
        ))}
        </>
    )
}