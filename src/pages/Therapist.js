import { CounterComp } from "../components/CounterComp/CounterComp";
import { SearchForSpecialistComp } from "../components/SearchForSpecialistComp/SearchForSpecialistComp";
import {TherapistTypesComp} from '../components/TherapistTypesComp/TherapistTypesComp'
import { Header } from "../components/Header/Header";

export function Therapist(){
    return(
        <>
        <Header type='therapist'/>
        <SearchForSpecialistComp/>
        <TherapistTypesComp/>
        <CounterComp/>
        </>
        
    )
}