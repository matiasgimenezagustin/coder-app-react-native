export const ADD_FAVORITE = "ADD_FAVORITE"
export const DELETE_FAVORITE = "DELETE_FAVORITE"
export const addFavorite = ( id ) => ({
    type: ADD_FAVORITE,
    cardID: id,
})

export const deleteFavorite = ( id ) => ({
    type: DELETE_FAVORITE,
    cardID: id
})