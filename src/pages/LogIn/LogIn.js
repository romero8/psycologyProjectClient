import '../SignUp/SignUp.css'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

export function LogIn() {


  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    email:"",
    password:"",
  })

  
  async function handle(e) {
    e.preventDefault();
    
        
    try{
      const res = await fetch('/logIn',{
        method: 'POST',
        body: JSON.stringify(inputData),
        headers: {'Content-Type': 'application/json'}
      })
      const data = await res.json();
      console.log(data);
      if(data.user){
        navigate('/')
      }
    }
    catch(err){
      console.log(err)
    }
    
  
    








    
    
    
    
    
    
    
    
    
    // console.log(inputData)
    // fetch("/logIn", {
    //   mode: "cors",
    //   method: "POST",
    //   headers: {
    //     "Content-Type":"application/json"
    //   },
    //   body:JSON.stringify(inputData)
    // })

    // .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data)
    //     alert("Data Posted successfully!");
       
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    }

  return (
    <div className="signInContainer">
      <Form className='signInForm' onSubmit={handle}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setInputData({...inputData,email:e.target.value})}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  onChange={(e)=>setInputData({...inputData,password:e.target.value})}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}