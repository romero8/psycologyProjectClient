import "./App.css";
import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { SearchForSpecialistComp } from "./components/SearchForSpecialistComp/SearchForSpecialistComp";
import { Home } from "./pages/Home/Home";
import { Specialties } from "./pages/Specialties/Specialties";
import { TherapistInfo } from "./pages/TherapistInfo/TherapistInfo";
import { ClientInfo } from "./pages/ClientInfo/ClientInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp/SignUp";
import { LogIn } from "./pages/LogIn/LogIn";
import { ClientRegistration } from "./pages/ClientRegistration/ClientRegistration";
import { TherapistRegistration } from "./pages/TherapistRegistration/TherapistRegistration";
import { Favorites } from "./pages/Favorites/Favorites";
import { Notifications } from "./pages/Notifications/Notifications";
import { Profile } from "./pages/Profile/Profile";
import { LoadingLogo } from "./components/LoadingLogo/LoadingLogo";
const serverUrl = "https://mangisiteserver.onrender.com/"
const localHostUrl = "http://localhost:5000/"

function App() {

  const [data, setData] = useState({});
  const [userLoggedIn, setLoggedIn] = useState(null);
  const [allTherapists, setAllTherapists] = useState([]);
  const [allClients, setAllClients] = useState([]);
    

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    const token = JSON.parse(window.localStorage.getItem("token"));
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (token) {
      setLoggedIn(user);
    }

    fetch("http://localhost:5000/allTherapists")
      .then((response) => response.json())
      .then((data) => setAllTherapists(data.data))
      .catch((err) => console.log(err));

    fetch("http://localhost:5000/allClients")
      .then((response) => response.json())
      .then((data) => setAllClients(data.data))
      .catch((err) => console.log(err));

  }, []);

  

  

  


  return (
    <div className="App">
      {/* <Header userLoggedIn={userLoggedIn} setLoggedIn={setLoggedIn} /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home userLoggedIn={userLoggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/:userId" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/signUp/clientRegistration"
            element={<ClientRegistration />}
          />
          <Route
            path="/signUp/therapistRegistration"
            element={<TherapistRegistration />}
          />
          <Route
            path="/logIn"
            element={
              <LogIn userLoggedIn={userLoggedIn} setLoggedIn={setLoggedIn} />
            }
          />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/notifications" element={<Notifications/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route
            path="/:searchBySpecialties/:specialty/:therapistName"
            element={<TherapistInfo allTherapists={allTherapists} />}
          />
          <Route
            path="/notifications/:clientName"
            element={<ClientInfo allClients={allClients} />}
          />
          <Route
            path="/:searchByTherapist/:name/:profession/:city/:range/:language/:experience/:gender/:lgbtq"
            element={<Specialties userLoggedIn={userLoggedIn} />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
