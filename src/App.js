import './App.css';
import React,{useState,useEffect} from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { SearchForSpecialistComp } from './components/SearchForSpecialistComp/SearchForSpecialistComp';
import { Home } from './pages/Home';
import { Client } from './pages/Client';
import { Therapist } from './pages/Therapist';
import { Specialties } from './pages/Specialties/Specialties';
import {TherapistInfo} from './pages/TherapistInfo/TherapistInfo'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { SignUp } from './pages/SignUp/SignUp';
import { LogIn } from './pages/LogIn/LogIn';





function App() {

console.log()

  const [data, setData] = useState({});
  const [userLoggedIn,setLoggedIn] = useState()

//   useEffect(() => {
   
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`/user/${userId[0]}`);
//         const json = await response.json();
//         console.log(json);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };

//     fetchData();
// }, []);
 
  
  // useEffect(() => {
  //   const dataFetch = async () => {
  //     const data = await (await fetch(`user/${userId[0]}`)).json();

  //     setData(data);
  //   };

  //   dataFetch();
  // }, userId);

  
  console.log(userLoggedIn);


  return (
    <div className="App">
      <Header userLoggedIn = {userLoggedIn}/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:userId' element={<Home/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/logIn' element={<LogIn setLoggedIn = {setLoggedIn}/>}/>
          <Route path='/client/:clientName' element={<Client/>}/>
          <Route path='/therapist/:therapistName' element = {<Therapist/>}/>
          <Route path='/:searchBySpecialties/:specialty' element = {<Specialties/>}/>
          <Route path='/:searchBySpecialties/:specialty/:therapistName' element = {<TherapistInfo/>}/>       
          <Route path='/:searchByTherapist/:name/:profession/:city/:range/:language/:experience/:gender/:lgbtq' element = {<Specialties/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
