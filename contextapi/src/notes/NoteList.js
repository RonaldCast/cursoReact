import { useNoteState } from '../NoteProvider'

export default function NoteList() {
  
    const [state] = useNoteState();

    const notes = state.map((el) => {
        return (
            <li key={el.id}>{el.name}</li>
        )
    })
    return (
        <ul>
            {notes}
        </ul>
    )

}