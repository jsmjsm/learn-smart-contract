/*
 * @Description  :
 * @Author       : jsmjsm
 * @Github       : https://github.com/jsmjsm
 * @Date         : 2021-03-26 10:02:17
 * @LastEditors  : jsmjsm
 * @LastEditTime : 2021-03-26 10:05:59
 * @FilePath     : /learn-smart-contract/scripts/deploy.js
 */

async function main() {
	// We get the contract to deploy
	const Box = await ethers.getContractFactory('Box')
	console.log('Deploying Box...')
	const box = await Box.deploy()
	await box.deployed()
	console.log('Box deployed to:', box.address)
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})
