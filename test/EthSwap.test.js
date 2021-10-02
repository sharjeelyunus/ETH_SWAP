const Token = artifacts.require("Token");
const EthSwap = artifacts.require("EthSwap");

require('chai')
    .use(require('chai-as-promised'))
    .should()

function tokens(n) {
    return web3.utils.toWei(n, 'ether')
}

contract('EthSwap', (accounts) => {

    let token, ethSwap

    before(async () => {
        token = await Token.new()
        ethSwap = await EthSwap.new()
        // Transfer all tokens to EthSwap (1 million)
        await token.transfer(ethSwap.address, tokens('1000000'))
    })

    describe('Token deployment', async () => {
        it('contract has a name', async () => {
            const name = await token.name()
            assert.equal(name, 'DApp Token')
        })
    })

    describe('EthSwap deployment', async () => {
        it('contract has a name', async () => {
            const name = await ethSwap.name()
            assert.equal(name, 'EthSwap Instant Exchange')
        })

        it('contact has tokens', async () => {
            let balance = await token.balanceOf(ethSwap.address)
            assert.equal(balance.toString(), tokens('1000000'))
        })
    })
})