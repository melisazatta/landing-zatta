import { useEffect, useState } from "react"
import "../assets/css/ItemCount.css"

const ItemCount = ({stock, onAdd})=> {
const [count, setCount]= useState(1)

const sumar = ()=> {
    if(count < 50){
        setCount(count + 1)
    }
}

const restar= ()=> {
    if(count > 0){
        setCount(count - 1)
    }
}

// const purchase = ()=> {
//     onAdd(count)
// }

    return(
      <div className="counter-container">
  <div className="counter-controls">
    <button className="btn-menos" onClick={restar}>-</button>

    <span className="counter-value">{count}</span>

    <button className="btn-mas" onClick={sumar}>+</button>
  </div>

  {/* <button className="btn btn-primary buy-btn" onClick={purchase}>
    Comprar
  </button> */}
   <button className="btn-buy" onClick={()=>onAdd(count)} disabled= {count === 0 || stock === 0}>
    Comprar
  </button>
</div>

    )
}
export default ItemCount