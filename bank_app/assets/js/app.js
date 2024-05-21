class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Invaild deposit amount. Please provide a positive value.");
    }
  }
  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdraw ${amount}. New balance : ${this.balance}`);
      } else {
        console.log(
          "Insufficient balance. Cannot withdraw more than available balance."
        );
      }
    } else {
      console.log(
        "Invaild withdrawal amount. Please provide a possitive value."
      );
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(`Account Number : ${this.accountNumber}`);
    console.log(`Owner Name : ${this.ownerName}`);
    console.log(`Balance : ${this.balance}`);
  }
}
const account_1 = new BankAccount(1987456123, "Hasin Hayder" , 500);
const account_2 = new BankAccount(1987456155, "Rabbil Hasan Rupom" , 1000);

console.log( 'Account_1:');
account_1.displayAccountInfo();
account_1.deposit(500);
account_1.withdraw(800);

console.log(`Account_2: `);
account_2.displayAccountInfo();
account_2.deposit(200);
account_2.withdraw(1500);