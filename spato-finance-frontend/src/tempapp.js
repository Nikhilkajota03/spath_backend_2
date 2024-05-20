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
import Login from "./Screens/Login";
import Signin from "./Screens/Signin";
import LogoAnimate from "./Screens/LogoAnimate";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
// import { db, auth, storage } from "./Firebase";

const { chains, provider } = configureChains(
  [mainnet, polygon, goerli, optimism],
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

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    if (
      window.sessionStorage.getItem("user") ||
      window.localStorage.getItem("user")
    ) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [isLoggedIn]);

  let route;

  if (login) {
    route = (
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={midnightTheme()} coolMode>
          <BrowserRouter>
            <Switch>
              <main>
                <Route exact path="/">
                  <LogoAnimate isLoggedIn={isLoggedIn} />
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
  } else {
    route = (
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={midnightTheme()} coolMode>
          <BrowserRouter>
            <Switch>
              <main>
                <Route exact path="/signup">
                  <Signin />
                  <Footer />
                </Route>

                <Route path="/">
                  <Login setIsLoggedIn={setIsLoggedIn} />

                  <Footer />
                </Route>
              </main>
            </Switch>
          </BrowserRouter>
        </RainbowKitProvider>
      </WagmiConfig>
    );
  }
  return route;
};

export default App;
