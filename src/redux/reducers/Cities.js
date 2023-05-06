const initialize = {
    cities: [],
    city: {}
};

export const CitiesReducer = (state = initialize, action) => {
    switch (action.type) {
        case "GET_ALL_cITY":
            return {
                ...state,
                cities: action.payload
            }
        case "ADD_NEW_CITY":
            state.cities.push(action.payload)
            return {
                ...state,
                city: action.payload
            }
        case "DELET_CITIE":
            return {
                ...state,
                cities: action.payload
            };
        case "UPDATE_CITY":
            return {
                ...state
            }
        case "GET_SINGIL_CITY":
            console.log(action.payload)
            return {
                ...state,
                city: action.payload
            }
        case "GET_CITY_LIST_PAGE":
            return {
                ...state,
                cities: action.payload
            }

            case "GET_ALL_CITY_GOV_NAME":
                return {
                    ...state,
                    cities: action.payload
                }
        default:
            return state;
    }
};