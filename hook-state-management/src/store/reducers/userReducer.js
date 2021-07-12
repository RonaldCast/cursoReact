export const userState = {
    name: "Ronald",
    surname: ""
}

export const userReducer = (state, action) => {
    
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            }
        case 'CHANGE_INFO':
            return {
                ...state,
                name: action.data.name,
                surname: action.data.surname 
            }

        default:
            throw new Error("unexpected action")
    }
}