export const CATEGORY_SELECTED = "CATEGORY_SELECTED"

export const categorySelected = (id) =>  ({
    type: CATEGORY_SELECTED,
    categoryID: id,
})