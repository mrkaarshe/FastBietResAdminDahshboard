import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import ProtectedRoute from "./routes/ProtectedRoute"
import AdminRoute from "./routes/AdminRoute"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import AddFood from "./pages/AddFood"
import ManageFoods from "./pages/ManageFoods"
import Orders from "./pages/Orders"
import Layout from "./components/Layout"
import NotFound from "./pages/NotFound"
import NoAccess from "./pages/NoAccess"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster />

        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<AdminRoute />}>
              <Route element={<Layout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/add-food" element={<AddFood />} />
                <Route path="/manage-foods" element={<ManageFoods />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/" element={<Navigate to="/dashboard" />} />
              </Route>
            </Route>
          </Route>

          <Route path="/no-access" element={<NoAccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
