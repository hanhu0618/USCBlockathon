import web3 from "./web3";
import PredictionFactory from "./build/contracts/PredictionFactory";

console.log(PredictionFactory);
const instance = new web3.eth.Contract(
    [PredictionFactory],
    "0x9dBF51513356A0eA304D28c163eb69573D0bcB00"
);
console.log('predfactory');

export default instance;