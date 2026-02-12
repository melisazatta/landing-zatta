import ItemCount from "./ItemCount"
import "../assets/css/ItemDetail.css"
const ItemDetail = ({detail}) => {

    return (
        <div className="item-detail">
            <h1> Detalle: {detail.name}</h1>   
            <img src={detail.img} alt="{detail.name}" />  
            <p>{detail.description}</p>
            <p>${detail.price}</p> 
            <p>Stock disponible: {detail.stock}</p>  <ItemCount stock = {detail.stock}/>
            </div>
           
    )
}

export default ItemDetail