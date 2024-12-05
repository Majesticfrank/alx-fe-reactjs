import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'


function App() {


  return (
  <Router>
<Routes>
  
<Route path="/" element={<HomePage />} />
<Route path ="/recipe/:RecipeId" element={<RecipeDetail />}/>
<Route path ="/add-recipe" element={<AddRecipeForm />} />
</ Routes>
</Router>  


  )
   
}

export default App
