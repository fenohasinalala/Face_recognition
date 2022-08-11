import React, { useState } from "react";
import "./App.css";
import FaceRecognition from "./components/FaceRecognition";
import ImportPictureFile from "./components/ImportPictureFile";
interface img {
  fileName: string;
  base64String: string;
}

function App() {
  const [convertedFile, setConvertedFile] = useState<img>();
  const analize = () => {
    const image = convertedFile?.base64String.split("data:image/jpeg;base64,")[1];
    const length = image?.length;
    if (length) {
      const imageBytes = new ArrayBuffer(length);
      const ua = new Uint8Array(imageBytes);
      for (var i = 0; i < length; i++) {
        ua[i] = image.charCodeAt(i);
      }

      console.log("image= "+image);
      console.log("ua= "+ua);
    FaceRecognition(ua);
    } else console.log("erreur length");
  };

  const dataToAWS = (value: img) => {
    setConvertedFile(value);
  };
  console.log("convertedFile: " + convertedFile);

  return (
    <div className="App">
      <ImportPictureFile dataToAWS={dataToAWS} />
      <button onClick={analize}>ANALIZE</button>
    </div>
  );
}

export default App;
