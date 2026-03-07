
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import EmptyCart from "./EmptyCart";
import { db } from "../service/firebase";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Compraok from "../assets/compra-ok.png"
import { useForm } from "react-hook-form";


const Checkout = () => {

    const { cart, total, clearCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const {register, handleSubmit, formState:{errors}, getValues}=useForm()

    const terminarCompra = (data) => {
        let {name, lastname, address, email} = data
             setLoading(true)
             let order = {
                comprador: {name, lastname, address, email},
                carrito: cart,
                 total: total(),
                 fecha: serverTimestamp()
             }
             const orderCollection = collection(db, "orders")

             addDoc(orderCollection, order)
                 .then(async(res) => {
                     for (const prod of cart){
                        const productRef = doc(db, "productos", prod.id)
                         await updateDoc(productRef, {
                             stock: prod.stock - prod.quantity
                         })
                     }
                     setOrderId(res.id)
                     clearCart()
                 }).catch((error) => console.log(error))
                 .finally(() => setLoading(false))
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

                     <img src={Compraok} alt="Compra realizada con éxito"  className="compra-ok img-fluid d-block mx-auto p-3" style={{width: "550px",height: "auto",borderRadius: "10rem",backgroundColor: "transparent"}}/>

                    <h3 className="text-center m-5">Tu orden es: {orderId}</h3>

                     <div className="d-flex justify-content-center">
                         <Link className="btn" to='/'>Volver al Home</Link>
                     </div>
                    </div>
                    :
                    <div>
                        <h1>Complete sus datos</h1>

                        <Form className="form m-5" onSubmit={handleSubmit(terminarCompra)}>

                         <Form.Group className="mb-3">
                            <Form.Control type="text" name="name" placeholder="Ingrese su nombre" {...register('name', {required: true, minLength: 3})}/>
                                 {errors?.name?.type === "required" && <small style={{color: 'red'}}>Debe ingresar un nombre.</small>}
                                 {errors?.name?.type === "minLength" && <small style={{color: 'red'}}>El nombre debe contener mínimo 3 caracteres.</small>}
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="text" name="lastname" placeholder="Ingrese su apellido" {...register('lastname', {required: true, minLength: 2})}/>
                                 {errors?.lastname?.type === "required" && <small style={{color: 'red'}}>Debe ingresar su apellido.</small>}
                                 {errors?.lastname?.type === "minLength" && <small style={{color: 'red'}}>El apellido debe contener mínimo 2 caracteres.</small>}
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="text" name="address" placeholder="Ingrese su dirección" {...register('address', {required: true, minLength: 5, maxLength: 20})}/>
                                 {errors?.address?.type === "required" && <small style={{color: 'red'}}>Debe ingresar una dirección válida.</small>}
                                 {errors?.address?.type === "minLength" && <small style={{color: 'red'}}>La dirección debe contener mínimo 5 caracteres.</small>}
                                 {errors?.address?.type === "maxLength" && <small style={{color: 'red'}}>La dirección debe contener máximo 20 caracteres.</small>}
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="email" name="email" placeholder="Ingrese su mail" {...register('email', {required: true, minLength: 5})}/>
                                 {errors?.email?.type === "required" && <small style={{color: 'red'}}>Debe ingresar un email válido.</small>}
                                 {errors?.email?.type === "minLength" && <small style={{color: 'red'}}>El email debe contener mínimo 5 caracteres.</small>}
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control type="email" name="secondMail" placeholder="Repita su mail" {...register('secondMail', {required: true, validate:{equalsEmails: mail2 => mail2 === getValues().email}})}/>
                                 {errors?.secondMail?.type === "required" && <small style={{color: 'red'}}>Debe completar el campo.</small>}
                                 {errors?.secondMail?.type === "equalsEmails" && <small style={{color: 'red'}}>Los correos no coinciden.</small>}
                            </Form.Group>

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