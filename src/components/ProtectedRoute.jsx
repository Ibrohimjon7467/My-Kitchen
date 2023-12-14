import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children, user }) {
  if (user) {
    return children
  } else {
    return <Navigate to="/login" />
  }

}

export default ProtectedRoute