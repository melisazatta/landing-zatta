import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

import ItemDetailContainer from './components/ItemDetailContainer'

import CartContainer from './components/CartContainer'
import Error from './components/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CartProvider } from './context/CartContext'

import Checkout from './components/Checkout'
import Footer from './components/Footer'

import Contacto from './components/Contacto';

function App() {

  return (

    <BrowserRouter>

    <CartProvider>
         
    <NavBar/>

    <Routes>
      <Route path='/' element={  <ItemListContainer mensaje='Bienvenidos a la Diete-'/> }></Route>

       <Route path='/category/:type' element={  <ItemListContainer /> }></Route>

      <Route path='/item/:id' element={   <ItemDetailContainer/> }></Route>

      <Route path='/cart' element={<CartContainer/>}></Route>
      
      <Route path='/checkout' element= {<Checkout/>}></Route>

       <Route path='/contacto' element= {<Contacto/>}></Route>

      <Route path='*' element= {<Error/>}></Route>

    </Routes>

    
    <Footer/>
   
 
    </CartProvider>

    </BrowserRouter>

  )
}

export default App
