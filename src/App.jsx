import React, { useEffect } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Cart from './pages/cart'
import Restaurand from "./pages/restorant"
import { useDispatch } from 'react-redux'
import { getRestorants } from './redux/actions/restActions'
import { getBasket } from './redux/actions/basketAction'

const App = () => {

  const dispatch =useDispatch()

useEffect(()=>{
  dispatch(getRestorants())
  dispatch(getBasket())
  
},[dispatch]
)
  return (
    <BrowserRouter>
        <div className='min-h-screen flex flex-col'>
          <Header/>
      <main className='flex-1 h-full'>
        <Routes>
          <Route path='/' element={<Home/>}/>
           <Route path='/cart' element={<Cart/>}/>
            <Route path='/restorant/:id' element={<Restaurand/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>

  )
}

export default App
