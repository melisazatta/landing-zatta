import { useEffect, useState } from 'react'
import '../assets/css/ItemListContainer.css'
import ItemList from './ItemList'
import { getProducts } from '../mock/asyncMock'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../service/firebase'

import { productos } from '../mock/asyncMock'
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
    //Promise
    // useEffect(() => {
    //     setLoading(true)
    //     getProducts()
    //     .then((res) => {
    //         if(type){
    //             setData(res.filter((prod)=> prod.category === type))
    //         }else{
    //             setData(res)
    //         }
    //     })
    //     .catch((error) => console.error(error))
    //     .finally(()=>
    //         setLoading(false)
    //     )
    // },[type])
    // console.log(data)



    //SUBIR DATA

    const subirData = () => {
        console.log('subiendo data')
        const prodASubir = collection (db, 'productos')
        productos.map((prod)=> addDoc(prodASubir, prod))
    }

    return (
        <>
        { loading ? <Loader/> :
             <div>

                {/* <button onClick={subirData}>SUBIR DATA</button> */}


             <h1>{props.mensaje}{type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            {/* {data.map((producto) => <p key={producto.id}>{producto.name}</p>)} */}
            <ItemList data = {data}/>

        </div>
        
        }
        
        </>

    )
}

export default ItemListContainer