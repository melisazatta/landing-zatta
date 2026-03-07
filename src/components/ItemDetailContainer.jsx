import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

import Loader from "./Loader"

import { doc, getDoc } from "firebase/firestore"
import { db } from "../service/firebase"

import { Link } from "react-router-dom"

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const [cargando, setCargando] = useState(true)
    const [invalid, setInvalid] = useState(null)

    const { id } = useParams() 

    useEffect(() => {
        const docRef = doc(db, "productos", id)
        getDoc(docRef)
         .then((res) => {
            if(res.data()){
                setDetail({id:res.id, ...res.data()})
            }else{
                setInvalid(true)
            }
         })
         .catch((err) => console.error(err))
         .finally(()=> setCargando(false))
    }, [id])

    if(invalid){
        return(
            <div>
                <h2>El producto no existe!</h2>
                <Link to='/'>Volver a Home</Link>
            </div>
        )
    }
    return (
        <div>
            { cargando ? <Loader/> :  <ItemDetail detail = {detail} /> }
           
        </div>
    )
}

export default ItemDetailContainer