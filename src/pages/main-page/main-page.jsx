import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useGetAdsQuery } from '../../store'
import { ContentCards } from '../../components/index'
import SkyProLogo from '../../assets/icons/logo.png'
import { setAdv } from '../../store'

import './main-page.scss'

export const MainPage = () => {
  const dispatch = useDispatch()
  
  const { data, isLoading } = useGetAdsQuery();
  if (data) dispatch(setAdv({data}))

  const [searchQuery, setSearchQuery] = useState('')
  const [filteredData, setFilteredData] = useState(null)


  const handleSearchSubmit = (event) => {
    event.preventDefault()
    const newFilteredData = data.filter((el) => el.title.toLowerCase().includes(searchQuery.toLowerCase()))
    setFilteredData(newFilteredData)
  }
  
  return (
    <div className='wrapper'>
      <div className='container'>
        <main className='main'>
        <div className="main__search search">
            <a className="search__logo-link" target="_blank">
              <img className="search__logo-img" alt="logo" src={SkyProLogo}/>
            </a>
            <a className="search__logo-mob-link" href="#" target="_blank">
              <img
                className="search__logo-mob-img"
                src="img/logo-mob.png"
                alt="logo"
              />
            </a>
            <form className="search__form" action="#" onSubmit={handleSearchSubmit}>
              <input
                className="search__text"
                type="search"
                placeholder="Поиск по объявлениям"
                name="search"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <input
                className="search__text-mob"
                type="search"
                placeholder="Поиск"
                name="search-mob"
              />
              <button className="search__btn btn-hov02">Найти</button>
            </form>
          </div>
          <div className='main__container'>
            <h2 className='main__h2'>Объявления</h2>
            <div className='main__content'>
              <ContentCards data={filteredData || data} isLoading={isLoading} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}