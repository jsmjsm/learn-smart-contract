// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "./access-control/Auth.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Box is Ownable {
    uint256 private value;

    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);

    function store(uint256 newValue) external onlyOwner {
        // @note onlyOwner
        value = newValue;
        emit ValueChanged(newValue);
    }

    function retrieve() external view returns (uint256) {
        return value;
    }
}
