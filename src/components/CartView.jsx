import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import '../assets/css/CartView.css'

import { Link } from "react-router-dom";

const CartView = () => {
    const {cart, removeItem, clear, total} = useContext(CartContext)
    return (

<div className="fade-in pb-4">
    <h1>Tu carrito</h1>

    <div className="carrito-table-wrapper">
    <table className="carrito-table">
        <thead>
            <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
            </tr>
        </thead>

        <tbody>
            {cart.map((compra) => (
                <tr key={compra.id} className="cart-item">
                    <td className="cart-img">
                        <img src={compra.img} alt={compra.name} width="60" />
                    </td>

                    <td className="cart-name">{compra.name}</td>

                    <td className="cart-price">${compra.price}</td>

                    <td className="cart-qty">{compra.quantity}</td>

                    <td  className="cart-subtotal">${compra.price * compra.quantity}</td>

                    <td className="cart-actions">
                        <button className="btn" onClick={() => removeItem(compra.id)}>
                            X
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>

    {/* Total + botones */}
    <div className="carrito-footer">
        <span>
            <strong>Total a pagar:</strong> $ {total()}
          
        </span>

        <button className="btn" onClick={clear}>Vaciar carrito</button>
        
        <Link to='/checkout' className="btn">Terminar compra</Link>
    </div>
</div>
    )
}

export default CartView