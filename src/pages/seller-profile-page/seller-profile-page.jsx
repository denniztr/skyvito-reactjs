
import { Menu, SellerProfileData, ContentCards } from '../../components/index'

import './seller-profile-page.scss'

export const SellerProfilePage = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <main className='main'>
          <div className='main__container'>
            <div className='main__center-block'>
              <Menu/>
              <SellerProfileData />
            </div>
            <div className='main__content'>
              <ContentCards/>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}