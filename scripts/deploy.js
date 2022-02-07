// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // const CFC = await hre.ethers.getContractFactory("Doge");
  // const cfc = await CFC.deploy("0x985d37a1410FdE7cD094Ed8560Bdd1c8337A2a7E", "0x617D0872EbdFd087dB223A6F1764EA8A34597880", 1000);
  const CFC = await hre.ethers.getContractFactory("Memeverse");
  const cfc = await CFC.deploy("0xB56CDe5115457715d326eA961E78d3aeD61be592", "0x985d37a1410FdE7cD094Ed8560Bdd1c8337A2a7E");

  await cfc.deployed();

  console.log("CFC deployed to:", cfc.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
