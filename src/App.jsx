import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppRoutes } from './routes/routes'
import { Header, Footer } from './components/index'
import { NewAdModal, CommentsModal } from './components/index'
import { userLogin, setAccessToken } from './store'
import { useUpdateTokenMutation, useGetUserMutation } from './store/ads-api'

function App() {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user.user)
  const modalAdv = useSelector((state) => state.adv.modalAdv)
  const modalComments = useSelector((state) => state.adv.modalComments)
  const access_token = localStorage.getItem('access_token')
  const refresh_token = localStorage.getItem('refresh_token')

  const [updateToken] = useUpdateTokenMutation()
  const [getUser] = useGetUserMutation()

  useEffect(() => {
    dispatch(setAccessToken(access_token))
    updateToken({ access_token, refresh_token }).then((res) => {
      if (res.data) {
        dispatch(setAccessToken(res.data.access_token))
        localStorage.setItem('refresh_token', res.data.refresh_token)
      }
    }).then(() => getUser().then((res) => dispatch(userLogin(res.data))))
    // const access_token = localStorage.getItem('access_token')
    // dispatch(setAccessToken(access_token))
    // const refresh_token = localStorage.getItem('refresh_token')
    // console.log(refresh_token)
  }, [])

  return (
      <BrowserRouter>
        <Header user={user}/>
        { modalAdv ? <NewAdModal /> : null }
        { modalComments ? <CommentsModal /> : null }
        <AppRoutes />
        <Footer />
      </BrowserRouter>
  );
}


export default App
