import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./B_CSS.css";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import Axios from "axios";
import baseUrl from "../baseUrl";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../../config";
import Web3 from "web3";
import { ethers } from "ethers";
import LendingPoolAbi from "../../abis/LendingPool.json";
import BigNumber from "bignumber.js";
import TokenPoolAbi from "../../abis/DummyERC20.json"


const B_Invoices = () => {
  const [loans, setLoans] = useState([]);
  const [contractInstance, setContractInstance] = useState();

  let web3;
  useEffect(() => {
    //Getting the applied loans from database
    Axios.get(
      `${baseUrl}/api/borrower/get-loan?user=${window.localStorage.user}`
    )
      .then((response) => setLoans(response.data))
      .catch((err) => console.log(err));
    //Function to connect to the  contract

    console.log(loans);
  }, []);

  const handleRepayment = async (payamount, companyName, loanid, walletAdd) => {
    // console.log(amount, companyName, loanid, walletAdd);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider);
    const signer = provider.getSigner();
    console.log(signer);

    let lendingContract = new ethers.Contract(
      "0x002aE848370a28472a547f80B107FEa4Af976B4D",
      LendingPoolAbi.abi,
      signer
    );

    let tokenContract = new ethers.Contract(
      "0x873896D00fc667E4E1A6145c4F7C9CA7809A2aC0",
      TokenPoolAbi.abi,
      signer
    );

    const amount = new BigNumber("1000000000000000");
    const divisor = new BigNumber(10).pow(18);

    console.log("Amount:", amount.toString());
    console.log("Divisor:", divisor.toString());

    const balanceWei = amount.times(divisor);
    console.log("Balance {}in Wei of repayment:", balanceWei.toString());

    // Convert amount to a string before passing it to approve function
    const amountString = amount.toString();

    let txnApproval;
    try {
      txnApproval = await tokenContract.approve(
        "0x002aE848370a28472a547f80B107FEa4Af976B4D",
        amountString
      );
      console.log("Transaction approved");
    } catch (error) {
      console.error("Error during approval:", error);
    }

    const Tokenamount = new BigNumber(payamount);
    console.log("Lend Amount:", payamount);

    const divisorr = new BigNumber(10).pow(18); // Divisor for conversion to Wei

    console.log("Divisor:", divisorr.toString());

    const balanceWeiToken = Tokenamount.times(divisorr);
    console.log("Balance in Wei:", balanceWeiToken.toString());

    const amountStringToken = balanceWeiToken.toString();

    let txn = await lendingContract.payLone(
      walletAdd,
      amountStringToken,
      companyName,
      loanid
    );
  };

  return (
    <div>
      <Container className="bmint page">
        <br />

        <div>
          <div style={{ textAlign: "center" }}>
            <h1>List of all active loans</h1>
          </div>
        </div>

        {loans.length !== 0 ? (
          <Table striped className="mt-5">
            <Thead>
              <Tr>
                <th>Sl N.o</th>
                <th>The Invoice</th>
                <th>Amount</th>
                <th>Repayment date</th>
                <th>Repay</th>
              </Tr>
            </Thead>
            <tbody>
              {loans.map((loan, index) => {
                return (
                  <Tr
                    className="mb-4  border border-white rounded mb-md-7 "
                    key={index}
                  >
                    <Td className="p-2">{index + 1}</Td>
                    <Td className="p-2">{loan.companyName}</Td>
                    <Td className="p-2">{loan.invoiceAmount}</Td>
                    <Td className="p-2">{loan.invoiceDue}</Td>
                    <Td className="p-2">
                      <Button
                        variant="primary"
                        className="applyButton"
                        onClick={() =>
                          handleRepayment(
                            loan.invoiceAmount,
                            loan.companyName,
                            loan._id,
                            loan.walletAdd
                          )
                        }
                      >
                        Repay
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <p className="content">You have not applied for any loans</p>
        )}
      </Container>
    </div>
  );
};
export default B_Invoices;
