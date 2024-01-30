"use client"
import { useState } from 'react'
import style from './product.module.css'
import { useCart } from '../contexts/CartContext'
import Link from 'next/link';
export default function Product({product}){
    const {addToCart}=useCart();
    const handleAddToCart= ()=>{
        addToCart(product)
    }
    return(
        <div className={style.cart} id={product.id}>
        <img src={product.img} className={style.imgofert}/>
        <div className={style.desc}>
            <div className={style.info}>
                <span className={style.infofont}>{product.name}</span>
                <span className={style.infofont}>{`Nr.${product.sernum}`}</span>
                <span className={style.infofont}>{`Rozmiary:${product.size.map(size=>size)}`}</span>
            </div>
            <div><span className={style.infoprice}>{`${product.price}.00zł`}</span></div>
        </div>
        <div className={style.buttons}>
            <Link className={style.link} href={'/product'}><button className={`${style.cartbutton} ${style.fullheight}`}>More...</button></Link>
            <button className={`${style.cartbutton} ${style.black}`} onClick={handleAddToCart}>Buy</button>
        </div>
    </div>
    )
}