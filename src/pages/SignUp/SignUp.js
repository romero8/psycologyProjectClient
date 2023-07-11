import { useState, useEffect } from "react";
import "./SignUp.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="signUpContainer">
      <div className="signUpBox">
        <div className="signUpOption">
          <Button variant="primary" size="lg" onClick={()=>{navigate('/signUp/clientRegistration')}}>
            Client Registration
          </Button>
          </div>
          <div>
          <Button variant="secondary" size="lg" onClick={()=>{navigate('/signUp/therapistRegistration')}}>
            Therapist Registration
          </Button>
          </div>        
      </div>
    </div>
  );
}
