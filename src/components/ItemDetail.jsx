import ItemCount from "./ItemCount"
import "../assets/css/ItemDetail.css"
import { CartContext } from "../context/CartContext"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"

import Swal from 'sweetalert2'


const ItemDetail = ({detail}) => {
    const {addItem} = useContext(CartContext)
    const [purchase, SetPurchase] = useState(false)

    const onAdd = (cantidad) => {
        const agregado = addItem(detail, cantidad)

        if(agregado){
        SetPurchase(true)
            Swal.fire({
            title: "Producto agregado",
            text: "El producto se agregó al carrito",
            icon: "success",
            confirmButtonColor: "#774f38",
            background: "#ece5ce",
            color: '#774f38'
        })

        }        
    }
    const {isInCart} = useContext(CartContext)
    const itemEnCarrito = isInCart(detail.id)
    const cantidadEnCarrito = itemEnCarrito ? itemEnCarrito.quantity : 0

    const stockRestante = (detail.stock || 0) - cantidadEnCarrito

    return (
        <div className="item-detail fade-in">
            <h1> Detalle: {detail.name}</h1>   
            <img src={detail.img} alt={detail.name} />  
            <p>{detail.description}</p>
            <p>${detail.price}</p> 
            <p>Stock disponible: {stockRestante}</p>

            {purchase ? <Link to= '/cart' className="btn-ir">Ir al carrito</Link> :  <ItemCount stock={detail.stock} onAdd={onAdd}></ItemCount>
            }
            
            </div>
           
    )
}

export default ItemDetail