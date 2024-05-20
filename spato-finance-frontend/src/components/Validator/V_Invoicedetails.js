import React from "react";
import { Table, Button, Container } from "react-bootstrap";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./Validator.css";
import connectFunctions from "../ConnectWallet";

const V_Invoicedetails = () => {
  connectFunctions.maintainWallet();
  return (
    <div className="page">
      <Container>
        <br />
        <div>
          <div style={{ textAlign: "center" }}>
            <h1>Details of all invoices</h1>
          </div>
        </div>
        <div className="my-5">
          {/* <ConnectButton /> */}
          <button
            id="connectButton"
            onClick={() => connectFunctions.connectWallet()}
          >
            Connect wallet
          </button>
        </div>
        <div id="walletAmount" className="text-white"></div>
        <Table striped bordered hover className="bmint">
          <thead>
            <tr>
              <th>Sl N.o</th>
              <th>Details</th>
              <th>Approve</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>-</td>

              <td>
                <Button variant="primary">Approve</Button>
              </td>
              <td>
                <Button className="reject">Reject</Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>-</td>

              <td>
                <Button variant="primary">Approve</Button>
              </td>
              <td>
                <Button variant="danger">Reject</Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>-</td>

              <td>
                <Button variant="primary">Approve</Button>
              </td>
              <td>
                <Button variant="danger">Reject</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default V_Invoicedetails;
