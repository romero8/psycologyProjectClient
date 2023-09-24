import { CounterComp } from "../../components/CounterComp/CounterComp";
import { Header } from "../../components/Header/Header";
import { SearchForSpecialistComp } from "../../components/SearchForSpecialistComp/SearchForSpecialistComp";
import {CarouselComp} from '../../components/CarouselComp/CarouselComp'
import '../Home/Home.css'

export function Home(props){

    
  
    return(
        <div className="homePageContainer">
        <div className="titleContainer">
        <h1 className="title">Easy to find therapy with <span className="logoName">EzPsy</span>.</h1>
        </div>
        <SearchForSpecialistComp/>
        <CarouselComp/>
        <CounterComp />
        </div>
        
    )
}