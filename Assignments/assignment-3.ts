/* /* 1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators and
store it into another array, after adding 10 marks identify the average marks of all
students/*  */

let studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];
let marks: number[] = [75, 80, 82];
let updatedMarks: number[] = [];
for (let i: number = 0; i < marks.length; i++) {
    updatedMarks[i] = marks[i] + 10;

}
let totalMarks: number = 0;
for (let total of updatedMarks) {

    totalMarks += total;
}
for (let i: number = 0; i < updatedMarks.length; i++) {
    console.log(`updated marks of students: ${studentNames[i]} - ${updatedMarks[i]}`);
}

let averageMarks: number = totalMarks / updatedMarks.length;

console.log(`average marks: ${averageMarks}`);
