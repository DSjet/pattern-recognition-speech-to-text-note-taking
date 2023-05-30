import { MdDeleteForever } from "react-icons/md";

interface NoteProps {
  note: {
    id: string;
    text: string;
    date: string;
  };
  handleDeleteNote: (id: string) => void;
}

const Note = ({ note, handleDeleteNote }: NoteProps) => {
  return (
    <div className=" flex flex-col justify-between bg-primary-dark text-black p-3 h-44 rounded-md">
      <span className="text-2xl">{note.text}</span>
      <div className=" flex items-center justify-between">
        <small className=" text-base">{note.date}</small>
        <MdDeleteForever
          onClick={() => {
            handleDeleteNote(note.id);
          }}
          className=" h-7 w-7 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Note;
