import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedAdd } from '../../store'

import './adv-page-card.scss'

export const AdvCard = ({ data }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    if (data) {
      const selected_ad = data.find((ad) => ad.id === Number(id))
      dispatch(setSelectedAdd(selected_ad))
    }
  }, [data, dispatch, id])

  const selected_ad = useSelector((state) => state.adv.selected_ad)
  
  const handleClickUserProfile = () => {
    navigate(`/seller/${selected_ad.user.id}`)
  }

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
          <h3 className='article__title title'>{selected_ad && selected_ad.title}</h3>
          <div className='article__info'>
            <p className='article__date'>{selected_ad && selected_ad.created_on}</p>
            <p className='article__city'>{selected_ad && selected_ad.user.city}</p>
            <a className='article__link' href="">23 отзыва</a>
          </div>
          <p className='article__price'>{selected_ad && selected_ad.price} ₽</p>
          <button className='article__btn btn-hov-02'>Показать телефон<span>{selected_ad && selected_ad.user.phone}</span></button>
          <div className='article__author author' onClick={handleClickUserProfile}>
            <div className='author__img'>
              <img src={selected_ad && selected_ad.user.avatar} alt="" />
            </div>
            <div className='author__cont'>
              <p className='author__name'>{selected_ad && selected_ad.user.name}</p>
              <p className='author__about'>{selected_ad && selected_ad.user.sells_from}</p>
            </div>
          </div>
          <p>{selected_ad && selected_ad.description}</p>
        </div>
      </div>
    </div>
  )
}