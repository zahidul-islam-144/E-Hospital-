import { useEffect, useState } from "react"
import initializeAuthentication from '.././firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    let auth = getAuth()

    /* ==========================
        Google Sign section code
       ========================== 
    */
    
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
       signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = (result.user);
                setUser(user);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    
    /* ====================================
        Email & Password Auth section code
       ====================================
    */
    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
        const user = result.user;
        console.log(user);
        })
        console.log(email,password);
    }
    const login = (email, password) => {
        console.log(email,password);
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
    }

// common part 

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);


    return{
        signInUsingGoogle,
        error, 
        user,
        signup,
        login,
        logout
    }
}

export default useFirebase;