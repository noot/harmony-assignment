const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Ballot", function () {
  it("Should deploy and vote", async function () {
    const Ballot = await ethers.getContractFactory("Ballot");
    const proposal = "0x0000000000000000000000000000000000000000000000000000000000000000";
    const ballot = await Ballot.deploy([proposal]);
    let deployTx = await ballot.deployed();

    let tx = await ballot.vote(proposal);
    let receipt = await tx.wait();
    expect(receipt.status).to.equal(1);
  });

  it("Should revert after voting period ends", async function () {
    const Ballot = await ethers.getContractFactory("Ballot");
    const proposal = "0x0000000000000000000000000000000000000000000000000000000000000000";
    const ballot = await Ballot.deploy([proposal]);
    let deployTx = await ballot.deployed();

    // simulate time increase of 5min and 10s
    await network.provider.send("evm_increaseTime", [(60 * 5) + 10])

    // assert that vote reverts
    await expect(ballot.vote(proposal)).to.be.revertedWith("voting period has ended");
  });
});
