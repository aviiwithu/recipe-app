import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Component/Recipe';

const App = () => {

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] =useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(()=>{
    getRecepies();
  }, [query])

  const getRecepies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e =>{
    setSearch(e.target.value);
    // console.log(search);
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch("")
  };

  return (
    <div className='App'>
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipe.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients} 
        />
      ))}
    </div>
  )
}

export default App