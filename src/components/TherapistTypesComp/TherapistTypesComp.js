import { useEffect, useState } from "react";
import { getData } from "../../helpers/fetchHelper";
import { MainBtn } from "../MainBtn/MainBtn";
import logo from '../../icons/AnimatedLogo.png'
import "../TherapistTypesComp/TherapistTypesComp.css";
import Carousel from 'react-bootstrap/Carousel';

export function TherapistTypesComp() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   getData("therapistTypes").then((info) => {
  //     setData(info);
  //   });
  // }, []);
  const therapistTypes = [
    "Psychology",
    "Social Worker",
    "Criminologiest",
    "Creative Arts Therapist",
    "Psychodrama Therapist",
    "Bibliotherapist",
    "Occupational Therapist",
    "Speach Therapist",
    "psycho Therapist",
    "CBT Therapist",
    "DBT Therapist",
    "NLP Therapist",
    "EMDR Therapist",
    "Coacher",
    "Animal-Assisted Therapist",
    "neurofeedback",
    "psychoanaliest",
    "Psychiatrist",
    "Family Therapist",
    "Caple Therapist",
    "Dance Therapist",
  ];

  return (
    <div className="therapistTypesContainer">
      <h2 className="therapistTitle">General Therapists</h2>
      
      <Carousel variant="dark" indicators={false}>
      <Carousel.Item>
       <div className="therapistTypesBody">
        {therapistTypes.slice(0,6).map((therapist,index) => {
          return (
            <div className="therapistTypeBox">
              <img src={logo} className="logo"/>
              <span className="therapistTypeSpan">{therapist}</span>
            </div>
          );
        })}
      </div>
      </Carousel.Item>
      <Carousel.Item>
       <div className="therapistTypesBody">
        {therapistTypes.slice(7,13).map((therapist,index) => {
          return (
            <div className="therapistTypeBox">
              <img src={logo} className="logo"/>
              <span className="therapistTypeSpan">{therapist}</span>
            </div>
          );
        })}
      </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="therapistTypesBody">
        {therapistTypes.slice(14,20).map((therapist,index) => {
          return (
            <div className="therapistTypeBox">
              <img src={logo} className="logo"/>
              <span className="therapistTypeSpan">{therapist}</span>
            </div>
          );
        })}
      </div>
      </Carousel.Item>
    </Carousel>
    {/* <br/>
      <MainBtn value="Click For More" color="outline-info"/> */}
    </div>

    
  );
}
