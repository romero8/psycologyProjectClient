import { useState, useEffect } from "react";
import "../SignUp/SignUp.css";
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
  FormGroup,
} from "@mui/material";
import { multiply } from "lodash";

import { cities,experties,professions } from "../../helpers/data";
import { Header } from "../../components/Header/Header";

export function TherapistRegistration() {

  let userLocalStorage = JSON.parse(window.localStorage.getItem("user"));

  const languages = ["Hebrew", "English", "Arabic", "Russian"];
  

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

  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
    profession: "",
    experties: [],
    address: {
      street: "",
      city: "",
    },
    phone: null,
    price: null,
    gender: "",
    language: [],
    experience: null,
    about: "",
  });

  function handleEmail(e) {
    setErrors({});
    setInputData({ ...inputData, email: e.target.value });
  }

  async function handleForm(e) {
    e.preventDefault();
    console.log(inputData);
    const form = e.currentTarget;
    setErrors({});
    try {
      const res = await fetch("https://mangisiteserver.onrender.com/signUp/therapist", {
        method: "POST",
        body: JSON.stringify(inputData),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data.errors);
      setErrors(data.errors);
      if (data.therapist) {
        navigate("/logIn");
      }
    } catch (err) {
      console.log(err);
    }
    console.log(errors);
    setValidated(true);
  }

  function handleExperties(e) {
    const value = e.target.value;
    setInputData({
      ...inputData,
      experties: typeof value === "string" ? value.split(",") : value,
    });
  }
  function handleLanguages(e) {
    const value = e.target.value;
    setInputData({
      ...inputData,
      language: typeof value === "string" ? value.split(",") : value,
    });
  }
  function handleProffesion(e) {
    const value = e.target.value;
    setInputData({ ...inputData, profession: value });
  }

  return (
    <div className="signInContainer">
      <Header userLoggedIn={userLocalStorage} specialties={"logIn Page"}/>
      <Form className="signInForm" onSubmit={handleForm} validated={validated}>
        <div className="flex">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              isInvalid={errors.email}
              placeholder="Enter email"
              onChange={handleEmail}
            />

            {errors.email ? (
              <Form.Control.Feedback type="invalid">
                {errors.email.message}
              </Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback type="invalid">
                Email is required
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setInputData({ ...inputData, password: e.target.value })
              }
              required
              isInvalid={errors.password}
            />
            {errors.password ? (
              <Form.Control.Feedback type="invalid">
                {errors.password.message}
              </Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback type="invalid">
                Password is required
              </Form.Control.Feedback>
            )}
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
                required
              />
              {errors.name ? (
                <Form.Control.Feedback type="invalid">
                  {errors.name.message}
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback type="invalid">
                  Password is required
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="name"
                placeholder="Last"
                onChange={(e) =>
                  setInputData({ ...inputData, lastName: e.target.value })
                }
              />
              {errors.lastName ? (
                <Form.Control.Feedback type="invalid">
                  {errors.lastName.message}
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback type="invalid">
                  Last Name is required
                </Form.Control.Feedback>
              )}
            </Form.Group>
          </div>

          <div className="flex">
            <InputGroup>
            <FormControl>
              <Autocomplete
                 onChange={(e) =>
                  setInputData({
                    ...inputData,
                    address: { ...inputData.address, city: e.target.value },
                  })
                }
                size="small"
                disablePortal
                id="highlights-demo"
                options={cities.map((city) => city.City)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={"City"}
                    color="secondary"
                    sx={{ width: 225 }}
                  />
                )}
              />
            </FormControl>
          </InputGroup>
<Form.Group>

</Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                type="name"
                placeholder="City Adress"
                onChange={(e) =>
                  setInputData({
                    ...inputData,
                    address: { ...inputData.address, city: e.target.value },
                  })
                }
              />
              {errors.city ? (
                <Form.Control.Feedback type="invalid">
                  {errors.city.message}
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback type="invalid">
                  City is required
                </Form.Control.Feedback>
              )}
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Street</Form.Label>
              <Form.Control
                required
                type="name"
                placeholder="Street Adress"
                onChange={(e) =>
                  setInputData({
                    ...inputData,
                    address: { ...inputData.address, street: e.target.value },
                  })
                }
              />
              {errors.street ? (
                <Form.Control.Feedback type="invalid">
                  {errors.street.message}
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback type="invalid">
                  Street is required
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                className="phoneRegistration"
                type="number"
                placeholder="Phone"
                onChange={(e) =>
                  setInputData({ ...inputData, phone: e.target.value })
                }
              />
              {errors.phone ? (
                <Form.Control.Feedback type="invalid">
                  {errors.phone.message}
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback type="invalid">
                  Phone Number is required
                </Form.Control.Feedback>
              )}
            </Form.Group>
          </div>

          <div className="flex">
            <InputGroup className="mb-3">
              <FormControl required fullWidth>
                <InputLabel id="demo-simple-select-label" color="secondary">
                  Profession
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={inputData.profession}
                  label="Profession"
                  input={<OutlinedInput label="Profession"/>}
                  onChange={handleProffesion}
                  color="secondary"
                >
                  {professions.map((profession) => (
                    <MenuItem key={profession} value={profession}>
                      {profession}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {errors.profession ? (
                <Form.Control.Feedback type="invalid">
                  {errors.profession.message}
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback type="invalid">
                  Profession is required
                </Form.Control.Feedback>
              )}
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" color="secondary">Experties</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={inputData.experties}
                  label="Experties"
                  multiple
                  limitTags={2}
                  input={<OutlinedInput label="Experties" />}
                  onChange={handleExperties}
                  color="secondary"
                  sx={{ width: '220px' }}
                >
                  {experties.map((experty) => (
                    <MenuItem key={experty} value={experty}>
                      {experty}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {errors.experties ? (
                <Form.Control.Feedback type="invalid">
                  {errors.experties.message}
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback type="invalid">
                  Experties is required
                </Form.Control.Feedback>
              )}
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl fullWidth required>
                <InputLabel id="demo-simple-select-label" color="secondary">Language</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={inputData.language}
                  label="Experties"
                  multiple
                  input={<OutlinedInput label="Experties" />}
                  onChange={handleLanguages}
                  color="secondary"
                >
                  {languages.map((language) => (
                    <MenuItem key={language} value={language}>
                      {language}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {errors.language ? (
                <Form.Control.Feedback type="invalid">
                  {errors.language.message}
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback type="invalid">
                  Language is required
                </Form.Control.Feedback>
              )}
            </InputGroup>
          </div>

          <div className="flex">
            <InputGroup>
              <FormControl required>
                <Box>
                  <Typography gutterBottom>Price</Typography>
                  <Slider
                  color="secondary"
                    className="slider"
                    defaultValue={0}
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
                {errors.price ? (
                  <p className="errorMessage">Price is required</p>
                ) : (
                  <Form.Control.Feedback type="invalid">
                    Price is required
                  </Form.Control.Feedback>
                )}
              </FormControl>
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl required>
                <Typography className="checkBoxContainer" gutterBottom>
                  Experience
                </Typography>
                <Slider
                color="secondary"
                  className="slider"
                  defaultValue={0}
                  valueLabelDisplay="auto"
                  step={1}
                  min={0}
                  max={50}
                  sx={{ width: 200 }}
                  onChange={(e) =>
                    setInputData({ ...inputData, experience: e.target.value })
                  }
                />

                {errors.experience ? (
                  <p className="errorMessage">Experience is required</p>
                ) : (
                  <Form.Control.Feedback type="invalid">
                    Experience is required
                  </Form.Control.Feedback>
                )}
              </FormControl>
            </InputGroup>

            <InputGroup>
              <FormControl
                required
                onChange={(e) =>
                  setInputData({ ...inputData, gender: e.target.value })
                }
              >
                <FormLabel id="demo-radio-buttons-group-label" color="secondary">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio color="secondary" />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio color="secondary"/>}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio color="secondary"/>}
                    label="Other"
                  />
                </RadioGroup>
                {errors.gender ? (
                  <p className="errorMessage">Gender is required</p>
                ) : (
                  <Form.Control.Feedback type="invalid">
                    Gender is required
                  </Form.Control.Feedback>
                )}
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
            {errors.password ? (
              <Form.Control.Feedback type="invalid">
                {errors.password.message}
              </Form.Control.Feedback>
            ) : (
              <Form.Control.Feedback type="invalid">
                Password is required
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Button className="submitForm" type="submit">
            Submit
          </Button>
        </>
      </Form>
    </div>
  );
}
