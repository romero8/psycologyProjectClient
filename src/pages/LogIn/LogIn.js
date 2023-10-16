import "../SignUp/SignUp.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Header } from "../../components/Header/Header";

export function LogIn(props) {
  const setLoggedIn = props.setLoggedIn;
  const navigate = useNavigate();

  let userLocalStorage = JSON.parse(window.localStorage.getItem("user"));

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false);

  async function handle(e) {
    e.preventDefault();
    setErrors({});
    try {
      const res = await fetch("http://localhost:5000/logIn", {
        method: "POST",
        body: JSON.stringify(inputData),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
      setErrors(data.errors);
      if (data.therapist) {
        await window.localStorage.setItem("token", JSON.stringify(data.token));
        await window.localStorage.setItem("user", JSON.stringify(data.therapist));
        setLoggedIn(data.therapist);
        navigate(`/`);
      }
      if (data.client) {
        await window.localStorage.setItem("token", JSON.stringify(data.token));
        await window.localStorage.setItem("user", JSON.stringify(data.client));
        setLoggedIn(data.client);
        navigate(`/`);
      }
    } catch (err) {
      console.log(err);
    }

  }

  function handleEmail(e) {
    setErrors({});
    setInputData({ ...inputData, email: e.target.value });
  }

  return (
    <div className="signInContainer">
      <Header userLoggedIn={userLocalStorage} specialties={"logIn Page"}/>
      <Form className="signInForm" onSubmit={handle} validated={validated}>
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
              Email is required
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
