
export const countState = {
    step: 1,
    count: 0,
}

export const counterReducer = (state, action) => {

    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                count: state.count + state.step
            }
        case 'RESET':
            return {
                ...state,
                count: 0 
            }
        default:
            throw new Error("unexpected action")
    }
}
