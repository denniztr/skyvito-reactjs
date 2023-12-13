
import { Menu, AdvCard, AdvDescription } from '../../components/index'

import './adv-page.scss'

export const Adv = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <Menu />
        <div className='main__artic artic'>
          <AdvCard />
        </div>
        <AdvDescription />
      </div>
    </div>
  )
}