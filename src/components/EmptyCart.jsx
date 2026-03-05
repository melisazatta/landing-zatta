import React from "react";
import { Link } from "react-router-dom";
import Carrovacio from "../assets/carro-vacio.png"


const EmptyCart = () => {
    return (
        <div>
            <h1>Tu carrito está vacío!</h1>
            <h2 className="text-center px-3">Te invitamos a ver nuestros productos</h2>

             <img 
                    src={Carrovacio} 
                    alt="Carro vacío" 
                     className="img-fluid carro-vacio d-block mx-auto"/>

             <div className="d-flex justify-content-center">
            <Link to='/' className="btn" >Ir a comprar</Link>
        </div>
        </div>
    )
}

export default EmptyCart