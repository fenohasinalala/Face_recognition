import React from "react";
import "./App.css";
import FaceRecognition from "./components/FaceRecognition";
import ImportPictureFile from "./components/ImportPictureFile";


function App() {
  return (
    <div className="App">
      <ImportPictureFile />
      <FaceRecognition/>
      
    </div>
  );
}

export default App;
