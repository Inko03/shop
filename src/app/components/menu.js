'use client'
import { useEffect, useState } from 'react'
import style from'./menu.module.css'

export default function Maenu(){
    const [photostate, setPhotostate]=useState(0)
    const show = (e)=>{
        const inmenu = document.querySelectorAll('.menu_li__dFTTU')
        const actualphoto = document.querySelector('.show_divphoto__4qFuf')
        const directphoto = document.querySelector('#show_sliderphoto__OxHF1')
        const actualtext = document.querySelector('.show_divtext__n3QtX')
        const directtext = document.querySelector('#show_onetext__cGUeQ')
        inmenu.forEach((element)=>{
            if(element===e.target){
              e.target.classList.add(`${style.active}`);
              directphoto.style.top=`-${(actualphoto.offsetHeight*parseInt(e.target.id))}px`;
              directtext.style.top=`-${actualtext.offsetHeight*parseInt(e.target.id)}px`;
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
        x.style.width=`${2}em`
        x.style.height=`${2}em`
        e.target.style.margin=`10px`
      }
      const follow = (e)=>{
        const x = e.target
        x.style.marginLeft=`${e.clientX/50}px`
      }
      const cursor=(e)=>{
        const x = document.querySelector('#cursor')
        x.style.left=`${e.clientX}px`
        x.style.top=`${e.clientY}px`
      }
    return(
        <div id={style.menu} onClick={(e)=>show(e)} onMouseMove={(e)=>cursor(e)}>
          <div id="cursor"><div id="cool"></div></div>
        <ul id={style.ul}>
                <li className={`${style.li}  ${style.active}`} onMouseMove={(e)=>follow(e)} onMouseEnter={(e)=>{biger()}} onMouseLeave={(e)=>small(e)} id="0">WHAT WE DO</li><br/>
                <li className={style.li}onMouseMove={(e)=>follow(e)} onMouseEnter={()=>biger()} onMouseLeave={(e)=>small(e)} id="1">CONTACT</li><br/>
                <li className={style.li}onMouseMove={(e)=>follow(e)} onMouseEnter={()=>biger()} onMouseLeave={(e)=>small(e)} id="2">OFFERT</li><br/>
                <li className={style.li}onMouseMove={(e)=>follow(e)} onMouseEnter={()=>biger()} onMouseLeave={(e)=>small(e)} id="3">ABOUT</li><br/>
        </ul>
        <div id={style.line}></div>
        </div>
    )
}