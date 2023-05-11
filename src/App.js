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




function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/client/:clientName' element={<Client/>}/>
          <Route path='/therapist/:therapistName' element = {<Therapist/>}/>
          <Route path='/specialties/:specialty' element = {<Specialties/>}/>
          <Route path='/specialties/:specialty/:therapistName' element = {<TherapistInfo/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
