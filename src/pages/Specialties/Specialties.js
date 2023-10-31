import "../Specialties/Specialties.css";
import { useParams } from "react-router-dom";
import defaultPhoto from "../../icons/defaultPhoto2.png";
import logo from "../../icons/logo.png";
import Spinner from "react-bootstrap/Spinner";
import { MainBtn } from "../../components/MainBtn/MainBtn";
import { faLocationDot, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { therapistTypesData, allUsers } from "../../helpers/data";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import { Header } from "../../components/Header/Header";
import { LoadingLogo } from "../../components/LoadingLogo/LoadingLogo";

var _ = require("lodash");

export function Specialties(props) {
  let { searchBySpecialties } = useParams();
  let { searchByTherapist } = useParams();
  let { specialty } = useParams();
  let { name } = useParams();
  let { profession } = useParams();
  let { city } = useParams();
  let { range } = useParams();
  let { language } = useParams();
  let { experience } = useParams();
  let { gender } = useParams();
  let { lgbtq } = useParams();

  // const userLoggedIn = props.userLoggedIn

  const [therapistLoggedIn, setTherapistLoggedIn] = useState();
  const [clientLoggedIn, setClientLoggedIn] = useState();

  const [usersAdded, setUsersAdded] = useState([]);
  const [check, setCheck] = useState([1]);

  let userLocalStorage = JSON.parse(window.localStorage.getItem("user"));
  let userLocalStorageFavorites = userLocalStorage
    ? userLocalStorage.favorites
    : "";

  const [userLoggedIn, setUserLoggedIn] = useState(userLocalStorage);

  const [updateData, setUpdateData] = useState({
    userLoggedIn: userLoggedIn,
    favoritesToUpdate: userLocalStorageFavorites,
  });

  const [therapistToUpdate, setTherapistToUpdate] = useState({
    id: "",
    addedToFavorites: [],
  });

  useEffect(() => {
    fetch("https://mangisiteserver.onrender.com/userLoggedIn", {
      method: "POST",
      body: JSON.stringify(userLoggedIn),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserLoggedIn(data.clientLoggedIn);
      })
      .catch((err) => console.log(err));

    fetch("https://mangisiteserver.onrender.com/update/therapist", {
      method: "POST",
      body: JSON.stringify(therapistToUpdate),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    fetch("https://mangisiteserver.onrender.com/update/client", {
      method: "POST",
      body: JSON.stringify(updateData),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setClientLoggedIn(data.clientLoggedIn))
      .catch((err) => console.log(err));
  }, check);

  const [allTherapists, setAllTherapists] = useState([]);

  useEffect(() => {
    fetch("https://mangisiteserver.onrender.com/allTherapists")
      .then((response) => response.json())
      .then((data) => setAllTherapists(data.data))
      .catch((err) => console.log(err));
  }, []);

  const therapistInfoArr = [
    specialty,
    name,
    profession,
    city,
    range,
    language,
    experience,
    gender,
  ];

  let rangeSplit = range ? range.split(",") : "";

  let rangeArr = [];

  for (let x = rangeSplit[0]; x <= rangeSplit[1]; x++) {
    rangeArr.push(x);
  }

  let rangePrice = rangeArr.map((arr) => {
    return arr;
  });

  let nameAndLastName = name ? name.split(" ") : "";

  const therapistObj = {
    name: nameAndLastName[0],
    lastName: nameAndLastName[1],
    profession: profession,
    address: {
      city: city,
    },
    gender: gender,
    language: [language],
    experience: experience,
  };

  const filterUserPrice = allTherapists.filter((user) => {
    if (
      user.price >= rangeArr[0] &&
      user.price <= rangeArr[rangeArr.length - 1]
    ) {
      return user.price;
    }
  });

  function newObj(obj) {
    const objKeys = Object.keys(obj);
    // for(let objLoop of objKeys)

    if (obj.name === "all") {
      delete obj.name;
    }
    if (!obj.lastName) {
      delete obj.lastName;
    }
    if (obj.profession === "all") {
      delete obj.profession;
    }
    if (obj.address.city === "all") {
      delete obj.address.city;
    }
    if (obj.price) {
      if (obj.price === "all") {
        delete obj.price;
      }
    }

    if (obj.gender === "all") {
      delete obj.gender;
    }
    if (obj.experience === "all") {
      delete obj.experience;
    }
    if (obj.language) {
      obj.language.map((lan) => {
        if (lan === "all") {
          delete obj.language;
        }
      });
    }
    return obj;
  }

  const filterUsers = _.filter(filterUserPrice, newObj(therapistObj));

  const checkArr = [];

  const checkArrAll = therapistInfoArr.filter((arr) => {
    if (arr !== "all") {
      return arr;
    }
  });

  for (let i = 0; i < therapistInfoArr.length; i++) {
    if (therapistInfoArr[i] === "all") {
      checkArr.push(therapistInfoArr[i]);
    }
  }
  
  return (
    <div className="cardsContainer">
      <Header
        userLoggedIn={userLocalStorage}
        setLoggedIn={setUserLoggedIn}
        specialties={"specialties page"}
      />
      <div className="cardsTitle">
        <h1 className="titleTherapist">Therapists just for you!</h1>
      </div>

      {searchByTherapist && filterUsers.length > 0 ? (
        filterUsers.map((user) => {
          function added() {
            if (userLocalStorage) {
              const objIdIndex = userLocalStorage.favorites.findIndex(
                (obj) => obj._id === user._id
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
                <Link
                  className="specalistName"
                  to={`/specialties/${user.profession}/${user.name} ${user.lastName}`}
                >
                  View Profile
                </Link>
                {userLocalStorage.favorites && !added() ? (
                  <MainBtn
                    value="Add To Favorites"
                    userToAdd={user}
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
                ) : (
                  ""
                )}
                {userLocalStorage.favorites && added() ? (
                  <MainBtn
                    value="Remove From Favorites"
                    userToAdd={user}
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
                ) : (
                  ""
                )}
              </div>
              <div className="cardRightSideBox">
                <div className="cardInfo">
                  <Link
                    className="specalistName"
                    to={`/specialties/${user.profession}/${user.name} ${user.lastName}`}
                  >
                    <h3>{`${user.name} ${user.lastName}`}</h3>
                  </Link>
                  <span className="specalistAbility">{user.profession}</span>
                  <span className="specalistAbout">{user.about}</span>
                </div>
                <div className="specalistAvailabilityBox">
                  <div className="iconBox">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="cardIcon"
                    />
                  </div>
                  <p className="specalistAvailability">{user.address.city}</p>
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
        <LoadingLogo/>
      )}
    </div>
  );
}
