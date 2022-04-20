//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract NumberStorer {
	// number stored in contract. defaults to 0.
	uint256 num;

	event StoredNumber(uint256 num);

	constructor() {}

	// storeNumber stores the given number in the contract.
	// It also emits a `StoredNumber` event.
	function storeNumber(uint256 _num) public {
		num = _num;
		emit StoredNumber(num);
	}

	// retrieveNumber returns the number stored in the contract.
	function retrieveNumber() public view returns (uint256) {
		return num;
	}
}