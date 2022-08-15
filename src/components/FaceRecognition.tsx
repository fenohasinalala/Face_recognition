import { DetectFacesCommand } from "@aws-sdk/client-rekognition";
import { Buffer } from "buffer";

const { fromCognitoIdentityPool } = require("@aws-sdk/credential-providers");
const {
  RekognitionClient,
  DescribeCollection,
} = require("@aws-sdk/client-rekognition");

const credentials = fromCognitoIdentityPool({
  identityPoolId: "eu-west-2:371cdf1c-657e-4e3f-a6a0-3cdcf905bfdc",
  clientConfig: { region: "eu-west-2" },
});

interface Props {}

export const FaceRecognition = async (imageData: any) => {
  const client = new RekognitionClient({
    region: "eu-west-2",
    credentials,
  });

  let imgTosend = Buffer.from(imageData, "base64");

  const params = {
    Image: {
      Bytes: imgTosend,
    },
    Attributes: ["ALL"],
  };

  const detectFacesCommand = new DetectFacesCommand(params);
  try {
    const data = await client.send(detectFacesCommand);
    if (data) {
      let temp = data.FaceDetails;
      console.log("resultats: " + temp[0].AgeRange.High);
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default FaceRecognition;
