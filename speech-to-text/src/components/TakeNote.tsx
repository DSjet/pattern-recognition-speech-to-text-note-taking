import React, { ChangeEvent, useEffect, useState } from "react";
import useSpeechRecognitionHook from "../hooks/useSpeechRecognitionHook";
import { MdMic, MdSave } from "react-icons/md";

interface TakeNoteProps {
  handleAddNote: (note: string) => void;
}

const TakeNote: React.FC<TakeNoteProps> = ({ handleAddNote }) => {
  const {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport,
  } = useSpeechRecognitionHook();

  const [noteText, setNoteText] = useState("");

  useEffect(() => {
    setNoteText(text);
  }, [text]);

  const handleChange = (event: ChangeEvent<HTMLParagraphElement>) => {
    setNoteText(event.target.textContent || "");
  };

  const handleSaveClick = () => {
    handleAddNote(noteText);
  };

  return (
    <div className="p-2">
      {hasRecognitionSupport ? (
        <div className="flex flex-col md:w-1/4 items-center content-center mx-3 mt-3 space-y-10 bg-slate-300 py-10 rounded-lg mb-10">
          <div className="flex space-x-2 items-center">
            <MdMic className=" md:h-10 md:w-10" />
            <h1 className="text-xl font-bold md:text-4xl">Speech to Text</h1>
          </div>
          {text ? (
            <p className="text-lg" onChange={handleChange}>
              {text}
            </p>
          ) : null}
          {isListening ? <p className="text-lg">Listening...</p> : null}
          <div className="space-x-5">
            <button
              className="bg-blue-400 text-lg py-2 px-4 rounded-md"
              onClick={startListening}
              disabled={isListening}
            >
              Start
            </button>

            <button
              className="bg-red-200 text-lg py-2 px-4 rounded-md"
              onClick={stopListening}
              disabled={!isListening}
            >
              Stop
            </button>
          </div>
          <button
            className="text-xl bg-green-200 p-2 rounded-lg flex items-center"
            onClick={handleSaveClick}
          >
            Save
            <MdSave className="ml-2" />
          </button>
        </div>
      ) : (
        <p>Sorry, your browser doesn't support speech recognition.</p>
      )}
    </div>
  );
};

export default TakeNote;
