import { CounterComp } from "../components/CounterComp/CounterComp";
import { SearchForSpecialistComp } from "../components/SearchForSpecialistComp/SearchForSpecialistComp";
import {TherapistTypesComp} from '../components/TherapistTypesComp/TherapistTypesComp'
import { Header } from "../components/Header/Header";

export function Client(){
    return(
        <>
        <SearchForSpecialistComp/>
        <TherapistTypesComp/>
        <CounterComp/>
        </>
        
    )
}