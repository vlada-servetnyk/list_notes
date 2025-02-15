
import { useEffect, useState } from 'react';
import './App.css'
import FormAdd from './components/Form/FormAdd';
import ListNotes from './components/ListNotes/ListNotes';

function App() {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem('notes')) ?? []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])


  const addNote = (newNote) => {
    setNotes(prev => [...prev, newNote])
  };

 const deleteNote = (id) => {
  setNotes(prev => prev.filter(item => item.id !== id));
};


  return (
    <>
      <FormAdd addNote={addNote} />
      <ListNotes notes={notes} deleteNote={deleteNote} />
    </>
  )
}

export default App;
