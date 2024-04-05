"use client"
import React, { useState } from "react";
import { ethers } from "ethers";

const ConnectWalletButton = () => {
  const [connectedWallet, setConnectedWallet] = useState(null);

  const connectWallet = async () => {
    try {
      // Connect to MetaMask or other Ethereum-compatible wallet
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        var add = address.slice(0,5) + "..." + address.slice(-5);
        console.log(add);
        setConnectedWallet(add);
      } else {
        alert("Please install MetaMask to use this dApp.");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      alert("Error connecting wallet. Please try again.");
    }
  };

  return (
    <div>
      {connectedWallet ? (
        // <p>Connected wallet: {connectedWallet}</p>
        <button className="btn btn-outline btn-primary">{connectedWallet}</button>
        //console.log(connectedWallet)
      ) : (
        <button className="btn btn-outline btn-primary" onClick={connectWallet}>Connect Wallet</button>
        
      )}
    </div>
  );
};

export default ConnectWalletButton;
