//there are thre types of variable types in typescript
//1. Local variable => variable declared inside a function or block and can only be accessed within that function or block.
//2. Instance variable => variable declared inside a class and can be accessed using the object of the class.
//3. Static variable => variable declared inside a class with the static keyword and can be accessed using the class name without creating an object of the class.

class VariableTypes {

    empName: string = "vamsi";// instance variable
    empId: number = 1234;
    static empAddress: string = "Hyderabad";

    printProjectDetails(): void {

        let empSalary: number = 200000;// local variable
        console.log("Employee Name: " + this.empName);
        console.log("Employee ID: " + this.empId);
        console.log("Employee Salary: " + empSalary);
    }
}
let obj = new VariableTypes();


obj.printProjectDetails();
console.log(VariableTypes.empAddress);