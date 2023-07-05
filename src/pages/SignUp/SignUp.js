import { useState, useEffect } from "react";
import "./SignUp.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Autocomplete,
  TextField,
  Box,
  Typography,
  Slider,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  OutlinedInput,
} from "@mui/material";
import { multiply } from "lodash";

export function SignUp() {
  const professions = [
    "Psychology",
    "Social Worker",
    "Occupational Therapist",
    "Speach Therapist",
  ];
  const languages = ["Hebrew", "English", "Arabic", "Russian"];

  const experties = [
    "Creative Arts Therapy",
    "Psychodrama Therapy",
    "Bibliotherapist",
    "Psycho Therapy",
    "CBT Therapy",
    "DBT",
    "NLP",
    "EMDR",
    "Coacher",
    "Animal-Assisted Therapy",
    "Neurofeedback",
    "Psychoanaliest",
    "Family Therapy",
    "Caple Therapy",
  ];

  const navigate = useNavigate();
  const [citiesData, setCitiesData] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //    try {
    //          const response = await fetch('https://mangisiteserver.onrender.com/');
    //        const json = await response.json();
    //         console.log(json);
    //       } catch (error) {
    //        console.log("error", error);
    //        }
    //      };

    //      fetchData();

    fetch(
      "https://raw.githubusercontent.com/royts/israel-cities/master/israel-cities.json"
    )
      .then((response) => response.json())
      .then((data) => setCitiesData(data))
      .catch((err) => console.log(err));
  }, []);


  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
    profession: "",
    experties:[],
    address: {
      street: "",
      city: "",
    },
    phone: null,
    price: null,
    gender: "",
    language: [],
    experience: null,
    LGBTQ: null,
    about:''
  });

  async function handleForm(e) {
    e.preventDefault();
    console.log(inputData);
    try {
      const res = await fetch("http://localhost:5000/signUp", {
        method: "POST",
        body: JSON.stringify(inputData),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
      if (data.user) {
        navigate("/logIn");
      }
    } catch (err) {
      console.log(err);
    }
  }

  function handleExperties(e) {
    const value = e.target.value;
    setInputData({...inputData,experties:typeof value === "string" ? value.split(",") : value});
  }
  function handleLanguages(e) {
    const value = e.target.value;
    setInputData({...inputData,language:typeof value === "string" ? value.split(",") : value});
  }
  function handleProffesion(e) {
    const value = e.target.value;
    setInputData({...inputData,profession:value});
  }

  return (
    <div className="signInContainer">
      <Form className="signInForm" onSubmit={handleForm}>
        <div className="flex">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setInputData({ ...inputData, password: e.target.value })
              }
            />
          </Form.Group>
        </div>

        <>
          <div className="flex">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="First"
                onChange={(e) =>
                  setInputData({ ...inputData, name: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Last"
                onChange={(e) =>
                  setInputData({ ...inputData, lastName: e.target.value })
                }
              />
            </Form.Group>
          </div>

          <div className="flex">
            {/* <InputGroup>
            <FormControl>
              <Autocomplete
                // onChange={handleChange}
                disablePortal
                id="combo-box-demo"
                options={citiesData.map((city) => city.english_name)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={"placeHolder"}
                    variant="standard"
                    sx={{ width: 600 }}
                  />
                )}
              />
            </FormControl>
          </InputGroup> */}

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="name"
                placeholder="City Adress"
                onChange={(e) =>
                  setInputData({ ...inputData, address:{...inputData.address,city:e.target.value} })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Street</Form.Label>
              <Form.Control
                type="name"
                placeholder="Street Adress"
                onChange={(e) =>
                  setInputData({ ...inputData, address:{...inputData.address,street:e.target.value} })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone"
                onChange={(e) =>
                  setInputData({ ...inputData, phone: e.target.value })
                }
              />
            </Form.Group>
          </div>

          
          <div className="flex">
          
          

          <InputGroup className="mb-3">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Profession</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={inputData.profession}
                label="Profession"
                input={<OutlinedInput label="Profession" />}
                onChange={handleProffesion}
              >
                {professions.map((profession) => (
                  <MenuItem key={profession} value={profession}>
                    {profession}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Experties</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={inputData.experties}
                label="Experties"
                multiple
                input={<OutlinedInput label="Experties" />}
                onChange={handleExperties}
              >
                {experties.map((experty) => (
                  <MenuItem key={experty} value={experty}>
                    {experty}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </InputGroup>


          <InputGroup className="mb-3">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={inputData.language}
                label="Experties"
                multiple
                input={<OutlinedInput label="Experties" />}
                onChange={handleLanguages}
              >
                {languages.map((language) => (
                  <MenuItem key={language} value={language}>
                    {language}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </InputGroup>
          </div>

            

          <div className="flex">
          <InputGroup>
              <Box>
                <Typography gutterBottom>Price</Typography>
                <Slider
                  className="slider"
                  defaultValue={200}
                  valueLabelDisplay="auto"
                  step={10}
                  min={0}
                  max={1000}
                  sx={{ width: 200 }}
                  onChange={(e) =>
                    setInputData({ ...inputData, price: e.target.value })
                  }
                />
              </Box>
            </InputGroup>

            <InputGroup className="mb-3">
              <Box>
                <Typography className="checkBoxContainer" gutterBottom>Experience</Typography>
                <Slider
                  className="slider"
                  defaultValue={5}
                  valueLabelDisplay="auto"
                  step={1}
                  min={0}
                  max={50}
                  sx={{ width: 200 }}
                  onChange={(e) =>
                    setInputData({ ...inputData, experience: e.target.value })
                  }
                />
              </Box>
            </InputGroup>

          <InputGroup>
            <FormControl onChange={(e) =>
                  setInputData({ ...inputData, gender: e.target.value })
                }>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </InputGroup>

          <InputGroup>
            <FormControl onChange={(e) =>
                  setInputData({ ...inputData, LGBTQ: e.target.value })
                }>
              <FormLabel id="demo-radio-buttons-group-label">LGBTQ friendly</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </InputGroup>

           
          </div>


          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>About Yourself</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) =>
                setInputData({ ...inputData, about: e.target.value })
              }
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </>
      </Form>
    </div>
  );
}
