import style from "./showcart.module.css"
import { useCart } from "../contexts/CartContext"
export default function Showcart(){
    const {CartState,CartDispatch}=useCart();
    return(
        <>
        {CartState.Cart.length>0?CartState.Cart.map((element)=>(
                    <div id={style.showcart} key={element.id}>
                        <img className={style.cartimg} src={`${element.img}`}/>
                        <div className={style.cartstyle}><span className={style.titlespan}>Price</span> <span>{`${element.price}.00zł`}</span></div>
                        <div className={style.cartstyle}><span className={style.titlespan}>Nr.kat</span> <span>{element.sernum}</span></div>
                        <div className={style.cartstyle}><span className={style.titlespan}>Quantity</span> <span>1</span></div>
                        <div className={style.cartstyle}><span className={style.titlespan}>Size</span> <span>{element.size}</span></div>
                        <button className={style.button} onClick={()=>CartDispatch({type:"REMOVE",payload:element.id})}>Delet</button>
                    </div>
        )):<div>Ups.. Nothing here :v</div>}
        </>
    )
}