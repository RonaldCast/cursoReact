import InfoUser from './components/InfoUser'
import UserInput from './components/UserInput'
import ButtonCount from './components/ButtonCount'
import DisplayCount from './components/DisplayCount'

function App() {
  return (
    <div className="App">
      <InfoUser />
      <UserInput/>
      <h1>Counter </h1>
      <DisplayCount/>
      <ButtonCount/>
    </div>
  );
}

export default App;
