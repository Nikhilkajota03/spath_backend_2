import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import "../Borrower/B_CSS.css";
import "../Lender/L_CSS.css";

function CustomerDetails({ nextStep, handleChange, inputValues }) {
  return (
    <div className="page invoiceForm pb-4 p-5">
      <div>
        <Container>
          <Form>
            <br />
            <div>
              <div style={{ textAlign: "center" }}>
                <h1>Invoice Details</h1>
              </div>

              <div style={{ textAlign: "center" }}>
                <h5> Please fill the following:</h5>
              </div>
            </div>
            <br />

            <div>
              <Card.Header>
                <h5>Customer details</h5>
              </Card.Header>
              <br />

              <Form.Label>Company Name</Form.Label>
              <Form.Control
                name="companyName"
                onChange={handleChange}
                type="text"
                value={inputValues.companyName}
              />
              <br />

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Company email address</Form.Label>
                <Form.Control
                  name="companyEmail"
                  onChange={handleChange}
                  type="email"
                  value={inputValues.companyEmail}
                />
                <Form.Text className="text-muted">
                  (We'll never share the email with anyone else)
                </Form.Text>
              </Form.Group>
              <Form.Label>Company contact number</Form.Label>
              <Form.Control
                name="companyContactNumber"
                onChange={handleChange}
                type="number"
                value={inputValues.companyContactNumber}
              />

              <br />
              <Form.Label>Company website</Form.Label>
              <Form.Control
                name="companyWebsite"
                onChange={handleChange}
                type="text"
                value={inputValues.companyWebsite}
              />
              <br />

              <Form.Group
                className="mb-3"
                controlId="exampleForm.Control Textarea1"
              >
                <Form.Label>Company address</Form.Label>
                <Form.Control
                  name="companyAddress"
                  onChange={handleChange}
                  value={inputValues.companyAddress}
                  as="textarea"
                  rows={4}
                />
              </Form.Group>
              <br />

              <br />
            </div>
          </Form>
        </Container>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="btn mt-3 ml-5 text-black" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
}

export default CustomerDetails;
