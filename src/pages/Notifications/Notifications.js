import logo from "../../icons/AnimatedLogo.png";
import "../Specialties/Specialties.css";
import React, { useState, useEffect } from "react";
import { MainBtn } from "../../components/MainBtn/MainBtn";
import { faLocationDot, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { therapistTypesData } from "../../helpers/data";
import { Link } from "react-router-dom";

export function Notifications() {
  const [clientLoggedIn, setClientLoggedIn] = useState();

  const [usersAdded, setUsersAdded] = useState([]);
  const [check, setCheck] = useState([1]);

  let userLocalStorage = JSON.parse(window.localStorage.getItem("user"));
  const [userLocalStorageAddedToFavArr, setUserLocalStorageAddedToFavArr] =
    useState(userLocalStorage.addedToFavorites);

  const [userLoggedIn, setUserLoggedIn] = useState(userLocalStorage);

  //   const [updateData, setUpdateData] = useState({
  //     userLoggedIn: userLoggedIn,
  //     favoritesToUpdate: userLoggedIn.favorites,
  //   });

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

    // fetch("http://localhost:5000/update/client", {
    //   method: "POST",
    //   body: JSON.stringify(updateData),
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((response) => response.json())
    //   .then((data) => setClientLoggedIn(data.clientLoggedIn))
    //   .catch((err) => console.log(err));
  }, check);

  return (
    <div className="cardsContainer">
      <div className="cardsTitle">
        <h2>Notifications</h2>
      </div>
      {userLocalStorageAddedToFavArr.map((client) => {
        // function added() {
        //   const objIdIndex = therapist.addedToFavorites.findIndex(
        //     (obj) => obj._id === userLoggedIn._id
        //   );

        //   if (objIdIndex === -1) {
        //     return false;
        //   } else {
        //     return true;
        //   }
        // }

        return (
          <div className="cardContainer">
            <div className="cardPhotoBox">
              <img className="img" src={logo} />
            </div>
            <div className="cardInfo">
              <Link
                className="specalistName"
                to={`/specialties/${client.profession}/${client.name}`}
              >
                <h3>{`${client.name} ${client.lastName}`}</h3>
              </Link>
              <span className="specalistAbout">{`${client.name} ${client.lastName} is waiting for a call`}</span>
              <div className="specalistAvailabilityBox">
                <div className="iconBox">
                  <FontAwesomeIcon icon={faLocationDot} className="cardIcon" />
                </div>
                <p className="specalistAvailability">{client.address.city}</p>
              </div>
              <div className="specalistAvailabilityBox">
                <div className="iconBox">
                  <FontAwesomeIcon icon={faVideo} className="cardIcon" />{" "}
                </div>
                <p className="specalistAvailability">Video Call</p>
              </div>
            </div>
            <div className="cardActions">
              {/* <MainBtn
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
                /> */}

              <MainBtn
                value="I Called"
                clientToArrange={client}
                setUserLocalStorageAddedToFavArr={
                  setUserLocalStorageAddedToFavArr
                }
                setTherapistToUpdate={setTherapistToUpdate}
                setCheck = {setCheck}
              />
              <MainBtn value="Appointment" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
