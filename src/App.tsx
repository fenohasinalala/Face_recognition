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
  const [getResult, setGetResult] = useState<any>();
  const [image, setImage] = useState<string>("");
  const [count, setCount] = useState(0);

  console.log(getResult);
  

  const dataToAWS = (value: img) => {
    setConvertedFile(value);
  };
  //console.log("convertedFile: " + convertedFile);

  const resultat = (e: any) => {
    setGetResult(e);
  };

  const analyze = () => {
    if (convertedFile?.base64String.includes("data:image/jpeg;base64,")) {
      setImage(convertedFile?.base64String.split("data:image/jpeg;base64,")[1]);
    } else if (convertedFile?.base64String.includes("data:image/png;base64,")) {
      setImage(convertedFile?.base64String.split("data:image/png;base64,")[1]);
    } else {
      console.log("fichier n'est ni jpeg ni png");
    }
    setCount(current => current + 1);
  };

  return (
    <div className="App">
      <ImportPictureFile dataToAWS={dataToAWS} />
      <button onClick={analyze}>ANALIZE</button>
      <FaceRecognition imageData={image} resultat={resultat} count={count}/>
    </div>
  );
}

export default App;
