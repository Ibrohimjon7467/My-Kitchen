import { useRef } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin'

function Login() {

  const email = useRef()
  const password = useRef()
  const form = useRef()

  const { user, login, error } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email.current.value, password.current.value)

    form.current.reset()
  }

  if (error) {
    toast.warning("Error in email or password")
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 p-3 mt-5">
      <h2 className="text-2xl mb-7">Log in</h2>
      <form onSubmit={handleSubmit} ref={form} className="flex flex-col gap-5">
        <label className="flex flex-col gap-3">
          <span>Email:</span>
          <input ref={email} type="email" className="bg-slate-200 px-3 py-2 text-xs" placeholder="Enter your email" />
        </label>
        <label className="flex flex-col gap-3">
          <span>Password:</span>
          <input ref={password} type="password" className="bg-slate-200 text-xs px-3 py-2" placeholder="Enter your password" />
        </label>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs mb-4">
          Log in
        </button>
      </form>
      <p className="text-xs text-center">
        If you don't have an account, please &nbsp;<Link className="text-slate-600 hover:underline" to="/signup" >Sign up</Link>
      </p>
    </div>
  )
}

export default Login