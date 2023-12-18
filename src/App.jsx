import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppRoutes } from './routes/routes'
import { Header } from './components/index'
import { userLogin } from './store'

function App() {
  const dispatch = useDispatch()
  // const user = localStorage.getItem('user')
  // localStorage.clear()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) dispatch(userLogin({ user: user }))
    console.log(localStorage.getItem('user'))
  }, [dispatch])

  return (
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
  );
}

export default App
