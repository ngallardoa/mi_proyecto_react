import { HStack, Spacer, Link, Box } from "@chakra-ui/react";
import Logo from "../../../Images/Logo.jpg";
import { CartWidget } from "./CartWidget";

const Navbar = () => {
    return(
        <HStack p={2} bgGradient="linear(to-t, red.100, red.500)">
            <img src={Logo} alt="" width={80} />
            <Spacer />
            <HStack>
                <Box fontSize={32}>Instituto English Everywhere</Box>
            </HStack>
            <Spacer />
            <HStack>
                <Link p={2}>Inicio</Link>
                <Link p={2}>Quiénes somos</Link>
                <Link p={2}>Nuestros cursos</Link>
                <Link p={2}>Contacto</Link>
            </HStack>
            <HStack>
                <CartWidget m={2} />
            </HStack>
        </HStack>
    )
}

export { Navbar };

