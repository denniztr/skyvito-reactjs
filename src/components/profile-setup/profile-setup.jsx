/* eslint-disable react/prop-types */
import { useState } from 'react';
import { usePatchUserMutation, useGetUserMutation } from '../../store';
import { useDispatch } from 'react-redux'; 
import { userLogin } from '../../store';

import './profile-setup.scss';

export const ProfileSetup = ({ user }) => {
  const dispatch = useDispatch()
  
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [city, setCity] = useState();
  const [phone, setPhone] = useState('');

  const [patchUser] = usePatchUserMutation();
  const [getUser] = useGetUserMutation()

  const handlePatchUserClick = async (event) => {
    event.preventDefault()
    patchUser({ name, surname, city, phone}).then((res) => {
      dispatch(userLogin({ user: res.data }))
    })
  };

  return (
    <>
      {user ? (
        <>
          <h2 className="main__h2">Здравствуйте, {user.name}!</h2>
          <div className="main__profile profile">
            <div className="profile__content">
              <h3 className="profile__title title">Настройки профиля</h3>
              <div className="profile__settings settings">
                <div className="settings__left">
                  <div className="settings__img">
                    <a href="#" target="_self">
                      <img src="#" alt="" />
                    </a>
                  </div>
                  <a className="settings__change-photo" href="" target="_self">
                    Заменить
                  </a>
                </div>
                <div className="settings__right">
                  <form className="settings__form" action="#">
                    <div className="settings__div">
                      <label htmlFor="fname">Имя</label>
                      <input
                        className="settings__f-name"
                        id="settings-fname"
                        name="fname"
                        type="text"
                        placeholder={user ? user.name : ''}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="settings__div">
                      <label htmlFor="lname">Фамилия</label>
                      <input
                        className="settings__l-name"
                        id="settings-lname"
                        name="lname"
                        type="text"
                        placeholder={user ? user.surname : ''}
                        onChange={(e) => setSurname(e.target.value)}
                      />
                    </div>
                    <div className="settings__div">
                      <label htmlFor="city">Город</label>
                      <input
                        className="settings__city"
                        id="settings-city"
                        name="city"
                        type="text"
                        placeholder={user ? user.city : ''}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div className="settings__div">
                      <label htmlFor="phone">Телефон</label>
                      <input
                        className="settings__phone"
                        id="settings-phone"
                        name="phone"
                        type="tel"
                        placeholder={user ? user.phone : ''}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <button
                      className="settings__btn btn-hov02"
                      id="settings-btn"
                      onClick={handlePatchUserClick}
                    >
                      Сохранить
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>NO USER</p>
      )}
    </>
  );
};
