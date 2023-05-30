import { useState } from "react";
import { nanoid } from "nanoid";
import Navbar from "./Navbar";
import NotesList from "./NotesList";
import TakeNote from "./TakeNote";

const Main = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Sample Note 1",
      date: "31/05/2023",
    },
    {
      id: nanoid(),
      text: "Sample Note 2",
      date: "12/05/2023",
    },
    {
      id: nanoid(),
      text: "Sample Note 3",
      date: "28/05/2023",
    },
  ]);

  const addNote = (text: string) => {
    console.log(text);
  };

  return (
    <div>
      <Navbar />
      <TakeNote handleAddNote={addNote} />
      <NotesList notes={notes} />
    </div>
  );
};

export default Main;
