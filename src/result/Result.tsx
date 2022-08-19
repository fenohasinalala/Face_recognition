import React from "react";
import { objectType } from "../interface/Interface";
import "./Result.css";

interface data {
  Confidence: number;
  Value: boolean;
}

const Result = (
  data: objectType[],
  activ: number | null,
  setActiv: React.Dispatch<React.SetStateAction<number | null>>
) => {
  if (activ == null) {
    return <></>;
  } else {
    return (
      <>
        <form>
          <div className="form-group col-md-4">
            {data.length >= 0 ? (
              <>
                <label htmlFor="inputState">
                  Face recognized: {data.length}
                </label>
                <select id="inputState" className="form-control">
                  {data.map((value, key) => {
                    return (
                      <option
                        onClickCapture={() => {
                          setActiv(key);
                        }}
                      >
                        {key}
                      </option>
                    );
                  })}
                </select>
              </>
            ) : (
              <div></div>
            )}
          </div>
        </form>
        <table className="table">
          <tbody>
            {Object.entries(data[activ]).map(([k, v]) =>
              !Array.isArray(v) ? (
                <tr className="ligne" key={`${k}-${activ}`}>
                  <td className="entete text-left font-weight-bold">{k}</td>
                  <td className="valeur">
                    {typeof v === "object" ? (
                      <ul className="liste">
                        {Object.entries<string>(v).map(([key, value], list) => (
                          <li
                            className="text-left"
                            key={`${k}-${activ}-object-${activ}-${list}`}
                          >{`${key}: ${value}`}</li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-left valeur_unique">{v}</div>
                    )}
                  </td>
                </tr>
              ) : (
                <tr className="ligne" key={`${k}-${activ}`}>
                  <td className="entete text-left font-weight-bold">{k}</td>
                  <td className="valeur">
                    <table>
                      <thead>
                        <tr className="">
                          {Object.keys(v[0]).map((key) => (
                            <th className="font-medium" key={key}>
                              {key}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {v.map((item: object, i) => (
                          <tr key={`array-item-${i}`}>
                            {Object.values(item).map((value: string, j) => (
                              <td key={`array-item-${i}-${j}`}>{value}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </>
    );
  }
};

export default Result;
