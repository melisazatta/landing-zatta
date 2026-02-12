import { useEffect, useState } from "react"
import { getOneProduct } from "../mock/asyncMock"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})

    const { id } = useParams() 

    useEffect(() => {
        getOneProduct(id)
        .then((res) => setDetail(res))
        .catch((err) => console.error(err))
    }, [id])

    return (
        <div>
            <ItemDetail detail = {detail} />
        </div>
    )
}

export default ItemDetailContainer