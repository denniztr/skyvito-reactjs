
import { ContentCards } from '../../components/index'

import './main-page.scss'

export const MainPage = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <main className='main'>
          <div className='main__container'>
            <h2 className='main__h2'>Объявления</h2>
            <div className='main__content'>
              <ContentCards/>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}