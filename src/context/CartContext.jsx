import { createContext, useEffect } from "react";
import { useState } from "react";

import Swal from 'sweetalert2'


export const CartContext = createContext()

const carritoLS = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(carritoLS)

    useEffect(()=> {
        localStorage.setItem('carrito',JSON.stringify(cart))
    },[cart])

    const addItem = (item, qty) => {
        if(isInCart(item.id)){
        setCart(cart.map((prod)=> {
          if(prod.id === item.id){
        return {
            ...prod, quantity: prod.quantity + qty
        }
    }else {
        return prod
    }
    }))        
     }else{
            setCart([...cart, {...item, quantity:qty}])
       }
    }

    const clear = () => {
        Swal.fire({
            background: "#ece5ce",
    title: "¿Vaciar carrito?",
    text: "Se eliminarán todos los productos",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#774f38",
    cancelButtonColor: "#999",
    confirmButtonText: "Sí, vaciar",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      setCart([])
      Swal.fire({
        title: "Carrito vacío",
        icon: "success",
        background: "#ece5ce",
        confirmButtonColor: "#774f38"
      })
    }
  })
        
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
         Swal.fire({
    toast: true,
    position: "top-end",
    icon: "info",
    title: "Producto eliminado",
    showConfirmButton: false,
    timer: 1500
  })
    }

    const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id)
    }

    const total = () => {
        return cart.reduce((acc, prod) => (acc += prod.price * prod.quantity), 0)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, clear, removeItem, isInCart, total, cartQuantity}}>
            {children}
        </CartContext.Provider>
    )
}