/* eslint-disable prettier/prettier */
import { ethers } from "hardhat";
import { parseEther } from "ethers";

async function main() {
  const factory = await ethers.getContractFactory("ACLManager");

  // If we had constructor arguments, they would be passed into deploy()
  const contract = await factory.deploy("0xddEBc152c07313fe87383003242AE28E8530d602");

  // console.log("create auction");
  // // await Promise.all(nftLists.map(async(nftLists[0]) => {
  // //   console.log("Creating", nftLists[0]);
  // contract.createAuction(nftLists[0].name, nftLists[0].description, nftLists[0].image, `https://eu.starton-ipfs.com/ipfs//bafybeibboc3z6lnp2afaq4r5ivdxspmfhjmdukldikwrbu7n3acqur4wyi/${nftLists[0].id}.json`, parseEther(nftLists[0].id.toString()));
  // // }));
  
  // console.log("finish auction");
  // The address the Contract WILL have once mined
  console.log("Auction address", contract.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
