import { useGetAdsQuery } from '../../store'

import './content-cards.scss'

export const ContentCards = () => {
  const { data, isLoading } = useGetAdsQuery();
  if (data) console.log(data)

  return (
    <div className='content__cards cards'>
      {isLoading ? (
        <p>Загрузка</p>
      ) : (
        data.map((card) => (
          <div className='cards__item' key={card.id}>
            <div className='cards__card card'>
              <div className='card__image'>
                <a href='#' target='_blank'></a>
              </div>
              <div className='card__content'>
                <a href='#'><h3 className='card__title'>{card.title}</h3></a>
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