import { Box, Text } from "@chakra-ui/react"
import "./index.css"

const ItemDetail = ({ listProductDetail }) => {

    console.log(listProductDetail)

    return(
        <Box p={5} m={5} justify="center" border="2px" borderColor="gray.200">
            <Box align="center" className="detail">
                <Text p={5} m={5}>{listProductDetail.nombreProducto}</Text>
                <Text p={5} m={5}>$ {listProductDetail.precio}</Text>
            </Box>
        </Box>
        
    )

}

export { ItemDetail }