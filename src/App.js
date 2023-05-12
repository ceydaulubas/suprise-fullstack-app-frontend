import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SurpriseForm, NavBar, AllSurprises } from "./components/index"
import { Login, SignUpForm, LandingPage, Profile, MainPage } from "./pages/index"

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
          <Route path="/private" element={<PrivateRoute />}>
            <Route path="mainpage" element={<MainPage />} />
            <Route path="surpriseform" element={<SurpriseForm />} />
            <Route path="profile" element={<Profile />} />
            <Route path="allsurprises" element={<AllSurprises />} />

          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
