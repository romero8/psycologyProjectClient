import { useParams } from "react-router-dom";
import { therapistTypesData } from "../../helpers/data";
import "../TherapistInfo/TherapistInfo.css";
import { Header } from "../../components/Header/Header";
import logo from "../../icons/AnimatedLogo.png";
import { MainBtn } from "../../components/MainBtn/MainBtn";
import { faLocationDot, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TherapistInfo() {
  let { therapistName } = useParams();
  let { specialty } = useParams();

  const therapistTypes = therapistTypesData;

  const findSpecialty = therapistTypes.find((specailty) => {
    return specailty.typeName === specialty;
  });

  const therapistData = findSpecialty.users.find((therapist) => {
    return therapist.name === therapistName;
  });

  console.log(therapistData);

  return (
    <div className="therapistInfoContainer">
      <div className="cardContainer cardInformation">
        <div className="cardPhotoBox cardPhotoBoxInformation">
          <img className="img" src={logo} />
        </div>
        <div className="cardInfo">
          <h3 className="specalistName">{therapistData.name}</h3>
          <span className="specalistAbility">{findSpecialty.typeName}</span>
          <span className="specalistAbout">{`Best ${findSpecialty.typeName} Ever`}</span>
          <div className="specalistAvailabilityBox">
            <div className="iconBox">
              <FontAwesomeIcon icon={faLocationDot} className="cardIcon" />
            </div>
            <p className="specalistAvailability">
              {therapistData.address.city}
            </p>
          </div>
          <div className="specalistAvailabilityBox">
            <div className="iconBox">
              <FontAwesomeIcon icon={faVideo} className="cardIcon" />{" "}
            </div>
            <p className="specalistAvailability">Video Call</p>
          </div>
        </div>
        <div className="cardActions">
          <MainBtn value="Call" />
          <MainBtn value="Appointment" />
        </div>
      </div>
      <div className="aboutContainer">
        <h3>About Myself</h3>
        <p className="therapistAbout">
          {`My name is ${therapistData.name} but u can call me ${therapistData.username}, I live in ${therapistData.address.city}. My phone number is ${therapistData.phone}, But u can also visit my website ${therapistData.website}, or send me a mail ${therapistData.email}.`}
        </p>
      </div>
    </div>
  );
}
