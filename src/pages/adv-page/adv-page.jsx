import { useGetAdsQuery } from '../../store'
import { Menu, AdvCard, AdvDescription } from '../../components/index'

import './adv-page.scss'

export const Adv = () => {
  const { data } = useGetAdsQuery();
  return (
    <div className='wrapper'>
      <div className='container'>
        <Menu />
        <div className='main__artic artic'>
          <AdvCard data={data}/>
        </div>
        <AdvDescription />
      </div>
    </div>
  )
}