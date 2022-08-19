export interface yesOrNot {
    Confidence:number;
    Value:boolean;
}

export interface AgeRange {
    High:number;
    Low:number;
}



export interface BoundingBox {
    Height:number;
    Left:number;
    Top:number;
    Width:number;
}

export interface Emotion {
    Confidence:number;
    Type:string;
}

export interface Gender {
    Confidence:number;
    Value:string;
}

export interface Landmark {
    Type:string;
    x:number;
    y:number;
}


export interface Pose {
    Pitch:number;
    Roll:number;
    Yaw:number;
}

export interface Quality{
    Brightness:number;
    Sharpness:number;
}


export interface objectType {
    AgeRange:AgeRange;
    Beard:yesOrNot;
    BoundingBox:BoundingBox;
    Confidence:number;
    Emotions:Emotion[];
    Eyeglasses:yesOrNot;
    EyesOpen:yesOrNot;
    Gender:Gender;
    Landmarks:Landmark[];
    MouthOpen:yesOrNot;
    Mustache:yesOrNot;
    Pose:Pose;
    Quality:Quality;
    Smile:yesOrNot;
    Sunglasses:yesOrNot;
}


export const initilaValueObject:objectType = {
    "AgeRange":{High:1,Low:1},
    "Beard":{Confidence:1,Value:true,},
    "BoundingBox":{Height:0.001,Left:0.001,Top:0.01,Width:0.01,},
    "Confidence":1,
    "Emotions":[{Confidence:1,Type:"string",},{Confidence:2,Type:"string2",}],
    "Eyeglasses":{Confidence:1,Value:true,},
    "EyesOpen":{Confidence:1,Value:true,},
    "Gender":{Confidence:1,Value:"string",},
    "Landmarks":[{Type:"string",x:1,y:1,}],
    "MouthOpen":{Confidence:1,Value:true,},
    "Mustache":{Confidence:1,Value:true,},
    "Pose":{Pitch:1,Roll:1,Yaw:1,},
    "Quality":{Brightness:1,Sharpness:1,},
    "Smile":{Confidence:1,Value:true,},
    "Sunglasses":{Confidence:1,Value:true,}
};