import style from "./showcart.module.css"
import { useCart } from "../contexts/CartContext"
export default function Showcart(){
    const {CartState,CartDispatch}=useCart();
    return(
        <>
        {CartState.Cart.length>0?CartState.Cart.map((element)=>(
                    <div id={style.showcart} key={element.id}>
                        <img className={style.cartimg} src={`${element.img}`}/>
                        <div className={style.infoselect}>
                            <div className={style.cartstyle}><span className={style.titlespan}>Price</span> <span className={style.description}>{`${element.price}.00zł`}</span></div>
                            <div className={style.cartstyle}><span className={style.titlespan}>Nr.kat</span> <span className={style.description}>{element.sernum}</span></div>
                            <div className={style.cartstyle}><span className={style.titlespan}>Quantity</span>
                                <div>
                                 <button className={style.buttonsplus} onClick={()=>CartDispatch({type:"MINUS",payload:element.id})}>-</button>
                                 <span className={style.description}>{element.quantity}</span>
                                 <button  className={style.buttonsplus} onClick={()=>CartDispatch({type:"PLUS",payload:element.id})}>+</button>
                                </div>
                            </div>
                            <div className={style.cartstyle}><span className={style.titlespan}>Size</span> <span className={style.description}>{element.size.length>2?element.size[0]:element.size}</span></div>
                        </div>
                        <button className={style.button} onClick={()=>CartDispatch({type:"REMOVE",payload:element.id})}>Delet</button>
                    </div>
        )):<div>Ups.. Nothing here :v</div>}
        </>
    )
}