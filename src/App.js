import './App.css';
import { Header } from './components/Header/Header';
import { SearchForSpecialistComp } from './components/SearchForSpecialistComp/SearchForSpecialistComp';
import { Home } from './pages/Home';





function App() {
  return (
    
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
