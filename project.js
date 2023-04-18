// -- START PROJECT SUMMARY --
// 1. Deposit money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again
// -- END PROJECT SUMMARY --

// Program asks user to input a number amount of money to deposit
const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ")
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
         console.log("Invalid deposit amount, try again.")
        } else {
          return numberDepositAmount;
        }
    }
};

const depositAmount = deposit();
console.log(depositAmount);

