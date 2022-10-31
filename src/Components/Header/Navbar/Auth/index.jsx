import { Button } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { useSessionContext } from "../../../../Context/sessionContext";
import { LogOut } from "../../../LogOut";

/*Nuestra los botones de inicio sesión, registro y cerrar sesión dependiendo del status del usuario en relación a autenticación*/

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