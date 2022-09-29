import { useEffect, useState } from "react";
import { customFetch } from "../../../Utils/customFetch";
import { ItemDetail } from "../../Main/ItemDetailContainer/ItemDetail";
import { products } from "../../../Utils/products";
import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ItemCount } from "./ItemDetail/ItemCount";

const ItemDetailContainer = () => {

    const [listProductDetail, setListProductDetail] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProductDetail(res.find(item => item.id === parseInt(id)))
            })
    }, [])

    return(
        <>
            {
            !loading
            ?
            <Box display="flex" justifyContent="center">
                <ItemDetail listProductDetail={listProductDetail}/>
            </Box>
            :
            <Text>...Cargando...</Text>
            }
        </>
    )
}

export { ItemDetailContainer }