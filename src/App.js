import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signupPage";
import HomePage from "./pages/homePage";
import ContactPage from "./pages/contactPage";
import Dashboard from "./pages/dashboard";
// import CategoryPage from "./pages/categoryPage";
import CreateBlogPage from "./pages/createBlogPage";
import BlogDetailsPage from "./pages/blogDetailsPage";
import UpdateBlogPage from "./pages/updateBlogPage";
import ProfilePage from "./pages/profilePage";

// contexts
import { SideBarContextProvider } from "./contexts/sideBarContext";
import { AuthContextProvider } from "./contexts/authContext";

import AuthRoute from "./utils/authRoute";
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
              <Route exact="true" path="/contact" element={<ContactPage />} />
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

              {/* <Route
                exact="true"
                path="/category/:category"
                element={
                  <AuthRoute>
                    <CategoryPage />
                  </AuthRoute>
                }
              /> */}

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
                path="/blogs/:id"
                element={
                  <AuthRoute>
                    <BlogDetailsPage />
                  </AuthRoute>
                }
              />

              <Route
                exact="true"
                path="/update_blog/:id"
                element={
                  <AuthRoute>
                    <UpdateBlogPage />
                  </AuthRoute>
                }
              />

              <Route
                exact="true"
                path="/profile"
                element={
                  <AuthRoute>
                    <ProfilePage />
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
