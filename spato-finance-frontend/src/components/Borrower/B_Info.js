import React from "react";
import {  Card, Container } from "react-bootstrap";
import "./B_CSS.css";
const B_Info = () => {
  return (
    <div>
      <br />
      <Container>
        <div className="CSS2">
          <Card  className="maincard">
            <Card.Header  className="chead">
              <div style={{ textAlign: "center" }}>
                <h3>Instructions for Borrowing Activity</h3>
              </div>
            </Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {" "}
                  <ol>
                    <li>All operations are in USDT tokens.</li>
                    <br />
                    <li>
                      This is a window for an user to Borrow amount (in USDT)
                      against their invoices.
                    </li>
                    <br />
                    <li>
                      There are particularly thre main sections in this window-
                      Profile, Invoice, Loan, Invoices.
                    </li>
                    <br />
                    <li>
                      The user first needs to fill in the Profile section
                      inorder to proceed towards next sections. The validator
                      will then verify the details. Until then the other
                      sections will be frozen for the user.
                    </li>
                    <br />
                    <li>
                      When the user proceeds towards invoice details, they need
                      to fill in the customer and the invoice details and
                      submit. After the verification the upload invoice button
                      opens, they can proceed towards uploading invoice (this
                      uploads the invoice to the IPFS). After the invoice is
                      verified the ARPA upload button opens. After the ARPA is
                      uploaded and verified the user can move to the next
                      Invoice-list button until then its frozen.
                    </li>
                    <br />
                    <li>
                      The invoice-list button has list of all invoices uploaded
                      and the loan can be applied by clicking on 'apply',
                      further the 'Loans' button exists where all the loans
                      applied exists and can be repayed there. The repayment
                      interest is 18%.
                    </li>
                    <br />
                  </ol>{" "}
                </p>
              </blockquote>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default B_Info;
