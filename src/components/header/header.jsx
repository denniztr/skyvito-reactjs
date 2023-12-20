import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setIsModal } from '../../store/index'
import './header.scss'

export const Header = ({ user }) => {
  const dispatch = useDispatch()
  
  return (
    <header className='header'>
        { user ? (
          <nav className='header__nav'>
            <button className="header__btn-putAd btn-hov01" id="btputAd" onClick={() => dispatch(setIsModal())}>
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