import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppRoutes } from './routes/routes'
import { Header } from './components/index'
import { userLogin, setAccessToken } from './store'

import { useGetUserMutation } from './store'

function App() {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user.user)
  const [getUser] = useGetUserMutation()

  // localStorage.clear()

  useEffect(() => {
    // dispatch(setAccessToken(localStorage.getItem('access_token')))
    //   getUser().then((res) => {
    //     if (res.error) {
    //       console.log(res.error.status)
    //     } else {
    //       dispatch(userLogin(res.data))
    //       console.log('Успешная авторизация')
    //     }
    //   }) 
  }, [])

  return (
      <BrowserRouter>
        <Header user={user}/>
        <AppRoutes />
      </BrowserRouter>
  );
}


export default App
