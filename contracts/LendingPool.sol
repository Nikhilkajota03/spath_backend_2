// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LendingPool {
    uint256 amountInETH = 1000000000000000000;
    
    
    address public tokenAddress;
    constructor(address _tokenAddress) {
         tokenAddress = _tokenAddress;
     }

    // Define struct for loan
    struct Loan {
        address borrower;
        uint256 amount;
        string userId;
        string invoiceId;
        bool payed;
    }

    // Mapping to store lenders' balances
    mapping(address => uint256) public balances;

    // Mapping to store borrowers' loans
    mapping(address => Loan) public loans;

    // Event for logging deposit
    event Deposit(address indexed lender, uint256 amount);

    // Event for logging borrow
    event Borrow(
        address indexed borrower,
        uint256 amount,
        string userId,
        string invoiceId
    );

    event LonePayed(
        address indexed borrower,
        uint256 amount,
        string userId,
        string invoiceId,
        bool payed
    );

    // Function to allow lenders to deposit funds
    function deposit(uint256 _amount) external payable {
        require( _amount > 0, "Deposit amount must be greater than zero");
        
        IERC20(tokenAddress).transferFrom(msg.sender, address(this), _amount);
        // Increment lender's balance
        balances[msg.sender] += _amount;
        // Emit deposit event
        emit Deposit(msg.sender, _amount);
    }

    


    function getfunds(address _account) external view returns (uint256) {
        return balances[_account];
    }



    function getTotalBalance(address _token) external view returns (uint256) {
        uint256 totalBalance = IERC20(_token).balanceOf(address(this));
        return totalBalance;
    }

    // Function to allow borrowers to borrow funds

    function borrow(
        address  _borrower,
        uint256 _amount,
        string memory _userId,
        string memory _invoiceId
    ) public  {
        // uint256 AmountinWei = 1000000000000000000 * _amount;
       
       
        require(_amount > 0, "Borrow amount must be greater than zero");
        require(
             IERC20(tokenAddress).balanceOf(address(this)) >= _amount,
            "Insufficient funds in the pool"
        );

        if(loans[_borrower].borrower == address(0)) {
            
            loans[_borrower] = Loan(
            _borrower,
            _amount,
            _userId,
            _invoiceId,
            false
            );
            IERC20(tokenAddress).transfer(_borrower, _amount);

        // Emit borrow event
            emit Borrow(_borrower, _amount, _userId, _invoiceId);
        } 
        else 
        {
            require(loans[_borrower].payed = true , "Please pay the existing loan ") ;
                loans[_borrower] = Loan(
                _borrower,
                _amount,
                _userId,
                _invoiceId,
                false
                );
            IERC20(tokenAddress).transfer(_borrower, _amount);
       
            // Emit borrow event
            emit Borrow(_borrower, _amount, _userId, _invoiceId);
    }

        // Record loan detailse

    }

    function payLone(
        address payable _borrower,
        uint256 _amount,
        string memory _userId,
        string memory _invoiceId
    ) public  {
       

        require(
            loans[_borrower].borrower != address(0),
            "No loan exist with this account"
        );

        require(
            loans[_borrower].payed == false,
            "loan already payed for this account"
        );

        require(_amount >= loans[_borrower].amount , "Insufficient repayment amount");

    
        //approval of the transfer of token from user to address ; will be done in scripts in backend 

        IERC20(tokenAddress).transferFrom(msg.sender, address(this), _amount);

        loans[_borrower].payed = true;

        emit LonePayed(_borrower, _amount, _userId, _invoiceId, true);
    }

     function withdrawFunds(uint256 _amount) public {
    uint256 lenderBalance = balances[msg.sender];
    require(lenderBalance > 0, "No funds available to withdraw");
    require(_amount <= lenderBalance, "Withdrawal amount exceeds staking balance");

    balances[msg.sender] -= _amount; 


    IERC20(tokenAddress).transfer(msg.sender, _amount);
}

}