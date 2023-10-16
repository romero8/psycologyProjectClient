import { useState, useEffect } from "react";
import "./SignUp.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";

export function SignUp() {
  const navigate = useNavigate();
  let userLocalStorage = JSON.parse(window.localStorage.getItem("user"));

  return (
    <div className="signInContainer">
      <Header userLoggedIn={userLocalStorage} specialties={"logIn Page"}/>
      <div className="signUpBox">
        <div className="signUpOption">
          <Button className="clientRegistration" size="lg" onClick={()=>{navigate('/signUp/clientRegistration')}}>
            Client Registration
          </Button>
          </div>
          <div>
          <Button className="thrapistRegistration" size="lg" onClick={()=>{navigate('/signUp/therapistRegistration')}}>
            Therapist Registration
          </Button>
          </div>        
      </div>
    </div>
  );
}
