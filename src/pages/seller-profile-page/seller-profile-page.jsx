import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllUsersMutation } from '../../store/ads-api'

import { 
  Menu, 
  SellerProfileData, 
  // ContentCards 
} from '../../components/index'

import './seller-profile-page.scss'

export const SellerProfilePage = () => {
  const [seller, setSeller] = useState(null)

  const { id } = useParams()

  const [userAll] = useGetAllUsersMutation()

  useEffect(() => {
    userAll().then((res) => {
      const selected_seller = res.data.find((el) => el.id === Number(id))
      setSeller(selected_seller)
    })
  }, [id, userAll])


  return (
    <div className='wrapper'>
      <div className='container'>
        <main className='main'>
          <div className='main__container'>
            <div className='main__center-block'>
              <Menu/>
              <SellerProfileData seller={seller}/>
            </div>
            <div className='main__content'>
              {/* <ContentCards/> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}