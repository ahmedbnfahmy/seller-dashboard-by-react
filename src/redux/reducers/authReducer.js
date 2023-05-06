const initialState = {
    token: null,
    user: null,
    authenticate: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGN_IN":
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            return {
                ...initialState,
                token: action.payload.token,
                user: action.payload.user,
                authenticate: true
            }
        case "SIGN_OUT":
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return {
                token: null,
                user: null,
                authenticate: false
            };
        default:
            return state;
    }
};

export default authReducer;