
import './App.css'

import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

import ItemDetailContainer from './components/ItemDetailContainer'

import Error from './components/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route path='/' element={  <ItemListContainer mensaje='Bienvenidos a la Diete-'/> }></Route>

       <Route path='/category/:type' element={  <ItemListContainer 
      //  mensaje='Categoría: '
       /> }></Route>

      <Route path='/item/:id' element={   <ItemDetailContainer/> }></Route>
      
      <Route path='*' element= {<Error/>}></Route>

    </Routes>
   

    </BrowserRouter>
  )
}

export default App
