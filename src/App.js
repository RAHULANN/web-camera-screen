import logo from "./logo.svg";
import "./App.css";
import { useReactMediaRecorder } from "react-media-recorder";
import ScreenRecording from "./sreenrecording";
import Profile from "./camera";
import { useState } from "react";
function App() {
  const [showcamera, setshowcamera] = useState(false);
  return (
    <div className="App">
      <ScreenRecording
        screen={true}
        audio={true}
        video={true}
        downloadRecordingPath="Screen_Recording_Demo"
        downloadRecordingType="mp4"
        emailToSupport="support@xyz.com"
      ></ScreenRecording>

      {showcamera ? (
        <button
          onClick={() => {
            setshowcamera(true);
          }}
        >
          camera on
        </button>
      ) : (
        <button
          onClick={() => {
            setshowcamera(false);
          }}
        >
          camera off
        </button>
      )}

      {showcamera && <Profile />}
    </div>
  );
}

export default App;
