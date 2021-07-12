
import React, { useContext } from 'react'

const InfoContext = React.createContext();



function InfoPerson() {
  const info = useContext(InfoContext)
    return (
        <>
            <p>Name: {info.name}  </p>
            <p>Username: {info.lastName}  </p>
        </>
    )
}

export default function Principal() {

    return (
        <InfoContext.Provider value={{ name: 'Ronald', lastName: 'Castillo' }}>
            <InfoPerson/>
        </InfoContext.Provider>
    )
}

