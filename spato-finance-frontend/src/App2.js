import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";

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

const App2 = ({ setIsLoggedIn }) => {
  return (
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
};

export default App2;
