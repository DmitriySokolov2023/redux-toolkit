import RecipeItem from "./components/recipe-item/RecipeItem.jsx";
import Header from "./components/header/Header.jsx";
import User from "./components/user/user.jsx";


function App() {
    return (
        <section>
          <Header/>
            <User/>
            <div>
                <RecipeItem recipe={{
                    id: 1,
                    name: 'Лазанья'
                }}/>
                <RecipeItem recipe={{
                    id: 2,
                    name: 'Каша'
                }}/>
                <RecipeItem recipe={{
                    id: 3,
                    name: 'Суп'
                }}/>
            </div>
        </section>
    )
}

export default App
