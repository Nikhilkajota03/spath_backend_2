import React, { useState, useEffect } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import connectFunctions from "../ConnectWallet";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../../config";
import Web3 from "web3";
import "./L_CSS.css";
import LendingPoolAbi from "../../abis/LendingPool.json";
import TokenPoolAbi from "../../abis/DummyERC20.json"
import {ethers} from "ethers"
import  BigNumber from 'bignumber.js';
// import math from "mathjs"

// import { ConnectButton } from "@rainbow-me/rainbowkit";

const Lend = () => {
  const [contractInstance, setContractInstance] = useState();
  const [lendAmount, setLendAmount] = useState(0);
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);
  const [tokenamount , setTokenAmount] = useState(0)
  const [hexbal , setHexbal]  = useState();
  const[amountLocked , setAmountlocked] = useState(0)

  const[realToken , setRealtoken] = useState(0)
  //Function to connect to the  contract
  let web3;

  
  const getbalance = async () => {
    console.log("getbalance");

    // Ensure web3 and Ethereum are properly initialized
    const web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const accounts = await web3.eth.getAccounts();
    const walletAddress = accounts[0];
    console.log("Wallet Address:", walletAddress);

    // Set up ethers with the signer
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    // Set up token contract and read balance
    const tokenContract = new ethers.Contract("0x873896D00fc667E4E1A6145c4F7C9CA7809A2aC0", TokenPoolAbi.abi, signer);

    const balance = await tokenContract.balanceOf(walletAddress);

    const ttbalance = parseInt(balance._hex);

    setHexbal(parseInt(balance._hex.toString()))


     console.log("bbbbb" , parseInt(balance._hex.toString()) )

    const balanceBN = parseInt(balance._hex);
    console.log(balanceBN);
    let div = Math.pow(10,18)
    let res = balanceBN/div;
    console.log(res)

    setTokenAmount(res);  
};

useEffect(() => {
    getbalance();
}, []);

 


  useEffect(() => {
    const loadContract = async () => {
      // Connect to Ethereum network
      web3 = new Web3(window.ethereum || "http://localhost:8545");
      let chainId = await web3.eth.getChainId();
      console.log(chainId);
      console.log(typeof chainId);
      // Load the contract ABI
      const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

      // Set the contract instance
      setContractInstance(contract);
    };

    loadContract();
  }, []);




  const handleLend = async () => {
    // console.log(contractInstance);
    let lend = parseInt(lendAmount);


    const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log(provider) ;
      const signer = provider.getSigner();
      console.log(signer) ;
       


      let lendingContract = new ethers.Contract("0x002aE848370a28472a547f80B107FEa4Af976B4D", LendingPoolAbi.abi, signer);

      let tokenContract =  new ethers.Contract("0x873896D00fc667E4E1A6145c4F7C9CA7809A2aC0", TokenPoolAbi.abi, signer);
      

      console.log("transaction to approve ---+++++")

      

    


    const amount = new BigNumber("1000000000000000");
const divisor = new BigNumber(10).pow(18);

console.log("Amount:", amount.toString());
console.log("Divisor:", divisor.toString());

const balanceWei = amount.times(divisor);
console.log("Balance in Wei:", balanceWei.toString());

// Convert amount to a string before passing it to approve function
const amountString = amount.toString();

let txnApproval;
try {
    txnApproval = await tokenContract.approve("0x002aE848370a28472a547f80B107FEa4Af976B4D", amountString);
    console.log("Transaction approved");
   
} catch (error) {
    console.error("Error during approval:", error);
}

console.log("contract approved")




const Tokenamount = new BigNumber(lendAmount);
console.log("Lend Amount:", lendAmount);

const divisorr = new BigNumber(10).pow(18); // Divisor for conversion to Wei

console.log("Divisor:", divisorr.toString());

const balanceWeiToken = Tokenamount.times(divisorr);
console.log("Balance in Wei:", balanceWeiToken.toString());

const amountStringToken = balanceWeiToken.toString();

try {
  console.log("Lending started...");
  let txnLend = await lendingContract.deposit(amountStringToken);
  console.log("Amount deposited successfully");
} catch (error) {
  console.error("Error during lending:", error);
}


      





    console.log(lend);   //amount

    // try {
    //   web3 = new Web3(window.ethereum);
    //   await window.ethereum.send("eth_requestAccounts");
    //   var accounts = await web3.eth.getAccounts();
    //   var walletAddress = accounts[0];


    //   console.log(walletAddress)




    //   await contractInstance.methods
    //     .deposit(lend)
    //     .send({ from: walletAddress });
    //   alert("Deposit successful");
    // } catch (err) {
    //   console.error(err);
    // }
  };



  const handleWithdraw = async () => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log(provider) ;
      const signer = provider.getSigner();
      console.log(signer) ;
       
      let lendingContract = new ethers.Contract("0x002aE848370a28472a547f80B107FEa4Af976B4D", LendingPoolAbi.abi, signer);

      console.log(lendingContract)

     
const Tokenamount = new BigNumber(withdrawalAmount);
console.log("Lend Amount:", withdrawalAmount);

const divisorr = new BigNumber(10).pow(18); // Divisor for conversion to Wei

console.log("Divisor:", divisorr.toString());

const balanceWeiToken = Tokenamount.times(divisorr);
console.log("Balance in Wei:", balanceWeiToken.toString());

const amountStringToken = balanceWeiToken.toString();

console.log("withdraw started----->");

let txnWithdraw = await lendingContract.withdrawFunds(amountStringToken);

console.log("withdraw done----->")
console.log(txnWithdraw.hash);


  };


  useEffect(()=>{

    const fun = async ()=> {

      var web3 = new Web3(window.ethereum);
      await window.ethereum.send("eth_requestAccounts");
      var accounts = await web3.eth.getAccounts();
      var account = accounts[0];

      console.log("useEffect  --------- account" , account)
 
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider) ;
    const signer = provider.getSigner();
    console.log(signer) ;
     
    let lendingContract = new ethers.Contract("0x002aE848370a28472a547f80B107FEa4Af976B4D", LendingPoolAbi.abi, signer);

   console.log(account);
   console.log("started getting funds");

    let amount = await lendingContract.getfunds(account);

    const ttbalance = parseInt(amount._hex);

  

     console.log("bbbbb" , parseInt(amount._hex.toString()) )

    const balanceBN = parseInt(amount._hex);
    console.log(balanceBN);
    let div = Math.pow(10,18)
    let res = balanceBN/div;
    console.log(res)


     
    setAmountlocked(res);

    console.log("amount stacked::::::" , res);

    }

    fun();

  },[])



  connectFunctions.maintainWallet();
  return (
    <div className="page">

      
      <Container>
        <br />
        <div>
          <div style={{ textAlign: "center" }}>
            <h1> Wallet </h1>
          </div>
        </div>
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

                <button> Token amount    :   {tokenamount}  </button>

              </div>
              <div id="walletAmount" className="text-white">
                 
                 
                  {tokenamount}

              </div>

              <br />
              <br />
              <br />
              <br />
              <Form.Label>
                <h4>Enter amount willing to lend: </h4>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Amount"
                onChange={(e) => setLendAmount(parseInt(e.target.value))}
              />
              <br />
              <Button
                variant="primary"
                // type="submit"
                onClick={() => handleLend()}
              >
                Lend
              </Button>
              <br />

              <br />
              <p style={{ color: "white" }}>
                Your amount will be locked for a period of 30 days once lent.
              </p>
              <br />
              <hr />
              <br />

              <br />

              <Form.Label>
                <h4>Amount locked: </h4>
              </Form.Label>
              <Card>
                <Card.Body>{amountLocked}</Card.Body>
              </Card>
              <br />
              <br />
              <hr />

              <br />

              <br />
              <Form.Label>
                <h4>Enter withdrawal amount: </h4>
              </Form.Label>
              <br />
              <Form.Control
                type="number"
                placeholder="Amount"
                onChange={(e) => setWithdrawalAmount(parseInt(e.target.value))}
              />
              <br />
              <Button
                variant="primary"
                // type="submit"
                className="btn p-6"
                onClick={() => handleWithdraw()}
              >
                Withdraw
              </Button>
              <br />

              <br />
              <p style={{ color: "gray" }}>
                The rate of interest for your amount deposited is 14% which can
                be withdrawn only after the 30 days locking period.
              </p>
              <br />
            </Form>
          </div>
        </div>
      </Container>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Lend;
