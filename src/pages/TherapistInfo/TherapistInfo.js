import { useParams } from "react-router-dom";
// import { therapistTypesData } from "../../helpers/data";
import "../TherapistInfo/TherapistInfo.css";
import logo from "../../icons/AnimatedLogo.png";
import { MainBtn } from "../../components/MainBtn/MainBtn";
import { faLocationDot, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import defaultPhoto from "../../icons/defaultPhoto2.png";
import { Header } from "../../components/Header/Header";

export function TherapistInfo(props) {
  const allTherapists = props.allTherapists;
  let { therapistName } = useParams();
  let { specialty } = useParams();
  const navigate = useNavigate();

  if (allTherapists.length === 0) {
    window.location.assign("/");
  }

  let nameAndLastName = therapistName ? therapistName.split(" ") : "";
  let userLocalStorage = JSON.parse(window.localStorage.getItem("user"));

  const findSpecialty = allTherapists.find((user) => {
    return user.profession === specialty;
  });

  const therapistData = allTherapists.find((therapist) => {
    return therapist.name === nameAndLastName[0];
  });

  console.log(findSpecialty.experties);

  return (
    <div className="therapistInfoContainer">
      <Header userLoggedIn={userLocalStorage} specialties={"Therpais Info Page"}/>
      <div className="cardInformation">
        <div className="cardPhotoBox">
          <Image src={defaultPhoto} roundedCircle className="thrapistInfoImg" />
          <div className="cardInfo">
            <h3 className="specalistNameInfo">
              {therapistData.name} {therapistData.lastName}, {findSpecialty.profession}
            </h3>
            <span className="specalistExperties">
              {findSpecialty.experties.map((experty) => {
                return <p className="experty">{experty}</p>;
              })}
            </span>
            <div className="specalistAvailabilityContainer">
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
          </div>
        </div>

        <div className="cardActions cardActionInformation">
          <button className="callMeBtn">Call Me!</button>
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
<div className="aboutTherapistInfo">{therapistData.about}</div>
      </div>
    </div>
  );
}
