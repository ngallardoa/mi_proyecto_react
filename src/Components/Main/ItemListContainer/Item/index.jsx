import { Text, Box, Grid, Flex } from "@chakra-ui/react";
import "./index.css";

const Item = ({ products }) => {

    return(
        <>
            <Box p={5} m={5} justify="center" border="2px" borderColor="gray.200">
                <Box align="center" className="cards">
                    <img className="cards-img" src={require(`../../../../../public/productImages/${products.image}`)} alt="" width="400px"/>
                </Box>
                <Box align="center" className="cards">
                    <Text>{products.nombreProducto}</Text>
                    <Text>$ {products.precio}</Text>
                </Box>
            </Box>
        </>
    )
}

export { Item }