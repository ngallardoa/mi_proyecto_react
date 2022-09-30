import { Box, Text, Button } from "@chakra-ui/react"
import { useState } from "react"
import { ItemCount } from "./ItemCount"
import { NavLink } from "react-router-dom"
import swal from "sweetalert"
import "./index.css"

const ItemDetail = ({ listProductDetail }) => {

    const [isAdded, setIsAdded] = useState(false);
    const onAdd = () => {
        setIsAdded(true);
        swal("Agregado al carrito!");
    }

    return(
        <Box p={5} m={5} justify="center" border="2px" borderColor="gray.200">
            <Box align="center" className="detail">
                <Text p={5} m={5}>{listProductDetail.nombreProducto}</Text>
                <Text p={5} m={5}>$ {listProductDetail.precio}</Text>
            </Box>
            <Box align="center" className="detail">
                <Button>
                    {                   
                        isAdded ?
                        <NavLink to="/cart">
                            Ir al carrito
                        </NavLink>
                        :
                        <ItemCount inicial={1} stock={5} p={5} onAdd={onAdd} />
                    }
                </Button>
            </Box>
        </Box>
        
    )

}

export { ItemDetail }