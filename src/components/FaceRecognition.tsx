const { fromCognitoIdentityPool } = require("@aws-sdk/credential-providers");
const { RekognitionClient, DescribeCollection } = require("@aws-sdk/client-rekognition");



interface Props {
}

const FaceRecognition: React.FC = (props: Props) => {


          
        

  return (
    <div>
        <button type="submit" >scan</button>
      
    </div>
  );
}

export default FaceRecognition;