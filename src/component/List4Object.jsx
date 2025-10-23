import React from 'react'
import {recipes} from '../data/recipeData'
import RecipeList from './RecipeList'

const List4Object = () => {
  return (
    <div>
      <h2>레시피 리스트</h2>
      <ul className='recipe-list'>
      {recipes.map(recipe=>
        <RecipeList
        key={recipe.id} 
        id={recipe.id}
        name={recipe.name}
        ing={recipe.ingredients}

        
        
        
        />
      )}
      </ul>
    </div>
  )
}

export default List4Object