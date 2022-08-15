import React, { useEffect, useState } from "react";
import "./App.css";
import FaceRecognition from "./components/FaceRecognition";
import ImportPictureFile from "./components/ImportPictureFile";
interface img {
  fileName: string;
  base64String: string;
}

function App() {
  const [convertedFile, setConvertedFile] = useState<img>();
  const [imgToSend, setImgToSend] = useState<string>();
  
console.log('imgToSend'+imgToSend);

  
  const analize = () => {
    let image = "";
    let length: number;
    if (convertedFile?.base64String.includes("data:image/jpeg;base64,")) {
      image = convertedFile?.base64String.split("data:image/jpeg;base64,")[1];
    } else if (convertedFile?.base64String.includes("data:image/png;base64,")) {
      image = convertedFile?.base64String.split("data:image/png;base64,")[1];
    } else {console.log("fichier n'est ni jpeg ni png")}
    length = image?.length;
    if (length) {
    FaceRecognition(image);
    } else console.log("erreur importation");
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
