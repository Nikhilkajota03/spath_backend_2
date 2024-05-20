import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./Validator.css";
import Axios from "axios";
import baseUrl from "../baseUrl";
import connectFunctions from "../ConnectWallet";
const V_Uploadedarpas = () => {
  const [arpas, setarpas] = useState([]);
  const [first, setfirst] = useState(1);

  //Fetching arpas from database
  useEffect(() => {
    Axios.get(`${baseUrl}/arpa`)
      .then((res) => {
        console.log(res);
        setarpas(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Could not fetch arpa documents! Try again");
      });
  }, [first]);



  const handleApproval = (invoiceId) => {
    console.log("Approving");
    let obj = {
      invoiceId: invoiceId,
      docType: "arpaVerified",
      status: true,
    };
    Axios.post(`${baseUrl}/verify`, obj)
      .then((res) => {
        setfirst(0);
        alert("Approval" + res.data.msg);
      })
      .catch((err) => alert("Approval unsuccessful. Try again"));
  };



  const handleRejection = (invoiceId) => {
    console.log("Rejecting");
    let obj = {
      invoiceId: invoiceId,
      docType: "arpaVerified",
      status: false,
    };
    Axios.post(`${baseUrl}/verify`, obj)
      .then(() => {
        setfirst(1);
        alert("Document rejected");
      })
      .catch((err) => alert("Rejection cancelled. Try again"));
  };
  
  connectFunctions.maintainWallet();
  // --------------------------------------------------------------------------------
  return (
    <div className="page">
      <Container>
        <br />
        <div>
          <div style={{ textAlign: "center" }}>
            <h3>List of all uploaded ARPA's</h3>
          </div>
        </div>
        <div>
          {/* <ConnectButton /> */}
          <button
            id="connectButton"
            className="mt-4"
            onClick={() => connectFunctions.connectWallet()}
          >
            Connect wallet
          </button>
        </div>
        <div id="walletAmount" className="text-white"></div>

        {arpas.length > 0 ? (
          <Table className="mt-4 mt-md-4">
            <Thead>
              <Tr>
                <Th>Sl No.</Th>
                <Th>ARPA's</Th>
                <Th>Approve</Th>
                <Th>Reject</Th>
              </Tr>
            </Thead>
            <Tbody>
              {arpas.map((arpa, index) => {
                return (
                  <Tr className="mb-4  border border-white rounded mb-md-7">
                    <Td className="p-2">{index + 1}</Td>
                    <Td className="p-2">{arpa.companyName}</Td>

                    <Td className="p-2">
                      <Button
                        variant="primary"
                        className="approveButton"
                        onClick={() => {
                          handleApproval(arpa._id);
                        }}
                      >
                        Approve
                      </Button>
                    </Td>
                    <Td className="p-2">
                      <Button
                        className="reject"
                        onClick={() => {
                          handleRejection(arpa._id);
                        }}
                      >
                        Reject
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        ) : (
          <p className="content text-white">No unverified invoices</p>
        )}
      </Container>
    </div>
  );
};

export default V_Uploadedarpas;
