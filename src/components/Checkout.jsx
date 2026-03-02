import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import EmptyCart from "./EmptyCart";
import { db } from "../service/firebase";

const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [secondMail, setSecondMail] = useState('')
    const {cart, total, clear} = useContext(CartContext)
    const [orderId, setOrderId] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const buyerData = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )

    }
console.log(buyer)

const terminarCompra = (e) => {
    e.preventDefault()
    if(!buyer.name || !buyer.lastname || !buyer.mail || !buyer.address || !secondMail){
        setError('Por favor complete todos los datos.')
    }else if(buyer.mail !== secondMail){
        setError('Los mails ingresados no coinciden.')
    }else{
        setError(null)
        setLoading(true)
        let order = {
        comprador: buyer,
        carrito: cart,
        total: total(),
        fecha: serverTimestamp()
    }
    const orderCollection = collection(db, "orders")

    addDoc(orderCollection, order)
    .then((res)=> {
        setOrderId(res.id)
        clear()
    }).catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
    }
  
}
if (!cart.length && !orderId){
    return <EmptyCart/>
}
    return (
        <>

        {
            orderId ? 
            <div>
                <h2>Muchas gracias por tu compra!</h2>
                <h3>Su orden es: {orderId}</h3>
                <Link className="btn" to='/'>Volver al Home</Link>
            </div>
        
        :
        <div>

            <h1>Complete sus datos</h1>

            {error && <span>{error}</span>}

            <form className="form" onSubmit={terminarCompra}>
           <input className="form" name="name" type="text" placeholder="Ingrese su nombre" onChange={buyerData}/>
           <input className="form" name="lastname" type="text" placeholder="Ingrese su apellido" onChange={buyerData}/>
           <input className="form" name="address" type="text" placeholder="Ingrese su dirección" onChange={buyerData}/>
           <input className="form" name="mail" type="email" placeholder="Ingrese su mail" onChange={buyerData}/>
           <input className="form" name="secondMail" type="email" placeholder="Repita su mail" onChange={(e)=> setSecondMail(e.target.value)}/>
           <button type="submit" className="btn" disabled={loading}>{loading ? 'Procesando compra' : 'Enviar compra'}</button>
           </form>
        </div>
        }
        </>
    )
}

export default Checkout