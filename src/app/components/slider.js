'use client'
import { useEffect,useState } from "react"
import style from './slider.module.css'
export default function Slider(){
    const [time,setTime]=useState()
    const [counter,setCounter] = useState(0)
    useEffect(()=>{
        let frame = document.querySelector(`#${style.sliderphoto}`)
        let photo = document.querySelector(`.${style.photodiv}`)
        let line = document.querySelectorAll(`.${style.line}`)
        let actual = setInterval(()=>{
            setCounter(prevCounter=>{
                frame.style.top=`-${photo.offsetHeight*prevCounter}px`
                line.forEach(element=>{
                    if(element===line[prevCounter]){
                        element.classList.add(`${style.active}`)
                    }else{
                        element.classList.remove(`${style.active}`)
                    }
                })
                return prevCounter<3? prevCounter+1:0
            })
        },5000)
        return()=>{
            clearInterval(actual)
        }
    },[])
    const setphoto = (e)=>{
        let photo = document.querySelector(`.${style.photodiv}`)
        let frame = document.querySelector(`#${style.sliderphoto}`)
        let line = document.querySelectorAll(`.${style.line}`)
        line.forEach(element => {
            if(element===e.target){
                frame.style.top=`-${(photo.offsetHeight*parseInt(e.target.id))}px`
                setCounter(parseInt(e.target.id))
                element.classList.add(`${style.active}`)
            }else{
                element.classList.remove(`${style.active}`)
            }
        });
    }
    return(
        <div id={style.slider}>
        <div id={style.lines} onClick={(e)=>setphoto(e)}>
                <div className={`${style.line} ${style.active}`} id='0'></div>
                <div className={`${style.line} `} id='1'></div>
                <div className={style.line} id='2'></div>
                <div className={style.line} id='3'></div>
            </div>
            <div id={style.sliderphoto}>
                <div className={style.photodiv}><img src={`but0.jpg`} className={style.photo}/></div>
                <div className={style.photodiv}><img src={`but1.jpg`} className={style.photo}/></div>
                <div className={style.photodiv}><img src={`but2.jpg`} className={style.photo}/></div>
                <div className={style.photodiv}><img src={`but3.jpg`} className={style.photo}/></div>
            </div>
    </div>
    )
}