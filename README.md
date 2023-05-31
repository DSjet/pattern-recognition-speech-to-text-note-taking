# SpeakWrite

## Overview
SpeakWrite React App is a web application built with React that allows users to convert speech to text. It utilizes the Web Speech API to capture audio input from the user's microphone and transcribe it into written text. 

## Features
1. **Speech-to-Text Conversion:** The app captures audio input from the user's microphone and converts it into text using the Web Speech API.

2. **Real-time Transcription:** As the user speaks, the app provides real-time transcription, displaying the converted text on the screen.

3. **Responsive Design:** The app is built with a responsive design, ensuring optimal user experience across different devices and screen sizes.

## Installation
To run SpeakWrite React App locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/speakwrite-react-app.git
   ```

2. Navigate to the project directory:
   ```
   cd speakwrite-react-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open a web browser and visit `http://localhost:5173` to access the app.

## Configuration
The app provides a few configuration options that can be modified in the `src/config.js` file:

- `supportedLanguages`: An array of languages supported by the app. You can add or remove languages from this list.
- `defaultLanguage`: The default language to use for speech-to-text conversion. Specify the language code here.
- `punctuationSettings`: Determines how punctuation is handled in the transcription. Options include "none," "all," or "partial."
- `transcriptionSpeed`: Adjusts the speed of the transcription display. Higher values make it faster, while lower values make it slower.

## Dependencies
SpeakWrite React App relies on the following dependencies:

- React: A JavaScript library for building user interfaces.
- Web Speech API: A browser API for speech recognition and synthesis.
- Other dependencies: These can be found in the `package.json` file.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify the code according to the terms of the license.

## Acknowledgements
- [React](https://reactjs.org): A JavaScript library for building user interfaces.
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API): A browser API for speech recognition and synthesis.

## Contact
If you have any questions, suggestions, or issues
