import CountUp from "react-countup";
import '../CounterComp/CounterComp.css'

export function CounterComp() {
  return (
    <div className="counterCompContainer">
      <h1>Stay Tuned With Us</h1>
      <div className="counters">
        <div className="counter"><CountUp start={0} end={100} duration={3} delay={0} /></div>
        <div className="counter"><CountUp start={0} end={100} duration={3} delay={0} /></div>
      </div>
    </div>
  );
}
