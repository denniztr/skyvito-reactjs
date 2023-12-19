import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppRoutes } from './routes/routes'
import { Header } from './components/index'
import { userLogin } from './store'

import { useGetUserMutation } from './store'


function App() {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user.user)
  const [getUser] = useGetUserMutation()

  useEffect(() => {
      getUser(localStorage.getItem('access_token')).then((res) => {
        if (res.error) {
          console.log(res.error.status)
        } else {
          dispatch(userLogin(res.data))
          console.log('Успешная авторизация')
        }
      }) 
  }, [])

  return (
      <BrowserRouter>
        <Header user={user}/>
        <AppRoutes />
      </BrowserRouter>
  );
}


export default App
