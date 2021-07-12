
import {useGlobalContext} from '../store/context'

export default function DisplayCount(){
    const {state} = useGlobalContext(); 
    const {countState} = state;  
    return(
        <>
        <p>{countState.count}</p>
        </>
    )
}