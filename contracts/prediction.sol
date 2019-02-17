pragma solidity >=0.4.22 <0.6.0;

contract PredictionFactory{
    address[] public predictions;
    
    function createPrediction(int millionth, uint setRate) public{
        address currentAddress = address(new Prediction(millionth, msg.sender, setRate));
        predictions.push(currentAddress);
    }
    
    function getDeployedPredictions() public view returns(address[] memory) {
        return predictions;
    }
}

contract Prediction {
    address public researcherAddress;
    uint public rate;
    int private prediction;
    address[] public investors;
    
    constructor (int millionth, address researcher, uint setRate) public {
        researcherAddress = researcher;
        prediction = millionth;
        rate = setRate;
    }
    function buyPrediction(address investorAddress) public payable{
        require(msg.value >= rate);
        investors.push(investorAddress);
    }
    function getPrediction(address requester) public view returns (int) {
        require(isInvestor(requester));
        return prediction;
    }
    function isInvestor(address candidate) private view returns (bool) {
        for (uint i = 0; i< investors.length; i++) {
            if (investors[i] == candidate) return true;
        }
        return false;
    }
    
}
