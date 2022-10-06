import React from "react";
import { BsShopWindow } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../../../Context/cartContext";
import { Text } from "@chakra-ui/react";

const CartWidget = () => {

    const { totalQuantity } = useCartContext();

    return(
        <>
            <NavLink to="/cart">
                <BsShopWindow />
                <Text>{totalQuantity()}</Text>
            </NavLink>
        </>
    )
}

export { CartWidget };