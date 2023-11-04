import React, { useState, useEffect } from "react";
import "../Header/Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getData } from "../../helpers/fetchHelper";
// import { therapistTypesData } from "../../helpers/data";
import { Link, useParams, useNavigate } from "react-router-dom";
import { professions } from "../../helpers/data";
import Cookies from "universal-cookie";
import { jwt } from "jwt-decode";
import Image from "react-bootstrap/Image";
import psyProjectLogo from "../../icons/logo.png";

export function Header(props) {
  const [data, setData] = useState([]);
  const userLoggedIn = props.userLoggedIn;
  const setLoggedIn = props.setLoggedIn;
  const specialties = props.specialties;
  const cookies = new Cookies();
  let { userId } = useParams();

  const [color, setColor] = useState(false);

  function changeColor() {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeColor);

  let clientLoggedIn;
  let therapistLoggedIn;

  if (userLoggedIn) {
    if (userLoggedIn.profession) {
      therapistLoggedIn = userLoggedIn;
    } else {
      clientLoggedIn = userLoggedIn;
    }
  }

  let { clientName } = useParams();
  let { therapistName } = useParams();

  function logOut() {
    if(setLoggedIn){
      setLoggedIn(null);
    }
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
  }
  return (
    <>
      <Navbar
        key="lg"
        expand="lg"
        className={
          color || specialties ? "headerContainer bg" : "headerContainer"
        }
      >
        <Container className="headerBox">
          <Navbar.Brand className="navBarLogo" href="/">
            <img className="psyProjectLogo" src={psyProjectLogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            className="canvasHeader"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <img className="psyProjectLogoCanvas" src={psyProjectLogo} />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="me-auto">
                <NavDropdown
                  id={color || specialties ? "boldBg" : "bold"}
                  title="Proffesions"
                >
                  {professions.map((profession) => {
                    return (
                      <NavDropdown.Item
                        className="dropDownLink"
                        href={`/searchByTherapist/all/${profession}/all/0,1000/all/all/all/all`}
                      >
                        {profession}
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>

                {clientLoggedIn ? (
                  <Nav.Link
                    href="/favorites"
                    className={color || specialties ? "boldBg" : "bold"}
                  >
                    Favorites
                  </Nav.Link>
                ) : (
                  ""
                )}
                {therapistLoggedIn ? (
                  <Nav.Link
                    href="/notifications"
                    className={color || specialties ? "boldBg" : "bold"}
                  >
                    Notifications
                  </Nav.Link>
                ) : (
                  ""
                )}

                {userLoggedIn ? (
                  <Nav.Link
                    href="/profile"
                    className={color || specialties ? "boldBg" : "bold"}
                  >
                    Profile
                  </Nav.Link>
                ) : (
                  ""
                )}
              </Nav>

              <Nav>
                {userLoggedIn ? (
                  <Navbar.Text
                    className={
                      color || specialties ? "navBarTextBg" : "navBarText"
                    }
                  >
                    Hello {userLoggedIn.name}
                  </Navbar.Text>
                ) : (
                  ""
                )}
                {userLoggedIn ? (
                  <Nav.Link
                    href="/"
                    className={
                      color || specialties
                        ? "navBarLink logOutBg"
                        : "navBarLink"
                    }
                    onClick={() => logOut()}
                  >
                    Log-Out
                  </Nav.Link>
                ) : (
                  ""
                )}
                {!userLoggedIn ? (
                  <Nav.Link
                    href="/logIn"
                    className={
                      color || specialties
                        ? "navBarLink logOutBg"
                        : "navBarLink"
                    }
                  >
                    Log-In
                  </Nav.Link>
                ) : (
                  ""
                )}
                <Nav.Link
                  eventKey={2}
                  href="/signUp"
                  className={
                    color || specialties
                      ? "navBarLink signUp signUpBg"
                      : "navBarLink signUp"
                  }
                >
                  Sign-Up
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

// return (
//   <Navbar expand='md' fixed="top"  className={color || specialties ? "headerContainer bg" : "headerContainer"}>
//     <Container className="headerBox">

//       <Navbar.Brand className="navBarLogo" href="/"><img className="psyProjectLogo" src={psyProjectLogo}/></Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="me-auto">
//           <NavDropdown id={color || specialties ? "boldBg" : "bold"} title="Proffesions">
//             {professions.map((profession) => {
//               return (
//                 <NavDropdown.Item className="dropDownLink" href={`/searchByTherapist/all/${profession}/all/0,1000/all/all/all/all`}>
//                   {profession}
//                 </NavDropdown.Item>
//               );
//             })}

//           </NavDropdown>

//           {clientLoggedIn ? (
//             <Nav.Link href="/favorites" className={color || specialties ? "boldBg" : "bold"}>Favorites</Nav.Link>
//           ) : (
//             ""
//           )}
//           {therapistLoggedIn ? (
//             <Nav.Link href="/notifications" className={color || specialties ? "boldBg" : "bold"}>Notifications</Nav.Link>
//           ) : (
//             ""
//           )}

//           {userLoggedIn ? <Nav.Link href="/profile"className={color || specialties ? "boldBg" : "bold"}>Profile</Nav.Link> : ""}

//           {/* <Nav.Link href="#link">
//             <FontAwesomeIcon
//               icon={faMagnifyingGlass}
//               className={color || specialties ? "magnifying-glass-iconBd" : "magnifying-glass-icon"}
//             />
//           </Nav.Link> */}
//         </Nav>
//         <Nav>
//           {userLoggedIn ? (
//             <Navbar.Text className={color || specialties ? "navBarTextBg" : "navBarText"}>Hello {userLoggedIn.name}</Navbar.Text>
//           ) : (
//             ""
//           )}
//           {userLoggedIn ? (
//             <Nav.Link href="/" className={color || specialties ? "navBarLink logOutBg" : "navBarLink"} onClick={() => logOut()} >Log-Out</Nav.Link>
//           ) : (
//             ""
//           )}
//           {!userLoggedIn ? <Nav.Link href="/logIn" className={color || specialties ? "navBarLink logOutBg" : "navBarLink"}>Log-In</Nav.Link> : ""}
//           <Nav.Link eventKey={2} href="/signUp" className={color || specialties ? "navBarLink signUp signUpBg" : "navBarLink signUp"}>
//             Sign-Up
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
// );
