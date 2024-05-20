
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";

import LHeader from "./components/Lender/L_Header";
import LInfo from "./components/Lender/L_Info";
import Lprofile from "./components/Lender/L_Profile";
import Lend from "./components/Lender/Lend";

import BHeader from "./components/Borrower/B_Header";
import BInfo from "./components/Borrower/B_Info";
import BProfile from "./components/Borrower/B_Profile";
import BInvoicedetailstmp from "./components/Borrower/B_Invoicedetailstmp";
import BMint from "./components/Borrower/B_Mint";
import BInvoices from "./components/Borrower/B_Invoices";

import VHeader from "./components/Validator/V_Header";
import VLprofiles from "./components/Validator/V_Lprofiles";
import VBprofiles from "./components/Validator/V_Bprofiles";
import VInvoicedetails from "./components/Validator/V_Invoicedetails";
import VUploadedinvoices from "./components/Validator/V_Uploadedinvoices";
import VUploadedarpas from "./components/Validator/V_Uploadedarpas";
import VWhitelist from "./components/Validator/V_Whitelist";
import VTransfer from "./components/Validator/V_Transfer";
import VApprovedinvoices from "./components/Validator/V_Approvedinvoices";
// import { UserContext } from "./components/UserContext";
// import { useSelector, useDispatch } from 'react-redux'

import LandingPage from "./Screens/LandingPage/LandingPage";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, goerli, polygon, optimism } from "wagmi/chains";

import { publicProvider } from "wagmi/providers/public";

import LogoAnimate from "./Screens/LogoAnimate";
import { ethers } from "ethers";
import Dummyabi from "./abis/DummyERC20.json"
import Lenderabi from "./abis/LendingPool.json"







const { chains, provider } = configureChains(
  [mainnet, polygon, goerli],
  [publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "Spathion",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});






const App1 = ({setIsLoggedIn}) => {


  const [Tokenstate, setTokenState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [Lenderstate, setLenderState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });




  const [account, setAccount] = useState("None");


  useEffect(() => {
    const connectWallet = async () => {
      const TokencontractAddress = "0x644C6B43794FC707742212215b8Ee12e938bAE45 ";
      const TokencontractABI = Dummyabi.abi;

      const LendercontractAddress = "0x111afeD788F82e02dBe09416a4987aF39cFEF983";
      const LendercontractABI = Lenderabi.abi;


      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();

          const Tokencontract = new ethers.Contract(
            TokencontractAddress,
            TokencontractABI,
            signer
          );

          const LenderContract = new ethers.Contract(
            LendercontractAddress,
            LendercontractABI,
            signer
          );



          console.log({"Token":Tokencontract});
          console.log({"Lender":LenderContract})

          setAccount(account);
          setTokenState({ provider, signer, Tokencontract });
          setLenderState({provider, signer, LenderContract})

        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
 
  

  // const dispatch = useDispatch();

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={midnightTheme()} coolMode>
        <BrowserRouter>
          <Switch>
            <main>
              <Route exact path="/">
                <LogoAnimate  />
              </Route>
              <Route exact path="/welcome">
                <LandingPage />

                <Footer />
              </Route>

              <Route exact path="/Borrower/info">
                <BHeader setIsLoggedIn={setIsLoggedIn} />
                <BInfo />
              </Route>
              <Route exact path="/Borrower/profile">
                <BHeader setIsLoggedIn={setIsLoggedIn} />
                <BProfile />
              </Route>
              <Route exact path="/Borrower/invoicedetails">
                <BHeader setIsLoggedIn={setIsLoggedIn} />
                <BInvoicedetailstmp />
              </Route>
              <Route exact path="/Borrower/mint">
                <BHeader setIsLoggedIn={setIsLoggedIn} />
                <BMint />
              </Route>
              <Route exact path="/Borrower/invoices">
                <BHeader setIsLoggedIn={setIsLoggedIn} />
                <BInvoices />
              </Route>
              <Route exact path="/Lender/info">
                <LHeader setIsLoggedIn={setIsLoggedIn} />
                <LInfo />
              </Route>
              <Route exact path="/Lender/profile">
                <LHeader setIsLoggedIn={setIsLoggedIn} />
                <Lprofile />
              </Route>
              <Route exact path="/Lender/lend">
                <LHeader setIsLoggedIn={setIsLoggedIn} />
                <Lend />
              </Route>
              <Route exact path="/Validator/Lprofiles">
                <VHeader setIsLoggedIn={setIsLoggedIn} />
                <VLprofiles />
              </Route>

              <Route exact path="/Validator/Bprofiles">
                <VHeader setIsLoggedIn={setIsLoggedIn} />
                <VBprofiles />
              </Route>

              <Route exact path="/Validator/invoicedetails">
                <VHeader setIsLoggedIn={setIsLoggedIn} />
                <VInvoicedetails />
              </Route>

              <Route exact path="/Validator/uploadedinvoices">
                <VHeader setIsLoggedIn={setIsLoggedIn} />
                <VUploadedinvoices />
              </Route>
              
              <Route exact path="/Validator/uploadedarpas">
                <VHeader setIsLoggedIn={setIsLoggedIn} />
                <VUploadedarpas />
              </Route>

              <Route exact path="/Validator/whitelist">
                <VHeader setIsLoggedIn={setIsLoggedIn} />
                <VWhitelist />
              </Route>

              <Route exact path="/Validator/transfer">
                <VHeader setIsLoggedIn={setIsLoggedIn} />
                <VTransfer />
              </Route>

              <Route exact path="/Validator/approved">
                <VHeader setIsLoggedIn={setIsLoggedIn} />
                <VApprovedinvoices />
              </Route>
            </main>
          </Switch>
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
 );
};

export default App1;

// token 
 //https://sepolia.arbiscan.io/address/0x873896D00fc667E4E1A6145c4F7C9CA7809A2aC0#writeContract

//lender 

// https://sepolia.arbiscan.io/address/0x002aE848370a28472a547f80B107FEa4Af976B4D#writeContract
