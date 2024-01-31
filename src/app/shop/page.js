"use client"
import Slider from '../components/slider'
import Product from '../components/product'
import style from './page.module.css'
import { CartProvider } from '../contexts/CartContext'
import Menu from '../components/shopmenu'
export default function Shop(){
    const products = [
        {
            id:1,
            img:"but8.jpg",
            name:"Aurelia",
            sernum:"123asd1",
            size:[36,37,38,39],
            price:230.00
        },
        {
            id:2,
            img:"but9.jpg",
            name:"Martina",
            sernum:"123asd1",
            size:[36,37,38,39],
            price:400.00
        },        {
            id:3,
            img:"but9.jpg",
            name:"Laura",
            sernum:"123asd1",
            size:[36,37,38,39],
            price:120.00
        },
        {
            id:4,
            img:"but9.jpg",
            name:"Amelia",
            sernum:"123asd1",
            size:[36,37,38,39],
            price:500.00
        }
     ]
    return(
        <CartProvider>
                    <div id={style.page}>
                        <Menu/>
                        <Slider/>
                        <div id={style.oferts}>
                            <div id={style.select}>
                                <div className={style.divbutton}><button className={style.button}>Descending</button><span className={style.topicleft}>Price</span></div>
                                <div className={style.divbutton}><button className={style.button}>Sneakers</button><span className={style.topicright}>Category</span></div>
                            </div>
                            <div id={style.carts}>
                                {products.map(product=>(
                                    <Product key={product.id} product={product}/>
                                ))}
                            </div>
                        </div>
                    </div>
        </CartProvider>
    )
}