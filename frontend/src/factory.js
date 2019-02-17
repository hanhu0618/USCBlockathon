import web3 from "./web3";
import PredictionFactory from "./build/contracts/PredictionFactory";

console.log(PredictionFactory);
const instance = new web3.eth.Contract(
    [PredictionFactory],
    "0x114E68F808f2327eF226d1B0f9878cd707C6736D"
);
console.log('predfactory');

export default instance;