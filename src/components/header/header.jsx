import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

export const Header = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const user = localStorage.getItem('user')
    setUser(user)
  }, [])

  return (
    <header className='header'>
        { user ? (
          <nav className='header__nav'>
            <button className="header__btn-putAd btn-hov01" id="btputAd">
              Разместить объявление
            </button>
            <Link to='/profile'>
              <button className="header__btn-lk btn-hov01" id="btnlk">
                Личный кабинет
              </button>
            </Link>
          </nav>
        ) : (
          <nav className='header__nav'>
            <Link to='/login'>
              <button className='header__btn-main-enter btn-hov01' id='btnMainEnter'>Вход в личный кабинет</button>
            </Link>
          </nav>
        )}
    </header>
  )
}