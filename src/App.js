import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SideBarContextProvider } from "./contexts/sideBarContext";
import { AuthContextProvider } from "./contexts/authContext";
import AuthRoute from "./utils/authRoute";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import HomePage from "./pages/homePage";
import Dashboard from "./pages/dashboard";
import CreateBlogPage from "./pages/createBlogPage";
import BlogDetailsPage from "./pages/blogDetailsPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";

function App() {
  return (
    <AuthContextProvider>
      <SideBarContextProvider>
        <ThemeProvider theme={theme}>
          <Router>
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
              <Route
                exact="true"
                path="/create_blog"
                element={
                  <AuthRoute>
                    <CreateBlogPage />
                  </AuthRoute>
                }
              />
              <Route
                exact="true"
                path="/blog_details:id"
                element={
                  <AuthRoute>
                    <BlogDetailsPage />
                  </AuthRoute>
                }
              />
            </Routes>
          </Router>
        </ThemeProvider>
      </SideBarContextProvider>
    </AuthContextProvider>
  );
}

export default App;
