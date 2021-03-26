// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Auth {
    address private administrator;

    constructor() public {
        administrator = msg.sender;
    }

    function isAdministrator(address user) external view returns (bool) {
        return user == administrator;
    }
}
