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

export function Profile() {
    let userLocalStorage = JSON.parse(window.localStorage.getItem("user"));
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
              {userLocalStorage.name} {userLocalStorage.lastName}
              {userLocalStorage.profession ?`, ${userLocalStorage.profession}` : ''}
            </h3>
            <span className="specalistExperties">
              {userLocalStorage.experties ? userLocalStorage.experties.map((experty) => {
                return <p className="experty">{experty}</p>;
              }): ''}
            </span>
            <div className="specalistAvailabilityContainer">
              <div className="specalistAvailabilityBox">
                <div className="iconBox">
                  <FontAwesomeIcon icon={faLocationDot} className="cardIcon" />
                </div>
                <p className="specalistAvailability">
                  {userLocalStorage.address.city}
                </p>
              </div>
              {userLocalStorage.profession ? <div className="specalistAvailabilityBox">
                <div className="iconBox">
                  <FontAwesomeIcon icon={faVideo} className="cardIcon" />{" "}
                </div>
                <p className="specalistAvailability">Video Call</p>
              </div> : ''}
              
            </div>
          </div>
        </div>

      </div>
      <div className="aboutTherapistInfoContainer">
        <h2>About me</h2>
        <div className="aboutTherapistInfo">
          <p className="userInfoAbout">{userLocalStorage.about}</p>
        </div>
      </div>
    </div>
  );
}
