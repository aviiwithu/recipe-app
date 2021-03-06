import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {

    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt="pic"/>
            <p>
                {ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
            ))} 
            </p>
        </div>
    );
};

export default Recipe;