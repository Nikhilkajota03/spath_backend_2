import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { db, auth, storage } from "../../Firebase";
import logo from "../../assets/Translogo.png";
import "./L_CSS.css";

// import { Link } from "react-router-dom";

const L_Header = ({ setIsLoggedIn }) => {
 
  // Logging out----------------------------------------------------------
  const [submitting, setSubmitting] = useState(false);
  const [count, setCount] = useState(0);

  const history = useHistory();
  const logOut = () => {
    setSubmitting(true);
    console.log("logging out");
    auth
      .signOut()
      .then(() => {
        // setUser(undefined);
        if (typeof window !== "undefined") {
          window.sessionStorage.removeItem("user");
          window.localStorage.removeItem("user");
        }
        setIsLoggedIn(false);
        setSubmitting(false);
        setCount(1);
        alert("Successfully logged out!");
      })

      .catch((err) => alert("Could not logout, try again"));
  };
  useEffect(() => {
    count == 1 && submitting === false
      ? history.push("/")
      : console.log("Loading");
  }, [count]);
  // --------------------------------------------------------------------------------------
  return (
    <Navbar className="nav" expand="lg" variant="dark">
      <Container>
        <a
          style={{ display: "table-cell" }}
          href="/welcome"
          // target="_blank"
          rel="noopener noreferrer"
        >
          {/* {submitting?<p>Helloooo</p>:<p>Hiiiii</p>} */}
          <Navbar.Brand>
            <img src={logo} width="40" />
          </Navbar.Brand>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/Lender/info" className="navlink ">
              Instructions
            </Nav.Link>
            <Nav.Link href="/Lender/profile" className="navlink ml-0 ml-md-4">
              Profile
            </Nav.Link>
            <Nav.Link href="/Lender/lend" className="navlink ml-0 ml-md-4">
              Lend
            </Nav.Link>
            <Nav.Link className="navlink ml-0 ml-md-4">
              <button className="p-0 m-0" onClick={logOut}>Logout</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default L_Header;
