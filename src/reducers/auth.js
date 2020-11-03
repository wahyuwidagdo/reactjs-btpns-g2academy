const initialState = {
    statusLogin: false,
    admin : [
        {
            username: "admin",
            password: "admin",
        }
    ],
    dataLogin: {},
}

const authReducer = (state = initialState, action) => {
    console.log("State : ", state)
    console.log("Action : ", action)

    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                statusLogin: true,
                // admin: action.payload.admin,
                dataLogin: action.payload.dataLogin,
            }
        case "SAVETOREDUX":
            return {
                ...state,
                admin: action.payload.admin,
            }
        case "LOGOUT":
            return {
                ...state,
                statusLogin: false,
                // admin: action.payload,
                dataLogin: {},
            }
        default:
            return initialState
    }
}

export default authReducer