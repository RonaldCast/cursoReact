
import { useEffect, useState, useRef, forwardRef, useImperativeHandle, useLayoutEffect, useDebugValue} from 'react'

const RefIngremente = forwardRef((props, ref) => {
    // var [count, setCount] = useState(0);
    var count = useRef(0);
    var tag = useRef();
    useEffect(() => {
        console.log("appp")
    })

    const agree = () => {
        console.log("De acuerdo")
    }

    useImperativeHandle(ref, () => {
        return {
            agree
        }
    })

    //par abtener datos de los elementos del DOM 
    useLayoutEffect(() => {
        console.log(tag.current.getBoundingClientRect())

    })

    return (
        <div>
            <p ref={tag}>{count.current}</p>
            <button onClick={() => { count.current++; console.log(count.current) }}>+</button>
        </div>
    )
})


export default RefIngremente;