import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { InfinitySpin } from "react-loader-spinner";
import "../Borrower/B_CSS.css";
import "../Lender/L_CSS.css";
import { useSelector, useDispatch } from 'react-redux'
import { Tokenfunction } from "../../redux/Token";
function Invoice({
  
  prevStep,
  onSubmit,
  handleFileChange,
  submitting,
  inputValues,
})
 {


  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()


  return (
    <>
      {submitting ? (
        <div className="content">
          <div color="rgba(255, 244, 169, 1)">
            <p>Do not refresh.Uploading your details...</p>
            <p>This will take a minute or two</p>
          </div>
          <InfinitySpin width="200" color="#4cb8c4" />
        </div>
      ) : (
        <div className="page invoiceForm p-5">
          <div>
            <Container>
              <Form>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Upload INVOICE</Form.Label>

                  <br />
                  <Form.Control
                    name="invoice"
                    onChange={handleFileChange}
                    type="file"
                  />
                </Form.Group>
                <br />

                <br />

                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Upload ARPA</Form.Label>

                  <br />
                  <h6
                    style={{
                      color: "white",
                      display: "table-cell",
                      marginTop: "0",
                    }}
                  >
                    {" "}
                    Click on the following for
                    <a
                      style={{
                        color: "gray",
                        display: "table-cell",
                        marginTop: "0",
                      }}
                      href="https://docs.google.com/document/d/1kKeD6iXrpmGLJN2YpUbxqofUJHy23Gol/edit?usp=sharing&ouid=102850055254910073504&rtpof=true&sd=true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      sample ARPA document
                    </a>
                  </h6>

                  <br />
                  <Form.Control
                    name="arpa"
                    onChange={handleFileChange}
                    type="file"
                  />
                </Form.Group>
                <br />

                <br />
              </Form>
            </Container>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button className="btn mt-3" onClick={prevStep}>
                Previous
              </button>
              <button className="btn mt-3 ml-3" onClick={onSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Invoice;
