import './App.css'
import Reserve from './Components/Reserve/Reserve'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Menu from './Components/Menu/Menu'
import HomePage from './Components/HomePage/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './Components/Contact/Contact'
import Layout from './Layout'
import Reviews from './Components/Reviews/Reviews'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'menu',
        element: <Menu />
      },
      {
        path: 'reserve',
        element: <Reserve />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'review',
        element: <Reviews />
      }
    ]
  }
])

function App() {

  return <RouterProvider router={router}/>
}

export default App
