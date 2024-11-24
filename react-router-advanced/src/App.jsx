import React from "react";
import {  BrowserRouter as Router,Routes,Route, Navigate,} from "react-router-dom";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogPost from "./components/BlogPost";

const isAuthenticated = false;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/" element={<Home />} />
        
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/blog/:id" element={<BlogPost />} /> {}
           
              
      </Routes>
    </Router>
  );
};

export default App;
