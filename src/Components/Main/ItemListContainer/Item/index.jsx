import { Text, Box, Button, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
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
                <Box p={2} align="center">
                    <Button>
                        <NavLink to={`products/${products.id}`}>
                            <Link>Ver detalle</Link>
                        </NavLink>
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export { Item }