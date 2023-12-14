import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/routes'
import { store } from './store/index'

import { Header } from './components/index'
import {
  // MainPage, 
  // ProfilePage,
  // Adv,
  // SellerProfilePage 
} from './pages/index'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App
