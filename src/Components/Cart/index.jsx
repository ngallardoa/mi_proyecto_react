import { Box, Text, Flex, Button, VStack } from "@chakra-ui/react"
import { useCartContext } from "../../Context/cartContext"

const Cart = () => {

    const { totalPrice, cartList, removeProduct, clearCart } = useCartContext()

    return(
        <>
            <VStack>
                <Flex m={4} justify="center" border="2px" borderColor="gray.200">
                    <Box m={4} justify="center">Descripción del producto</Box>
                    <Box m={4} justify="center">Cantidad</Box>
                    <Box m={4} justify="center">Precio</Box>
                </Flex>
                    {cartList.map(products =>
                        <Flex m={4} justify="center" border="2px" borderColor="gray.200">
                            <Flex key={products.id}>
                                <Text m={8}>{products.nombreProducto}</Text>
                                <Text m={8}>{products.quantity}</Text>
                                <Text m={8}>$ {products.quantity * products.precio}</Text>
                                <Button m={8} onClick={() => removeProduct(products.id)}>Quitar del carrito</Button>
                            </Flex>    
                        </Flex>
                    )}
                {cartList.length === 0 ?
                    <Flex m={4} justify="center" border="2px" borderColor="gray.200">
                        <Text>El carrito está vacío</Text>
                    </Flex>
                    :
                    <>
                        <Flex m={4} align="center" justify="center" border="2px" borderColor="gray.200">
                            <Box m={4} justify="center">Total del carrito: $ {totalPrice()}</Box>
                            <Button m={4} justify="center" onClick={clearCart}>Limpiar carrito</Button>
                        </Flex>
                    </>
                }
            </VStack>
        </>
    )
}

export { Cart } 