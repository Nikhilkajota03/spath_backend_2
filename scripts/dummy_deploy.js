const  {ethers}  = require("hardhat");

async function main() {
    console.log(ethers);
    const DummyERC20 = await ethers.getContractAt("DummyERC20")

    const dummyERC20Contract = await DummyERC20.deploy(
        "SPATHION TOKEN",
        "SPATH",
        1000000000
    );

    const address = dummyERC20Contract.address;

    console.log("DummyERC20 contract address:", address);
}

// main()
//     .then(() => process.exit(0))
//     .catch(error => {
//         console.error(error);
//         process.exit(1);
//     });

    


  async function lend() {
    let lendContract = await ethers.getContractAt("LendingPool","0x54e8fcc8209E7DA4FE2f9d556e6E46f1F5c34402");
    let tokenContract = await ethers.getContractAt("DummyERC20","0x873896D00fc667E4E1A6145c4F7C9CA7809A2aC0");
    console.log(contract);
    console.log("==========", tokenContract)
    // let amount = await ethers.utils()
    let approval = await tokenContract.approve("0x54e8fcc8209E7DA4FE2f9d556e6E46f1F5c34402", 10000000000000);
    let res = await lendContract.deposit(amount); 
    console.log("done", res.hash);
}  


// async function executeLoam(){

//     // let lenderContract = await ethers.getContractAt("LendingPool", "0x54e8fcc8209E7DA4FE2f9d556e6E46f1F5c34402");
//     // let params = {
//     //   _borrower :"",
//     //   _amount:,
//     //   _userId:"".
//     //   invoiceId :"" ,
//     // }
//     //  let res = await lenderContract.borrow(params)
//     // console.log("done", res.hash);
//     // } 


  async function withdrawl() { 
    let params = {
       
    }
    let lenderContract = await ethers.getContractAt("LendingPool" ,"0x54e8fcc8209E7DA4FE2f9d556e6E46f1F5c34402");
    let tokenContract = await ethers.getContractAt()
    let tokenApproval = await tokenContract.approve("",)
    let res = await lenderContract.payLone()
    console.log("done with the loan",res.hash);
  }  




  // 0x873896D00fc667E4E1A6145c4F7C9CA7809A2aC0    //dummy token

  //0x54e8fcc8209E7DA4FE2f9d556e6E46f1F5c34402    //lending pool abi


  lend();




  


