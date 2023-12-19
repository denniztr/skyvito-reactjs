import { Route, Routes } from 'react-router-dom'
import {
  MainPage,
  ProfilePage,
  Adv,
  SellerProfilePage,
  Register,
  Login
} from '../pages/index'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainPage/>} path='/'/>
      <Route element={<Register/>} path='/register' />
      <Route element={<Login/>} path='/login' />
      <Route element={<ProfilePage/>} path='/profile' />
      <Route element={<Adv/>} path='/adv/:id' />
      <Route element={<SellerProfilePage/>} path='/seller/:id' />
    </Routes>
  )
}