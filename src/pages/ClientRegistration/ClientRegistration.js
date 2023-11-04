import { useState, useEffect } from "react";
import "../SignUp/SignUp.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import { cities } from "../../helpers/data";
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
import { Header } from "../../components/Header/Header";

export function ClientRegistration() {

  let userLocalStorage = JSON.parse(window.localStorage.getItem("user"));

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
      const res = await fetch("https://mangisiteserver.onrender.com/signUp/client", {
        method: "POST",
        body: JSON.stringify(inputData),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data.errors);
      setErrors(data.errors);
      if (data.client) {
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
                  Name is required
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
           
            {/* <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>City</Form.Label>
              <Form.Control
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
            <InputGroup>
            <FormControl>
              <Autocomplete
                // onChange={handleChange}
                onChange={(e) =>
                  setInputData({
                    ...inputData,
                    address: { ...inputData.address, city: e.target.innerHTML},
                  })
                }
                size="small"
                disablePortal
                id="combo-box-demo"
                options={cities.map((city) => city.City)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={"City"}
                    sx={{ width: 300 }}
                    color="secondary"
                  />
                )}
              />
            </FormControl>
          </InputGroup>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Street</Form.Label>
              <Form.Control
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
                    control={<Radio color="secondary"/>}
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
