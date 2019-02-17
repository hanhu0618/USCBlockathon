import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import Web3 from 'web3';

var web3Provider = null;
var predContract;
const nullAddress = "0x0000000000000000000000000000000000000000";

function init() {
    console.log("init")
    initWeb3();
}

function initWeb3() {
    // Modern dapp browsers...
    if (window.ethereum) {
        web3Provider = window.ethereum;
        try {
            // Request account access
            await window.ethereum.enable();
        } catch (error) {
            // User denied account access...
            console.error("User denied account access")
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        web3Provider = window.web3.currentProvider;
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
        console.error("No web3 provider found, fall back to Ganache");
        alert("No web3 provider found");
        web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }

    web3 = new Web3(web3Provider);
}

// Initialize contract
function initPredFactoryContract() {
    console.log("initialize contract");
    $.getJSON('prediction.json', function(data) {
        // Get the necessary contract artifact file and instantiate it with truffle-contract
        predContract = TruffleContract(data);

        // Set the provider for our contract
        predContract.setProvider(web3Provider);

        // listen to the events emitted by our smart contract
        getEvents();

        console.log(predContract);
    });
}

// Get all logged events
function getEvents() {
    predContract.deployed().then(function(instance) {
        var events = instance.allEvents(function(error, log){
        if (!error)
            $("#eventsList").prepend('<li>' + log.event + '</li>'); // Using JQuery, we will add new events to a list in our index.html
        });
        }).catch(function(err) {
            console.log(err.message);
    });
}

ReactDOM.render(
  <Router/>,
  document.getElementById('root')
);
