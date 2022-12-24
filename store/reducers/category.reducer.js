import categories from "../../data/categorias";
import { CATEGORY_SELECTED } from "../actions/categories.action";

const initialState = {
    categories: categories,
    selected: null
}

const CategoryReducer = (state = initialState, action) => {
    switch(action.type){
        case CATEGORY_SELECTED:
            const categoryIndex = state.categories.findIndex((category) => category.id  === action.categoryID)
            if(categoryIndex === -1){
                return state
            }

            return {...state, selected: state.categories[categoryIndex].id}
    }
    return state
}

export default CategoryReducer 