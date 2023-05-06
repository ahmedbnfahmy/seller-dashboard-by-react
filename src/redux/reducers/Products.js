const initialize = {
    products: [],
    product: {},
    productsCategories: []
};

export const ProductsReducer = (state = initialize, action) => {
    switch (action.type) {
        case "GET_Products_LIST":
            return {
                ...state,
                products: action.payload
            }
        case "ALL_PRODUCTS_LIST":
            return {
                ...state,
                products: action.payload
            }

        case "GET_Products_CATEGORIES":
            return {
                ...state,
                productsCategories: action.payload
            }
        case "DELET_PRODUCT":
            return {
                ...state,
                products: action.payload.data
            }
        case "GET_SINGIL_Product":
            return {
                ...state,
                product: action.payload,
            }
        case "ADD_PRODUCT":
            state.products.push(action.payload)
            return {
                ...state,
                product: action.payload
            }
        // reviews
        case "GET_REVIEWS_SINGIL_Product":
            return {
                ...state,
                product: action.payload
            }
        case "DELET_SINGLE_REVIEW_PRODUCT":
            return {
                ...state,
                product: action.payload.data
            }
        case "GET_Products_CATEGORIES":
            return {
                ...state,
                productsCategories: action.payload
            }
        case "UPDATE_PRODUCT":
            return {
                ...state
            }
        case "ADD_ELECMODEL":
            return {
                ...state
            }
        case "UPDATE_MODEL":
            return {
                ...state
            }
        default:
            return state;
    }
};