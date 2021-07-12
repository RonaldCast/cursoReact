import {useGlobalContext} from "../store/context/index"


export default function InfoUser(){
    const {state} = useGlobalContext()
    const {userState} = state;
    return (
        <>
         <h1>User</h1>
         <p><strong>Name:</strong> {userState.name}</p>
         <p><strong>Username:</strong> {userState.surname}</p>
        </>
    )
}