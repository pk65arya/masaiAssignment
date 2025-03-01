//BankAccountClosures.js

//Create a closure that represents a bank account. Implement a function createBankAccount that initializes an account with a balance (input by the user) and returns methods to deposit, withdraw, and getBalance. Ensure that the balance cannot be accessed or modified directly from outside the closure.

//deposit(amount): Increases the balance by the given amount.
// withdraw(amount): Decreases the balance by the given amount, if there are sufficient funds.
//getBalance(): Returns the current balance.

let bankAccount=(function(){
let money=0;
let operation=function(num){
  money+=num;
  console.log(money);
}
return{
  deposit(rs){
    operation(rs);
  },
  withdraw(rs){
    operation(-rs)
  },
  getBalance(){
    return money;
  },
};


})();

let ans=bankAccount;
ans.deposit(100);
ans.deposit(500);
ans.withdraw(200);
console.log(ans.getBalance()); 