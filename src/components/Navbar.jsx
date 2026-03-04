import '../assets/css/NavBar.css'
import CartWidget from './CartWidget'

import { NavLink } from 'react-router-dom'

import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

import { Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {
    const {cart} =useContext(CartContext)
    return (
    //    <nav className="nav-container">

    //     <NavLink to= '/'> 
    //     <img className='logo' src={'../favicon.png'} alt="logo-frutilla" />
    //     </NavLink>
       
        
    //     <NavLink className="productos" to="/category/frutos secos">Frutos Secos</NavLink>
    //     <NavLink className="productos" to="/category/congelados">Congelados</NavLink>
    //     <NavLink className="productos" to="/category/semillas">Semillas</NavLink>
    //     <NavLink className="productos" to="/category/infusiones">Infusiones</NavLink>

    //     <NavLink to="/cart"> <CartWidget/> </NavLink>
        
    //    </nav> 
       
     <Navbar expand="lg" className=" nav-container">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          <img className='logo' src={'../favicon.png'} alt="logo-frutilla" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
            <NavDropdown  className="productos" title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item  className="productos" as={NavLink} to='/category/frutos secos'>Frutos secos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item   className="productos" as={NavLink} to='/category/congelados'>
                Congelados
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  className="productos" as={NavLink} to='/category/semillas'>Semillas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  className="productos" as={NavLink} to='/category/infusiones'>
                Infusiones
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

           <NavLink to="/cart"> <CartWidget/> </NavLink>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    )    
}


export default NavBar