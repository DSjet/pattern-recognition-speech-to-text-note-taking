import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Navbar from "./Navbar";
import NotesList from "./NotesList";
import TakeNote from "./TakeNote";
import Footer from "./Footer";

interface Note {
  id: string;
  text: string;
  date: string;
}

const Main: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>(() => {
    const savedNotes = localStorage.getItem("react-speakwrite-app-data");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("react-speakwrite-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text: string) => {
    const date = new Date();
    const newNote: Note = {
      text: text,
      date: date.toLocaleDateString(),
      id: nanoid(),
    };
    const newNotes = [...notes, newNote];

    setNotes(newNotes);
  };

  const deleteNote = (id: string) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="font-opensans">
      <Navbar />
      <h1 className="text-2xl font-bold text-secondary p-2 ml-3 mt-3">
        Take Notes
      </h1>
      <TakeNote handleAddNote={addNote} />
      <h1 className="text-2xl font-bold text-secondary p-2 ml-3">Your Notes</h1>
      <NotesList notes={notes} handleDeleteNote={deleteNote} />
      <Footer />
    </div>
  );
};

export default Main;
