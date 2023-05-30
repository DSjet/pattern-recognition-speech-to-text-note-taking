import useSpeechRecognitionHook from "../hooks/useSpeechRecognitionHook";

const Main = () => {
  const {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport,
  } = useSpeechRecognitionHook();
  return (
    <div>
      <h1>Speech to Text</h1>
      {hasRecognitionSupport ? (
        <>
          <button onClick={startListening} disabled={isListening}>
            Start
          </button>

          {isListening ? <p>Listening...</p> : null}

          <button onClick={stopListening} disabled={!isListening}>
            Stop
          </button>
          {text ? <p>{text}</p> : null}
        </>
      ) : (
        <p>Sorry, your browser doesn't support speech recognition.</p>
      )}
    </div>
  );
};

export default Main;
