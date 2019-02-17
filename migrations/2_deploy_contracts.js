const PredictionFactory = artifacts.require("./contracts/PredictionFactory")

module.exports = function(deployer) {
	deployer.deploy(PredictionFactory);
};