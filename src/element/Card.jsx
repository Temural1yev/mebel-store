import React from 'react'
import список from '../img/список желаемого.png'
import размеры from '../img/размеры.png'
import image1 from '../img/image 1.png'
import image2 from '../img/image 2.png'
import Vector from '../img/Vector.png'
import image3 from '../img/image 3.png'
import image4 from '../img/image 4.png'
import image5 from '../img/image 5.png'
import image6 from '../img/image 6.png'
import image7 from '../img/image 7.png'
import image8 from '../img/image 8.png'
import image9 from '../img/image 9.png'
import image10 from '../img/image 10.png'
import image11 from '../img/image 11.png'
import image12 from '../img/image  12.png'
import image13 from '../img/image 13.png'
import image14 from '../img/image 14.png'
import image15 from '../img/image 15.png'
import image16 from '../img/image 16.png'
import image17 from '../img/image 17.png'
import image18 from '../img/image 18.png'


export default function Card() {
  return (
   <>
     <div class="card">
            <div className="container">
                <p className="card__title">Хиты продаж</p>
                <div className="card__row">
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image1}alt=""/></a>
                        <h2 classNameName="card__title">Валенсия Beige</h2>
                        <p className="card__text">Барные стулья</p>
                        <h1 className="card__value">2 300₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image2} alt=""/></a>
                        <h2 className="card__title">Толикс-2 White Gloss</h2>
                        <p className="card__text">Барные стулья</p>
                        <h1 className="card__value">4 690₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список}alt=""/>
                        <div className="card__acsiya">
                            <img className="card__acsiyaimg" src={Vector } alt=""/>
                            <h5>-25%</h5>
                        </div>
                        <a href=""><img className="card__img" src={image3} alt=""/></a>
                        <h2 className="card__title">Динс Velvet Yellow</h2>
                        <p className="card__text">Диваны</p>
                        <div className="card__footer">
                            <h1 className="card__value">28 490₽</h1>
                            <a className="card__text2">37 990₽</a>
            
                        </div>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image4} alt=""/></a>
                        <h2 className="card__title">Кускен Navy Blue</h2>
                        <p className="card__text">Диваны</p>
                        <h1 className="card__value">2 300₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image5 } alt=""/></a>
                        <h2 className="card__title">Шерона Barhat Grey</h2>
                        <p className="card__text">Шерона Barhat Grey</p>
                        <h1 className="card__value">21 990₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image6} alt=""/></a>
                        <h2 className="card__title">Авиньон-1</h2>
                        <p className="card__text">Буфеты</p>
                        <h1 className="card__value">18 990₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image7}alt=""/></a>
                        <h2 className="card__title">Стелла Дуб Сонома</h2>
                        <p className="card__text">Комоды</p>
                        <h1 className="card__value">8 990₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image8} alt=""/></a>
                        <h2 className="card__title">Равенна-1 Light</h2>
                        <p className="card__text">Комоды</p>
                        <h1 className="card__value">14 990₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список}alt=""/>
                        <a href=""><img className="card__img" src={image9} alt=""/></a>
                        <h2 className="card__title">Бенфлит Grey</h2>
                        <p className="card__text">Журнальные столы</p>
                        <h1 className="card__value">7 290₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image10} alt=""/></a>
                        <h2 className="card__title">Тиффани Вудлайн Крем</h2>
                        <p className="card__text">Письменные столы</p>
                        <h1 className="card__value">10 990₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image11} alt=""/></a>
                        <h2 className="card__title">Валенсия Beige</h2>
                        <p className="card__text">Шкафы</p>
                        <h1 className="card__value">19 990₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image12} alt=""/></a>
                        <h2 className="card__title">Лайт-3-170-240 Белый</h2>
                        <p className="card__text">Шкафы</p>
                        <h1 className="card__value">27 290₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image13} alt=""/></a>
                        <h2 className="card__title">Вилли Pink</h2>
                        <p className="card__text">Детский диван</p>
                        <h1 className="card__value">21 990₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image14} alt=""/></a>
                        <h2 className="card__title">Сан-Паулу Velvet Brown</h2>
                        <p className="card__text">Барные стулья</p>
                        <h1 className="card__value">25 990₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image15} alt=""/></a>
                        <h2 className="card__title">Валенсия Beige</h2>
                        <p className="card__text">Барные стулья</p>
                        <h1 className="card__value">10 990₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image16} alt=""/></a>
                        <h2 className="card__title">Валенсия Beige</h2>
                        <p className="card__text">Барные стулья</p>
                        <h1 className="card__value">19 990₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список}alt=""/>
                        <a href=""><img className="card__img" src={image17} alt=""/></a>
                        <h2 className="card__title">Шерона Barhat Grey</h2>
                        <p className="card__text">Двухспальные кровати</p>
                        <h1 className="card__value">21 990₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список}alt=""/>
                        <a href=""><img className="card__img" src={image18} alt=""/></a>
                        <h2 className="card__title">Авиньон-1</h2>
                        <p className="card__text">Буфеты</p>
                        <h1 className="card__value">18 990₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список}alt=""/>
                        <a href=""><img className="card__img" src={image7} alt=""/></a>
                        <h2 className="card__title">Стелла Дуб Сонома</h2>
                        <p className="card__text">Комоды</p>
                        <h1 className="card__value">8 990₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image8} alt=""/></a>
                        <h2 className="card__title">Равенна-1 Light</h2>
                        <p className="card__text">Комоды</p>
                        <h1 className="card__value">14 990₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список}alt=""/>
                        <a href=""><img className="card__img" src={image9} alt=""/></a>
                        <h2 className="card__title">Бенфлит Grey</h2>
                        <p className="card__text">Журнальные столы</p>
                        <h1 className="card__value">7 290₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image10} alt=""/></a>
                        <h2 className="card__title">Тиффани Вудлайн Крем</h2>
                        <p className="card__text">Письменные столы</p>
                        <h1 className="card__value">10 990₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image11} alt=""/></a>
                        <h2 className="card__title">Валенсия Beige</h2>
                        <p className="card__text">Шкафы</p>
                        <h1 className="card__value">19 990₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image12} alt=""/></a>
                        <h2 className="card__title">Лайт-3-170-240 Белый</h2>
                        <p className="card__text">Шкафы</p>
                        <h1 className="card__value">27 290₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img class="card__img" src={image13} alt=""/></a>
                        <h2 className="card__title">Вилли Pink</h2>
                        <p className="card__text">Детский диван</p>
                        <h1 className="card__value">21 990₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image14} alt=""/></a>
                        <h2 className="card__title">Сан-Паулу Velvet Brown</h2>
                        <p className="card__text">Барные стулья</p>
                        <h1 className="card__value">25 990₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image15} alt="" /></a>
                        <h2 className="card__title">Валенсия Beige</h2>
                        <p className="card__text">Барные стулья</p>
                        <h1 className="card__value">10 990₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                    <div className="card__col">
                        <img className="card__heart" src={список} alt=""/>
                        <a href=""><img className="card__img" src={image16} alt=""/></a>
                        <h2 className="card__title">Валенсия Beige</h2>
                        <p className="card__text">Барные стулья</p>
                        <h1 className="card__value">19 990₽</h1>
                        <img src={размеры}alt=""/>
                        <button className="card__btn">Добавить в корзину</button>
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}
