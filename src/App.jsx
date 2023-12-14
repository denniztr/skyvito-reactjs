import { Provider } from 'react-redux'
import { store } from './store/index'

import { Header } from './components/index'
import {
  MainPage, 
  // ProfilePage,
  // Adv,
  // SellerProfilePage 
} from './pages/index'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <MainPage />
      {/* <ProfilePage/> */}
      {/* <Adv /> */}
      {/* <SellerProfilePage/> */}
    </Provider>
  );
}

export default App
