import { useDispatch } from 'react-redux'
import { useGetAdsQuery } from '../../store'
import { ContentCards } from '../../components/index'

import { setAdv } from '../../store'

import './main-page.scss'

export const MainPage = () => {
  const dispatch = useDispatch()
  
  const { data, isLoading } = useGetAdsQuery();
  if (data) dispatch(setAdv({data}))

  return (
    <div className='wrapper'>
      <div className='container'>
        <main className='main'>
          <div className='main__container'>
            <h2 className='main__h2'>Объявления</h2>
            <div className='main__content'>
              <ContentCards data={data} isLoading={isLoading}/>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}