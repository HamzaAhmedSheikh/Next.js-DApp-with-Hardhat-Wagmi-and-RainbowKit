import { ethers } from "hardhat";
async function main() {

  const name = "Hamza";
  const symbol = "HAT";


  const Token = await ethers.getContractFactory("MyToken"); //Name of my contract
  const token = await Token.deploy(name, symbol);

  await token.deployed();

  console.log("Token deployed to:", token.address);
  const receipt = await token.deployTransaction.wait();
  console.log("gasUsed:" , receipt.gasUsed);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });