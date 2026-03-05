import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import EmptyCart from "./EmptyCart";
import { db } from "../service/firebase";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Compraok from "../assets/compra-ok.png"


const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [secondMail, setSecondMail] = useState('')
    const { cart, total, clear } = useContext(CartContext)
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
        if (!buyer.name || !buyer.lastname || !buyer.mail || !buyer.address || !secondMail) {
            setError('Por favor complete todos los datos.')
        } else if (buyer.mail !== secondMail) {
            setError('Los mails ingresados no coinciden.')
        } else {
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
                .then((res) => {
                    setOrderId(res.id)
                    clear()
                }).catch((error) => console.log(error))
                .finally(() => setLoading(false))
        }

    }
    if (!cart.length && !orderId) {
        return <EmptyCart />
    }
    return (
        <>

            {
                orderId ?
                    <div>
                        <h2 className="text-center m-5">Muchas gracias por tu compra!</h2>

                         <img src={Compraok} alt="Compra ok"  className="compra-ok img-fluid d-block mx-auto p-3" style={{width: "550px",height: "auto",borderRadius: "10rem",backgroundColor: "transparent"}}/>

                        <h3 className="text-center m-5">Tu orden es: {orderId}</h3>
                        
                         <div className="d-flex justify-content-center">
                            <Link className="btn" to='/'>Volver al Home</Link>
                            </div>
                    </div>

                    :
                    <div>

                        <h1>Complete sus datos</h1>

                        <Form className="form m-5" onSubmit={terminarCompra}>
                            {/* <input className="form" name="name" type="text" placeholder="Ingrese su nombre" onChange={buyerData} />
                            <input className="form" name="lastname" type="text" placeholder="Ingrese su apellido" onChange={buyerData} />
                            <input className="form" name="address" type="text" placeholder="Ingrese su dirección" onChange={buyerData} />
                            <input className="form" name="mail" type="email" placeholder="Ingrese su mail" onChange={buyerData} />
                            <input className="form" name="secondMail" type="email" placeholder="Repita su mail" onChange={(e) => setSecondMail(e.target.value)} />
                            <button type="submit" className="btn" disabled={loading}>{loading ? 'Procesando compra' : 'Enviar compra'}</button> */}


                            <Form.Group className="mb-3">
                                <Form.Control type="text" name="name" placeholder="Ingrese su nombre" onChange={buyerData}/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="text" name="lastname" placeholder="Ingrese su apellido" onChange={buyerData}/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="text" name="address" placeholder="Ingrese su dirección" onChange={buyerData}/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="email" name="mail" placeholder="Ingrese su mail" onChange={buyerData}/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="email" name="secondMail" placeholder="Repita su mail" onChange={(e) => setSecondMail(e.target.value)}/>
                            </Form.Group>



                        {error && <span className="text-danger fw-bold d-block text-center fs-4">{error}</span>}


                            <Button
                                type="submit" className="btn d-block mx-auto" disabled={loading}> {loading ? "Procesando compra" : "Enviar compra"}
                            </Button>
                        </Form>
                        
                    </div>
            }
        </>
    )
}

export default Checkout