"use client"
import Slider from '../components/slider'
import Product from '../components/product'
import style from './page.module.css'
import { CartProvider } from '../contexts/CartContext'
import Menu from '../components/shopmenu'
import products from "../components/products"
export default function Shop(){
    console.log(products)
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