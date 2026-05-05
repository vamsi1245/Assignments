//this is an instance of the parent class and super is used to access the parent class properties and methods.

class Parent {
    course: string = "JavaScript";

    printProject() {

        console.log("ABC Project");
    }

}

class Child extends Parent {
    course: string = "Typescript";

    printProject() {

        console.log("XYZ Project");
    }
    printCourse(course: string) {

        console.log("Course name is " + this.course);
        console.log(this.printProject());
        // console.log("Course name is " + super.course); super is used only to access methods of parent class. We cannot access the data members of parent class 
        console.log(super.printProject());
    }



}
let obj = new Child();

obj.printCourse("Playwrite");



