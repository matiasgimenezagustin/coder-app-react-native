import cards from "../../data/cards";

import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/favorites.action";


const initialState = {
    cards,
    favorites: [],
    selected: null,
}


const favoritesReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_FAVORITE:
            const cardIndex = state.cards.findIndex((card) => card.id === action.cardID)
            if(cardIndex === -1){
                return state
            }
            const cardToAdd = state.cards.find((card) => card.id === action.cardID)
            
            return {...state, favorites: [...state.favorites, cardToAdd]}

        case DELETE_FAVORITE:
            /* const indexToDelete = state.cards.findIndex((card) => card.id === action.cardID)
            if( indexToDelete === -1){
                return state
            } */
            const newFavoritesList = state.favorites.filter( card => card.id != action.cardID)
            console.log(newFavoritesList)
            return {...state, favorites: newFavoritesList}
    }
    return state
}

export default favoritesReducer