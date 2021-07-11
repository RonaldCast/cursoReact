
import NoteInput from './notes/NoteInput'
import NoteProvider from './NoteProvider';
import NoteList from './notes/NoteList'

function App() {

  return (
    <div className="App">
      <h1>Notes</h1>
      <NoteProvider>
        <NoteInput />
        <NoteList />
      </NoteProvider>
    </div>
  );
}

export default App;
