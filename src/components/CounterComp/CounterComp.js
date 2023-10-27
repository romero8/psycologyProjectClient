import React,{useState,useEffect} from "react";
import CountUp from "react-countup";
import "../CounterComp/CounterComp.css";
import Alert from "react-bootstrap/Alert";
import ScrollTrigger from 'react-scroll-trigger'

export function CounterComp(props) {
  
  const [allTherapists, setAllTherapists] = useState([]);
  const [allClients, setAllClients] = useState([]);

  useEffect(() => {
    fetch("https://mangisiteserver.onrender.com/allTherapists")
      .then((response) => response.json())
      .then((data) => setAllTherapists(data.data))
      .catch((err) => console.log(err));

    fetch("https://mangisiteserver.onrender.com/allClients")
      .then((response) => response.json())
      .then((data) => setAllClients(data.data))
      .catch((err) => console.log(err));

  }, []);

  const [counterVision,setCounterVision] = useState(false)

  

//  function onEnterViewport() {
//     this.setState({
//       visible: true,
//     });
//   }

//   function onExitViewport() {
//     this.setState({
//       visible: false,
//     });
//   }

  return (
    <div className="counterCompContainer">
      <ScrollTrigger onEnter={()=>{setCounterVision(true)}} onExit={()=>{setCounterVision(false)}}>
      <Alert className="countersBox">
        <h1 className="counterTitle">Stay Tuned With Us...</h1>
        <div className="counterFlex">
        {counterVision ? <div  className="counterBox">
          <CountUp className="counter" start={0} end={allTherapists.length} duration={3}/>
          <label className="labelCounter">Therapists On Site</label>
        </div> : ''}
        {counterVision ? <div  className="counterBox">
          <CountUp className="counter" start={0} end={allClients.length} duration={3}/>
          <label className="labelCounter">Clients On Site</label>
        </div> : ''}
        </div>
      </Alert>
      </ScrollTrigger>
    </div>
  );
}
