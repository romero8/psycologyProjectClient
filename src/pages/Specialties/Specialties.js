import { CardsComp } from "../../components/CardsComp/CardsComp";
import { Header } from "../../components/Header/Header";
import '../Specialties/Specialties.css'
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";


export function Specialties() {
  return (
    <>
      <Header />
      <CardsComp/>
    </>
  );
}
