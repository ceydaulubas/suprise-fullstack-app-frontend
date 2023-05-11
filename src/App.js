import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SurpriseForm, NavBar } from "./components/index"
import { Login, SignUpForm, LandingPage } from "./pages/index"

import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="private" element={<PrivateRoute />}>
            <Route path="*" element={<NavBar />} />
            <Route index element={<SurpriseForm />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

