import '../assets/css/NavBar.css'
import CartWidget from './CartWidget'
// import logoSrc from '../../public/favicon.png'

const NavBar = () => {
    return (
       <nav className="nav-container">
        <img className='logo' src={'../favicon.png'} alt="logo-frutilla" />
        
        <a className="productos" href="">Frutos Secos</a>
        <a className="productos" href="">Congelados</a>
        <a className="productos" href="">Semillas</a>
        <a className="productos" href="">Infusiones</a>

        <CartWidget/>
       </nav> 
       
    )    
}


export default NavBar