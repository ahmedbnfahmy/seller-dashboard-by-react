const initialize = {
    countries: [],
    country: {}
};

export const countriesReducer = (state = initialize, action) => {
    
    switch (action.type) {
        case "GET_COUNTRIES_LIST":
            return {
                ...state,
                countries: action.payload
            }
        case "DELET_COUNTRY":
            return {
                ...state,
                countries:action.payload
              };
        case "UPDATE_COUNTRY":
            return {
                ...state
            }
            case "ADD_COUNTRY":
                state.countries.push(action.payload)
            return {
                ...state,
                country: action.payload
            }
        case "GET_SINGIL_COUNTRY":
            return {
                ...state,
                country: action.payload
            }
            case "GET_COUNTRY_LIST_PAGE":
        // console.log(action.payload,'kk')
        return {
            ...state,
            countries: action.payload
        }
        default:
            return state;
    }
};