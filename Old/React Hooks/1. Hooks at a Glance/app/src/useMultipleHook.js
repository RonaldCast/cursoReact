import { useState, useEffect } from "react";


export default function useMultipleHook(){

    const [countGlobal, setCountGlobal] = useState(0);
    //setCountGlobal( countGlobal * number);
    useEffect(() => {
        setCountGlobal( countGlobal * 9);
    }, [countGlobal])
    return countGlobal;
}

