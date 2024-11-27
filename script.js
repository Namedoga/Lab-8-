// Part one: Create an object to represent a student with properties

let student = { 
name: "Othniel",
age: 27, 
enrolled: true,
course: ["JavaScript"], 
addCourse(course) {
    this.course.push(course);
},


totalCourses() {
    return this.course.length;
}
};

console.log(student.age)
console.log(student.name)

// Part Two: Working with JSON
let studentJSON = JSON.stringify(student);
console.log(studentJSON);

let parsedStudent = JSON.parse(studentJSON);
console.log(parsedStudent);
// Part Three: Using Destructuring Assignment   

let {course , name } = student;
console.log(name);
console.log(course); 
let testScores = [ 82 , 99, 42 , 44 ];
let [first, second, third , fourth] = testScores; 
console.log(first);
console.log(second);

// Part Four: The Spread Operator


let copiedStudent = {student};
console.log(copiedStudent); 



let modifiedStudent = {...copiedStudent, graduationYear: 2026};
console.log(modifiedStudent);

let newCourse = ["Math", "English", "Gym"];
let mixedCourse = [student.course,...newCourse];

console.log(mixedCourse); 

// Part five: Object Methods


student.addCourse("History");
console.log(student.course); 


let total = student.totalCourses();
console.log(total)