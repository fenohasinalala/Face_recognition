import React, { useState } from "react";
import { Form } from "react-bootstrap";
import FaceChoose from "../faceChoose/FaceChoose";
import { objectType } from "../interface/Interface";
import { fileToBase64 } from "./FileToBase64";
import "./style.css";

interface img {
  fileName: string;
  base64String: string;
}

interface Props {
  dataToAWS: (a: img) => void;
  activ: number | null;
  setActive: React.Dispatch<React.SetStateAction<number | null>>;
  getResult: objectType[];
}

const ImportPictureFile: React.FC<Props> = (Props) => {
  const [file, setFile] = useState<img>();

  const onSelectFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const tempFileList: img = {
        fileName: file.name,
        base64String:
          file.type.indexOf("image") > -1 ? await fileToBase64(file) : "",
      };
      setFile(tempFileList);
      Props.dataToAWS(tempFileList);
    }
  };
  //console.log(file);

  return (
    <>
      <div className="custom-file fichier">
        <input
          type="file"
          className="custom-file-input "
          id="customFile"
          multiple
          onChange={onSelectFiles}
        />
        <label className="custom-file-label" htmlFor="customFile">
          Choose file
        </label>
      </div>
    </>
  );
};

export default ImportPictureFile;
