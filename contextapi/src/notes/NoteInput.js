import { useRef } from 'react';
import { useNoteState } from '../NoteProvider.js'

export default function NoteInput() {
 
    const valueInput = useRef()
    const [state, setState] = useNoteState();

    const add = () => {
        const value = valueInput.current.value.trim()
        if (value === '') {
            return
        }
        setState([...state, { id: Math.round(Math.random() * 100000), name: value }])
        valueInput.current.value = '';
    }

    return (
        <>
            <input ref={valueInput} placeholder="Read your note" />
            <button onClick={add}>Add</button>
        </>
    )
}