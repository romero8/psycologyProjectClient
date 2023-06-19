import { useState } from 'react';
import './SignUp.css'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export function SignUp() {

  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    email:"",
    password:"",
    textArea:""
  })
  async function handle(e) {
    e.preventDefault();
    console.log(inputData)
    
    try{
      const res = await fetch('/signUp',{
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
    
    
    
    
    
    
    
    
    
    // fetch("/users", {
    //   mode: "cors",
    //   method: "POST",
    //   headers: {
    //     "Content-Type":"application/json",
    //   },
    //   body:JSON.stringify(inputData)
    // }).then((response) => response.json())
    //   .then((data) => {
    //     console.log(data)
    //     alert("Data Posted successfully!");
       
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

      // const res = await fetch('/users', {
      //   method: 'POST',
      //   headers: {
      //     "Accept": "application/json",
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(inputData)
      // })
      // const data = await res.json()
      // if(data.status === 422 || !data){
      //   window.alert("Failed to register")
      // }else{
      //   window.alert("Registered successfully please signin")
      //   navigate('/signIn')
      // }
  
      
  }
  return (
    <div className="signInContainer">
      <Form className='signInForm' onSubmit={handle}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setInputData({...inputData,email:e.target.value})}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=>setInputData({...inputData,password:e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(e)=>setInputData({...inputData,textArea:e.target.value})}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
