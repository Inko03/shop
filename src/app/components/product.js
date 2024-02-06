"use client"
import style from './product.module.css'
import { useCart } from '../contexts/CartContext'
import Link from 'next/link';
export default function Product({product}){
    const {CartDispatch}=useCart();
    const liked = (e)=>{
        e.target.style="transform:rotate(360deg)"
        e.target.src="/starliked.png"
    }
    return(
        <div className={style.cart} id={product.id}>
        <img src={product.img} className={style.imgofert}/>
        <img className={style.star} onClick={(e)=>liked(e)} src='star.png'/>
        <div className={style.desc}>
            <div className={style.info}>
                <span className={style.infofont}>{product.name}</span>
                <span className={style.infofont}>{`Nr.${product.sernum}`}</span>
                <span className={style.infofont}>{`Rozmiary:${product.size.map(size=>size)}`}</span>
            </div>
            <div><span className={style.infoprice}>{`${product.price}.00zł`}</span></div>
        </div>
        <div className={style.buttons}>
            <Link className={style.link} href={`/product/${product.id}`}><button className={`${style.cartbutton} ${style.fullheight}`}>More...</button></Link>
            <button className={`${style.cartbutton} ${style.black}`} onClick={()=>CartDispatch({type:"ADD",payload:product})}>Buy</button>
        </div>
    </div>
    )
}