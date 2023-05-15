import "../SearchInput/SearchInput.css";
import Form from "react-bootstrap/Form";
import MultiRangeSlider from "multi-range-slider-react";
import React, { useState } from "react";
import { allUsers, therapistTypesData } from "../../helpers/data";
import { Autocomplete, TextField } from "@mui/material";

export function SearchInput(props) {
  const placeHolder = props.placeHolder;
  const icon = props.icon;
  const type = props.type;
  const searchType = props.searchType;
  const options = props.options;
  const inputSize = props.inputSize;
  const setSearch = props.setSearch;
  const specialistUserSearchType = props.specialistUserSearchType;

  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  function handleChange(e) {
    let value = e.target.value;
    if (placeHolder === "Name") {
      setSearch.setNameSearch(value);
    }
    if (placeHolder === "Profession") {
      setSearch.setProfessionSearch(value);
    }
    if (placeHolder === "City") {
      setSearch.setCitySearch(value);
    }
    // if(placeHolder==='Price Range'){
    //   setSearch.setCitySearch(value)
    // }
    if (placeHolder === "Language") {
      setSearch.setLanguageSearch(value);
    }
    if (placeHolder === "Experienc") {
      setSearch.setExperiencSearch(value);
    }
    if (placeHolder === "Gender") {
      setSearch.setGenderSearch(value);
    }
    if (placeHolder === "LGBTQ friendly") {
      setSearch.setCitySearch(value);
    }
  }

  {
    if (searchType === "input") {
      return (
        <div className="searchInputContainer">
          <Autocomplete
            className={inputSize ? `searchInput ${inputSize}` : "searchInput"}
            disablePortal
            id="combo-box-demo"
            options={allUsers.map((user) => {
              if (placeHolder === "Name") {
                return user.name;
              }
              if (placeHolder === "Profession") {
                return therapistTypesData.map((type) => type.typeName);
              }
              if (placeHolder === "City") {
                return user.address.city;
              }
              if (placeHolder === "Language") {
                return user.language ? user.language : '';
              }
              if (placeHolder === "Name") {
                return user.name;
              }
              if (placeHolder === "Experience") {
                return user.experience;
              }
            })}
            sx={{ width: 300 ,border: "none", boxShadow: "none" }}
            style={{ border: "none", boxShadow: "none"}}
            renderInput={(params) => (
              <TextField {...params} label={placeHolder} />
            )}
          />
          <div className="iconContainer">{icon}</div>

          {/* <div className="dropDown">
            {therapistTypesData.map((dropDownRow) => {
              return dropDownRow.users.map((user) => {
                if(placeHolder === 'Name'){
                  return(
                    <div>{user.name}</div>
                  )
                }
              });
            })}
          </div> */}
        </div>
      );
    }

    if (searchType === "select") {
      return (
        <div className="searchInputContainer">
          <select
            className={inputSize ? `searchInput ${inputSize}` : "searchInput"}
          >
            <option selected disabled>
              {placeHolder}
            </option>
            {options.map((option) => {
              return <option>{option}</option>;
            })}
          </select>
          <div className="iconContainer">{icon}</div>
        </div>
      );
    }
    if (searchType === "range") {
      return (
        <div className="searchInputContainer range long">
          <div>
            <label>{placeHolder}</label>
            <MultiRangeSlider
              min={0}
              max={500}
              step={5}
              minValue={minValue}
              maxValue={maxValue}
              ruler={false}
              label={true}
              style={{ border: "none", boxShadow: "none", height: "5px" }}
              onInput={(e) => {
                handleInput(e);
              }}
              barInnerColor="#fff"
              thumbLeftColor="#fff"
              thumbRightColor="#eaf5fa"
              className="rangeInput long"
            />
          </div>

          <div className="iconContainer">{icon}</div>
        </div>
      );
    }

    if (searchType === "checkBox") {
      return (
        <div className="searchInputContainer">
          <Form>
            {["radio"].map((type) => (
              <div
                key={`inline-${type}`}
                className={
                  inputSize ? `searchInput ${inputSize}` : "searchInput"
                }
              >
                {/* <Form.Check
                inline
                label="1"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              /> */}

                <label>{placeHolder}</label>
                <br />
                {options.map((option) => {
                  return (
                    <Form.Check
                      inline
                      label={option}
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  );
                })}
              </div>
            ))}
          </Form>
          <div className="iconContainer">{icon}</div>
        </div>
      );
    }
  }

  //   return (

  // <div className= 'searchInputContainer'>
  //         {searchType == "input" ? (
  //           <input
  //             type={type}
  //             className={inputSize ? `searchInput ${inputSize}` : "searchInput"}
  //             placeholder={placeHolder}
  //           ></input>
  //         ) : (
  //           <select className={inputSize ? `searchInput ${inputSize}` : "searchInput"}>
  //             <option selected disabled>
  //               {placeHolder}
  //             </option>
  //             {options.map((option) => {
  //               return <option>{option}</option>;
  //             })}
  //           </select>
  //         )}

  //         <div className="iconContainer">{icon}</div>
  //       </div>

  //   );
}
