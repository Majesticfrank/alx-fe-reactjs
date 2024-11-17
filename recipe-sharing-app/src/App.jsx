import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import RecommendationsList from './components/RecommendationsList';
import FavoritesList from './components/FavouriteList';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Management</h1>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/recipe/:id/edit" element={<EditRecipeForm />} />
          <Route path="/SearchBar" element={<SearchBar/>}/>
          < Route path='/FavouriteList' element ={<FavoritesList />}/>
          < Route path='/RecommendationList' element ={<RecommendationsList />}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

