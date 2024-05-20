import React, { useState, useEffect } from "react";
import {  Form, Container } from "react-bootstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Axios from "axios";
import baseUrl from "../baseUrl";
const V_Approvedinvoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [first, setfirst] = useState(1);

  //Fetching invoices from database
  useEffect(() => {
    Axios.get("http://localhost:3001/api/borrower/get-verified-loans")
      .then((res) => {
        console.log(res);
        setInvoices(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Could not fetch invoices! Try again");
      });
  }, [first]);
  return (
    <div className="page">
      <Container>
        <Form>
          <br />
          <div>
            <div style={{ textAlign: "center" }}>
              <h3>List of all approved invoices</h3>
            </div>
          </div>
        </Form>
      </Container>
      <Container>
        {invoices.length > 0 ? (
          <Table className="mt-4">
            <Thead>
              <Tr>
                <Th>Invoice no.</Th>

                <Th>Company Name</Th>
                <Th>Loan amount</Th>
              </Tr>
            </Thead>

            <Tbody>
              {invoices.map((invoice, index) => {
                return (
                  <Tr className="mb-4  border border-white rounded mb-md-7">
                    <Td className="p-2">{index + 1}</Td>
                    <Td className="p-2">{invoice.companyName}</Td>
                    <Td className="p-2">{invoice.loanRequired}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        ) : (
          <p className="text-white content">No approved invoices</p>
        )}
      </Container>
    </div>
  );
};

export default V_Approvedinvoices;
