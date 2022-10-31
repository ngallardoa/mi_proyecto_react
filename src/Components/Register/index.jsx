import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionContext } from "../../Context/sessionContext";

export function Register() {

    const [user, setUser] = useState({
        email:"",
        password:"",
    });
    const { signUp } = useSessionContext();
    const navigate = useNavigate();
    const [error, setError] = useState();
    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(user.email, user.password)
            navigate("/");
            e.target.value = "";
        } catch (error) {
            setError(error.message);
        }
    };

    return(
        <>
            <Box>
                <Input type="email" name="email" placeholder="email@dominio.com" onChange={handleChange} />
                <Input type="password" name="password" placeholder="********" onChange={handleChange} />
                <Button onClick={handleSubmit}>Registrarse</Button>
            </Box>
            {error && <Box>{error}</Box>}
        </>
    )
}