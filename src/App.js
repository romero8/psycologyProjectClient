import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { SearchForSpecialistComp } from './components/SearchForSpecialistComp/SearchForSpecialistComp';
import { Home } from './pages/Home';
import { Client } from './pages/Client';
import { Therapist } from './pages/Therapist';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/client' element={<Client/>}/>
          <Route path='therapist' element = {<Therapist/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
