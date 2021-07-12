
export const counterActions = (props) => {

    return {
        addStep: () => {
            props.dispatch({type:"ADD"})
        }, 

        reset: () => {
            props.dispatch({type:"RESET"})
        }
    }
}