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
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../SearchForSpecialistComp/SearchForSpecialistComp.css";
import { SearchInput } from "../SearchInput/SearchInput";
import { MainBtn } from "../MainBtn/MainBtn";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionBody from "react-bootstrap/AccordionBody";
import AccordionButton from "react-bootstrap/AccordionButton";
import { therapistTypesData } from "../../helpers/data";

const therapistTypes = therapistTypesData

export function SearchForSpecialistComp({ eventKey }) {
  const [noneState, setNoneState] = useState(false);

  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );
  const specialistUserSearch = [
    {
      placeHolder: "Name",
      icon: <FontAwesomeIcon icon={faPerson} />,
      type: "text",
      searchType: "input",
      inputSize: "short"
    },
    {
      placeHolder: "Profession",
      icon: <FontAwesomeIcon icon={faUserTie} />,
      type: "text",
      searchType: "input",
      inputSize: "short"
    },
    {
      placeHolder: "City",
      icon: <FontAwesomeIcon icon={faTreeCity} />,
      type: "text",
      searchType: "input",
      inputSize: "short"
    },
    {
      placeHolder: "Price Range",
      icon: <FontAwesomeIcon icon={faSackDollar} />,
      type: "number",
      searchType: "range",
      inputSize: "long"
    },
  ];

  const specialistUserAdvencedSearch = [
    {
      placeHolder: "Language",
      icon: <FontAwesomeIcon icon={faGlobe} />,
      type: "text",
      searchType: "input",
      inputSize: "short",
    },
    {
      placeHolder: "Experience",
      icon: <FontAwesomeIcon icon={faListOl} />,
      type: "number",
      searchType: "input",
      inputSize: "short",
    },
    {
      placeHolder: "Experties",
      icon: <FontAwesomeIcon icon={faBook} />,
      type: "text",
      searchType: "select",
      options: ["blablabla", "blablabla", "blablabla", "blablabla"],
    },
    
    {
      placeHolder: "Gender",
      icon: <FontAwesomeIcon icon={faTransgender} />,
      type: "text",
      searchType: "select",
      options: ["Male", "Female", "Other"],
      inputSize: "short"
    },

    {
      placeHolder: "LGBTQ friendly",
      icon: <FontAwesomeIcon icon={faPersonHalfDress} />,
      type: "number",
      searchType: "checkBox",
      options: ["yes", "no"],
    },
  ];
  function none() {
    if (noneState) {
      return "None";
    } else {
      return "";
    }
  }

  return (
    <div className="SearchForSpecialistContainer">
      <Accordion as="form" className="accordion">
        <AccordionBody as="div" className="SearchForSpecialistBody">
          {specialistUserAdvencedSearch.map((user) => {
            return (
              <SearchInput
                placeHolder={user.placeHolder}
                icon={user.icon}
                type={user.type}
                searchType={user.searchType}
                options={user.options}
                inputSize={user.inputSize}
              />
            );
          })}
        </AccordionBody>

        <div className="SearchForSpecialistBody">
          {specialistUserSearch.map((user) => {
            return (
              <SearchInput
                placeHolder={user.placeHolder}
                icon={user.icon}
                type={user.type}
                searchType={user.searchType}
                options={user.options}
                inputSize={user.inputSize}
              />
            );
          })}
          <MainBtn value="Search" color="outline-secondary" />
          <AccordionButton
            as="div"
            onClick={() => setNoneState(true)}
            className={`accordionBtn${none()}`}
          >
            Advenced Filter
          </AccordionButton>
        </div>
      </Accordion>
    </div>
  );
}

<div className="advencedFilter"></div>;
