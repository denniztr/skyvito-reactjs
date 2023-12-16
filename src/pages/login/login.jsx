import { Link } from 'react-router-dom'

import SkyproLogoModal from '../../assets/icons/logo_modal.png'



import './login.scss';

export const Login = () => {
  return (
    <div className="wrapper">
      <div className="container-enter">
        <div className="modal__block">
          <form className="modal__form-login" id="formLogIn" action="#">
            <div className="modal__logo">
              <Link>
                <Link to='/'><img src={SkyproLogoModal} alt="logo" /></Link>
              </Link>
            </div>
            <input
              className="modal__input login"
              type="text"
              name="login"
              id="formlogin"
              placeholder="email"
            />
            <input
              className="modal__input password"
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            <button className="modal__btn-enter" id="btnEnter">
              <a href="../index.html">Войти</a>
            </button>
            <button className="modal__btn-signup" id="btnSignUp">
              <Link to="/register">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
