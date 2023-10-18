import React from 'react'
import phone from '../img/phone.png'
import delivery from '../img/delivery-icon.png'

export default function Navbar() {
    return (
        <>
            <div className='navbar'>
                <div className='container'>
                    <div className='navbar-content'>
                        <ul class="navbar-start">
                            <li><a href="">Главная</a></li>
                            <li><a href="">О нас</a></li>
                            <li><a href="">Контакты</a></li>
                        </ul>
                        <ul className='navbar-end'>
                            <li><a href="tel:+998(99)230-66-52"><img className='navbar-end-img1' src={phone} alt="" /> tel:+998(99)230-66-52
                            </a></li>
                            <li><a href=""><img className='navbar-end-img2' src={delivery} alt="" />Доставка</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
