import { DetectFacesCommand } from "@aws-sdk/client-rekognition";
import { Buffer } from "buffer";
import { useEffect, useState } from "react";
import { im } from "../App";
import { objectType } from "../interface/Interface";

const { fromCognitoIdentityPool } = require("@aws-sdk/credential-providers");
const {
  RekognitionClient,
  /*DescribeCollection,*/
} = require("@aws-sdk/client-rekognition");

const credentials = fromCognitoIdentityPool({
  identityPoolId: "eu-west-2:371cdf1c-657e-4e3f-a6a0-3cdcf905bfdc",
  clientConfig: { region: "eu-west-2" },
});

interface Props {
  imageData: string;
  resultat: (e: objectType[]) => void;
  convertedFile: im | undefined;
  setCharging: React.Dispatch<React.SetStateAction<boolean>>;
}

const FaceRecognition: React.FC<Props> = (Props) => {
  //const [result, setResult] = useState<any>();

  useEffect(() => {
    if (Props.imageData.length>0) {
      facedetails();
    }
    
  }, [Props.imageData]);

  const facedetails = async () => {
    const client = new RekognitionClient({
      region: "eu-west-2",
      credentials,
    });

    let imgTosend = Buffer.from(Props.imageData, "base64");

    const params = {
      Image: {
        Bytes: imgTosend,
      },
      Attributes: ["ALL"],
    };

    const detectFacesCommand = new DetectFacesCommand(params);
    try {
      const data = await client.send(detectFacesCommand);
      //console.log('resultat apres la fonction: '+data);
      Props.resultat(data.FaceDetails);
      Props.setCharging(false);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return <div></div>;
};

export default FaceRecognition;
