import React, {useEffect, useState} from 'react'
import './App.css';
import Recipe2 from './Component/Recipe2';
import './static/css/FirstSection.css';
import { v4 as uuidv4 } from 'uuid';

function App2() {

    const [recipe, setrecipe] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("paneer");

    useEffect(()=>{
         getRecipes(); // eslint-disable-next-line
    },[query]);

    const getRecipes = async () =>{
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`);
        const data = await response.json();
        setrecipe(data.hits);
        console.log(data.hits)
    };
    const updateSearch = (e) =>{
        setSearch(e.target.value);
        console.log(search);
    };

    const getSearch = (e) =>{
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };

    return (
        <div className="App">
            <form className="form-input" onSubmit={getSearch} >
                <input type="text" className="search-input" value={search} onChange={updateSearch} placeholder="Search Here" />
                <button type="submit" className="btn">Search</button>
            </form>
           <div className="card">{recipe.map(recipe =>(
                <Recipe2
                key={uuidv4()}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients} />
            ))}
            </div> 
        </div>
    )
}

export default App2
