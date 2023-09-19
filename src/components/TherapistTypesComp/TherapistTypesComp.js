import { useEffect, useState } from "react";
import { getData } from "../../helpers/fetchHelper";
import { MainBtn } from "../MainBtn/MainBtn";
import logo from "../../icons/AnimatedLogo.png";
import "../TherapistTypesComp/TherapistTypesComp.css";
import Carousel from "react-bootstrap/Carousel";
// import {therapistTypesData} from '../../helpers/data'
import { Link } from "react-router-dom";

export function TherapistTypesComp() {
 

  const [allTherapists,setAllTherapists] = useState([])
  // const [therapistsAbout,setTherapistsAbout] = useState([])

  useEffect(() => {
   
    fetch('http://localhost:5000/allTherapists')
    .then(response => response.json())
    .then(data => setAllTherapists(data.data))
    .catch(err => console.log(err))
  
   
  }, []);
  

  const therapistsAbout = allTherapists.filter((therapist)=>{
    if(therapist.about !== ''){
     return therapist
    }
  })

  const [therapistsAboutSum,setTherapistsAboutSum] = useState([])
  
    const shuffledTherapistsAbout = [];
    let usedIndexes = [];

    let i = 0;

    while (i< therapistsAbout.length) {
      let randomNumber = Math.floor(Math.random() * therapistsAbout.length);
      if(!usedIndexes.includes(randomNumber)){
        shuffledTherapistsAbout.push(therapistsAbout[randomNumber]);
        usedIndexes.push(randomNumber);
        i++;
      }
    }

    
    
  
  console.log(therapistsAboutSum)
  

  
  
  return (
    <div className="therapistTypesContainer">
      <h2 className="therapistTitle">General Therapists</h2>

      <Carousel variant="dark" indicators={false}>
      {
        shuffledTherapistsAbout.map((therapist)=>{
          return(
        
            <Carousel.Item>
              <Link className="therapistTypeBox" to={`/searchBySpecialties/${therapist.profession}/${therapist.name} ${therapist.lastName}`}>
              <div className="therapistTypeBox">
                <h3>{`"${therapist.about}"`}</h3>
                <p>{`${therapist.name} ${therapist.lastName} lives in ${therapist.address.city} (${therapist.profession})`}</p> 
              </div>
              </Link>
              </Carousel.Item>
          )
        })
      }
      </Carousel>
      {/* <br/>
      <MainBtn value="Click For More" color="outline-info"/> */}
    </div>
  );
}









{/* <Carousel.Item>
          <div className="therapistTypesBody">
            {allTherapists.slice(0, 6).map((therapist, index) => {
              return (
                <div className="therapistTypeBox">
                  <div className="therapistTypeBox">
                    
                  </div>
                  <Link className="therapistTypeBox" to={`/searchBySpecialties/${therapist.typeName}`}>
                  <img src={logo} className="logo" />
                  <span className="therapistTypeSpan">
                    {therapist.typeName}
                  </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="therapistTypesBody">
            {allTherapists.slice(7, 13).map((therapist, index) => {
              return (
                <div className="therapistTypeBox">
                  <Link className="therapistTypeBox" to={`/searchBySpecialties/${therapist.typeName}`}>
                  <img src={logo} className="logo" />
                  <span className="therapistTypeSpan">
                    {therapist.typeName}
                  </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="therapistTypesBody">
            {allTherapists.slice(14, 20).map((therapist, index) => {
              return (
                <div className="therapistTypeBox" >
                  <Link className="therapistTypeBox" to={`/searchBySpecialties/${therapist.typeName}`}>
                  <img src={logo} className="logo" />
                  <span className="therapistTypeSpan">
                    {therapist.typeName}
                  </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </Carousel.Item> */}