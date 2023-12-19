import { useSelector } from 'react-redux'
import { ContentCards, ProfileSetup, Menu } from '../../components/index'

import './profile-page.scss'

export const ProfilePage = () => {

  const user = useSelector((state) => state.user.user);
  return (
    <div className='wrapper'>
      <div className='container'>
       <main className='main'>
        <div className='main__container'>
          <div className='main__center-block'>
            <Menu />
            { user ? <ProfileSetup user={user} /> : ''}
            <h3 className='main__title title'>Мои товары</h3>
          </div>
          <div className='main__content'>
            {/* <ContentCards /> */}
          </div>
        </div>
       </main>
      </div>
    </div>
  )
}