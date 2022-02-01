import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SideBarContextProvider } from "./contexts/sideBarContext";
import { AuthContextProvider } from "./contexts/authContext";
import AuthRoute from "./utils/authRoute";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import HomePage from "./pages/homePage";
import Dashboard from "./pages/dashboard";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";

function App() {
  return (
    <AuthContextProvider>
      <SideBarContextProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Navbar />
            <Routes>
              <Route exact="true" path="/" element={<HomePage />} />
              <Route exact="true" path="/login" element={<LoginPage />} />
              <Route exact="true" path="/signup" element={<SignupPage />} />
              <Route
                exact="true"
                path="/dashboard"
                element={
                  <AuthRoute>
                    <Dashboard />
                  </AuthRoute>
                }
              />
            </Routes>
            <Footer />
          </Router>
        </ThemeProvider>
      </SideBarContextProvider>
    </AuthContextProvider>
  );
}

export default App;
