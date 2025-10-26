import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const AdminRoute = () => {
  const { user } = useAuth()

  return user?.role === "admin" ? <Outlet /> : <Navigate to="/no-access" />
}

export default AdminRoute
