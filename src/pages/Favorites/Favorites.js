import logo from "../../icons/logo.png";
import "../Specialties/Specialties.css";
import React, { useState, useEffect } from "react";
import { MainBtn } from "../../components/MainBtn/MainBtn";
import { faLocationDot, faVideo ,faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { therapistTypesData } from "../../helpers/data";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import defaultPhoto from "../../icons/defaultPhoto2.png";
import { Header } from "../../components/Header/Header";

export function Favorites() {
  const [clientLoggedIn, setClientLoggedIn] = useState();

  const [usersAdded, setUsersAdded] = useState([]);
  const [check, setCheck] = useState([1]);

  let userLocalStorage = JSON.parse(window.localStorage.getItem("user"));

  const [userLoggedIn, setUserLoggedIn] = useState(userLocalStorage);

  const [updateData, setUpdateData] = useState({
    userLoggedIn: userLoggedIn,
    favoritesToUpdate: userLoggedIn.favorites,
  });

  const [therapistToUpdate, setTherapistToUpdate] = useState({
    id: "",
    addedToFavorites: [],
  });

  useEffect(() => {
    fetch("http://localhost:5000/userLoggedIn", {
      method: "POST",
      body: JSON.stringify(userLoggedIn),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserLoggedIn(data.clientLoggedIn);
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:5000/update/therapist", {
      method: "POST",
      body: JSON.stringify(therapistToUpdate),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    fetch("http://localhost:5000/update/client", {
      method: "POST",
      body: JSON.stringify(updateData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setClientLoggedIn(data.clientLoggedIn))
      .catch((err) => console.log(err));
  }, check);

  return (





    <div className="cardsContainer">
      <Header
        userLoggedIn={userLocalStorage}
        setLoggedIn={setUserLoggedIn}
        specialties={"specialties page"}
      />
      <div className="cardsTitle">
        <h1 className="titleTherapist">Your Favorites!</h1>
      </div>

      {userLocalStorage.favorites.length > 0 ? (
        userLocalStorage.favorites.map((therapist) => {
          function added() {
            const objIdIndex = therapist.addedToFavorites.findIndex(
              (obj) => obj._id === userLoggedIn._id
           );
   
            if (objIdIndex === -1) {
             return false;
           } else {
             return true;
           }
         }       

          return (
            <div className="cardContainer">
              <div className="cardLeftSideBox">
                <div className="cardPhotoBox">
                  <Image
                    src={defaultPhoto}
                    roundedCircle
                    className="carouselImg"
                  />
                </div>
                <Link
                  className="specalistName"
                  to={`/specialties/${therapist.profession}/${therapist.name} ${therapist.lastName}`}
                >
                  View Profile
                </Link>
                <MainBtn
                  value="Remove From Favorites"
                  therapistToRemove={therapist}
                  usersAdded={usersAdded}
                  setUsersAdded={setUsersAdded}
                  updateData={updateData}
                  setUpdateData={setUpdateData}
                  therapistToUpdate={therapistToUpdate}
                  setTherapistToUpdate={setTherapistToUpdate}
                  check={check}
                  setCheck={setCheck}
                  userLoggedIn={userLoggedIn}
                />
                {
                !added() ?  <MainBtn
                value="Send Info"
                therapistToRemove={therapist}
                usersAdded={usersAdded}
                setUsersAdded={setUsersAdded}
                updateData={updateData}
                setUpdateData={setUpdateData}
                therapistToUpdate={therapistToUpdate}
                setTherapistToUpdate={setTherapistToUpdate}
                check={check}
                setCheck={setCheck}
                userLoggedIn={userLoggedIn}
              /> : <FontAwesomeIcon icon={faCircleCheck} className="checkedIcon"/>
              }
              </div>
              <div className="cardRightSideBox">
                <div className="cardInfo">
                  <Link
                    className="specalistName"
                    to={`/specialties/${therapist.profession}/${therapist.name} ${therapist.lastName}`}
                  >
                    <h3>{`${therapist.name} ${therapist.lastName}`}</h3>
                  </Link>
                  <span className="specalistAbility">{therapist.profession}</span>
                  <span className="specalistAbout">{therapist.about}</span>
                </div>
                <div className="specalistAvailabilityBox">
                  <div className="iconBox">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="cardIcon"
                    />
                  </div>
                  <p className="specalistAvailability">{therapist.address.city}</p>
                  <div className="iconBox">
                    <FontAwesomeIcon icon={faVideo} className="cardIcon" />{" "}
                  </div>
                  <p className="specalistAvailability">Video Call</p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="loadingBox">
          <Spinner animation="grow" className="spinnerLoading"/>
          <Image src={logo} roundedCircle className="logoLoading" />
        </div>
      )}
    </div>

  );
}
