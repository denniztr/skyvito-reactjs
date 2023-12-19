import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAdv } from '../../store/slice/adv-slice'

import { useGetAdsQuery, useGetAddByIdMutation } from '../../store'

import './content-cards.scss'

export const ContentCards = ({ data, isLoading }) => {
  // const dispatch = useDispatch()
  const navigate = useNavigate()

  // const { data, isLoading } = useGetAdsQuery();
  // if (data) dispatch(setAdv({data}))

  const [getAdv] = useGetAddByIdMutation()

  const getAddClick = (id) => {
    getAdv(id).then((res) =>
      navigate(`/adv/${res.data.id}`)
    )
  }

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