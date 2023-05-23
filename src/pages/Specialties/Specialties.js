import "../Specialties/Specialties.css";
import { useParams } from "react-router-dom";
import logo from "../../icons/AnimatedLogo.png";
import { MainBtn } from "../../components/MainBtn/MainBtn";
import { faLocationDot, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { therapistTypesData, allUsers } from "../../helpers/data";
import { Link } from "react-router-dom";

export function Specialties(props) {
  const therapistTypes = therapistTypesData;
  let { specialty } = useParams();
  let { name } = useParams();
  let { profession } = useParams();
  let { city } = useParams();
  let { language } = useParams();
  let { experience } = useParams();
  let { gender } = useParams();
  let { lgbtq } = useParams();

  const therapistInfoArr = [
    specialty,
    name,
    profession,
    city,
    language,
    experience,
    gender,
  ];

  

  const checkArr = [];
  
  for (let i = 0; i < therapistInfoArr.length; i++) {
    if (therapistInfoArr[i] === "all") {
      checkArr.push(therapistInfoArr[i]);
    }
  }

  const filterOneOptionUsers = allUsers.filter((user) => {


    // console.log(therapistInfoArr)
    // console.log(checkArr)
    if (checkArr.length === 5) {
      if (
        user.typeName === specialty ||
        user.name === name ||
        user.typeName === profession ||
        user.address.city === city ||
        user.language === language ||
        user.experience === experience ||
        user.gender === gender
      ) {
        return user;
      }
    }

    
    const therapistInfoObj = [
      { index: name, id: user.name },
      { index: profession, id: user.typeName },
      { index: city, id: user.address.city },
      { index: language, id: user.language },
      { index: experience, id: user.experience },
      { index: gender, id: user.gender },
    ];

    // const confirmFilters = [
    //   user.typeName,
    //   user.name,
    //   user.typeName,
    //   user.address.city,
    //   user.language,
    //   user.experience,
    //   user.gender,
    // ];

    if (checkArr.length !== 5) { 
      for(let i = 0; i < therapistInfoObj.length; i++)
      for(let t = 0; t < therapistInfoArr.length; t++)
      if ( therapistInfoArr[t] && therapistInfoArr[t]  === therapistInfoObj[i].id) {
        return user
      }
    }
  });

  console.log(filterOneOptionUsers);

  const checkArrAll = therapistInfoArr.filter((arr)=>{
    if(arr !== 'all'){
      return arr
    }
  })

  console.log(checkArrAll)

  const filetered = filterOneOptionUsers.map((user)=>{
    const confirmFilters = [
      user.typeName,
      user.name,
      user.typeName,
      user.address.city,
      user.language,
      user.experience,
      user.gender,
    ]; 
    for(let i = 0; i< confirmFilters.length; i++)
    for(let t = 0; t < therapistInfoArr.length; t++)
   if(confirmFilters[i] === therapistInfoArr[t]) {
    return user
   }
  })

 


  filterOneOptionUsers.map((user)=>{
    for(let i = 0; i< checkArrAll.length; i++){
      const checkkkk = user.includes(checkArrAll[i])
      console.log(checkkkk)
    }
  })
 

  
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

      {allUsers.map((user) => {
        if (user.typeName === specialty) {
          return (
            <div className="cardContainer">
              <div className="cardPhotoBox">
                <img className="img" src={logo} />
              </div>
              <div className="cardInfo">
                <Link
                  className="specalistName"
                  to={`/specialties/${specialty}/${user.name}`}
                >
                  <h3>{user.name}</h3>
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
                <MainBtn value="Call" />
                <MainBtn value="Appointment" />
              </div>
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
      })}
    </div>
  );
}

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
