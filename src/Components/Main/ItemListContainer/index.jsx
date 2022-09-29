import { Heading, Text, Box } from "@chakra-ui/react";
import { products } from "../../../Utils/products";
import { ItemList } from "./ItemList";
import { customFetch } from "../../../Utils/customFetch";
import { useState, useEffect } from "react";
import { ItemCount } from "../ItemDetailContainer/ItemDetail/ItemCount";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {

    const [listProduct, setListProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoria } = useParams()
    console.log(categoria)

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                if (categoria) {
                    setLoading(false)
                    setListProduct(res.filter(prod => prod.categoria === categoria))
                }
                else {
                    setLoading(false)
                    setListProduct(res)
                }
            })
    }, [categoria])

    return(
        <>
            <Heading textAlign={[ 'left', 'center' ]} p={5}>{saludo}</Heading>
            {
            !loading
            ?
            <Box display="flex">
                <ItemList listProduct={listProduct}/>
            </Box>
            :
            <Text>...Cargando...</Text>
            }
        </>
    )
}

export { ItemListContainer };