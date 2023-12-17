import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAdv } from '../../store/slice/adv-slice'

import { useGetAdsQuery } from '../../store'

import './content-cards.scss'

export const ContentCards = () => {
  const dispatch = useDispatch()
  const { data, isLoading } = useGetAdsQuery();
  if (data) dispatch(setAdv({data}))

  return (
    <div className='content__cards cards'>
      {isLoading ? (
        <p>Загрузка</p>
      ) : (
        data.map((card) => (
          <div className='cards__item' key={card.id}>
            <div className='cards__card card'>
            <Link to={`/adv/${card.id}`}>
              <div className='card__image'>
                {/* <a href='#' target='_blank'></a> */}
              </div>
            </Link>
              <div className='card__content'>
                <a  href='#'><h3 className='card__title'>{card.title}</h3></a>
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