import Web3 from "web3";

const connectFunctions = {
  connectWallet: async () => {
    try {
      if (window.ethereum) {
        var web3 = new Web3(window.ethereum);
        await window.ethereum.send("eth_requestAccounts");
        var accounts = await web3.eth.getAccounts();
        var account = accounts[0];

        // console.log("Wallet address: " + account);

        document.getElementById(
          "connectButton"
        ).textContent = `Connected to ${account}`;

        //getting balance
        window.ethereum
          .request({
            method: "eth_getBalance",
            params: [account, "latest"],
          })
          .then((balance) => {
            //Formatting the balance for display. Originally balance is returned in wei units.
            const etherValue = Web3.utils.fromWei(balance, "ether");
            document.getElementById(
              "walletAmount"
            ).textContent = `Balance: ${etherValue} BNB`;
          });

          

      } else {
        alert("Install Metamask extension!");
      }
    } catch (err) {
      console.log(err);
    }
  },
  maintainWallet: async () => {
    try {
      if (window.ethereum !== undefined) {
        var web3 = new Web3(window.ethereum);
        await window.ethereum.send("eth_requestAccounts");
        var accounts = await web3.eth.getAccounts();
        console.log("==============================",accounts[0])
        var account = accounts[0];

        // console.log("Wallet address: " + account);

        document.getElementById(
          "connectButton"
        ).textContent = `Connected to ${account}`;

        //getting balance
        window.ethereum
          .request({
            method: "eth_getBalance",
            params: [account, "latest"],
          })
          .then((balance) => {
            //Formatting the balance for display. Originally balance is returned in wei units.
            const etherValue = Web3.utils.fromWei(balance, "ether");
            document.getElementById(
              "walletAmount"
            ).textContent = `Balance: ${etherValue} BNB`;
          });

          return account;
      }
    } catch (err) {
      console.log(err);
    }
  },
};

export default connectFunctions;
