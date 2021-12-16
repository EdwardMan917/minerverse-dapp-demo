### References   
1. Interact with contract:   
https://dev.to/dabit3/the-complete-guide-to-full-stack-ethereum-development-3j13    
2. Send tokens:    
https://ethereum.org/en/developers/tutorials/send-token-etherjs/   
3. Make NFT:   
https://www.freecodecamp.org/news/how-to-make-an-nft/   

### Hardhat Setup Step   
1. npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers   
2. npx hardhat   
3. update hardhat.config.js => module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    }
  }
};   
4. npx hardhat compile   
5. npx hardhat node --hostname 127.0.0.1   
6. rename scripts/sample-script.js to scripts/deploy.js   
7. npx hardhat run scripts/deploy.js --network localhost   
