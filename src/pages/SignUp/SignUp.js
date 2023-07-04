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

  const [expertiesSelect, setExpertiesSelect] = useState([]);
  const [professionSelect, setProfessionSelect] = useState('');

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
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
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  function handleExperties(e) {
    const value = e.target.value;
    setExpertiesSelect(typeof value === "string" ? value.split(",") : value);
  }
  function handleProffesion(e) {
    const value = e.target.value;
    setProfessionSelect(value)
  }

  return (
    <div className="signInContainer">
      <Form className="signInForm" onSubmit={handleForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) =>
              setInputData({ ...inputData, email: e.target.value })
            }
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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

        <>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name and Last-Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              // onChange={(e) =>
              //   setInputData({ ...inputData, email: e.target.value })
              // }
            />
          </Form.Group>

          <InputGroup className="mb-3">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Profession</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={professionSelect}
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
                value={expertiesSelect}
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

          <InputGroup>
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
          </InputGroup>

          <InputGroup>
            <Box>
              <Typography gutterBottom>Price</Typography>
              <Slider />
            </Box>
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"language"}
                label="Language"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </InputGroup>

          <InputGroup className="mb-3">
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
          </InputGroup>

          <InputGroup className="mb-3">
            <Box>
              <Typography gutterBottom>Experience</Typography>
              <Slider />
            </Box>
          </InputGroup>

          <InputGroup>
            <FormControl>
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

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) =>
                setInputData({ ...inputData, textArea: e.target.value })
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
