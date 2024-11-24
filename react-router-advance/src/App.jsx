
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from './components/BlogPost';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthContext';
import View from './components/view';
function App() {


  return ( 
    <AuthProvider>
     

    <Router>
      <View/>
        <Routes>
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="ProfileDetails" element={<ProfileDetails />} />
           <Route path="ProfileSettings" element={<ProfileSettings />} />


          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
        
  
    </Router>
  </AuthProvider>
 
  )
}

export default App
