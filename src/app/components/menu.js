'use client'
import { useEffect, useState } from 'react'
import style from'./menu.module.css'

export default function Maenu(){
    const [photostate, setPhotostate]=useState(0)
    const show = (e)=>{
        const inmenu = document.querySelectorAll('.menu_li__dFTTU')
        const actualphoto = document.querySelector('#show_photoContainer__pfjv2')
        const actualtext = document.querySelector('#show_textinwraper__WaaRI')
        inmenu.forEach((element)=>{
            if(element===e.target){
                e.target.classList.add(`${style.active}`);
                actualphoto.className=`${e.target.id}`;
                actualtext.className=`${e.target.id}text`
            }else{
                element.classList.remove(`${style.active}`)
            }
        })
      }
      const biger = ()=>{
        const x = document.querySelector('#cursor')
        x.style.width=`${6}em`
        x.style.height=`${6}em`
        x.style.scale=`1.2`
      }
      const small = (e)=>{
        const x = document.querySelector('#cursor')
        x.style.width=`${3}em`
        x.style.height=`${3}em`
        e.target.style.margin=`10px`
      }
      const follow = (e)=>{
        const x = e.target
        x.style.marginLeft=`${e.clientX/50}px`
      }
    return(
        <div id={style.menu} onClick={(e)=>show(e)}>
        <ul id={style.ul}>
                <li className={`${style.li}  ${style.active}`} onMouseMove={(e)=>follow(e)} onMouseEnter={(e)=>{biger()}} onMouseLeave={(e)=>small(e)} id="whatwedo">WHAT WE DO</li><br/>
                <li className={style.li}onMouseMove={(e)=>follow(e)} onMouseEnter={()=>biger()} onMouseLeave={(e)=>small(e)} id="contact">CONTACT</li><br/>
                <li className={style.li}onMouseMove={(e)=>follow(e)} onMouseEnter={()=>biger()} onMouseLeave={(e)=>small(e)} id="offer">OFFERT</li><br/>
                <li className={style.li}onMouseMove={(e)=>follow(e)} onMouseEnter={()=>biger()} onMouseLeave={(e)=>small(e)} id="about">ABOUT</li><br/>
        </ul>
        <div id={style.line}></div>
        </div>
    )
}