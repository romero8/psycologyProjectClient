import "../SearchInput/SearchInput.css";
import Form from "react-bootstrap/Form";
import MultiRangeSlider from "multi-range-slider-react";
import React, { useState,useEffect } from "react";

import {
  Autocomplete,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormControl,
  Slider,
} from "@mui/material";


export function SearchInput(props) {

  const [allTherapists,setAllTherapists] = useState([])

  useEffect(() => {
   
    fetch('http://localhost:5000/allTherapists')
    .then(response => response.json())
    .then(data => setAllTherapists(data.data))
    .catch(err => console.log(err))
  
   
  }, []);

  
  const placeHolder = props.placeHolder;
  const icon = props.icon;
  const type = props.type;
  const searchType = props.searchType;
  const options = props.options;
  const inputSize = props.inputSize;
  const setSearch = props.setSearch;
  const value = props.value
  const specialistUserSearchType = props.specialistUserSearchType;

  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);

  const [range, setRange] = useState([20,37])

  
function handleRange(e){
setSearch.setRangeSearch(e.target.value)
}
 

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  function handleGenderSelected(e) {
    setSearch.setGenderSearch(e.target.value)
  }
  function handleExpertiesSelected(e) {
    setSearch.setExpertiesSearch(e.target.value)
  }

  function handleChange(e) {
    let innerHTML = e.target.innerHTML;
    if (placeHolder === "Name") {
      setSearch.setNameSearch(innerHTML);
    }
    if (placeHolder === "Profession") {
      setSearch.setProfessionSearch(innerHTML);
    }
    if (placeHolder === "City") {
      setSearch.setCitySearch(innerHTML);
    }
   
    if (placeHolder === "Language") {
      setSearch.setLanguageSearch(innerHTML);
    }
    if (placeHolder === "Experienc") {
      setSearch.setExperiencSearch(innerHTML);
    }
    if (placeHolder === "Gender") {
      setSearch.setGenderSearch(innerHTML);
    }
   
  }

  {
    if (specialistUserSearchType === "name") {
      let usersParam = allTherapists.map((user) => `${user.name} ${user.lastName}`);
      let newUsersName = [...new Set(usersParam)];
      return (
        <div className="searchInputContainer short">
          <Autocomplete
          onChange={handleChange}
            disablePortal
            id="combo-box-demo"
            options={newUsersName.map((user) => user)}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label={placeHolder} variant="standard" color="secondary"/>
              
            )}
           
          />
          <div className="iconContainer">{icon}</div>
        </div>
      );
    }
    if (specialistUserSearchType === "typeName") {
      let usersParam = allTherapists.map((user) => user.profession);
      let newUsersName = [...new Set(usersParam)];
      return (
        <div className="searchInputContainer short">
          <Autocomplete
          onChange={handleChange}
            disablePortal
            id="combo-box-demo"
            options={newUsersName.map((user) => user)}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label={placeHolder} variant="standard" color="secondary"/>
            )}
          />
          <div className="iconContainer">{icon}</div>
        </div>
      );
    }
    if (specialistUserSearchType === "address.city") {
      let usersParam = allTherapists.map((user) => user.address.city);
      let newUsersName = [...new Set(usersParam)];
      return (
        <div className="searchInputContainer short">
          <Autocomplete
          
          onChange={handleChange}
            disablePortal
            id="combo-box-demo"
            options={newUsersName.map((user) => user)}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label={placeHolder} variant="standard" color="secondary"/>
            )}
          />
          <div className="iconContainer">{icon}</div>
        </div>
      );
    }
    if (specialistUserSearchType === "language") {
      

      const languages = ['Hebrew','English','Arab','Russian']

     

      return (
        <div className="searchInputContainer short">
          <Autocomplete
          onChange={handleChange}
            disablePortal
            id="combo-box-demo"
            options={languages.map((user) => user)}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label={placeHolder} variant="standard" color="secondary"/>
            )}
          />
          <div className="iconContainer">{icon}</div>
        </div>
      );
    }
    if (specialistUserSearchType === "experience") {
      let usersParam = allTherapists.map((user) => user.experience);
      let newUsersName = [...new Set(usersParam)];
      return (
        <div className="searchInputContainer short">
          <Autocomplete
          onChange={handleChange}
            style={{ border: "none", boxShadow: "none" }}
            disablePortal
            id="country"
            options={newUsersName.map((user) => user)}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={placeHolder}
                style={{ border: "none", boxShadow: "none" }}
                variant="standard"
                color="secondary"
              />
            )}
          />
          <div className="iconContainer">{icon}</div>
        </div>
      );
    }
    if (specialistUserSearchType === "gender") {
     
      return (
        <div className="searchInputContainer short">
          <Autocomplete
          onChange={handleChange}
            style={{ border: "none", boxShadow: "none" }}
            disablePortal
            id="country"
            options={options.map((user) => user)}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
              color="secondary"
                {...params}
                label={placeHolder}
                style={{ border: "none", boxShadow: "none" }}
                variant="standard"
              />
            )}
          />
          <div className="iconContainer">{icon}</div>
        </div>
      );
    }

    if (specialistUserSearchType === "experties") {
     
      return (
        <div className="searchInputContainer short">
          <Autocomplete
          onChange={handleChange}
            style={{ border: "none", boxShadow: "none" }}
            disablePortal
            id="country"
            options={options.map((user) => user)}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
              color="secondary"
                {...params}
                label={placeHolder}
                style={{ border: "none", boxShadow: "none" }}
                variant="standard"
              />
            )}
          />
          <div className="iconContainer">{icon}</div>
        </div>
      );
    }

  
    
    
    
    if (specialistUserSearchType === "experties") {
      return (
        <div className="searchInputContainer short">
          <FormControl fullWidth className="searchInputContainer">
            <InputLabel>{placeHolder}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label={placeHolder}
              value={value.expertiesSearch}
              onChange={handleExpertiesSelected}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {options.map((option) => {
                return <MenuItem value={option}>{option}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <div className="iconContainer">{icon}</div>
        </div>
      );
    }
   
    if (searchType === "range") {
      return (
        <div className="searchInputContainer">
          <div>
            <label>{placeHolder}</label>
            <Slider
            
            color="secondary"
            step={10}
            min={0}
            max={1000}
             getAriaLabel={() => 'Price range'}
             value={value.rangeSearch}
             onChange={handleRange}
             valueLabelDisplay="auto"
             sx={{ width: 155 }}
            />
          </div>

          <div className="iconContainer">{icon}</div>
        </div>
      );
    }

    
  }

 }