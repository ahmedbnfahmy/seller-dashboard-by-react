const initialize = {
    govers: [],
    gov: {}
};

export const GovReducer = (state = initialize, action) => {
    switch (action.type) {
        case "GET_ALL_GOVERMENT":
            console.log(action.payload, 'r')
            return {
                ...state,
                govers: action.payload
            }
        case "ADD_NEW_GOV":
            state.govers.push(action.payload)
            return {
                ...state,
                gov: action.payload
            }
        case "DELET_GOV":
            return {
                ...state,
                govers: action.payload
            };
        case "GET_SINGIL_GOV":
            return {
                ...state,
                gov: action.payload
            }
        case "UPDATE_GOV":
            return {
                ...state
            }
        case "GET_GOV_LIST_PAGE":
            console.log(action.payload, 'kk')
            return {
                ...state,
                govers: action.payload
            } 
             case "GET_ALL_GOVERMENT_NAME_COUNTRY":
            console.log(action.payload, 'r')
            return {
                ...state,
                govers: action.payload
            }
        default:
            return state;
    }
};