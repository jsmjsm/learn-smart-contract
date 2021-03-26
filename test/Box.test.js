/*
 * @Description  : Test the Box.sol
 * @Author       : jsmjsm
 * @Github       : https://github.com/jsmjsm
 * @Date         : 2021-03-26 22:51:15
 * @LastEditors  : jsmjsm
 * @LastEditTime : 2021-03-26 23:00:52
 * @FilePath     : /learn-smart-contract/test/Box.test.js
 */

// test/Box.test.js
// Load dependencies

const { expect } = require('chai')
const { ethers } = require('hardhat')

// Start test block
describe('Box', function () {
	before(async function () {
		this.Box = await ethers.getContractFactory('Box')
	})

	beforeEach(async function () {
		this.box = await this.Box.deploy()
		await this.box.deployed()
	})

	// Test if the returned value is the same one
	// Note that we need to use strings to compare the 256 bit integers
	it('retrieve returns a value previously stored', async function () {
		// Store a value
		await this.box.store(42)

		// Test if the returned value is the same one
		// Note that we need to use strings to compare the 256 bit integers
		expect((await this.box.retrieve()).toString()).to.equal('42')
	})
})
