import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/LogIn";
import SurpriseForm from './components/SurpriseForm';
import React, { useState } from "react";

import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (

    <AuthProvider>
      {showLogin ? (
        <Login setShowLogin={setShowLogin} />
      ) : (
        <SignUp setShowLogin={setShowLogin} />
      )}
      <SurpriseForm />
    </AuthProvider>




  );
}

export default App;
