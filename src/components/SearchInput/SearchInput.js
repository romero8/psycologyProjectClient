import "../SearchInput/SearchInput.css";
import Form from "react-bootstrap/Form";
import MultiRangeSlider from "multi-range-slider-react";
import React, { useState,useEffect } from "react";
// import { allUsers, therapistTypesData } from "../../helpers/data";
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
    // if(placeHolder==='Price Range'){
    //   setSearch.setCitySearch(value)
    // }
    if (placeHolder === "Language") {
      setSearch.setLanguageSearch(innerHTML);
    }
    if (placeHolder === "Experienc") {
      setSearch.setExperiencSearch(innerHTML);
    }
    if (placeHolder === "Gender") {
      setSearch.setGenderSearch(innerHTML);
    }
    // if (placeHolder === "LGBTQ friendly") {
    //   setSearch.setCitySearch(innerHTML);
    // }
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
              <TextField {...params} label={placeHolder} variant="standard" />
              
            )}
            // onChange={(e)=>handleChange(e)}
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
              <TextField {...params} label={placeHolder} variant="standard" />
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
              <TextField {...params} label={placeHolder} variant="standard" />
            )}
          />
          <div className="iconContainer">{icon}</div>
        </div>
      );
    }
    if (specialistUserSearchType === "language") {
      // let arr = []
      // let usersParam = allTherapists.map((user) => user.language);
      // let newUsersName = [...new Set(usersParam)];
      // newUsersName.map((user)=>{
      //   return user.map((language)=>{
      //     arr.push(language)
      //   })
      // })

      const languages = ['Hebrew','English','Arab','Russian']

      // let newArr = [...new Set(arr)]

      return (
        <div className="searchInputContainer short">
          <Autocomplete
          onChange={handleChange}
            disablePortal
            id="combo-box-demo"
            options={languages.map((user) => user)}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label={placeHolder} variant="standard" />
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

    // if (searchType === "select") {
    //   return (
    //     <div className="searchInputContainer">
    //       <select
    //         className={inputSize ? `searchInput ${inputSize}` : "searchInput"}
    //       >
    //         <option selected disabled>
    //           {placeHolder}
    //         </option>
    //         {options.map((option) => {
    //           return <option>{option}</option>;
    //         })}
    //       </select>
    //       <div className="iconContainer">{icon}</div>
    //     </div>
    //   );
    // }

    
    
    // if (specialistUserSearchType === "gender") {
    //   return (
    //     <div className="searchInputContainer short">
    //       <FormControl fullWidth className="searchInputContainer">
    //         <InputLabel>{placeHolder}</InputLabel>
    //         <Select
    //           labelId="demo-simple-select-label"
    //           id="demo-simple-select"
    //           label={placeHolder}
    //           value={value.genderSearch}
    //           onChange={handleGenderSelected}
    //         >
    //           <MenuItem value="">
    //             <em>None</em>
    //           </MenuItem>
    //           {options.map((option) => {
    //             return <MenuItem value={option}>{option}</MenuItem>;
    //           })}
    //         </Select>
    //       </FormControl>
    //       <div className="iconContainer">{icon}</div>
    //     </div>
    //   );
    // }
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
    // if (searchType === "select") {
    //   return (
    //     <div className="searchInputContainer">
    //       <Select
    //         labelId="demo-simple-select-label"
    //         id="demo-simple-select"
    //         label={placeHolder}
    //         variant="standard"
    //         onChange={handleSelected}
    //       >
    //         {options.map((option) => {
    //           return <MenuItem>{option}</MenuItem>;
    //         })}
    //       </Select>
    //       <div className="iconContainer">{icon}</div>
    //     </div>
    //   );
    // }
    if (searchType === "range") {
      return (
        <div className="searchInputContainer">
          <div>
            <label>{placeHolder}</label>
            <Slider
            step={10}
            min={0}
            max={1000}
             getAriaLabel={() => 'Price range'}
             value={value.rangeSearch}
             onChange={handleRange}
             valueLabelDisplay="auto"
             sx={{ width: 156 }}
            />
          </div>

          <div className="iconContainer">{icon}</div>
        </div>
      );
    }

    // if (searchType === "checkBox") {
    //   return (
    //     <div className="searchInputContainer short">
    //       <Form>
    //         {["radio"].map((type) => (
    //           <div
    //             key={`inline-${type}`}
    //             className={
    //               inputSize ? `searchInput ${inputSize}` : "searchInput"
    //             }
    //           >
    //             {/* <Form.Check
    //             inline
    //             label="1"
    //             name="group1"
    //             type={type}
    //             id={`inline-${type}-1`}
    //           /> */}

    //             <label>{placeHolder}</label>
    //             <br />
    //             {options.map((option) => {
    //               return (
    //                 <Form.Check
    //                   inline
    //                   label={option}
    //                   name="group1"
    //                   type={type}
    //                   id={`inline-${type}-1`}
    //                 />
    //               );
    //             })}
    //           </div>
    //         ))}
    //       </Form>
    //       <div className="iconContainer">{icon}</div>
    //     </div>
    //   );
    // }
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

// if (searchType === "input") {
//   return (
//     <div className="searchInputContainer">
//       <Autocomplete
//         className={inputSize ? `searchInput ${inputSize}` : "searchInput"}
//         disablePortal
//         id="combo-box-demo"
//         options={allUsers.map((user) => {
//           if (placeHolder === "Name") {
//             console.log(user.specialistUserSearchType);
//             return user.name;
//           }

//           if (placeHolder === "Profession") {
//             return user.typeName;
//           }
//           if (placeHolder === "City") {
//             return user.address.city;
//           }
//           if (placeHolder === "Language") {
//             return user.language ? user.language : null;
//           }
//           if (placeHolder === "Name") {
//             return user.name;
//           }
//           if (placeHolder === "Experience") {
//             return user.experience;
//           }
//         })}
//         sx={{ width: 300, border: "none", boxShadow: "none" }}
//         style={{ border: "none", boxShadow: "none" }}
//         renderInput={(params) => (
//           <TextField {...params} label={placeHolder} />
//         )}
//       />

//       <div className="iconContainer">{icon}</div>

//       {/* <div className="dropDown">
//         {therapistTypesData.map((dropDownRow) => {
//           return dropDownRow.users.map((user) => {
//             if(placeHolder === 'Name'){
//               return(
//                 <div>{user.name}</div>
//               )
//             }
//           });
//         })}
//       </div> */}
//     </div>
//   );
// }


// if (searchType === "range") {
//   return (
//     <div className="searchInputContainer range long">
//       <div>
//         <label>{placeHolder}</label>
//         <MultiRangeSlider
//           min={0}
//           max={500}
//           step={5}
//           minValue={minValue}
//           maxValue={maxValue}
//           ruler={false}
//           label={true}
//           style={{ border: "none", boxShadow: "none", height: "5px" }}
//           onInput={(e) => {
//             handleInput(e);
//           }}
//           barInnerColor="#fff"
//           thumbLeftColor="#fff"
//           thumbRightColor="#eaf5fa"
//           className="rangeInput long"
//         />
//       </div>

//       <div className="iconContainer">{icon}</div>
//     </div>
//   );
// }




{/* <MultiRangeSlider
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
            /> */}