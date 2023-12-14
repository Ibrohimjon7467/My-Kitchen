import { useState } from "react"
import { toast } from 'react-toastify'
import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebaseConfig"
import { useGlobalContext } from './useGlobalContext'

function useLogout() {

  const [error, setError] = useState()
  const { dispatch } = useGlobalContext()

  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: 'LOGOUT' })
      })
      .catch((error) => {
        setError("Something went wrong :(")
        toast.error("Something went wrong :(")
      })
  }

  return { logout, error }
}

export default useLogout