import { Box, Text, Flex, Button, VStack, Input, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import { useCartContext } from "../../Context/cartContext";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import { db } from "../../Firebase/firebase";
import swal from "sweetalert";

const CartCheckout = () => {

    const { totalPrice, cartList, clearCart } = useCartContext();
    const [compraID, setCompraID] = useState("");
    const customerInfo = {
        name: "",
        lastName: "",
        mail: "",
    };
    const [customerData, setCustomerData] = useState(customerInfo);
    const order = {
        customer: customerData,
        items: cartList.map(products => ({
            id: products.id,
            precio: products.precio,
            cantidad: products.quantity,
        })),
        total: totalPrice(),
        date: serverTimestamp()
    }
    const getCustomerData = (e) => {
        const {name, value} = e.target;
        setCustomerData({...customerData, [name]: value});
    }
    const confirmPurchase = (e) => {
        e.preventDefault();
        const salesCollection = collection(db, "ventas");
        addDoc(salesCollection, order)
        .then (result => {
            setCompraID(result.id);
            cartList.forEach(products => {
                actualizarStock(products)
            });
            clearCart();
            setCustomerData(customerInfo);
        })
    }

    const actualizarStock = (product) => {
        const updateStock = doc(db, "productsList", product.id);
        updateDoc(updateStock, {stock: (product.stock - product.quantity)})
    }

    return(
        <>
            {cartList.length !== 0?
                <VStack m={4} align="center" justify="center">
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
                                </Flex>    
                            </Flex>
                        )}
                            <Flex m={4} align="center" justify="center" border="2px" borderColor="gray.200">
                                <Box m={4} justify="center">Total del carrito: $ {totalPrice()}</Box>
                            </Flex>
                    <Input placeholder="Nombre" name="name" onChange={getCustomerData} />
                    <Input placeholder="Apellido" name="lastName" onChange={getCustomerData} />
                    <Input placeholder="Mail" name="mail" onChange={getCustomerData} />
                    <Button colorScheme='blue'onClick={confirmPurchase}>Confirmar compra</Button>
                </VStack>
            :
                <VStack m={4} align="center" justify="center">
                    <Box><Text>Su número de operación es: {compraID}</Text></Box>
                    <Box><Text>Felicitaciones por tu compra!</Text></Box>
                </VStack>
            }
        </>
    )

}

export { CartCheckout }