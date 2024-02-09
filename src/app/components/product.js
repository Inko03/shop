"use client"
import style from './product.module.css'
import { useCart } from '../contexts/CartContext'
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function Product({product}){
    const {CartDispatch,CartState}=useCart();
    const [like,setLike] = useState(0);
    const setLocal = (dane)=> {
        localStorage.setItem(JSON.stringify(dane))
    }
    const liked = (e)=>{
        if(e.target.name==="true"){
            product.like=false;
            e.target.style="transform:rotate(-360deg)"
            e.target.src="/star.png"
            CartDispatch({type:"UNLIKE",payload:e.target.parentElement.id})
        }else{
            product.like=true;
            e.target.style="transform:rotate(360deg)"
            e.target.src="/starliked.png"
            let id = e.target.parentElement.id
            let dane = {id:id,like:true}
            CartDispatch({type:"LIKE",payload:dane})
        }
    }
    return(
        <div className={style.cart} id={product.id} key={product.id}>
        <img src={product.img} className={style.imgofert}/>
        {
          CartState.Like.some(element=>element.id.toString() === product.id.toString())?<img name='true' className={style.star} onClick={(e)=>liked(e)} src='starliked.png'/>:<img className={style.star} onClick={(e)=>liked(e)} src='star.png'/>  
        }
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