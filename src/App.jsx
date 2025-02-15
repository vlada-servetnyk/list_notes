
import { useEffect, useState } from 'react';
import './App.css'
import ListNotes from './components/ListNotes/ListNotes';
import FormNotes from './components/FormNotes/FormNotes';
import FormPlayList from './components/FormPlayList/FormPlayList';
import PlayList from './components/PlayList/PlayList';

function App() {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem('notes')) ?? []);
  const [songs, setSongs] = useState(() => JSON.parse(localStorage.getItem('singl')) ?? []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('singl', JSON.stringify(songs))
  }, [notes, songs])


  const addNote = (newNote) => {
    setNotes(prev => [...prev, newNote])
  };
  const deleteNote = (id) => {
    setNotes(prev => prev.filter(item => item.id !== id));
  };
  

  const addSingl = (newSingl) => {
    setSongs(prev => [...prev, newSingl])
  };
  const deleteSingl = (id) => {
    setSongs(prev => prev.filter(item => item.id !== id));
  }
    const toggleLike = (id) => {
    setSongs(prev =>
      prev.map(song =>
        song.id === id ? { ...song, like: !song.like } : song
      )
    );
    };
  


  return (
    <>
      <FormNotes addNote={addNote} />
      <ListNotes notes={notes} deleteNote={deleteNote} />
      <FormPlayList addSingl={addSingl} />
      <PlayList singl={songs} deleteSingl={deleteSingl} isLikedClick={toggleLike} />
    </>
  )
}

export default App;
