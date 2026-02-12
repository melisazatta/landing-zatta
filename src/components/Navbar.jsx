import '../assets/css/NavBar.css'
import CartWidget from './CartWidget'

import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
       <nav className="nav-container">

        <NavLink to= '/'> 
        <img className='logo' src={'../favicon.png'} alt="logo-frutilla" />
        </NavLink>
       
        
        <NavLink className="productos" to="/category/frutos secos">Frutos Secos</NavLink>
        <NavLink className="productos" to="/category/congelados">Congelados</NavLink>
        <NavLink className="productos" to="/category/semillas">Semillas</NavLink>
        <NavLink className="productos" to="/category/infusiones">Infusiones</NavLink>

        <CartWidget/>
       </nav> 
       
    )    
}


export default NavBar