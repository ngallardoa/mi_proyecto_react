import { Heading, Text, Box } from "@chakra-ui/react";
import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../Firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useSessionContext } from "../../../Context/sessionContext";

const ItemListContainer = () => {

    const [listProduct, setListProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();
    const [error, setError] = useState(false);
    const { user } = useSessionContext();

    useEffect(() => {

        const productsCollection = collection(db, "productsList");
        const q = query(productsCollection, where("categoria", "==", `${categoria}`));
        let mostrarProductos = !categoria ? productsCollection : q;

        getDocs(mostrarProductos)
        .then((data) => {
            const lista = data.docs.map((product) => {
                return {
                    ...product.data(),
                    id: product.id
                }
            })
            setListProduct(lista)
        })
        .catch(() => {
            setError(true);
        })
        .finally(() => {
            setLoading(false);
        })
    }, [categoria])

    return(
        <>
            {
            (user === null)? (<Heading textAlign={[ 'left', 'center' ]} p={5}>Bienvenidx a la tienda</Heading>)
            :
            (<Heading textAlign={[ 'left', 'center' ]} p={5}>Bienvenidx, {user.email}</Heading>)
            }
            <>
            {
                loading ? (
                    <Text>...Cargando...</Text>
                ) : error ? (
                    <Text>...Ocurrió un error...</Text>
                ) : (
                    <Box display="flex">
                        <ItemList listProduct={listProduct}/>
                    </Box>
            )
            }
            </>
        </>
    );
};

export { ItemListContainer };