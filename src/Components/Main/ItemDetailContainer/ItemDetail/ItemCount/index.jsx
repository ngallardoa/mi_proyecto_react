import { HStack, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import swal from "sweetalert";

const ItemCount = ({inicial, stock, onAdd}) => {

    const [contador, setContador] = useState(inicial);
    const aumentar = () => contador < stock && setContador(contador + 1);
    const reducir = () => contador > inicial && setContador(contador - 1);
    const agregarAlCarrito = () => {
        swal("Agregado al carrito!");
        console.log(contador);
        setContador(0);
    };

    return(
        <HStack p={7} display="flex" alignItems="center" justifyContent="center">
            <Button onClick={aumentar}>+</Button>
            <Text>{contador}</Text>
            <Button onClick={reducir}>-</Button>
            <Button onClick={onAdd}>Agregar al carrito</Button>
        </HStack>
    )
}

export {ItemCount};