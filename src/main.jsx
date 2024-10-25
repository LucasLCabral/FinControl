import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Error from './routes/Error/Error.jsx'
import Home from './routes/Home/Home.jsx'
import Login from './routes/Login/Login.jsx'


const router = createBrowserRouter([
  {
    path:'/', element: <App/>,
    errorElement: <Error/>,

    children: [
      {path: '/', element: <Home/>},
      {path: '/login', element: <Login/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
