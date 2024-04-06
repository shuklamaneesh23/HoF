// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FlexiLoan {
    // Struct to represent a loan
    struct Loan {
        address borrower;
        uint256 amount;
        uint256 duration; // Loan duration in days
        uint256 interestRate; // Interest rate in percentage (e.g., 5%)
        uint256 collateralAmount;
        bool active;
    }

    // Mapping of borrower address to their loans
    mapping(address => Loan[]) public borrowerLoans;

    // Mapping of lender address to their loans
    mapping(address => Loan[]) public lenderLoans;

    // Event emitted when a new loan is created
    event LoanCreated(address indexed borrower, uint256 loanId, uint256 amount);

    // Function to request a loan
    function requestLoan(uint256 _amount, uint256 _duration, uint256 _interestRate, uint256 _collateralAmount) external {
        // Create new loan
        Loan memory newLoan = Loan(msg.sender, _amount, _duration, _interestRate, _collateralAmount, true);
        lenderLoans[msg.sender].push(newLoan);

        // Emit event
        emit LoanCreated(msg.sender, lenderLoans[msg.sender].length - 1, _amount);
    }

    // Function to borrow a loan
    function borrowLoan(uint256 _loanId) external payable {
        Loan storage loan = lenderLoans[msg.sender][_loanId];

        // Ensure loan is active
        require(loan.active, "Loan is not active");

        // Ensure loan amount matches
        require(msg.value == loan.amount, "Incorrect loan amount");

        // Transfer collateral to borrower
        payable(loan.borrower).transfer(loan.collateralAmount);

        // Mark loan as inactive
        loan.active = false;

        // Add loan to borrower's loans
        borrowerLoans[msg.sender].push(loan);
    }

    // Function to repay a loan
    function repayLoan(uint256 _loanId) external payable {
        Loan storage loan = borrowerLoans[msg.sender][_loanId];

        // Ensure loan is active
        require(loan.active, "Loan is not active");

        // Ensure loan amount is repaid
        require(msg.value >= loan.amount, "Insufficient loan repayment amount");

        // Transfer collateral back to lender
        payable(msg.sender).transfer(loan.collateralAmount);

        // Mark loan as inactive
        loan.active = false;
    }
}