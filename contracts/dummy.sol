

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol" ;


/**
 * @title DummyERC20
 * @dev Simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 */
contract DummyERC20 is ERC20 {
     /* @dev Constructor that gives msg.sender all of existing tokens.
     */
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) ERC20(name, symbol) {}

    function mint(address _user, uint256 _amount) external {
        _mint(_user, _amount);
    }
}