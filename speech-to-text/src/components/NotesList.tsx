import Note from "./Note";

interface NoteItem {
  id: string;
  text: string;
  date: string;
}

interface NotesListProps {
  notes: NoteItem[];
  handleDeleteNote: (id: string) => void;
}

const NotesList: React.FC<NotesListProps> = ({ notes, handleDeleteNote }) => {
  return (
    <div className=" text-white p-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {notes.map((note) => (
        <Note key={note.id} note={note} handleDeleteNote={handleDeleteNote} />
      ))}
    </div>
  );
};

export default NotesList;
