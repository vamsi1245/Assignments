/* Given a number n, determine whether it is a prime number or not. A prime number is a
number greater than 1 that has no positive divisors other than 1 and itself.

Examples :
Input: n = 7
Output: true
Explanation: 7 has exactly two divisors: 1 and 7, making it a prime number.

Input: n = 25
Output: false
Explanation: 25 has more than two divisors: 1, 5, and 25, so it is not a prime number.

Input: n = 1
Output: false
Explanation: 1 has only one divisor (1 itself), which is not sufficient for it to be considered
prime. */

const n: number = 1;
let count = 0;

for (let i: number = 2; i < n; i++) {
    if (n % i === 0) {
        count++;
    }

}
if (count > 2) {
    console.log("not a prime");
}
else {
    console.log("is prime")
}

