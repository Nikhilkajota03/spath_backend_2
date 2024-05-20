import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Axios from "axios";
import baseUrl from "../baseUrl";
import connectFunctions from "../ConnectWallet";
import { ethers } from "ethers";
import LendingPoolAbi from "../../abis/LendingPool.json";
import  BigNumber from 'bignumber.js';


const V_Uploadedinvoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [first, setfirst] = useState(1);
  const [account, setAccount] = useState("");

  //Fetching invoices from database
  useEffect(() => {
    Axios.get("http://localhost:3001/api/borrower/get-all-loans")
      .then((res) => {
        console.log(res);
        setInvoices(res.data);
        console.log(
          "----------------------------->>>>>>>>>>>>>",
          LendingPoolAbi.abi
        );
      })
      .catch((err) => {
        console.log(err);
        alert("Could not fetch invoices! Try again");
      });
  }, [first]);

  //------------------Handle approval and rejection----------------------------------

  const walletadd = async () => {
    console.log(
      "....................",
      await connectFunctions.maintainWallet()
    );

    const ADD = await connectFunctions.maintainWallet();

    setAccount(ADD);
  };

  walletadd();

  const users = [
    "20ume030@lnmiit.ac.in",
    "nikhilkajota9413750125@gmail.com",
    "nikhil941kajota@gmail.com",
  ];

  const handleApproval = async (invoiceId, username, amount, walletAdd) => {
    console.log("CALLED");

    const useremail = await window.localStorage.getItem("user");

    const verify = users.includes(useremail);

    // console.log(   "-=========------------------" ,    invoiceId, username , amount , walletAdd);

    console.log("+++++++++>>>>  wallet address", walletAdd);

    if (!verify) {
      console.log("not a validator");
      return;
    } else {
      // let provider = new ethers.providers.JsonRpcProvider("https://arb-sepolia.g.alchemy.com/v2/qnH7rbYiDPrkyuDsNTzklnNjcF-6HcgJ");
      // await provider.send('eth_requestAccounts', []);
      // console.log("verified",walletAdd)
      // let LendingContract = new ethers.Contract("0x54e8fcc8209E7DA4FE2f9d556e6E46f1F5c34402", LendingPoolAbi.abi, provider );
      // let walletSigner = await provider.getSigner()

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log(provider);
      const signer = provider.getSigner();
      console.log(signer);

      let lendingContract = new ethers.Contract(
        "0x002aE848370a28472a547f80B107FEa4Af976B4D",
        LendingPoolAbi.abi,
        signer
      );

      const Tokenamount = new BigNumber(amount);
      console.log("Lend Amount:", amount);

      const divisorr = new BigNumber(10).pow(18); // Divisor for conversion to Wei

      console.log("Divisor:", divisorr.toString());

      const balanceWeiToken = Tokenamount.times(divisorr);
      console.log("Balance in Wei:", balanceWeiToken.toString());

      const amountStringToken = balanceWeiToken.toString();

      let params = {
        _borrower: walletAdd,
        _amount: amountStringToken,
        _userId: username,
        _invoiceId: invoiceId,
      };

      console.log(params);

      let txn = await lendingContract.borrow(
        params._borrower,
        params._amount,
        params._userId,
        params._invoiceId
      );
      await txn.wait();
      console.log("Borrowing Transaction Hash", txn.hash);

      let obj = {
        invoiceId: invoiceId,
        docType: "invoiceVerified",
        status: true,
      };

      Axios.post("http://localhost:3001/api/borrower/verify-loan", obj)
        .then(() => alert("Approved!"))
        .catch((err) => alert("Approval unsuccessful. Try again"));
    }
  };

  // console.log(""connectFunctions)

  const handleRejection = (invoiceId) => {
    console.log("Rejecting");
    let obj = {
      invoiceId: invoiceId,
      docType: "invoiceVerified",
      status: false,
    };
    Axios.post("http://localhost:3001/api/borrower/verify-loan", obj)
      .then(() => alert("Document rejected"))
      .catch((err) => alert("Rejection cancelled. Try again"));
  };

  connectFunctions.maintainWallet();

  const wallet = async () => {
    console.log(await connectFunctions.connectWallet());
    console.log(await connectFunctions.maintainWallet());
  };

  wallet();

  // --------------------------------------------------------------------------------

  return (
    <div className="page">
      <Container>
        <br />
        <div>
          <div style={{ textAlign: "center" }}>
            <h3>List of all uploaded invoices</h3>
          </div>
        </div>
        <div className="my-2">
          {/* <ConnectButton /> */}

          <button
            id="connectButton"
            onClick={() => connectFunctions.connectWallet()}
          >
            Connect wallet
          </button>
        </div>
        <div id="walletAmount" className="text-white"></div>

        {invoices.length > 0 ? (
          <Table className="mt-4 mt-md-4">
            <Thead>
              <Tr>
                <Th>Sl N.o</Th>
                <Th>Invoices</Th>
                <Th>Approve</Th>
                <Th>Reject</Th>
              </Tr>
            </Thead>
            <Tbody>
              {invoices.map((invoice, index) => {
                return (
                  <Tr className="mb-4  border border-white rounded mb-md-7">
                    <Td className="p-2">{index + 1}</Td>
                    <Td className="p-2">{invoice.companyName}</Td>

                    <Td className="p-2">
                      <Button
                        variant="primary"
                        className="approveButton"
                        onClick={() => {
                          console.log("loan verify");
                          handleApproval(
                            invoice._id,
                            invoice.username,
                            invoice.invoiceAmount,
                            invoice.walletAdd
                          );
                        }}
                      >
                        Approve
                      </Button>
                    </Td>
                    <Td className="p-2">
                      <Button
                        className="reject"
                        onClick={() => {
                          handleRejection(invoice._id);
                        }}
                      >
                        Reject
                      </Button>
                    </Td>
                  </Tr>
                );
              })}{" "}
            </Tbody>
          </Table>
        ) : (
          <p className="content text-white">No unverified invoices</p>
        )}
      </Container>
    </div>
  );
};

export default V_Uploadedinvoices;
