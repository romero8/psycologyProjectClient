import { CounterComp } from "../components/CounterComp/CounterComp";
import { Header } from "../components/Header/Header";
import { SearchForSpecialistComp } from "../components/SearchForSpecialistComp/SearchForSpecialistComp";
import {TherapistTypesComp} from '../components/TherapistTypesComp/TherapistTypesComp'

export function Home(){
    return(
        <>
        <SearchForSpecialistComp/>
        <TherapistTypesComp/>
        <CounterComp/>
        </>
        
    )
}