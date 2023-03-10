import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'
import { AuthContextProvider } from "./context/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
            <Route path='/account' element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            } />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
