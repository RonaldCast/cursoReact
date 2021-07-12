
export const userActions = (props) => {

    return { 
        changeName: (name) => {
            props.dispatch({type:"CHANGE_NAME", name })
        }, 
        
        changeInfo: (data) => {
            props.dispatch({type:"CHANGE_INFO",data })
        }
    }
}