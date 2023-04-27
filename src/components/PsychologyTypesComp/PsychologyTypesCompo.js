import { useEffect, useState } from "react";
import { getData } from "../../helpers/fetchHelper";

export function PsychologyTypesComp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData("psychologiesTypes").then((info) => {
      setData(info);
    });
  }, []);

  return <div></div>;
}
