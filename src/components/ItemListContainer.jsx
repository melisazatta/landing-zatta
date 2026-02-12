import { useEffect, useState } from 'react'
import '../assets/css/ItemListContainer.css'
import ItemList from './ItemList'
import { getProducts } from '../mock/asyncMock'
import { useParams } from 'react-router-dom'


const ItemListContainer = (props) => {
    const [data, setData] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getProducts()
        .then((res) => {
            if(type){
                setData(res.filter((prod)=> prod.category === type))
            }else{
                setData(res)
            }
        })
        .catch((error) => console.error(error))
    },[type])
    console.log(data)
    return (
        <div>
             <h1>{props.mensaje}{type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            {/* {data.map((producto) => <p key={producto.id}>{producto.name}</p>)} */}
            <ItemList data = {data}/>

        </div>
    )
}

export default ItemListContainer