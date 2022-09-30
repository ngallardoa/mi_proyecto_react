import React from "react";
import { BsShopWindow } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
    return(
        <>
            <NavLink to="/cart">
                <BsShopWindow />
            </NavLink>
        </>
    )
}

export { CartWidget };