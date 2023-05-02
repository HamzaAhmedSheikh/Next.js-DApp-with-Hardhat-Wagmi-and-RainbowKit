/** This code is an example of a test case written using the Mocha testing framework and the Chai assertion library for a 
 * Solidity smart contract called "Greeter".
 * **/

import { expect } from "chai";
import { ethers } from "hardhat";


/***
 * The "describe" function is used to group related test cases together under a common heading, and the 
 * "it" function is used to define individual test cases with a descriptive name. In this case, the test case is checking whether the
 *  contract's "greet" function returns the expected value after the contract's "setGreeting" function is called.
 * * */

describe("Greeter", function () {
    it("Should return the new greeting once it's changed", async function () {
      // We get the contract to deploy
      const Greeter = await ethers.getContractFactory("Greeter");
      // Deploy the contract
      const greeter = await Greeter.deploy("Hello, world!");
      // Wait until the contract is deployed
      await greeter.deployed();
      
      // The "expect" function from the Chai library is then used to check whether the "greet" function returns the expected message.
      expect(await greeter.greet()).to.equal("Hello, world!");
     
      // the "setGreeting" function is called on the contract instance to change the greeting message to "Hola, Panaverse!".
      const setGreetingTx = await greeter.setGreeting("Hola, Panaverse!");
  
      // The resulting transaction is then "waited" for using the "wait" function to ensure that it has been successfully mined.
      await setGreetingTx.wait();
       
      // the "expect" function is used again to check whether the "greet" function returns the updated greeting message of "Hola, Panaverse!".
      expect(await greeter.greet()).to.equal("Hola, Panaverse!");
    });
  });