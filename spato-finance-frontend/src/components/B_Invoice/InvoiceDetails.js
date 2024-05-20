import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import "../Borrower/B_CSS.css";
import "../Lender/L_CSS.css";

function InvoiceDetails({ nextStep, prevStep ,handleChange,inputValues}) {
  return (
    <div className="page invoiceForm pb-4 p-5">
      <div>
        <Container>
          <Form>
            <div>
              <Card.Header>
                <h5>Invoice details</h5>
              </Card.Header>
              <br />
              <Form.Label>Supplier invoice number</Form.Label>
              <Form.Control name="supplierInvoice"
                onChange={handleChange}
                type="number"
                placeholder="Supplier invoice number"
              />

              <br />
              <Form.Label>Invoice date</Form.Label>
              <Form.Control name="invoiceDate" onChange={handleChange} type="date" />
              <br />

              <Form.Label>Invoice due date</Form.Label>
              <Form.Control name="invoiceDue" onChange={handleChange} type="date" />
              <br />

              <Form.Label>Invoice amount</Form.Label>
              <Form.Control name="invoiceAmount" onChange={handleChange} type="number" />
              <br />

              <Form.Label>Advance amount</Form.Label>
              <Form.Control name="advanceAmount" onChange={handleChange} type="number" />
              <br />

              {/* <Form.Label>Amount available</Form.Label>
              <Form.Control name="" onChange={handleChange} type="number" placeholder="Amount available" />
              <br /> */}

              <Form.Label>Loan required</Form.Label>
              <Form.Control name="loanRequired" onChange={handleChange} type="number" />
              <br />
            </div>
          </Form>
        </Container>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="btn mt-3 ml-2" onClick={prevStep}>
          Previous
        </button>
        <button className="btn mt-3 ml-3 mr-2" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
}

export default InvoiceDetails;
