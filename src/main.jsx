import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './mainPage/Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WellcomePage from './sections/wellcomePage/WellcomePage.jsx'
import About from './sections/aboutMe/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>

    </RouterProvider>
)
