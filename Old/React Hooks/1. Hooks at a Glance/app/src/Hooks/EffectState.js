
import {useState, useEffect} from 'react';

function EffectSate() {

  var [count, setCount] = useState(0);

  //when component mounted 
  useEffect(() => {
    // console.log("hola")
  },[]);

//when count change 
  useEffect(() => {
    // console.log("countChange")
  },[count]);


//when component unmounted
  useEffect(() => {
    return () => {
    // alert()
    };
  },[]);


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1) }>Encrement</button>
      <button onClick={() => setCount(count - 1) }>Decrement</button>
    </div>
  );
}

export default EffectSate;
