import Header from './components/Header.js';



function App(props) {
  const { children } = props;
  return (
    <div className="App">
      <Header/>
       <div>
          {children}
       </div>
    </div>
  );
}

export default App;
