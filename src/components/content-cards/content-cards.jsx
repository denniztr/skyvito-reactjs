/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom'
import { useGetAddByIdMutation } from '../../store'
import { useSelector } from 'react-redux'

import './content-cards.scss'

export const ContentCards = ({ data, isLoading }) => {
  const navigate = useNavigate()

  const [getAdv] = useGetAddByIdMutation()

  const getAddClick = (id) => {
    getAdv(id).then((res) =>
      navigate(`/adv/${res.data.id}`)
    )
  }

  // const adv_images = useSelector((state) => state.adv.images)

 

  return (
    <div className='content__cards cards'>
      {isLoading ? (
        <p>Загрузка</p>
      ) : (
        data.map((card) => (
          <div className='cards__item' key={card.id}>
            <div className='cards__card card' onClick={() => getAddClick(card.id)}>
            <Link 
            // to={`/adv/${card.id}`}
            >
              <div className='card__image'>
                <img src='' alt="card" />
                {/* <a href='#' target='_blank'></a> */}
              </div>
            </Link>
              <div className='card__content'>
                <a href=''><h3 className='card__title'>{card.title}</h3></a>
                <p className='card__price'>{card.price} ₽</p>
                <p className='card__place'>{card.user.city}</p>
                <p className='card__date'>{card.created_on}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}