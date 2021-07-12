import {useGlobalContext} from '../store/context'

export default function ButtonCount(){
    const {state, actions} = useGlobalContext(); 
    const {countState} = state; 
    console.log(actions) 

    const sum = ()=> {
        actions.counterActions.addStep()
    }
    return (
        <>
        <button onClick={sum}>Sum {countState.step}</button>
        </>
    )
}