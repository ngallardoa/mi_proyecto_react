import { VStack, Text} from "@chakra-ui/react";

const Item = ({ products }) => {

    return(
        <VStack p={7} display="flex" alignItems="center" justifyContent="center">
            <Text>{products.nombreProducto}</Text>
            <Text>${products.precio}</Text>
        </VStack>
    )
}

export { Item }