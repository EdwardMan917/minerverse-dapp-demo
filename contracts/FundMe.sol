// SPDX-License-Identifier: minutes

pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract FundMe{
    
    AggregatorV3Interface pricefeed;
    address public owner;
    address[] public funders;
    uint256 public balance;
    mapping(address => uint256) public addressToAmountFunded;
    
    constructor() {
        pricefeed = AggregatorV3Interface(0x8A753747A1Fa494EC906cE90E9f37563A8AF630e);
        owner = msg.sender;
    }
    
    function test() public pure returns (string memory) {
        return "holy shit";
    }

    function fund() public payable {
        addressToAmountFunded[msg.sender] += msg.value;
        balance += msg.value;
        funders.push(msg.sender);
    }
    
    function getOriginalPrice() public view returns (uint256) {
        (,int256 answer,,,) = pricefeed.latestRoundData();
        return uint256(answer); // xxxxxxxxxxxx = xxxx.xxxxxxxx with 8 decimal places
    }
    
    function getConversionRate(uint256 ethAmount) public view returns (uint256) {
        uint256 ethPrice = getOriginalPrice();
        uint256 equityInUsd = (ethAmount * ethPrice) / 10**6;
        return equityInUsd; // xxxxxx = xxxx.xx with 2 decimal places
    }
    
    modifier onlyOwner {
        require(msg.sender == owner, "Operation Not Allowed.");
        _;
    }
    
    modifier resetState {
        _;
        for(uint256 i; i<funders.length; i++){
            address funderAddress = funders[i];
            addressToAmountFunded[funderAddress] = 0;
        }
        delete funders;
        balance = 0;
    }
    
    function withdraw() payable onlyOwner resetState public {
        payable(msg.sender).transfer(address(this).balance);
    }
    
    function transferOwner(address newOwner) onlyOwner public {
        owner = newOwner;
    }

    function getBalance() view public returns (uint256) {
        return balance;
    }
    
}