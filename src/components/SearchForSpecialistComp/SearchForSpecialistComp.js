import React, { useState } from "react";
import {
  faPerson,
  faPlus,
  faTreeCity,
  faSackDollar,
  faTransgender,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../SearchForSpecialistComp/SearchForSpecialistComp.css";
import { SearchInput } from "../SearchInput/SearchInput";
import { MainBtn } from "../MainBtn/MainBtn";

import { useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from "react-bootstrap/AccordionContext";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionBody from "react-bootstrap/AccordionBody";
import Card from "react-bootstrap/Card";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionButton from "react-bootstrap/AccordionButton";

export function SearchForSpecialistComp({ eventKey }) {
  const [noneState, setNoneState] = useState(false);

  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );
  const specialistUserSearch = [
    {
      placeHolder: "Name or Profession",
      icon: <FontAwesomeIcon icon={faPerson} />,
      type: "text",
      searchType: "input",
    },
    {
      placeHolder: "City",
      icon: <FontAwesomeIcon icon={faTreeCity} />,
      type: "text",
      searchType: "input",
    },
    {
      placeHolder: "Price Range",
      icon: <FontAwesomeIcon icon={faSackDollar} />,
      type: "number",
      searchType: "input",
    },
    {
      placeHolder: "Gender",
      icon: <FontAwesomeIcon icon={faTransgender} />,
      type: "text",
      searchType: "select",
      options: ['Male','Female','Other']
    },
  ];

  const specialistUserAdvencedSearch = [
    {
      placeHolder: "Experties",
      icon: <FontAwesomeIcon icon={faPerson} />,
      type: "text",
      searchType: "select",
      options: ['1-5 Years','5-10 Years','15-20 Years','20 and above']
    },
    {
      placeHolder: "Experince",
      icon: <FontAwesomeIcon icon={faTreeCity} />,
      type: "number",
      searchType: "input",
    },
    {
      placeHolder: "LGBTQ friendly",
      icon: <FontAwesomeIcon icon={faSackDollar} />,
      type: "number",
      searchType: "select",
      options: ['yes','no']
    },
    {
      placeHolder: "Language",
      icon: <FontAwesomeIcon icon={faTransgender} />,
      type: "text",
      searchType: "input",
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
     
        <Accordion as="div" className="accordion">
          <AccordionBody as="div" className="SearchForSpecialistBody">
            {specialistUserAdvencedSearch.map((user) => {
              return (
                <SearchInput
                  placeHolder={user.placeHolder}
                  icon={user.icon}
                  type={user.type}
                  searchType={user.searchType}
                  options = {user.options}
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
                  options = {user.options}
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
