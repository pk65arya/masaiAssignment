// Q: 17
// Title:
// L1 - Encapsulating Bank Account using Closures

// Problem Statement:
// Create a closure that represents a bank account. Implement a function createBankAccount that initializes an account with a balance (input by the user) and returns methods to deposit, withdraw, and getBalance. Ensure that the balance cannot be accessed or modified directly from outside the closure.

// deposit(amount): Increases the balance by the given amount.
// withdraw(amount): Decreases the balance by the given amount, if there are sufficient funds.
// getBalance(): Returns the current balance.
// Example:

// const account = createBankAccount(100);

// console.log(account.deposit(50)); // Output: 150

// console.log(account.withdraw(30)); // Output: 120

// console.log(account.getBalance()); // Output: 120

function createBankAccount(amount){
  let initialAmount=amount;

  return{
    deposit(amt){
 
      initialAmount =initialAmount+amt;
      return initialAmount;
    },
    withdraw(amt){
      if(amt>initialAmount)
        return "Insufficient Fund";
      else{
        initialAmount=initialAmount-amt;
        return initialAmount;
      }

    },
    getBalance(){
      return initialAmount;
    }
  }
}

 const account = createBankAccount(100);

 console.log(account.deposit(50)); 

 console.log(account.withdraw(230)); 

 console.log(account.getBalance()); 