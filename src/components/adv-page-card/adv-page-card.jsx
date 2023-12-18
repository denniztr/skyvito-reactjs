
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './adv-page-card.scss'

export const AdvCard = () => {
  const { id } = useParams()
  const ads = useSelector((state) => state.adv.ads)
  console.log(ads);
  
  const selected_ad = ads.data.find((ad) => ad.id === Number(id))
  console.log(selected_ad)


  // useEffect(() => {
  //   console.log(ads)
  // }, [ads])
  // const ads = useSelector((state) => state.ads.setAdv)
  // const currentAd = ads.find((ad) => ad.id === Number(id))
  
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
          <h3 className='article__title title'>{selected_ad.title}</h3>
          <div className='article__info'>
            <p className='article__date'>{selected_ad.created_on}</p>
            <p className='article__city'>{selected_ad.user.city}</p>
            <a className='article__link' href="">23 отзыва</a>
          </div>
          <p className='article__price'>{selected_ad.price} ₽</p>
          <button className='article__btn btn-hov-02'>Показать телефон<span>{selected_ad.user.phone}</span></button>
          <div className='article__author author'>
            <div className='author__img'>
              <img src={selected_ad.user.avatar} alt="" />
            </div>
            <div className='author__cont'>
              <p className='author__name'>{selected_ad.user.name}</p>
              <p className='author__about'>{selected_ad.user.sells_from}</p>
            </div>
          </div>
          <p>{selected_ad.description}</p>
        </div>
      </div>
    </div>
  )
}