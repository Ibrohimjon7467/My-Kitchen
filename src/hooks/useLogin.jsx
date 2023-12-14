import { useState } from "react"
import { toast } from 'react-toastify'
import { auth } from "../firebase/firebaseConfig"
import { useGlobalContext } from './useGlobalContext'
import { signInWithEmailAndPassword } from "firebase/auth"

function useLogin() {

    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const { dispatch } = useGlobalContext()

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                dispatch({ type: 'LOGIN', payload: user })
                toast.success("Login completed successfully")
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                setError(errorMessage)
                console.log('ErrorCode: ', errorCode)
                console.log('ErrorMessage: ', errorMessage)
            })
    }

    return { user, login, error }
}

export default useLogin