
import React, { useRef } from "react";
import { useGlobalContext } from "../store/context/index"


export default function UserInput() {

    const { actions } = useGlobalContext()

    const valueName = useRef()
    const valueSurname = useRef()


    const addInfo = () => {
        actions.userActions.changeName(valueName.current.value);
    }

    const addFullName = () => {
        actions.userActions.changeInfo({ surname: valueSurname.current.value, name: valueName.current.value })
    }

    return (
        <div>
            <label>Name:</label>
            <input ref={valueName} />
            <label>surname:</label>
            <input ref={valueSurname} />

            <button onClick={addInfo}>Add name</button>
            <button onClick={addFullName}>Add Full name</button>

        </div>
    );
}