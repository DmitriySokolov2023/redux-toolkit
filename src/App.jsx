import RecipeItem from "./components/recipe-item/RecipeItem.jsx";
import {useSelector} from "react-redux";
import {FaRegHeart} from "react-icons/fa";
import Header from "./components/header/Header.jsx";


function App() {
    const {favorites} = useSelector(state => state)
    return (
        <section>
          <Header/>
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
