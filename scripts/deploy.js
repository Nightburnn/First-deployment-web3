async function main() {
    // Get the deployer's wallet address
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contract with the account:", deployer.address);
  
    const balance = await deployer.getBalance();
    console.log("Deployer account balance:", ethers.utils.formatEther(balance), "ETH");
  
    // Deploy the contract
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello_world = await HelloWorld.deploy("Hello World!");
  
    console.log("Deploying...");
    await hello_world.deployed();
  
    console.log("Contract deployed to address:", hello_world.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  