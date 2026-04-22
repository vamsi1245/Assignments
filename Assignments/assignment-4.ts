/* Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1 50000
2 -2000
3 3000
4 -15000
5 -200
6 -300
7 4000
8 -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements
1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions */


const totalTransactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];
let totalCredit = 0;
let totalDebit = 0;
let suspicious = 0;
let creditCount = 0;
let debitCount = 0;

for (const amount of totalTransactions) {

    if (amount > 0) {
        creditCount++;
        totalCredit = +amount
    }
    else {
        debitCount++;
        totalDebit = +amount
    }
    if (amount > 10000 || amount < -10000) {
        console.log(`Suspicious credit/ debit Transaction with Amount: ${amount}`);
        suspicious++;

    }
}
const balance: number = totalCredit + totalDebit;
console.log(`total number of credit transactions: ${creditCount}`);
console.log(`total number of debit transactions: ${debitCount}`);
console.log(`total amount credited: ${totalCredit}`);
console.log(`total amount debited: ${totalDebit}`);
console.log(`total number of suspicious transactions: ${suspicious}`)

console.log(`Total balance: ${balance}`)

