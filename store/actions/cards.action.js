export const SELECTED_CARD = "SELECTED_CARD"

export const selectedCard = (id) => ({
    type: SELECTED_CARD,
    cardID: id
})