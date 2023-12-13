

import './adv-page-card.scss'

export const AdvCard = () => {
  return (
    <div className='artic__content article'>
      <div className='article__left'>
        <div className='article__fill-img'>
          <div className='article__img'>
            <img src="" alt="" />
          </div>
          <div className='article__img-bar'>
            {[...Array(6)].map((_, index) => (
              <div className="article__img-bar-div" key={index}>
                <img src="" alt="" />
              </div>
            ))}
          </div>
          <div className='article__img-bar-mob img-bar-mob'>
            {[...Array(5)].map((_, index) => (
              <div className={index === 0 ? 'img-bar-mob__circle circle-active' : 'img-bar-mob__circle'} key={index}></div>
            ))}
          </div>
        </div>
      </div>
      <div className='article__right'>
        <div className='article__block'>
          <h3 className='article__title title'>Ракетка для большого тенниса Triumph Pro STС Б/У</h3>
          <div className='article__info'>
            <p className='article__date'>Сегодня в 10:45</p>
            <p className='article__city'>Санкт Петербург</p>
            <a className='article__link' href="">23 отзыва</a>
          </div>
          <p className='article__price'>2 200 ₽</p>
          <button className='article__btn btn-hov-02'>Показать телефон<span>+90 531 0XX XX XX</span></button>
          <div className='article__author author'>
            <div className='author__img'>
              <img src="" alt="" />
            </div>
            <div className='author__cont'>
              <p className='author__name'>Кирилл</p>
              <p className='author__about'>Продаёт товары с 2021 года</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}