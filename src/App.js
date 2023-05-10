import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/LogIn";
import SurpriseForm from './components/SurpriseForm';

import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {showLogin ? (
            <Route path="/" element={<Login setShowLogin={setShowLogin} />} />
          ) : (
            <Route path="/" element={<SignUp setShowLogin={setShowLogin} />} />
          )}
          <Route path="private" element={<PrivateRoute />}>
            <Route index element={<SurpriseForm />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
