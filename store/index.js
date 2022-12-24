import { createStore, combineReducers } from "redux";
import cardsReducer from "./reducers/cards.reducer";
import CategoryReducer from "./reducers/category.reducer";
import favoritesReducer  from "./reducers/favorites.reducer";

const RootReducer = combineReducers({
    cards: cardsReducer,
    categories: CategoryReducer,
    favorites: favoritesReducer
})

export default createStore(RootReducer)