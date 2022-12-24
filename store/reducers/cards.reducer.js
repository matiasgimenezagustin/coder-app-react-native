import cards from "../../data/cards";
import { SELECTED_CARD } from "../actions/cards.action";

const initialState = {
    cards: cards,
    filteredCards: [],
    selected: null
}

const cardsReducer = ( state = initialState, action) =>{
    switch(action.type){
        case SELECTED_CARD:
            const indexCard = state.cards.findIndex(
                (card) => card.id === action.cardID
                )
            if(indexCard === -1){ return state }  
            return {...state, selected: state.cards[indexCard]}
    }
    return state
}

export default cardsReducer;