import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { usePostLoginMutation, setAccessToken } from '../../store'

import SkyproLogoModal from '../../assets/icons/logo_modal.png'

import './login.scss';

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const [login] = usePostLoginMutation()

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Не заполнены данные для входа')
    }

    const res = await login({ email, password })

    if (res.data) {
      dispatch(setAccessToken(res.data.access_token))
      localStorage.setItem('refresh_token', res.data.refresh_token)
      navigate('/')
    }
  }

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
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="modal__input password"
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>{error}</p>
            <button className="modal__btn-enter" id="btnEnter" onClick={handleLogin}>
              <Link>Войти</Link>
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
