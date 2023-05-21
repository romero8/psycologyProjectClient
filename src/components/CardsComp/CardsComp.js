// import logo from "../../icons/AnimatedLogo.png";
// import "../CardsComp/CardsComp.css";
// import { MainBtn } from "../MainBtn/MainBtn";
// import { faLocationDot, faVideo } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { therapistTypesData } from "../../helpers/data";
// import { Link } from "react-router-dom";

// export function CardsComp(props) {
//   const therapistTypes = therapistTypesData;
//   const specialty = props.specialty;
//   const profession = props.profession

//     return (
//       <div className="cardsContainer">
//         <div className="cardsTitle">
//         <h2 >{specialty}</h2>
//         </div>
//         {therapistTypes.map((therapistType) => {
//           if (therapistType.typeName === specialty) {
//             return therapistType.users.map((user) => {
//               return (
//                 <div className="cardContainer">
//                   <div className="cardPhotoBox">
//                     <img className="img" src={logo} />
//                   </div>
//                   <div className="cardInfo">
//                     <Link className="specalistName" to={`/specialties/${specialty}/${user.name}`}><h3>{user.name}</h3></Link>
//                     <span className="specalistAbility">{specialty}</span>
//                     <span className="specalistAbout">{`Best ${specialty} Ever`}</span>
//                     <div className="specalistAvailabilityBox">
//                       <div className="iconBox">
//                         <FontAwesomeIcon
//                           icon={faLocationDot}
//                           className="cardIcon"
//                         />
//                       </div>
//                       <p className="specalistAvailability">{user.address.city}</p>
//                     </div>
//                     <div className="specalistAvailabilityBox">
//                       <div className="iconBox">
//                         <FontAwesomeIcon icon={faVideo} className="cardIcon" />{" "}
//                       </div>
//                       <p className="specalistAvailability">Video Call</p>
//                     </div>
//                   </div>
//                   <div className="cardActions">
//                     <MainBtn value="Call" />
//                     <MainBtn value="Appointment" />
//                   </div>
//                 </div>
//               );
//             });
//           }
//         })}
//       </div>
//     );
  

  
// }


