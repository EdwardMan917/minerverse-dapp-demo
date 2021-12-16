//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TUSDT is ERC20 {
    
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(address(this), 100000 * (10 ** 18));
    }

    function buy() payable public {
        uint256 amountTobuy = msg.value;
        uint256 tokenBalance = this.balanceOf(address(this));
        require(amountTobuy > 0, "You need to send some ether");
        require(amountTobuy <= tokenBalance, "Not enough tokens in the reserve");
        this.transfer(msg.sender, amountTobuy);
    }
}