import style from './footer.module.css'
export default function Footer(){
    return(
        <div id={style.footer}>
            <div>
                <ul className={style.ullist}>
                    <li>Contact</li>
                    <li>How to keep clean</li>
                    <li>Delivery</li>
                </ul>
                <ul className={style.ullist}>
                    <li>firma@domen.com</li>
                    <li>Tel: 123 456 789</li>
                    <li>Fax: 123 456 789</li>
                    <li>PULSO &#174;</li>
                </ul>
            </div>
            <div>
            <ul className={style.listicon}>
                    <li><img src='fb.png' className={style.icon}/></li>
                    <li><img src='insta.png' className={style.icon}/></li>
                </ul>
            </div>
        </div>
    )
}