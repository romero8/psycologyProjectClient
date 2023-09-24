import { CounterComp } from "../components/CounterComp/CounterComp";
import { SearchForSpecialistComp } from "../components/SearchForSpecialistComp/SearchForSpecialistComp";
import {CarouselComp} from '../components/CarouselComp/CarouselComp'
import { Header } from "../components/Header/Header";

export function Therapist(){
    return(
        <>
        <SearchForSpecialistComp/>
        <CarouselComp/>
        <CounterComp/>
        </>
        
    )
}