import React, { ChangeEvent, useEffect, useState } from "react";
import useSpeechRecognitionHook from "../hooks/useSpeechRecognitionHook";

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

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    handleAddNote(noteText);
  };

  return (
    <div className="bg-slate-400 p-2">
      {hasRecognitionSupport ? (
        <div className="flex flex-col w-1/2 items-center content-center mx-auto mt-20 space-y-10 bg-slate-300 py-10 rounded-lg mb-10">
          <h1 className="text-4xl">Speech to Text</h1>
          {text ? (
            <textarea
              className="text-lg"
              onChange={handleChange}
              value={noteText}
            />
          ) : null}
          {isListening ? <p className="text-lg">Listening...</p> : null}
          <div className="space-x-5">
            <button
              className="bg-blue-400 text-lg p-2 rounded-md"
              onClick={startListening}
              disabled={isListening}
            >
              Start
            </button>

            <button
              className="bg-red-200 text-lg p-2 rounded-md"
              onClick={stopListening}
              disabled={!isListening}
            >
              Stop
            </button>
          </div>

          <small className="text-lg">200 words remaining</small>
          <button
            className="text-xl bg-green-200 p-2 rounded-lg"
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
      ) : (
        <p>Sorry, your browser doesn't support speech recognition.</p>
      )}
    </div>
  );
};

export default TakeNote;
