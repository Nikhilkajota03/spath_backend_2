import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { auth } from "../../Firebase";
import logo from "../../assets/Translogo.png";
import "./Validator.css";
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
    <Navbar expand="lg" variant="dark" className="nav">
      <Container>
        <a
          style={{ display: "table-cell" }}
          href="/welcome"
          rel="noopener noreferrer"
        >
          <Navbar.Brand>
            <img src={logo} width="60" />
          </Navbar.Brand>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* ------------------------------------------------------------------------------------- */}

            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="p-0 m-0 mb-3 mb-md-0 mr-md-4">Profiles</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/Validator/Bprofiles">
                  Borrowers
                </Dropdown.Item>
                <Dropdown.Item href="/Validator/Lprofiles">
                  Lenders
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle className="p-0 m-0 mb-3 mb-md-0 mr-md-4" id="dropdown-basic">
                Uploaded documents
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/Validator/uploadedinvoices">
                  Invoices
                </Dropdown.Item>
                <Dropdown.Item href="/Validator/uploadedarpas">
                  ARPA
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* ------------------------------------------------------------------------------------------ */}
            <Nav.Link className="navlink" href="/Validator/approved">
              Approved invoices
            </Nav.Link>
            <Nav.Link className="navlink" href="/Validator/transfer">
              Transfer section
            </Nav.Link>
            <Nav.Link className="navlink" href="/Validator/whitelist">
              Whitelist
            </Nav.Link>
            <Nav.Link className="navlink">
              <button className="p-0 m-0" onClick={logOut}>Logout</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default L_Header;
