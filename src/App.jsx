import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import ProductDeatils from './pages/ProductDeatils'

const App = () => {

  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element ={<LayoutOne/>}>
        <Route index element ={<Home/>}/>
        <Route path='/details' element ={<ProductDeatils/>}/>
      </Route>

    </Route>
  ))







  return (
    <>
      <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
