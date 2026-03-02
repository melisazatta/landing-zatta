import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (
        <div>
            <h1>Tu carrito está vacío!</h1>
            <h2>Te invitamos a ver nuestros productos</h2>
            <Link to='/' className="" >Ir a comprar</Link>
        </div>
    )
}

export default EmptyCart