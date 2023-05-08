import logo from "../../icons/AnimatedLogo.png"
import '../CardsComp/CardsComp.css'
import { MainBtn } from "../MainBtn/MainBtn"

export function CardsComp(){
    return(
        <div className="cardsContainer">
            <div className="cardContainer">
            <div >
        <img className="cardPhoto" src={logo}/>
            </div>
            <div className="cardInfo">
                <h3 className="specalistName">Shay Romeri</h3>
                <span className="specalistAbility">Psychology</span>
                <span className="specalistAbout">Best Psychology Ever</span>
                <div className="specalistAvailabilityBox">
                    <p className="specalistAvailability">Ramat-Gan</p>
                    <p className="specalistAvailability">Video Call</p>
                </div>
            </div>
            <div className="cardActions">
                <MainBtn value='Call'/>
                <MainBtn value='Check For Appointment'/>
            </div>
            </div>
        </div>
    )
}