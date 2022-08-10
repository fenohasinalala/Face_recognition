import React, { useState } from "react";
import { fileToBase64 } from "./FileToBase64";

interface img {
  fileName: string, 
  base64String: string
}

function ImportPictureFile() {
  const [file,setFile] = useState<img>();

  const onSelectFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
    const tempFileList: img = {
      fileName: file.name,
      base64String: file.type.indexOf('image') > -1 ? await fileToBase64(file) : '',      
    };
    setFile(tempFileList);    
    }
  }
  console.log(file);
  return (
    <>
      <input type="file" multiple onChange={onSelectFiles} />
      <img src={file?.base64String} alt="" />
    </>
  );
}

export default ImportPictureFile;
