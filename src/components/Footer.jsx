import React from 'react'
import '../assets/css/Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
        <footer className="footer">
            <div className="footer-content">
                <h3 className="footer-title">Dietética</h3>

                <div className="footer-links">
                    <Link to="/">Inicio</Link>
                    <Link to="/contacto">Contacto</Link>
                </div>

                <p className="footer-copy">
                    © {new Date().getFullYear()} Dietética — Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer