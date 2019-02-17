import Web3 from "web3";

let web3;

if(typeof window !== "undefined" && typeof window.web3 !== "undefined"){
    // in the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else{
    // we are on the server or metamask is not running
    // use infura as provider
    // const infura = "https://rinkeby.infura.io/IM8GjYmXlQZCY3LMWaqm";
    // const provider = new Web3.providers.HttpProvider(infura);
    // web3 = new Web3(provider);
    console.error("No web3 provider found, fall back to Ganache");
    alert("No web3 provider found");
    web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
}

export default web3;