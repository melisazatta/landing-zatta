import ItemCount from "./ItemCount"
import "../assets/css/ItemDetail.css"
import { CartContext } from "../context/CartContext"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"


const ItemDetail = ({detail}) => {
    const {addItem} = useContext(CartContext)
    const [purchase, SetPurchase] = useState(false)

    const onAdd = (cantidad) => {
        addItem(detail, cantidad)
        SetPurchase(true)
    }

    return (
        <div className="item-detail fade-in">
            <h1> Detalle: {detail.name}</h1>   
            <img src={detail.img} alt={detail.name} />  
            <p>{detail.description}</p>
            <p>${detail.price}</p> 
            <p>Stock disponible: {detail.stock}</p>

            {purchase ? <Link to= '/cart' className="btn-ir">Ir al carrito</Link> :  <ItemCount stock={detail.stock} onAdd={onAdd}></ItemCount>
            }
            
            </div>
           
    )
}

export default ItemDetail