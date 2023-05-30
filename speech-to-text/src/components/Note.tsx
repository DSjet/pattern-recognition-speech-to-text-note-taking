import { MdDeleteForever } from "react-icons/md";

interface NoteProps {
  note: {
    id: string;
    text: string;
    date: string;
  };
}

const Note = ({ note }: NoteProps) => {
  return (
    <div className=" flex flex-col justify-between bg-yellow-200 text-black p-3 h-44 rounded-md">
      <span className="text-2xl">{note.text}</span>
      <div className=" flex items-center justify-between">
        <small className=" text-base">{note.date}</small>
        <MdDeleteForever className=" h-7 w-7" />
      </div>
    </div>
  );
};

export default Note;
