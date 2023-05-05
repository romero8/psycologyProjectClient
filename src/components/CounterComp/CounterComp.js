import CountUp from "react-countup";
import "../CounterComp/CounterComp.css";
import Alert from "react-bootstrap/Alert";

export function CounterComp() {
  return (
    <div className="counterCompContainer">
      
      <Alert className="countersBox">
        <h1 className="counterTitle">Stay Tuned With Us...</h1>
        <Alert variant="light" className="counterBox">
          <CountUp className="counter" start={0} end={100} duration={3} delay={0} />
          <label className="labelCounter">Therapists On Site</label>
        </Alert>

        <Alert variant="light" className="counterBox">
          <CountUp className="counter" start={0} end={100} duration={3} delay={0} />
          <label className="labelCounter">Clients On Site</label>
        </Alert>
      </Alert>
    </div>
  );
}
