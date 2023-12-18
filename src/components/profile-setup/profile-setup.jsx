import { useSelector } from 'react-redux'


import './profile-setup.scss'

export const ProfileSetup = () => {
 
  // const user_ls = localStorage.getItem('user')

  const current_user = useSelector((state) => state.user.user)
 
  console.log(current_user)
  return (
    <>
      <h2 className='main__h2'>Здравствуйте, {current_user ?current_user.user.name : ''}!</h2>
      <div className='main__profile profile'>
        <div className='profile__content'>
          <h3 className='profile__title title'>Настройки профиля</h3>
          <div className='profile__settings settings'>
            <div className='settings__left'>
              <div className='settings__img'>
                <a href="#" target='_self'>
                  <img src="#" alt="" />
                </a>
              </div>
              <a className='settings__change-photo' href="" target='_self'>Заменить</a>
            </div>
            <div className='settings__right'>
              <form className='settings__form' action="#">
                <div className='settings__div'>
                  <label htmlFor="fname">Имя</label>
                  <input className='settings__f-name' id='settings-fname' name='fname' type="text" placeholder={current_user ?current_user.user.name : ''}/>
                </div>
                <div className='settings__div'>
                  <label htmlFor="lname">Фамилия</label>
                  <input className='settings__l-name' id='settings-lname' name='lname' type="text" placeholder={current_user ?current_user.user.surname : ''}/>
                </div>
                <div className='settings__div'>
                  <label htmlFor="city">Город</label>
                  <input className='settings__city' id='settings-city' name='city' type="text" placeholder={current_user ?current_user.user.city : ''} />
                </div>
                <div className='settings__div'>
                  <label htmlFor="phone">Телефон</label>
                  <input className='settings__phone' id='settings-phone' name='phone'  type="tel" placeholder={current_user ?current_user.user.phone : ''} />
                </div>
                <button className='settings__btn btn-hov02' id='settings-btn'>Сохранить</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}