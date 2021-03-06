import React from 'react'
import '../static/css/FirstSection.css'
import { v4 as uuidv4 } from 'uuid';

function Recipe2({title,image, ingredients}) {
    return (
        <div className="items">
            <h2>{title}</h2>
            <img src={image} alt="pic"/>
                {ingredients.map(ingredient =>(
                  <p key={uuidv4()} >{ingredient.text}</p>
                ))}
        </div>
    )
}

export default Recipe2