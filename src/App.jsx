"use client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import AddFood from "./pages/AddFood"
import ManageFoods from "./pages/ManageFoods"
import Orders from "./pages/Orders"
import Layout from "./components/Layout"
import ProtectedRoute from "./routes/ProtectedRoute"
import { Toaster } from "./components/ui/toaster"


export default function App() {
  return (
    <Router>
      <Toaster />
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-food"
          element={
            <ProtectedRoute>
              <Layout>
                <AddFood />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/manage-foods"
          element={
            <ProtectedRoute>
              <Layout>
                <ManageFoods />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Layout>
                <Orders />
              </Layout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  )
}
