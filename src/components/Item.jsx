import '../assets/css/Item.css'

import { Link } from 'react-router-dom'

const Item = ({prod}) => {
    return (
        <div className="card">
      <img className="card-img" src={prod.img} alt={prod.name} />

      <div className="card-body">
        <h2 className="card-title">{prod.name}</h2>

        <p className="card-description">{prod.description}</p>

        <p className="card-price">${prod.price}</p>

        <Link to = {'/item/'+prod.id} className="card-btn">Ver mas</Link>

      </div>
    </div>
    )
}

export default Item