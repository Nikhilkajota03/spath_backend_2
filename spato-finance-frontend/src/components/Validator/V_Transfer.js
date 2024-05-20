import React, { useEffect, useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./Validator.css";
import Axios from "axios";
import baseUrl from "../baseUrl";
import connectFunctions from "../ConnectWallet";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../../config";
import Web3 from "web3";
const V_Transfer = () => {
  const [borrowers, setBorrowers] = useState([]);
  const [first, setfirst] = useState(1);
  const [selectedBorrower, setSelected] = useState("Borrower not selected");
  const [transferAmount, setTransferAmount] = useState(0);

  //Fetching borrowers from database
  useEffect(() => {
    Axios.get(`${baseUrl}/borrower`)
      .then((res) => {
        setBorrowers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Could not fetch borrowers! Try again");
      });
  }, [first]);

  const handleSend = async () => {
    let transfer = (parseInt(transferAmount))
    console.log(typeof transfer);
    // Connect to Ethereum network
    try {
      const web3 = new Web3(window.ethereum || "http://localhost:8545");
      await window.ethereum.send("eth_requestAccounts");
      var accounts = await web3.eth.getAccounts();
      var walletAddress = accounts[0];

      // Load the contract ABI
      const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
      

      //Sending
      await contract.methods
        .borrow(selectedBorrower, transfer)
        .send({ from: walletAddress });
      alert("Amount sent");
    } catch (err) {
      console.log(err);
      alert("Sending failed");
    }
  };
  connectFunctions.maintainWallet();
  return (
    <div className="page">
      <Container>
        <Form>
          <br />
          <div>
            <div style={{ textAlign: "center" }}>
              <h3>Transfer Window</h3>
            </div>
          </div>
        </Form>
      </Container>
      <div>
        <Container>
          <br />

          <div className="CSS2">
            <div style={{ textAlign: "center" }}>
              <Form>
                <br />

                <div style={{ display: "flex", justifyContent: "center" }}>
                  {/* <ConnectButton /> */}
                  <button
                    id="connectButton"
                    onClick={() => connectFunctions.connectWallet()}
                  >
                    Connect wallet
                  </button>
                </div>
                <div id="walletAmount" className="text-white"></div>

                <br />
                <br />
                <br />
                <br />
                <Form.Label>
                  <h4>Select borrower/address: </h4>
                </Form.Label>
                <br />
                <div className="container-fluid">

                <div className="selectField row">
                  <Form.Select
                    aria-label="Default select example"
                    className="col-10 offset-1 col-md-4"
                    onChange={(e) => {
                      setSelected(e.target.value);
                    }}
                  >
                    <option value="None">Select</option>
                    {borrowers.length > 0 ? (
                      borrowers.map((borrower) => {
                        return (
                          <option value={borrower.walletAddress}>
                            {borrower.companyName}
                          </option>
                        );
                      })
                    ) : (
                      <option>Borrowers list empty</option>
                    )}
                  </Form.Select>
                  <div className="text-white semibold col-10 offset-0 col-md-6 offset-md-1 mt-3 mt-md-0">{selectedBorrower}</div>
                </div>
                </div>
                <br />

                <br />
                <br />

                <Form.Label>
                  <br />
                  <h4>Enter amount: </h4>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Amount"
                  onChange={(e) => {
                    setTransferAmount(e.target.value);
                  }}
                />
                <br />
                <Button
                  variant="primary"
                  onClick={() => {
                    handleSend();
                  }}
                >
                  Send
                </Button>

                <br />
                <br />
                <br />
              </Form>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default V_Transfer;
