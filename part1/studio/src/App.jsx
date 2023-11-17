import { useState } from 'react'
import './App.css'
import RecipeDescription from './compomnents/Description'
import RecipeIngredients from './compomnents/Ingredients'
import RecipePhoto from './compomnents/Photos'

function App() {

  return (
    <>
      <div className="App">
        <div>
          <RecipePhoto className="recipePhotoBlock"/>
          <div>
            <RecipeDescription />
            <RecipeIngredients />
          </div>
        </div>
      </div>
    </>
  )
}

export default App