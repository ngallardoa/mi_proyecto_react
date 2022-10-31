import { createContext, useState, useContext, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";

const SessionContext = createContext([]);

// export const useAuth = () => {
    
//     const authSessionContext = useContext(SessionContext);

//     return(
//         <>
//             {!authSessionContext? console.log("No hay auth provider") : console.log(authSessionContext)}
//         </>
//     )
// };

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