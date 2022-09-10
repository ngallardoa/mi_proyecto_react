import React from "react";
import { Heading } from "@chakra-ui/react";
import { ItemCount } from "./ItemCount";

const ItemListContainer = ({ saludo }) => {
    return(
        <>
        <Heading textAlign ={[ 'left', 'center' ]} p={5}>{saludo}</Heading>
        <ItemCount inicial={1} stock={5} p={5} onAdd={() => (console.log(""))} />
        </>
    )
}

export { ItemListContainer };