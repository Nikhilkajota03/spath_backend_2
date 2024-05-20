// deployLendingPool.js
const { ethers } = require("hardhat");

async function main() {
    const LendingPool = await ethers.getContractFactory("LendingPool");
    const dummyERC20Address = "0x873896D00fc667E4E1A6145c4F7C9CA7809A2aC0";
     // Provide the address of the deployed DummyERC20 contract
    console.log(ethers)
    const lendingPoolContract = await LendingPool.deploy(dummyERC20Address);
    // await lendingPoolContract.deployed();
    // console.log("LendingPool contract address:", lendingPoolContract.address);
    console.log("LendingPool contract address:", lendingPoolContract.address);

//     await lendingPoolContract.borrow("0x4678111697b97C76869dd3E3ff05146FA253Fd5A",
//     100000000000,
//     "12",
//     "12"
// )
}

async function Test(){
   const lendingContract = await 
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });


    //0xD601f1c8289eb65f03e8767cE765b4C73BEcd85f lendingg  latest