import React,{useState,useEffect} from "react";
import CountUp from "react-countup";
import "../CounterComp/CounterComp.css";
import Alert from "react-bootstrap/Alert";

export function CounterComp(props) {
  
  const [allTherapists, setAllTherapists] = useState([]);
  const [allClients, setAllClients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allTherapists")
      .then((response) => response.json())
      .then((data) => setAllTherapists(data.data))
      .catch((err) => console.log(err));

    fetch("http://localhost:5000/allClients")
      .then((response) => response.json())
      .then((data) => setAllClients(data.data))
      .catch((err) => console.log(err));

  }, []);

  return (
    <div className="counterCompContainer">
      
      <Alert className="countersBox">
        <h1 className="counterTitle">Stay Tuned With Us...</h1>
        <Alert variant="light" className="counterBox">
          <CountUp className="counter" start={0} end={allTherapists.length} duration={3} delay={0} />
          <label className="labelCounter">Therapists On Site</label>
        </Alert>

        <Alert variant="light" className="counterBox">
          <CountUp className="counter" start={0} end={allClients.length} duration={3} delay={0} />
          <label className="labelCounter">Clients On Site</label>
        </Alert>
      </Alert>
    </div>
  );
}
