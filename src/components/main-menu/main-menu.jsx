
import SkyproLogo from '../../assets/icons/logo.png'

import './main-menu.scss'

export const Menu = () => {
  return (
    <div className='main__menu menu'>
      <a className='menu__logo-link' href="#" target='_blank'>
        <img className='menu__logo-img' src={SkyproLogo} alt="logo" />
      </a>
      <form className='menu__form' action="#">
        <button className='menu__btn btn-hov-02' id='btnGoBack'>
          Вернуться на главную
        </button>
      </form>
    </div>
  )
}