import { CardsComp } from "../../components/CardsComp/CardsComp";
import { Header } from "../../components/Header/Header";
import '../Specialties/Specialties.css'
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import {useParams} from 'react-router-dom'


export function Specialties() {
  let {specialty} = useParams()
  return (
    <>
      <Header />
      <CardsComp specialty={specialty}/>
    </>
  );
}
