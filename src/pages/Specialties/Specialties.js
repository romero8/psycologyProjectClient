import "../Specialties/Specialties.css";
import { useParams } from "react-router-dom";
import logo from "../../icons/AnimatedLogo.png";
import { MainBtn } from "../../components/MainBtn/MainBtn";
import { faLocationDot, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { therapistTypesData, allUsers } from "../../helpers/data";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
        setUserLoggedIn(data.clientLoggedIn)
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

  // if (updateData.userLoggedIn) {
  //   if (updateData.userLoggedIn.profession) {
  //     setTherapistLoggedIn(updateData.userLoggedIn)

  //   } else {
  //     setClientLoggedIn(updateData.userLoggedIn)
  //   }
  // }

  // useEffect(() => {
  //   async function fetchData(){
  //     try {
  //       const res = await fetch("http://localhost:5000/update/therapist", {
  //         method: "POST",
  //         body: JSON.stringify(updateData),
  //         headers: { "Content-Type": "application/json" },
  //       });
  //       const data = await res.json();
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // }, []);

  const [allTherapists, setAllTherapists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allTherapists")
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
      <div className="cardsTitle">
        <h2>
          Queue For:{" "}
          {therapistInfoArr.map((therapist) => {
            if (therapist !== "all") {
              return <h3>{therapist}</h3>;
            }
          })}
        </h2>
      </div>

      {searchBySpecialties
        ? allTherapists.map((user) => {
            if (user.profession === specialty) {
              return (
                <div className="cardContainer">
                  <div className="cardPhotoBox">
                    <img className="img" src={logo} />
                  </div>
                  <div className="cardInfo">
                    <Link
                      className="specalistName"
                      to={`/specialties/${specialty}/${user.name} ${user.lastName}`}
                    >
                      <h3>{`${user.name} ${user.lastName}`}</h3>
                    </Link>
                    <span className="specalistAbility">{specialty}</span>
                    <span className="specalistAbout">{`Best ${specialty} Ever`}</span>
                    <div className="specalistAvailabilityBox">
                      <div className="iconBox">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="cardIcon"
                        />
                      </div>
                      <p className="specalistAvailability">
                        {user.address.city}
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
                    {clientLoggedIn ? (
                      <MainBtn
                        value="Add To Favorties"
                        userToAdd={user}
                        usersAdded={usersAdded}
                        setUsersAdded={setUsersAdded}
                        updateData={updateData}
                        setUpdateData={setUpdateData}
                        therapistToUpdate={therapistToUpdate}
                        setTherapistToUpdate={setTherapistToUpdate}
                      />
                    ) : (
                      ""
                    )}
                    <MainBtn value="Call" />
                    <MainBtn value="Appointment" />
                  </div>
                </div>
              );
            }
          })
        : filterUsers.map((user) => {
            function added() {
              const objIdIndex = user.addedToFavorites.findIndex(
                (obj) => obj._id === userLoggedIn._id
              );
                if(objIdIndex === -1){
                  return false
                }
                else{
                  return true
                }
            }

            return (
              <div className="cardContainer">
                <div className="cardPhotoBox">
                  <img className="img" src={logo} />
                </div>
                <div className="cardInfo">
                  <Link
                    className="specalistName"
                    to={`/specialties/${user.profession}/${user.name} ${user.lastName}`}
                  >
                    <h3>{`${user.name} ${user.lastName}`}</h3>
                  </Link>
                  <span className="specalistAbility">{user.profession}</span>
                  <span className="specalistAbout">{`Best ${user.profession} Ever`}</span>
                  <div className="specalistAvailabilityBox">
                    <div className="iconBox">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="cardIcon"
                      />
                    </div>
                    <p className="specalistAvailability">{user.address.city}</p>
                  </div>
                  <div className="specalistAvailabilityBox">
                    <div className="iconBox">
                      <FontAwesomeIcon icon={faVideo} className="cardIcon" />{" "}
                    </div>
                    <p className="specalistAvailability">Video Call</p>
                  </div>
                </div>
                <div className="cardActions">
                  {clientLoggedIn && !added()  ? (
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
                  {clientLoggedIn && added() ? (
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

                  <MainBtn value="Call" />
                  <MainBtn value="Appointment" />
                </div>
              </div>
            );
          })}
    </div>
  );
}

// let therapistInfoObj = [
//   { index: name, id: user.name },
//   { index: profession, id: user.typeName },
//   { index: city, id: user.address.city },
//   { index: language, id: user.language },
//   { index: experience, id: user.experience },
//   { index: gender, id: user.gender },
// ];

// for(let i = 0; i < therapistInfoObj.length; i++)
// if(therapistInfoObj[i].index==='all'){
//   console.log(therapistInfoObj[i].id)
//   return (
//     <div className="cardContainer">
//       <div className="cardPhotoBox">
//         <img className="img" src={logo} />
//       </div>
//       <div className="cardInfo">
//         <Link
//           className="specalistName"
//           to={`/specialties/${specialty}/${user.name}`}
//         >
//           <h3>{user.name}</h3>
//         </Link>
//         <span className="specalistAbility">{specialty}</span>
//         <span className="specalistAbout">{`Best ${specialty} Ever`}</span>
//         <div className="specalistAvailabilityBox">
//           <div className="iconBox">
//             <FontAwesomeIcon
//               icon={faLocationDot}
//               className="cardIcon"
//             />
//           </div>
//           <p className="specalistAvailability">{user.address.city}</p>
//         </div>
//         <div className="specalistAvailabilityBox">
//           <div className="iconBox">
//             <FontAwesomeIcon icon={faVideo} className="cardIcon" />{" "}
//           </div>
//           <p className="specalistAvailability">Video Call</p>
//         </div>
//       </div>
//       <div className="cardActions">
//         <MainBtn value="Call" />
//         <MainBtn value="Appointment" />
//       </div>
//     </div>
//   )
// }

// if (therapistType.typeName === specialty) {
//   return therapistType.users.map((user) => {
//     return (
//       <div className="cardContainer">
//         <div className="cardPhotoBox">
//           <img className="img" src={logo} />
//         </div>
//         <div className="cardInfo">
//           <Link
//             className="specalistName"
//             to={`/specialties/${specialty}/${user.name}`}
//           >
//             <h3>{user.name}</h3>
//           </Link>
//           <span className="specalistAbility">{specialty}</span>
//           <span className="specalistAbout">{`Best ${specialty} Ever`}</span>
//           <div className="specalistAvailabilityBox">
//             <div className="iconBox">
//               <FontAwesomeIcon
//                 icon={faLocationDot}
//                 className="cardIcon"
//               />
//             </div>
//             <p className="specalistAvailability">{user.address.city}</p>
//           </div>
//           <div className="specalistAvailabilityBox">
//             <div className="iconBox">
//               <FontAwesomeIcon icon={faVideo} className="cardIcon" />{" "}
//             </div>
//             <p className="specalistAvailability">Video Call</p>
//           </div>
//         </div>
//         <div className="cardActions">
//           <MainBtn value="Call" />
//           <MainBtn value="Appointment" />
//         </div>
//       </div>
//     );
//   });
// }

// const confirmFilters = [
//   user.typeName,
//   user.name,
//   user.typeName,
//   user.address.city,
//   user.language,
//   user.experience,
//   user.gender,
// ];

// const filterOneOptionUsers = allUsers.filter((user) => {

//   // function isEqual(obj1,obj2){
//   //   const obj1Keys = Object.keys(obj1)
//   //   const obj2Keys = Object.keys(obj2)

//   //   for(let obj1Loop of obj1Keys)
//   //   for(let obj2Loop of obj2Keys)
//   //   if(obj1[obj2Loop]===obj2[obj2Loop]){
//   //     console.log(obj1)
//   //   }
//   //   }

//   //   isEqual(user,therapistObj)

//   // console.log(therapistObj)
//   // console.log(checkArr)
//   if (checkArr.length === 5) {
//     if (
//       user.typeName === specialty ||
//       user.name === name ||
//       user.typeName === profession ||
//       user.address.city === city ||
//       user.language === language ||
//       user.experience === experience ||
//       user.gender === gender
//     ) {
//       return user;
//     }
//   }

//   const therapistInfoObj = [
//     { index: name, id: user.name },
//     { index: profession, id: user.typeName },
//     { index: city, id: user.address.city },
//     { index: language, id: user.language },
//     { index: experience, id: user.experience },
//     { index: gender, id: user.gender },
//   ];

//   let userKey = Object.keys(user)

//   if (checkArr.length !== 5) {
//     // for(let t = 0; t < checkArrAll.length; t++)
//     // for(let i = 0; i < therapistInfoObj.length; i++)
//     _.filter(allUsers,newObj(therapistObj))
//   }
// });

// const fileterd = filterOneOptionUsers.map((user)=>{
//   const confirmFilters = [
//     user.typeName,
//     user.name,
//     user.address.city,
//     user.language,
//     user.experience,
//     user.gender,
//   ];
//   for(let i = 0; i< confirmFilters.length; i++)
//   for(let t = 0; t < checkArrAll.length; t++)
//  if(confirmFilters[0 && 1 && 2 && 3 && 4 && 5] === checkArrAll[t]) {
//   return user
//  }

// })

// console.log(fileterd)
