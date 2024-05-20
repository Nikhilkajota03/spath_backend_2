const hre = require("hardhat");

async function main() {
    // Deploy DummyERC20 contract
    const DummyERC20 = await hre.ethers.getContractFactory("DummyERC20");
    const dummyERC20Contract = await DummyERC20.deploy("SPATHION", "SPATH", "10000000000000");
     // Adjust initial supply as needed
    await dummyERC20Contract.deployed();
    
    console.log("DummyERC20 contract address:", dummyERC20Contract.address);

    // Deploy LendingPool contract
    const LendingPool = await hre.ethers.getContractFactory("LendingPool");
    const lendingPoolContract = await LendingPool.deploy(dummyERC20Contract.address);
    await lendingPoolContract.deployed();
    console.log("LendingPool contract address:", lendingPoolContract.address);
}



main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
