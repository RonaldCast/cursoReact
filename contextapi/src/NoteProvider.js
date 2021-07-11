import {createContext, useState, useContext} from 'react'

const NoteContext = createContext()

export function useNoteState(){
    const context = useContext(NoteContext);
    if(!context){
        throw new Error(`useState must be used within the ProviderNoteContext`)
    }

    return context; 
} 

export default function NoteProvider(props){ 
 const  [state, setState] = useState([])
 const value = [state, setState]
 return  <NoteContext.Provider value={value} {...props}/>

}

 