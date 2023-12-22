import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { userLogin, usePostRegMutation, usePostLoginMutation, setAccessToken } from '../../store/index'

import SkyproLogoModal from '../../assets/icons/logo_modal.png'

import './register.scss';

export const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [postReg] = usePostRegMutation()
  const [getToken] = usePostLoginMutation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [city, setCity] = useState('')
  // const [number, setNumber] = useState('')
  const [error, setError] = useState('')

  const handleRegister = (event) => {
    event.preventDefault()
    if (!email || !password) {
      setError("Укажите email/пароль");
      return;
    }

    if (password !== repeatPassword) {
      setError("Пароли не совпадают");
      return;
    }

    if (email.length < 3) {
      setError("Введенный E-mail слишком короткий");
      return;
    }

    if (password.length < 6) {
      setError("Введенный пароль слишком короткий");
       return;
    }
    
    postReg({ email, password, name, surname, city }).then(() => {
      navigate('/login')
    })
  }


  const clear_ls = () => {
    localStorage.removeItem('user')
  }

  // clear_ls()

  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal__block">
          <form className="modal__form-login" id="formLogUp" action="#">
            <div className="modal__logo">
              <Link to='/'><img src={SkyproLogoModal} alt="logo" /></Link>
            </div>
            <input
              className="modal__input login"
              type="text"
              name="login"
              id="loginReg"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="modal__input password-first"
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="modal__input password-double"
              type="password"
              name="password"
              id="passwordSecond"
              placeholder="Повторите пароль"
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <input
              className="modal__input first-name"
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя (необязательно)"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="modal__input first-last"
              type="text"
              name="first-last"
              id="first-last"
              placeholder="Фамилия (необязательно)"
              onChange={(e) => setSurname(e.target.value)}
            />
            <input
              className="modal__input city"
              type="text"
              name="city"
              id="city"
              placeholder="Город (необязательно)"
              onChange={(e) => setCity(e.target.value)}
            />
            <p>{error}</p>
            <button className="modal__btn-signup-ent" id="SignUpEnter" onClick={handleRegister}>
              <a>Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
