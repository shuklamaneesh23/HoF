// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Lend {
    struct Memo {
        uint256 ROI; 
        uint256 max_time; 
        uint256 amount;
        address from;
    }

    Memo[] memos;

    function lendMoney(uint256 ROI, uint256 max_time,uint256 _amount) public payable {
        memos.push(Memo(ROI, max_time,_amount, msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}