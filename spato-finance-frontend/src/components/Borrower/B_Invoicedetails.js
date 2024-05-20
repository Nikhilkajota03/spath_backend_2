import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./B_CSS.css";

const B_Invoicedetails = () => {
  return (
    <div className="page invoiceForm">
      <Container>
        <Form>
          <br />
          <div>
            <div style={{ textAlign: "center" }}>
              <h1>Invoice details</h1>
            </div>

            <div style={{ textAlign: "center" }}>
              <h5> Please fill the following:</h5>
            </div>
          </div>
          <br />

          <div>
            <Card.Header>
              <h5> Customer details</h5>
            </Card.Header>
            <br />

            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text"  />
            <br />

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Company email address</Form.Label>
              <Form.Control type="email"  />
              <Form.Text className="text-muted">
                (We'll never share the email with anyone else)
              </Form.Text>
            </Form.Group>
            <Form.Label>Company contact number</Form.Label>
            <Form.Control type="number"  />

            <br />
            <Form.Label>Company website</Form.Label>
            <Form.Control type="text"  />
            <br />

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Company address</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
            <br />

            <Button variant="primary" type="submit">
              Submit
            </Button>

            <br />
          </div>
        </Form>
      </Container>

      <div>
        <Container>
          <Form>
            <div>
              <Card.Header>
                <h5> Invoice details</h5>
              </Card.Header>
              <br />
              <Form.Label>Supplier invoice number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Supplier invoice number"
              />

              <br />
              <Form.Label>Invoice date</Form.Label>
              <Form.Control type="date"  />
              <br />

              <Form.Label>Invoice due date</Form.Label>
              <Form.Control type="date" />
              <br />

              <Form.Label>Invoice amount</Form.Label>
              <Form.Control type="number" />
              <br />

              <Form.Label>Advance amount</Form.Label>
              <Form.Control type="number"  />
              <br />

              {/* <Form.Label>Amount available</Form.Label>
              <Form.Control type="number" placeholder="Amount available" />
              <br /> */}

              <Form.Label>Loan required</Form.Label>
              <Form.Control type="number"  />
              <br />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
            <div>
              <Form.Group controlId="formFile" className="mb-3">
                <Card.Header>
                  <Form.Label>Upload INVOICE</Form.Label>
                </Card.Header>
                <br />
                <Form.Control type="file" />
              </Form.Group>
              <br />

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <br />
            </div>

            <div>
              <Form.Group controlId="formFile" className="mb-3">
                <Card.Header>
                  <Form.Label>Upload ARPA</Form.Label>
                </Card.Header>
                <br />
                <h6 style={{ color: "white", display: "table-cell" ,marginTop:"0"}}> 
                  {" "}
                  Click on the following for
                  <a
                    style={{ color: "blue", display: "table-cell" ,marginTop:"0"}}
                    href="https://docs.google.com/document/d/1kKeD6iXrpmGLJN2YpUbxqofUJHy23Gol/edit?usp=sharing&ouid=102850055254910073504&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    sample ARPA document
                  </a>
                </h6>

                <br />
                <Form.Control type="file" />
              </Form.Group>
              <br />

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <br />
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default B_Invoicedetails;
