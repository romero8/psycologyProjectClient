import logo from "../../icons/AnimatedLogo.png";
import "../Specialties/Specialties.css";
import React, { useState, useEffect } from "react";
import { MainBtn } from "../../components/MainBtn/MainBtn";
import { faLocationDot, faVideo,faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { therapistTypesData } from "../../helpers/data";
import { Link } from "react-router-dom";
import defaultPhoto from "../../icons/defaultPhoto2.png";
import Image from "react-bootstrap/Image";
import { Header } from "../../components/Header/Header";


export function Notifications() {
  const [clientLoggedIn, setClientLoggedIn] = useState();

  const [usersAdded, setUsersAdded] = useState([]);
  const [check, setCheck] = useState([1]);

  let userLocalStorage = JSON.parse(window.localStorage.getItem("user"));
  const [userLocalStorageAddedToFavArr, setUserLocalStorageAddedToFavArr] =
    useState(userLocalStorage.addedToFavorites);

  const [userLoggedIn, setUserLoggedIn] = useState(userLocalStorage);

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

  }, check);

  return (
    <div className="cardsContainer">
      <Header userLoggedIn={userLocalStorage} setLoggedIn={setUserLoggedIn} setClientLoggedIn specialties ={"notifcation page"}/>
      <div className="cardsTitle">
          <h1 className="titleTherapist">Notifications</h1>
        </div>
      {userLocalStorageAddedToFavArr.map((client) => {

        function added() {
          if (userLocalStorage) {
            const objIdIndex = userLocalStorage.clientsIcalled.findIndex(
              (obj) => obj._id === client._id
            );

            if (objIdIndex === -1) {
              return false;
            } else {
              return true;
            }
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
              {
                !added() ? (<MainBtn
                value="I Called"
                clientToArrange={client}
                setUserLocalStorageAddedToFavArr={
                  setUserLocalStorageAddedToFavArr
                }
                setTherapistToUpdate={setTherapistToUpdate}
                setCheck={setCheck}
              /> ):<FontAwesomeIcon icon={faCircleCheck} className="checkedIcon"/>
              }
              
            </div>
            <div className="cardRightSideBox">
              <div className="cardInfo">
                <Link
                  className="specalistName"
                  to={`/notifications/${client.name} ${client.lastName}`}
                >
                  <h3>{`${client.name} ${client.lastName}`}</h3>
                </Link>
                <span className="specalistAbout">{`${client.name} ${client.lastName} is waiting for a call`}</span>
              </div>
              <div className="specalistAvailabilityBox">
                <div className="iconBox">
                  <FontAwesomeIcon icon={faLocationDot} className="cardIcon" />
                </div>
                <p className="specalistAvailability">{client.address.city}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
