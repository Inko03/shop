"use client"
import Slider from '../components/slider'
import Product from '../components/product'
import style from './page.module.css'
import { CartProvider } from '../contexts/CartContext'
import Menu from '../components/shopmenu'
import products from "../components/products"
import { useState,useEffect } from 'react'
export default function Shop(){
    const [dane,setDane]= useState(products)
   const show = (dane) => {
    let one = document.querySelectorAll(`.${style.ullist}`)
    one[dane].classList.toggle(`${style.show}`)
   }
   const Ascending = () => {
    const price = products.sort((a,b)=>b.price-a.price)
    setDane([...price])
   }
   const Descending = () => {
    const price = products.sort((a,b)=>a.price-b.price)
    setDane([...price])
   }

   const categorySelect = (e) => {
    let cat = products.filter(element=>element.category===`${e.target.textContent}`)
    setDane([...cat])
   }    
   const price = (e) => {
    let fild  = document.querySelector(`.${style.button}`)
    fild.textContent=`${e.target.textContent}`
    if(e.target.textContent==='Ascending'){Ascending()}
    if(e.target.textContent==='Descending'){Descending()}
    document.querySelector(`.${style.ullist}`).classList.remove(`${style.show}`)
}
const category = (e) => {
    let fild  = document.querySelectorAll(`.${style.button}`)
    fild[1].textContent=`${e.target.textContent}`
    categorySelect(e)
    document.querySelectorAll(`.${style.ullist}`)[1].classList.remove(`${style.show}`)
}
useEffect(() => {
    Ascending;
    Descending;
    categorySelect;
}, [dane]);
    return(
        <CartProvider>
                    <div id={style.page}>
                        <Menu/>
                        <Slider/>
                        <div id={style.oferts}>
                            <div id={style.select}>
                                <div className={style.divbutton}><button onClick={()=>show(0)} className={style.button}>Descending</button><span className={style.topicleft}>Price</span>
                                    <ul className={`${style.ullist}`} onClick={(e)=>price(e)}>
                                        <li className={style.lilist}>Ascending</li>
                                        <li className={style.lilist}>Descending</li>
                                    </ul>
                                </div>
                                <div className={style.divbutton}><button onClick={()=>show(1)} className={style.button}>Sneakers</button><span className={style.topicright}>Category</span>
                                    <ul className={`${style.ullist}`} onClick={(e)=>category(e)}>
                                        <li className={style.lilist}>Botki</li>
                                        <li className={style.lilist}>Sneakers</li>
                                    </ul>
                                </div>
                            </div>
                            <div id={style.carts}>
                                {dane.map(dana=>(
                                    <Product key={dana.id} product={dana}/>
                                ))}
                            </div>
                        </div>
                    </div>
        </CartProvider>
    )
}