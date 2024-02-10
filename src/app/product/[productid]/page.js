'use client'
import style from "./product.module.css"
import Menu from '../../components/shopmenu'
import Button from "./button"
import { CartProvider } from "../../contexts/CartContext"
import {useState } from "react"
import products from "../../components/products"
export default function Products({params}){
    const [size, setSize] = useState()
    const Selected = (e)=>{
        const allNodes = document.querySelectorAll(`.${style.size}`)
        allNodes.forEach(element => {
            if(e.target===element){
                e.target.classList.add(`${style.active}`)
            }else{
                element.classList.remove(`${style.active}`)
            }
        });
        setSize(e.target.textContent)
    }
    let element = products.filter(element=>element.id.toString()===params.productid.toString())

    return(
        <CartProvider>
            <Menu/>
            {element.map((element,key)=>(
                            <div id={style.product}>
                            <div id={style.divtitle}>
                                <h1 id={style.title} key={key}>{element.name}</h1>
                                <span id={style.numer}>{`Nr.${element.sernum}`}</span>
                            </div>
                            <div id={style.mobile}>
                            <img id={style.img} src={`/${element.img}`}/>
                                <div id={style.sideBar}>
                                    <div id={style.desktop}>
                                    <h1 id={style.title} key={key}>{element.name}</h1>
                                    <span id={style.numer}>{`Nr.${element.sernum}`}</span>
                                    </div>
                                    <div id={style.divprice}> <span id={style.price}>{`${element.price}.00zł`}</span></div>
                                    <div id={style.sizes} onClick={(e)=>{Selected(e)}}>
                                        {element.size.map((nr,key)=>(
                                            <div className={style.size} key={key}>{nr}</div>
                                         ))}
                                </div>
                                <Button product={{id:element.id,img:`${element.img}`,name:element.sernum,price:element.price,size:size,sernum:element.sernum,quantity:1}}/>
                                <div id={style.divdesc}> <span id={style.desc}>Botki dla kobiet to eleganckie buty o długości cholewki zakrywającej kostkę, zapewniające stylową i komfortową ochronę przed zimową aurą. Stanowią doskonałe połączenie modnego designu i praktyczności, idealne zarówno do codziennych stylizacji, jak i bardziej formalnych okazji.</span></div>
                                </div>
                            </div>
                            <img className={style.img}  src={`/${element.img}`}/>
                            <img className={style.img} src={`/${element.img}`}/>
                    </div>

            ))}
        </CartProvider>
    )
}