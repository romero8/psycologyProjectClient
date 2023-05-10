import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { SearchForSpecialistComp } from './components/SearchForSpecialistComp/SearchForSpecialistComp';
import { Home } from './pages/Home';
import { Client } from './pages/Client';
import { Therapist } from './pages/Therapist';
import { Specialties } from './pages/Specialties/Specialties';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/client' element={<Client/>}/>
          <Route path='/therapist' element = {<Therapist/>}/>
          <Route path='/specialties/:specialty' element = {<Specialties/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
