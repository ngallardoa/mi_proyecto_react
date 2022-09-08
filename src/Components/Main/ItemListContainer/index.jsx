import React from "react";
import { Heading } from "@chakra-ui/react";

const ItemListContainer = ({ saludo }) => {
    return(
        <Heading textAlign ={[ 'left', 'center' ]} p={5}>{saludo}</Heading>
    )
}

export { ItemListContainer };