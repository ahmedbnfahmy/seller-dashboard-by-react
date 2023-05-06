const initialize = {
    users: [],
    user: {},
    // productsCategories: []
};

export const UsersReducer = (state = initialize, action) => {
    switch (action.type) {
        case "GET_Users_LIST":
            return {
                ...state,
                users: action.payload
            }

        case "GET_ALL_USERS":
            return {
                ...state,
                users: action.payload
            }

        case "DELET_USER":
            return {
                ...state,
                users: action.payload.data
            }
        case "GET_SINGIL_user":
            return {
                ...state,
                user: action.payload,
            }
        case "ADD_USER":
            state.users.push(action.payload)
            return {
                ...state,
                user: action.payload
            }

        case "UPDATE_USER":
            return {
                ...state,
                user: action.payload
            }

        default:
            return state;
    }
};