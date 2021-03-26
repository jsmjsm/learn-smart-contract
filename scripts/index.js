/*
 * @Description  :
 * @Author       : jsmjsm
 * @Github       : https://github.com/jsmjsm
 * @Date         : 2021-03-26 22:25:31
 * @LastEditors  : jsmjsm
 * @LastEditTime : 2021-03-26 22:42:50
 * @FilePath     : /learn-smart-contract/scripts/index.js
 */

const { ethers } = require('hardhat')

async function main() {
	// ! Run this script after we deploy the contract
	// Retrieve accounts from the local node
	const accounts = await ethers.provider.listAccounts()
	console.log(accounts)

	// Set up an ethers contract, representing our deployed Box instance
	// ! address is the contract address
	const address = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'
	const Box = await ethers.getContractFactory('Box')
	const box = await Box.attach(address)

	// Send a transaction to store() a new value in the Box
	await box.store(42)

	// Call the retrieve() function of the deployed Box contract
	value = await box.retrieve()
	console.log('Box value is', value.toString())
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})
