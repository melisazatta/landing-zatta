import { useEffect, useState } from 'react'
import '../assets/css/ItemListContainer.css'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemListContainer = (props) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const {type} = useParams()


    useEffect(() => {
        setLoading(true)
        const prodCollection = type ? query(collection (db, "productos"), where("category", "==", type) ) : collection (db, "productos")
        getDocs(prodCollection)
        .then((res) =>{
            const list = res.docs.map((doc)=> {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            setData(list)
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, [type])

    return (
        <>
        { loading ? <Loader/> :
             <div>

             <h1>{props.mensaje}{type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
          
            <ItemList data = {data}/>

        </div>
        
        }
        </>
    )
}

export default ItemListContainer