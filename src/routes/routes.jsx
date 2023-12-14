import { Route, Routes } from 'react-router-dom'
import {
  MainPage,
  ProfilePage,
  Adv,
  SellerProfilePage
} from '../pages/index'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainPage/>} path='/'/>
      <Route element={<ProfilePage/>} path='/profile' />
      <Route element={<Adv/>} path='/adv' />
      <Route element={<SellerProfilePage/>} path='/seller' />
    </Routes>
  )
}