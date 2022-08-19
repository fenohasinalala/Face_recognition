import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import FaceRecognition from "./components/FaceRecognition";
import ImportPictureFile from "./components/ImportPictureFile";
import { initilaValueObject, objectType } from "./interface/Interface";
import Result from "./result/Result";
import FaceChoose from "./faceChoose/FaceChoose";
import { Spinner } from "react-bootstrap";
export interface im {
  fileName: string;
  base64String: string;
}

function App() {
  const pictureRef = useRef<HTMLImageElement>(null);
  const [convertedFile, setConvertedFile] = useState<im>();
  const [getResult, setGetResult] = useState<objectType[]>([
    initilaValueObject,
  ]);
  const [image, setImage] = useState<string>("");
  const [active, setActive] = useState<number | null>(null);
  const [charging, setCharging] = useState<boolean>(true);

  useEffect(() => {
    if (convertedFile != undefined && active == null) {
      setActive(0);
    }
  }, [convertedFile]);


  

  useEffect(() => {
      setCharging(true);
  }, [convertedFile]);


  useEffect(() => {
    if (convertedFile?.base64String.includes("data:image/jpeg;base64,")) {
      setImage(convertedFile?.base64String.split("data:image/jpeg;base64,")[1]);
    } else if (convertedFile?.base64String.includes("data:image/png;base64,")) {
      setImage(convertedFile?.base64String.split("data:image/png;base64,")[1]);
    } else {
      console.log("le fichier n'est ni jpeg ni png");
    }
  }, [convertedFile]);

  console.log(getResult);

  const dataToAWS = (value: im) => {
    setConvertedFile(value);
  };
  //console.log("convertedFile: " + convertedFile);

  const resultat = (e: objectType[]) => {
    setGetResult(e);
  };

  return (
    <>
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <ImportPictureFile
                dataToAWS={dataToAWS}
                activ={active}
                setActive={setActive}
                getResult={getResult}
              />
            </div>
          </div>
          
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="conttenerImage continteAllImage pictureContainer">
                {FaceChoose(pictureRef, getResult, active, setActive, getResult)}
                <img
                  ref={pictureRef}
                  className="theImg"
                  src={convertedFile?.base64String}
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-8">              
              <div className="">
                <div className="resultData">
                  {charging? <> {active!=null?<Spinner animation="border" />: <div></div> }</> : Result(getResult, active, setActive)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <FaceRecognition
          imageData={image}
          resultat={resultat}
          convertedFile={convertedFile}
          setCharging={setCharging}
        />
      </div>
    </>
  );
}

export default App;
