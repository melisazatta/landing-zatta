import Item from './Item'
import '../assets/css/ItemList.css'

const ItemList = ({data}) => {
    return (
        <div className='cards-container'>
            {data.map((prod) => <Item key = {prod.id} prod={prod}/>)}
        </div>
    )
}

export default ItemList