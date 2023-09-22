import React, { useState } from "react";
import {
  faPerson,
  faPlus,
  faTreeCity,
  faSackDollar,
  faTransgender,
  faLanguage,
  faUserTie,
  faListOl,
  faPersonHalfDress,
  faBook,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../SearchForSpecialistComp/SearchForSpecialistComp.css";
import { SearchInput } from "../SearchInput/SearchInput";
import { MainBtn } from "../MainBtn/MainBtn";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionBody from "react-bootstrap/AccordionBody";
import AccordionButton from "react-bootstrap/AccordionButton";
// import { therapistTypesData } from "../../helpers/data";
import { useNavigate } from "react-router-dom";
import { experties } from "../../helpers/data";

export function SearchForSpecialistComp({ eventKey }) {
  const [noneState, setNoneState] = useState(false);

  const [nameSearch, setNameSearch] = useState("");
  const [professionSearch, setProfessionSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [rangeSearch, setRangeSearch] = useState([0, 1000]);
  const [languageSearch, setLanguageSearch] = useState("");
  const [experienceSearch, setExperienceSearch] = useState("");
  const [genderSearch, setGenderSearch] = useState("");
  const [expertiesSearch, setExpertiesSearch] = useState("");
  const [lgbtqSearch, setLGBTQSearch] = useState("");

  const navigate = useNavigate();

  function searchForTherapist(e) {
    e.preventDefault();
    navigate(
      `searchByTherapist/${nameSearch ? nameSearch : "all"}/${
        professionSearch ? professionSearch : "all"
      }/${citySearch ? citySearch : "all"}/${
        rangeSearch ? rangeSearch : "all"
      }/${languageSearch ? languageSearch : "all"}/${
        experienceSearch ? experienceSearch : "all"
      }/${genderSearch ? genderSearch : "all"}/${
        lgbtqSearch ? lgbtqSearch : "all"
      }`
    );
  }

  // const therapistData = findSpecialty.users.find((therapist) => {
  //   return therapist.name === therapistName;
  // });

  // const decoratedOnClick = useAccordionButton(eventKey, () =>
  //   console.log("totally custom!")
  // );

  const specialistUserSearch = [
    {
      placeHolder: "Name",
      icon: <FontAwesomeIcon icon={faPerson} />,
      type: "text",
      searchType: "input",
      inputSize: "short",
      specialistUserSearchType: "name",
    },
    {
      placeHolder: "Profession",
      icon: <FontAwesomeIcon icon={faUserTie} />,
      type: "text",
      searchType: "input",
      inputSize: "short",
      specialistUserSearchType: "typeName",
    },
    {
      placeHolder: "Experties",
      icon: <FontAwesomeIcon icon={faBook} />,
      type: "text",
      searchType: "select",
      options: experties,
      specialistUserSearchType: "experties",
    },
    {
      placeHolder: "City",
      icon: <FontAwesomeIcon icon={faTreeCity} />,
      type: "text",
      searchType: "input",
      inputSize: "short",
      specialistUserSearchType: "address.city",
    },
    {
      placeHolder: "Gender",
      icon: <FontAwesomeIcon icon={faTransgender} />,
      type: "text",
      searchType: "select",
      options: ["male", "female", "other"],
      inputSize: "short",
      specialistUserSearchType: "gender",
    },
    
    {
      placeHolder: "Language",
      icon: <FontAwesomeIcon icon={faGlobe} />,
      type: "text",
      searchType: "input",
      inputSize: "short",
      specialistUserSearchType: "language",
    },
    {
      placeHolder: "Experience",
      icon: <FontAwesomeIcon icon={faListOl} />,
      type: "number",
      searchType: "input",
      inputSize: "short",
      specialistUserSearchType: "experience",
    },
    
    {
      placeHolder: "Price Range",
      icon: <FontAwesomeIcon icon={faSackDollar} />,
      type: "number",
      searchType: "range",
      inputSize: "long",
      specialistUserSearchType: "price",
    },
   
  ];

  // const specialistUserAdvencedSearch = [
  //   {
  //     placeHolder: "Language",
  //     icon: <FontAwesomeIcon icon={faGlobe} />,
  //     type: "text",
  //     searchType: "input",
  //     inputSize: "short",
  //     specialistUserSearchType: "language",
  //   },
  //   {
  //     placeHolder: "Experience",
  //     icon: <FontAwesomeIcon icon={faListOl} />,
  //     type: "number",
  //     searchType: "input",
  //     inputSize: "short",
  //     specialistUserSearchType: "experience",
  //   },
  //   {
  //     placeHolder: "Experties",
  //     icon: <FontAwesomeIcon icon={faBook} />,
  //     type: "text",
  //     searchType: "select",
  //     options: experties,
  //     specialistUserSearchType: "experties",
  //   },

  //   {
  //     placeHolder: "Gender",
  //     icon: <FontAwesomeIcon icon={faTransgender} />,
  //     type: "text",
  //     searchType: "select",
  //     options: ["male", "female", "other"],
  //     inputSize: "short",
  //     specialistUserSearchType: "gender",
  //   },

  //   // {
  //   //   placeHolder: "LGBTQ friendly",
  //   //   icon: <FontAwesomeIcon icon={faPersonHalfDress} />,
  //   //   type: "number",
  //   //   searchType: "checkBox",
  //   //   options: ["yes", "no"],
  //   //   specialistUserSearchType: "LGBTQ",
  //   // },
  // ];

  function none() {
    if (noneState) {
      return "None";
    } else {
      return "";
    }
  }

  return (
    <div className="SearchForSpecialistContainer">
      <div className="SearchForSpecialistBody">
      <div className="SearchForSpecialistTitleBox">
        <h3 className="SearchForSpecialistTitle">
          What type of therapy are you looking for?
        </h3>
      </div>
        {specialistUserSearch.map((user) => {
          return (
            <SearchInput
              placeHolder={user.placeHolder}
              icon={user.icon}
              type={user.type}
              searchType={user.searchType}
              options={user.options}
              inputSize={user.inputSize}
              specialistUserSearchType={user.specialistUserSearchType}
              setSearch={{
                setNameSearch,
                setProfessionSearch,
                setCitySearch,
                setRangeSearch,
                setLanguageSearch,
                setExperienceSearch,
                setGenderSearch,
                setExpertiesSearch,
                setLGBTQSearch,
              }}
              value={{ genderSearch, expertiesSearch, rangeSearch }}
            />
          );
        })}
        {/* <MainBtn value="Search" color="outline-secondary"/> */}
        <div className="inputBtnBox">
          <button className="inputBtn" onClick={searchForTherapist}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
