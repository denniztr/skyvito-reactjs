import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { ContentCards, ProfileSetup, Menu } from '../../components/index'
import { userLogin } from '../../store'
import { useGetUserQuery } from '../../store/ads-api'

import './profile-page.scss'

export const ProfilePage = () => {
  const dispatch = useDispatch()

  const [user, setUser] = useState(null)

  const { data } = useGetUserQuery()
  dispatch(userLogin({ user: data }))

  useEffect(() => {
    setUser(data)
  }, [data])


  // useEffect(() => {
  //   if (data) dispatch(userLogin({ user: data }))
  //   setUser(data)
  // }, [data, dispatch])

  // useEffect(() => {
  //   const current_user = JSON.parse(localStorage.getItem('user'))
  //   dispatch(userLogin({ user: current_user}))
  //   setUser(current_user)
  // }, [dispatch])


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
            <ContentCards />
          </div>
        </div>
       </main>
      </div>
    </div>
  )
}