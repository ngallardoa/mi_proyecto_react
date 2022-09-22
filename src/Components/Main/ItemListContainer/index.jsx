import { Heading, Text, Box } from "@chakra-ui/react";
import { products } from "../../../Utils/products";
import { ItemList } from "./ItemList";
import { customFetch } from "../../../Utils/customFetch";
import { useState, useEffect } from "react";
import { ItemCount } from "./ItemCount";

const ItemListContainer = ({ saludo }) => {

    const [listProduct, setListProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProduct(res)
            })
    }, [])


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
            <ItemCount inicial={1} stock={5} p={5} onAdd={() => (console.log(""))} />
        </>
    )
}

export { ItemListContainer };