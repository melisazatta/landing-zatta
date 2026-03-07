import '../assets/css/NavBar.css'
import CartWidget from './CartWidget'

import { NavLink } from 'react-router-dom'

import { Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {
    return (
   
     <Navbar className=" nav-container">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          <img className='logo' src={'../favicon.png'} alt="logo-frutilla" /></Navbar.Brand>
      
          <Nav className="mx-auto">
           
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

        <NavLink to="/cart" className="text-decoration-none"> <CartWidget/> </NavLink>
      </Container>
    </Navbar>
    )    
}


export default NavBar