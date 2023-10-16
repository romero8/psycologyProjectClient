import { useParams } from "react-router-dom";
// import { therapistTypesData } from "../../helpers/data";
import "../TherapistInfo/TherapistInfo.css";
import logo from "../../icons/AnimatedLogo.png";
import { MainBtn } from "../../components/MainBtn/MainBtn";
import { faLocationDot, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState ,useRef } from "react";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import defaultPhoto from "../../icons/defaultPhoto2.png";
import { Header } from "../../components/Header/Header";
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';

export function ClientInfo(props) {
  const allClients = props.allClients;
  let { therapistName } = useParams();
  let { clientName } = useParams();
  let { specialty } = useParams();
  const navigate = useNavigate();

 
  const [show, setShow] = useState(false);
  const target = useRef(null);

  if (allClients.length === 0) {
    window.location.assign("/");
  }

  let nameAndLastName = clientName ? clientName.split(" ") : "";
  let userLocalStorage = JSON.parse(window.localStorage.getItem("user"));

  const findSpecialty = allClients.find((user) => {
    return user.profession === specialty;
  });

  const clientData = allClients.find((client) => {
    return client.name === nameAndLastName[0];
  });

  console.log(allClients);
  return (
    <div className="therapistInfoContainer">
      <Header
        userLoggedIn={userLocalStorage}
        specialties={"Therpais Info Page"}
      />
      <div className="cardInformation">
        <div className="cardPhotoBox">
          <Image src={defaultPhoto} roundedCircle className="thrapistInfoImg" />
          <div className="cardInfo">
            <h3 className="specalistNameInfo">
              {clientData.name} {clientData.lastName}
            </h3>
            <div className="specalistAvailabilityContainer">
              <div className="specalistAvailabilityBox">
                <div className="iconBox">
                  <FontAwesomeIcon icon={faLocationDot} className="cardIcon" />
                </div>
                <p className="specalistAvailability">
                  {clientData.address.city}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="cardActions cardActionInformation">
          <button ref={target} className="callMeBtn" onClick={() => setShow(!show)}>Call Me!</button>
          {/* <Button ref={target} className="callMeBtn" onClick={() => setShow(!show)}>Call Me!</Button> */}
          <Overlay target={target.current} show={show} placement="left">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'var(--logoColor)',  
              padding: '2px 30px',
              color: 'white',
              borderRadius: 100,
              ...props.style,
            }}
          >
            {clientData.phone}
          </div>
        )}
      </Overlay>
        </div>
      </div>

      {/* <div className="aboutContainer">
        <div className="about">
          <h3>About Myself</h3>
          <p className="therapistAbout">
            {`My name is ${therapistData.name} but u can call me ${therapistData.lastName}, I live in ${therapistData.address.city}. My phone number is ${therapistData.phone}, But u can also visit my website ${therapistData.website}, or send me a mail ${therapistData.email}.`}
          </p>
        </div>
      </div> */}

      <div className="aboutTherapistInfoContainer">
        <h2>About me</h2>
        <div className="aboutTherapistInfo"><p className="userInfoAbout">{clientData.about}</p></div>
      </div>
    </div>
  );
}
