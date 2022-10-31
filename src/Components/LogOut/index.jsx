import { Box, Button, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useSessionContext } from "../../Context/sessionContext";

export function LogOut() {

    const { logOut, user } = useSessionContext();
    const navigate = useNavigate();
    const handleLogOut = async () => {
            await logOut()
            navigate("/");
            swal("Adiós!")
    };

    return(
        <>
            <Box>
                <Button onClick={handleLogOut}>Cerrar sesión</Button>
            </Box>
        </>
    )
}