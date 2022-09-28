import Logo from "../../../Images/Logo.jpg";
import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, HStack, Spacer, Link, Box, Button } from '@chakra-ui/react'

const Navbar = () => {
    return(
        <HStack p={2} bgGradient="linear(to-t, red.100, red.500)">
            <NavLink to="/" >
                <img src={Logo} alt="" width={80} />
            </NavLink>
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
                <Menu>
                    <MenuButton p={2}>
                        Categorías
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <NavLink to="categoria/Exámenes">
                                <Link>Exámenes internacionales</Link>
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="categoria/Jóvenes">
                                <Link>Jóvenes</Link>
                            </NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="Categoria/Otros">
                                <Link>Otros</Link>
                            </NavLink>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
            <HStack>
                <CartWidget m={2} />
            </HStack>
        </HStack>
    )
}

export { Navbar };

