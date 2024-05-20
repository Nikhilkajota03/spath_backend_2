import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import { Form, Card, Button } from "react-bootstrap";
import connectFunctions from "../ConnectWallet";

function Personaldetails({ nextStep, handleChange, inputValues }) {
  connectFunctions.maintainWallet();
  return (
    <div className="pt-5">
      <div className="page container">
        <div>
          <Card.Header>
            <h5> Personal details</h5>
          </Card.Header>
          <br />
          {/* <ConnectButton/> */}
          <button
            id="connectButton"
            onClick={() => connectFunctions.connectWallet()}
          >
            Connect wallet
          </button>

          <div id="walletAmount" className="text-white">
            .
          </div>
          <br />

          <br />

          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={inputValues.fullName}
            onChange={handleChange}
          />
          <br />

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={inputValues.email}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              (We'll never share your email with anyone else)
            </Form.Text>
          </Form.Group>

          <Form.Label>Nationality</Form.Label>
          <Form.Control
            type="text"
            placeholder="Country name"
            name="nationality"
            value={inputValues.nationality}
            onChange={handleChange}
          />
          <br />
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="text"
            placeholder="Designation"
            name="designation"
            value={inputValues.designation}
            onChange={handleChange}
          />
          <br />
          <Form.Label>Contact number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone n.o"
            name="contactNumber"
            value={inputValues.contactNumber}
            onChange={handleChange}
          />

          <br />
        </div>
      </div>
      <div className="bmint">
        <button className="mb-5 btn" onClick={nextStep}>
          Next
        </button>
      </div>
      {/* <button onClick={prevStep}>Next</button> */}
    </div>
  );
}

export default Personaldetails;
