import { createContext, useReducer } from "react"

export const GlobalContext = createContext()

const reduser = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case "LOGIN":
      return { ...state, user: payload }
    case "LOGOUT":
      return { ...state, user: null }
    case "IS_AUTH_CHANGE":
      return { ...state, isAuthChange: true }
    default:
      return state;
  }
}

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(reduser, {
    user: null,
    isAuthChange: false,
  })

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
