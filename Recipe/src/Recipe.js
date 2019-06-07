import React from 'react';
import './App.css'

const Recipe = ({title, calories, image, ingredients}) => {
  return(
    <div className='recipe'>
      <h1 style={{fontFamily:'serif'}}><i>{title}</i></h1>
      <img src={image} alt='' className='image'/>
      <h1 style={{textAlign:'center'}}><u>INGREDIENTS</u></h1>
      <ul style={{fontFamily:'serif',fontSize:'17px'}}>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <h4 style={{color:'red'}}>Calories : {calories}</h4>

    </div>
  )
}

export default Recipe;
