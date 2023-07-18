import { useParams } from "react-router-dom";
// import { therapistTypesData } from "../../helpers/data";
import "../TherapistInfo/TherapistInfo.css";
import { Header } from "../../components/Header/Header";
import logo from "../../icons/AnimatedLogo.png";
import { MainBtn } from "../../components/MainBtn/MainBtn";
import { faLocationDot, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export function TherapistInfo(props) {
  const allTherapists = props.allTherapists;
  let { therapistName } = useParams();
  let { specialty } = useParams();

  console.log(allTherapists);

  let nameAndLastName = therapistName ? therapistName.split(" ") : "";

  const findSpecialty = allTherapists.find((user) => {
    return user.profession === specialty;
  });

  const therapistData = allTherapists.find((therapist) => {
    return therapist.name === nameAndLastName[0];
  });

  console.log(nameAndLastName[0]);

  return (
    <div className="therapistInfoContainer">
      <div className="cardContainer cardInformation">
        <div className="cardPhotoBox cardPhotoBoxInformation">
          <img className="img" src={logo} />
        </div>
        <div className="cardInfo">
          <h3 className="specalistName">{therapistData.name}</h3>
          <span className="specalistAbility">{findSpecialty.typeName}</span>
          <span className="specalistAbout">{`Best ${findSpecialty.profession} Ever`}</span>
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
        <div className="cardActions cardActionInformation">
          <MainBtn value="Call" />
          <MainBtn value="Appointment" />
        </div>
      </div>

      <div className="aboutContainer">
        <div className="about">
          <h3>About Myself</h3>
          <p className="therapistAbout">
            {`My name is ${therapistData.name} but u can call me ${therapistData.lastName}, I live in ${therapistData.address.city}. My phone number is ${therapistData.phone}, But u can also visit my website ${therapistData.website}, or send me a mail ${therapistData.email}.`}
          </p>
        </div>
      </div>
    </div>
  );
}
