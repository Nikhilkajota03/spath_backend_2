import React, { useState, useEffect } from "react";
import { Button, Form, Card, Container } from "react-bootstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./B_CSS.css";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import Axios from "axios";
import baseUrl from "../baseUrl";
import connectFunctions from "../ConnectWallet";

const B_Mint = () => {
  const [invoiceList, setInvoiceList] = useState([]);
  const [applied, setApplied] = useState(false);
  const [submitting, setSubmitting] = useState(false);





  useEffect(() => {


    Axios.get(
      `${baseUrl}/api/borrower/user-invoices?user=${window.localStorage.getItem("user")}`
    )
      .then((res) => {
        console.log(res);
        setInvoiceList(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Could not fetch invoice list! Try again");
      });



  }, [applied]);











  const handleApply = (invoiceId) => {
    setSubmitting(true);

    console.log("handle clicked")

    Axios.post(`${baseUrl}/api/borrower/loan`, { id: invoiceId })
      .then(() => {
        console.log("Applied");
        alert("Applied for loan");
      })
      .catch((err) => console.log(err));
  };


  connectFunctions.maintainWallet();




  return (
    <div className="page">
      <Container>
        <Form>
          <br />
          <div>
            <div style={{ textAlign: "center" }}>
              <h1>List of all invoices</h1>
            </div>
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <br />

            {/* <ConnectButton /> */}
            <Button
              id="connectButton"
              onClick={() => connectFunctions.connectWallet()}
            >
              Connect wallet
            </Button>
          </div>
          <div id="walletAmount" className="text-white">
            <br />

            <br />

            <br />
          </div>
          <br />
        </Form>
      </Container>
      <Container className="goBack">
        <Table className="mt-0 mt-md-5">
          <Thead className="mb-4 mb-md-7 p-2">
            <Tr>
              <Th>Sl N.o</Th>

              <Th>Date of invoice</Th>
              <Th>Name</Th>
              <Th>Supplier info</Th>
              <Th>Amount</Th>
              <Th>Due date</Th>
              <Th>Apply</Th>
            </Tr>
          </Thead>
          <Tbody>
            {invoiceList.length !== 0 ? (
              invoiceList.map((invoice, index) => {
                return (
                  <>
                    <Tr className="mb-4  border border-white rounded mb-md-7 ">
                      <Td className="p-2">{index + 1}</Td>
                      <Td className="p-2">{invoice.invoiceDate}</Td>
                      <Td className="p-2">{invoice.companyName}</Td>
                      <Td className="p-2">{invoice.supplierInvoice}</Td>
                      <Td className="p-2">{invoice.invoiceAmount}</Td>
                      <Td className="p-2">{invoice.invoiceDue}</Td>
                      <Td className="p-2">
                        {invoice.loanApplied ? (
                          <p className="text-white">Loan Applied</p>
                        ) : (
                          <Button
                            className="applyButton"
                            variant="success"
                            onClick={() => {
                              console.log("loan applied")
                              handleApply(invoice._id);
                            }}
                          >
                            Apply
                          </Button>
                        )}
                      </Td>
                    </Tr>
                  </>
                );
              })
            ) : (
              <div>No data</div>
            )}
          </Tbody>
        </Table>
      </Container>


    <button  onClick={()=> console.log("dddddddddd")}>jjjjjj</button>

    </div>
  );
};

export default B_Mint;
