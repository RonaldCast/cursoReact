
import EffectSate from './Hooks/EffectState';
import useMultipleHook from './useMultipleHook.js';
import { useState, useEffect, useRef, useDebugValue } from 'react';
import Calculate from './Calculate.js';
import RefIngremente from './RefIngremente.js'
import Principal from "./Principal";

function App() {

  var number = useMultipleHook();
  var [form, setForm] = useState({
    name: "",
    lastName: ""
  })


  const  refComponent = useRef();
  const handleSendInfo = (e) => {
    e.preventDefault();
    console.log(form)
  }
  useEffect(() => {

    // console.log("form")


  }, [form.name])

  const handleRef = () => {
    refComponent.current.agree();
  }
useDebugValue("dddd")


  return (
    <div>
      <EffectSate />
      <h1>Custome Level</h1>
      <h3>{number}</h3>

      <h1>Form hooks</h1>
      <form onSubmit={handleSendInfo}>
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
        <button>Enviar</button>
      </form>

      <h1>useContext</h1>

      <Principal />

      <h1>useReducer</h1>
      <Calculate />
      <h1>useRef</h1>
      <RefIngremente ref={refComponent}/>
      <button onClick={handleRef}>Invoke Ref</button>
    </div>



  );
}

export default App;
