import { createContext, useState, useContext, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";

/*Context para el servicio de autenticación*/

const SessionContext = createContext([]);

export const useSessionContext = () => useContext(SessionContext);

export function SessionContextProvider({ children }) {

    const [user, setUser] = useState(null);
    const signUp = async (email, password) => {

        await createUserWithEmailAndPassword(auth, email, password)

    };
    const logIn = async (email, password) => {

        await signInWithEmailAndPassword(auth, email, password)

    };

    const logOut = async () => {
        signOut(auth)
    };

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
    }, [])

    return(
        <SessionContext.Provider value={{
            signUp, logIn, logOut, user
        }}>
            {children}
        </SessionContext.Provider>
    )

};