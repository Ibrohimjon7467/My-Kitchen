import { useRef } from 'react'
import { Link } from "react-router-dom"
import useSignup from "../hooks/useSignup"

function Signup() {

  const displayName = useRef()
  const email = useRef()
  const password = useRef()
  const form = useRef()

  const { signup, error, user } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(displayName.current.value, email.current.value, password.current.value)

    form.current.reset()
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 p-3 mt-5">
      <h2 className="text-2xl mb-7">Sign up</h2>
      <form className="flex flex-col gap-5" ref={form} onSubmit={handleSubmit}>
        <label className="flex flex-col gap-3">
          <span>Name:</span>
          <input ref={displayName} type="text" className="bg-slate-200 text-xs px-3 py-2" placeholder="Enter your name" />
        </label>
        <label className="flex flex-col gap-3">
          <span>Email:</span>
          <input ref={email} type="email" className="bg-slate-200 text-xs px-3 py-2" placeholder="Enter your email" />
        </label>
        <label className="flex flex-col gap-3">
          <span>Password:</span>
          <input ref={password} type="password" className="bg-slate-200 text-xs px-3 py-2" placeholder="Enter your password" />
        </label>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs mb-4">
          Sign up
        </button>
        <p className="text-xs">
          Do you have an account ? &nbsp;<Link className="text-slate-600 hover:underline" to="/login" >Log in</Link>
          {/* <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-2 rounded text-xs">Log in</button> */}
        </p>
      </form>
    </div>
  )
}

export default Signup