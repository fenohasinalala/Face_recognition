import { relative } from "path";
import React from "react";
import { objectType } from "../interface/Interface";

/*
 

 */

const FaceChoose = (
  pictureRef: any,
  data: objectType[],
  activ: number | null,
  setActive: React.Dispatch<React.SetStateAction<number | null>>,
  result: objectType[]
) => {
  return (
    <>
      {data.map((donne, key) => {
        let top, left, height, width;
        height = donne.BoundingBox.Height * 100;
        width = donne.BoundingBox.Width * 100;
        top = donne.BoundingBox.Top * 100;
        left = donne.BoundingBox.Left * 100;

        if (activ == key && result.length!=0 ) {
          return (
            <>
              <div
                className="FaceSelected"
                style={{
                  position: "absolute",
                  height: "calc(" + height + "%)",
                  width: "calc(" + width + "%)",
                  top: "calc(" + top + "%)",
                  left: "calc(" + left + "%)",
                }}
                onChange={() => {
                  setActive(key);
                }}
              ></div>
            </>
          );
        } else {
          return <></>;
        }
      })}
    </>
  );
};

export default FaceChoose;
