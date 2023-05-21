import "../Specialties/Specialties.css";
import { useParams } from "react-router-dom";
import logo from "../../icons/AnimatedLogo.png";
import { MainBtn } from "../../components/MainBtn/MainBtn";
import { faLocationDot, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { therapistTypesData,allUsers } from "../../helpers/data";
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

  let therapistInfoArr = [specialty,name, profession, city, language, experience, gender];
  console.log(therapistInfoArr)
  console.log(therapistInfoArr.map(therapist => therapist))
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
        return therapistInfoArr.map((therapist) => {
          console.log(therapist)
          if (user.name || user.adress.city || user.typeName || user.experience || user.gender === therapist){
            return <h1>{therapist}</h1>
          }
        })
       

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
      })}
    </div>
  );
}
