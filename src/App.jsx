import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppRoutes } from './routes/routes'
import { Header } from './components/index'
import { NewAdModal } from './components/index'
import { userLogin, setAccessToken } from './store'

import { useUpdateTokenMutation } from './store/ads-api'

function App() {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user.user)
  const modalAdv = useSelector((state) => state.adv.modalAdv)
  // localStorage.clear()

  useEffect(() => {
    // const fetch_token = async () => {
    //   try {
    //     await updateToken({
    //       access_token: localStorage.getItem('access_token'),
    //       refresh_token: localStorage.getItem('refresh_token')
    //     }).unwrap()
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // fetch_token()
    // try {
    //   const payload = await addPost({ id: 1, name: 'Example' }).unwrap();
    //   console.log('fulfilled', payload)
    // } catch (error) {
    //   console.error('rejected', error);
    // }
  }, [])

  return (
      <BrowserRouter>
        <Header user={user}/>
        { modalAdv ? <NewAdModal /> : null }
        <AppRoutes />
      </BrowserRouter>
  );
}


export default App
