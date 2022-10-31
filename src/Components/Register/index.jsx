import { Box, Button, Input } from "@chakra-ui/react";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useSessionContext } from "../../Context/sessionContext";

export function Register() {

    const [user, setUser] = useState({
        email:"",
        password:"",
    });
    const { signUp } = useSessionContext();
    // const { signUp } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState();
    const [enteredText, setEnteredText] = useState(); 
    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(user.email, user.password)
            console.log(user)
            navigate("/");
            setEnteredText('');
        } catch (error) {
            setError(error.message);
        }
    };

    return(
        <>
            <Box>
                <Input type="email" name="email" placeholder="email@dominio.com" value={enteredText} onChange={handleChange} />
                <Input type="password" name="password" placeholder="********" value={enteredText} onChange={handleChange} />
                <Button onClick={handleSubmit}>Registrarse</Button>
            </Box>
            {error && <Box>{error}</Box>}
        </>
    )
}