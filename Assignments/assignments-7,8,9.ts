/* Assignment: Write a program to perform the following tasks:
1. Count the total number of words in the sentence.
2. Print the sentence words in reverse order.
3. Convert the first character of each word to uppercase and print original sentence */


//1. Count the total number of words in the sentence.
let words: string = "Java programming is fun and challenging";
let countWords: number = 0;
for (let key of words.split(" ")) {
    countWords++
}
console.log("number of words: " + countWords);

//2. Print the sentence words in reverse order.
let reverseWords: string = " "
for (let key of words.split(" ").reverse()) {
    reverseWords += key + " "
}
console.log("reverse order: " + reverseWords);

//3. Convert the first character of each word to uppercase and print original sentence
let wordsCharectors: string[] = words.split(" ");
for (let i = 0; i < wordsCharectors.length; i++) {
    wordsCharectors[i] = wordsCharectors[i].charAt(0).toUpperCase() + wordsCharectors[i].slice(1);
}
console.log("capitalized: " + wordsCharectors.join(" "));
