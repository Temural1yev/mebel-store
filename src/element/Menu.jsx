import React from 'react'
import kitchen from '../img/kitchen-icon.png'
import bedroom from '../img/bedroom-icon.png'
import livingroom from '../img/livingroom-icon.png'
import closet from '../img/closet-icon.png'
import office from '../img/office-icon.png'
import childrensroom from '../img/childrensroom-icon.png'
import etc from '../img/etc.png'
import стрелки from '../img/стрелки.png'


export default function Menu() {
  return (
   <>
    <div className="menu">
            <div className="container">
                <div className="menu-row">
                    <div className="menu-col">
                        <img src={kitchen}alt=""/>
                        <p>Кухни</p>
                    </div>
                    <div className="menu-col">
                        <img src={bedroom} alt=""/>
                        <p>Спальни</p>
                    </div>
                    <div className="menu-col">
                        <img src={livingroom} alt=""/>
                        <p>Гостинные</p>
                    </div>
                    <div className="menu-col">
                        <img src={closet} alt=""/>
                        <p>Прихожие</p>
                    </div>
                    <div className="menu-col">
                        <img src={office} alt=""/>
                        <p>Офисная мебель</p>
                    </div>
                    <div className="menu-col">
                        <img src={childrensroom} alt=""/>
                        <p>Детская</p>
                    </div>
                    <div class="menu-col">
                        <span>Акция</span>
                    </div>
                    <div class="menu-col">
                        <img src={etc} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="loft">
            <div className="container">
                <div className="loft-content">
                    <h1>loft
                        мебель</h1>
                    <p>Современная и удобная мебель в Анапе</p>
                    <button>СМОТРЕТЬ КАТАЛОГ </button>
                    <img className="loft-img" src={стрелки}alt=""/>
                </div>
            </div>
        </div>
   </>
  )
}
