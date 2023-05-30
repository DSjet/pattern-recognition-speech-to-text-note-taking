import Note from "./Note";

interface NoteItem {
  id: string;
  text: string;
  date: string;
}

interface NotesListProps {
  notes: NoteItem[];
}

const NotesList: React.FC<NotesListProps> = ({ notes }) => {
  return (
    <div className="bg-slate-600 text-white p-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
