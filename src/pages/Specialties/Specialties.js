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

  let therapistInfoArr = [
    specialty,
    profession,
    city,
    language,
    experience,
    gender,
  ];

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

        return allUsers.map((user) => {
          let therapistInfoObj = [
            { index: specialty, id: user.name },
            { index: profession, id: user.typeName },
            { index: city, id: user.address.city },
            { index: language, id: user.language },
            { index: experience, id: user.experience },
            { index: gender, id: user.gender },
          ];

          for(let i = 0; i < therapistInfoObj.length; i++)
          if(therapistInfoObj[i].index==='all'){
            console.log(therapistInfoObj[i].id)
            return <h1>{therapistInfoObj[i].id}</h1>
          }
        });

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
