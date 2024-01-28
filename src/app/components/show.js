import style from './show.module.css'
export default function Show(){
    const biger = ()=>{
        const x = document.querySelector('#cursor')
        x.style.width=`${7}em`
        x.style.height=`${7}em`
      }
      const small = ()=>{
        const x = document.querySelector('#cursor')
        x.style.width=`${3}em`
        x.style.height=`${3}em`
      }
    return(
        <div id={style.mainshow}>
            <div id={style.wrapper}>
                <div id={style.mainPhoto}>
                    <div id={style.photoContainer} className='whatwedo'>
                        <div className={style.photodiv}><img src='photo0.jpg' id={style.photo} onMouseEnter={()=>biger()} onMouseLeave={()=>small()}/><span className={style.phototext}>Waht we do</span> </div>
                        <div className={style.photodiv}><img src='photo0.jpg' id={style.photo} onMouseEnter={()=>biger()} onMouseLeave={()=>small()}/> <span className={style.phototext}>Contact</span></div>
                        <div className={style.photodiv}><img src='photo0.jpg' id={style.photo} onMouseEnter={()=>biger()} onMouseLeave={()=>small()}/> <span className={style.phototext}>Offert</span></div>
                        <div className={style.photodiv}><img src='photo0.jpg' id={style.photo} onMouseEnter={()=>biger()} onMouseLeave={()=>small()}/> <span className={style.phototext}>About</span></div>
                    </div>
                </div>
                   <div id={style.textwraper}>
                        <div id={style.textinwraper} className='whatwedo'>
                            <span id={style.text}>Nie należy nakładać nowej warstwy pasty na starą – w takim wypadku wystarczy wyszczotkować obuwie. Przy skórach z efektem cieniowania stosować kremy bezbarwne, aby utrzymać ten efekt. W przypadku utraty tego efektu można go częściowo przywrócić stosując odpowiednie kremy barwne.</span>
                            <span id={style.text}>Oczyścić wilgotną szmatką lub szczotką. Po wysuszeniu stosować pasty zgodne z kolorem wierzchu.</span>
                            <span id={style.text}>Nie należy nakładać nowej warstwy pasty na starą – w takim wypadku wystarczy wyszczotkować obuwie. Przy skórach z efektem cieniowania stosować kremy bezbarwne, aby utrzymać ten efekt. W przypadku utraty tego efektu można go częściowo przywrócić stosując odpowiednie kremy barwne.</span>
                            <span id={style.text}>Oczyścić wilgotną szmatką lub szczotką. Po wysuszeniu stosować pasty zgodne z kolorem wierzchu.</span>
                        </div>
                   </div>
            </div>
        </div>
    )
}