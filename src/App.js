import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { SearchForSpecialistComp } from './components/SearchForSpecialistComp/SearchForSpecialistComp';
import { Home } from './pages/Home';
import { Client } from './pages/Client';
import { Therapist } from './pages/Therapist';
import { Specialties } from './pages/Specialties/Specialties';
import {TherapistInfo} from './pages/TherapistInfo/TherapistInfo'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { SignIn } from './pages/SignIn/SignIn';
import { LogIn } from './pages/LogIn/LogIn';




function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/logIn' element={<LogIn/>}/>
          <Route path='/client/:clientName' element={<Client/>}/>
          <Route path='/therapist/:therapistName' element = {<Therapist/>}/>
          <Route path='/:searchBySpecialties/:specialty' element = {<Specialties/>}/>
          <Route path='/:searchBySpecialties/:specialty/:therapistName' element = {<TherapistInfo/>}/>
          <Route path='/:searchByTherapist/:name' element = {<Specialties/>}/>
          <Route path='/:searchByTherapist/:name/:profession' element = {<Specialties/>}/>
          <Route path='/:searchByTherapist/:name/:profession/:city' element = {<Specialties/>}/>
          <Route path='/:searchByTherapist/:name/:profession/:city/:range' element = {<Specialties/>}/>
          <Route path='/:searchByTherapist/:name/:profession/:city/:range/:language' element = {<Specialties/>}/>
          <Route path='/:searchByTherapist/:name/:profession/:city/:range/:language/:experience' element = {<Specialties/>}/>
          <Route path='/:searchByTherapist/:name/:profession/:city/:range/:language/:experience/:gender' element = {<Specialties/>}/>
          <Route path='/:searchByTherapist/:name/:profession/:city/:range/:language/:experience/:gender/:lgbtq' element = {<Specialties/>}/>
          
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
