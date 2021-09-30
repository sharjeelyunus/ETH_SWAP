const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

module.exports = async function (deployer) {
    // Deploy Token
    await deployer.deploy(Token);
    const token = await Token.deployed()

    // Deploy EthSwap
    await deployer.deploy(EthSwap);
    const ethswap = await EthSwap.deployed()

    // Transfer all tokens to EthSwap (1 million)
    await token.transfer(ethswap.address, '1000000000000000000000000')
};
