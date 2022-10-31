import { Button } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSessionContext } from "../../../../Context/sessionContext";
import { LogOut } from "../../../LogOut";

const Auth = () => {

    const { user } = useSessionContext();

    return(
        <>
        {
            (user === null)?
            <>
            <NavLink to="/LogIn">
                <Button>Iniciar sesión</Button>
            </NavLink>
            <NavLink to="/Register">
                <Button>Registrarse</Button>
            </NavLink>
            </>
            :
            <LogOut />
        }
        </>
    )

}

export { Auth };