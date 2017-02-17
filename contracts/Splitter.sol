pragma solidity ^0.4.6;//^ = 0.4.6 compiler or newer

contract Splitter {
    
    address public accountA; 
    address public accountB;
    
    //anything that changes state, log an event
    event LogSplit(address sender, uint value, uint senttoA, uint senttoB); 
    //example: event delete product
    //example: event product sales
    
    //constructor runs once upon deployment. constructor has same name as contract
    function Splitter(address _accountA, address _accountB) {
        if (_accountA == _accountB) 
            throw; //fail if accounts for split are same address
        if (_accountA == address(0)) 
            throw; //fail, address can't be null 0x0
        if (_accountB == address(0)) 
            throw; //fail, address can't be null 0x0
        accountA = _accountA;
        accountB = _accountB;
    }
    
    //fallback function
    function ()
    payable {
        if (msg.value == 0) 
            throw; //fail if nothing to split
        uint sendtoA = msg.value/2; //division trunctates
        uint sendtoB = msg.value - sendtoA; //no rounding loss, remainders gettrapped in contract unless admin function to drain them
        if (!accountA.send(sendtoA)) 
            throw; //send is functionality of address type, checking that transaction went thru
        if (!accountB.send(sendtoB)) 
            throw; //aka unchecked.send vulnerability check
        LogSplit(msg.sender, msg.value, sendtoA, sendtoB);
    }
}