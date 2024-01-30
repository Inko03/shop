import style from './show.module.css'
import Link from 'next/link'
export default function Show(){
    return(
        <div id={style.mainshow}>
            <div id={style.slider}>
                <div id={style.sliderphoto}>
                    <div className={style.divphoto}><img src='photo0.jpg' className={style.img}/><span className={style.span}>What we do</span></div>
                    <div className={style.divphoto}><img src='photo0.jpg' className={style.img}/><span className={style.span}>Contact</span></div>
                    <div className={style.divphoto}><img src='photo0.jpg' className={style.img}/><span className={style.span}>Offert</span></div>
                    <div className={style.divphoto}><img src='photo0.jpg' className={style.img}/><span className={style.span}>About</span></div>
                </div>
            </div>
            <div id={style.textslider}>
                <div id={style.onetext}>
                    <div className={style.divtext}><span className={style.textin}>asdasda as defaultsa default asdasdasasd  as dasd asd asd asdasdasd asd as as asda sd asdasda sdas dasd asd asd as dasd asdasd a</span></div>
                    <div className={style.divtext}><span className={style.textin}>asdasda as defaultsa default asdasdasasd  as dasd asd asd asdasdasd asd as as asda sd asdasda sdas dasd asd asd as dasd asdasd a</span></div>
                    <div className={style.divtext}><span className={style.textin}>asdasda as defaultsa default asdasdasasd  as dasd asd asd asdasdasd asd as as asda sd asdasda sdas dasd asd asd as dasd asdasd a</span><br/><Link href='/shop'><button id={style.goto}>Shop</button></Link></div>
                    <div className={style.divtext}><span className={style.textin}>asdasda as defaultsa default asdasdasasd  as dasd asd asd asdasdasd asd as as asda sd asdasda sdas dasd asd asd as dasd asdasd a</span></div>
                </div>
            </div>
        </div>
    )
}