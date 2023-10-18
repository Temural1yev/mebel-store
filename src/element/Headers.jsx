import React from 'react'
import LOGO from '../img/LOGO.png'
import search from '../img/search-icon.png'
import юзер from '../img/юзер-бар.png'

export default function Headers() {
  return (
   <>
    <div className="header">
            <div className="container">
                <div className="header-content">
                    <div className="header-logo">
                        <img src={LOGO} alt="" />
                    </div>
                    <div className="header-input">
                        <img src={search} alt="" />
                        <input type="text" placeholder="Поиск" />
                    </div>
                    <div className="header-live">
                        <img src={юзер} alt="" />
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}
