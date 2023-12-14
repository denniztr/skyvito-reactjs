

import './seller-profile-data.scss'

export const SellerProfileData = () => {
  return (
    <>
      <h2 className='main__h2'>Профиль продавца</h2>
      <div className='main__profile-sell profile-sell'>
        <div className='profile-sell__content'>
          <div className='profile-sell__seller seller'>
            <div className='seller__left'>
              <div className='seller__img'>
                <a href="" target='_self'>
                  <img src="" alt="" />
                </a>
              </div>
            </div>
            <div className='seller__right'>
              <h3 className='seller__title'>Кирилл Матвеев</h3>
              <p className='seller__city'>Санкт-Петербург</p>
              <p className='seller__inf'>Продаёт товары с августа 2021</p>
              <div className='seller__img-mob-block'>
                <div className='seller__img-mob'>
                  <a href="" target='_self'>
                    <img src="" alt="" />
                  </a>
                </div>
              </div>
              <button className='seller__btn btn-hov02'>Показать телефон<span>8 905 XXX XX XX</span></button>
            </div>
          </div>
        </div>
      </div>
      <h3 className='main__title'>Товары продавца</h3>
    </>
  )
}