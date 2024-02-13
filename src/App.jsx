import { useState } from 'react'
import RecipeItem from "./recipe-item/RecipeItem.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
        <div>
            <RecipeItem recipe={{
                id:1,
                name:'Лазанья'
            }}/>
            <RecipeItem recipe={{
                id:2,
                name:'Каша'
            }}/>
            <RecipeItem recipe={{
                id:3,
                name:'Суп'
            }}/>
        </div>
  )
}

export default App
