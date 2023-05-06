const initialize = {
    orders: [],
    dailyOrders: [],
    TopCustomers: [],
    WeekIncome: 0,
    orderDetails: {}
};


const ordersReducer = (state = initialize, action) => {
    switch (action.type) {
        case "GET_ORDERS_LIST":
            return {
                ...state,
                orders: action.payload
            }
        case "GET_ALL_AC_ORDERS_REQUEST":
            return {
                ...state,
                orders: action.payload
            }
        case "GET_ALL_AD_ORDERS_REQUEST":
            return {
                ...state,
                orders: action.payload
            }
        case "GET_ALL_AC_ORDER_REQUEST":
            return {
                ...state,
                orderDetails: action.payload
            }
        case "GET_ALL_AD_ORDER_REQUEST":
            return {
                ...state,
                orderDetails: action.payload
            }
        case "GET_DETAILS_ORDERS":
            return {
                ...state,
                orderDetails: action.payload
            }
        case "GET_ALL_ORDER":
            return {
                ...state,
                orders: action.payload
            }
        case "GET_ALL_ORDER_BY_DETAILS":
            return {
                ...state,
                orders: action.payload
            }
        case "GET_DAILY_ORDERS":
            return {
                ...state,
                dailyOrders: action.payload
            }
        case "TOP_10_CLIENT":
            return {
                ...state,
                TopCustomers: action.payload
            }
        case "LATEST_WEEKLY_INCOME":
            return {
                ...state,
                WeekIncome: action.payload
            }
        case "GET_ORDER_LIST_PAGE":
            console.log(action.payload, 'kk')
            return {
                ...state,
                orders: action.payload
            }
        default:
            return state;
    }
};


export default ordersReducer;