import { useEffect, useState } from "react";
import { ItemDetail } from "../../Main/ItemDetailContainer/ItemDetail";
import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { db } from "../../../Firebase/firebase";
import { getDoc, doc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [listProductDetail, setListProductDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {

        const productsCollection = collection(db, "productsList");
        const refDoc = doc(productsCollection, id);

        getDoc(refDoc)
        .then((res) => {
            setListProductDetail(
                {
                    id: res.id,
                    ...res.data(),
                }
            )
        })
        .catch(() => {
            setError(true);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])

    return(
        <>
            {
                loading ? (
                    <Text>...Cargando...</Text>
                ) : error ? (
                    <Text>...Ocurrió un error...</Text>
                ) : (
                    <Box display="flex" justifyContent="center">
                        <ItemDetail listProductDetail={listProductDetail}/>
                    </Box>
                )
            }
        </>
    )
}

export { ItemDetailContainer }