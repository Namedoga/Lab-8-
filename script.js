// Part one: Create an object to represent a student with properties

let student = { 
name: "Othniel",
age: 27, 
enrolled: true,
course: "JavaScript", 
greet: function() {
    console.log("Hello my name is " + this.name , "and my age is " + this.age, " I am also enrolled: " + this.enrolled ,  "doing a course called: " + this.course ); 
}
};


console.log(student.age)
console.log(student.name)
console.log(student.greet())


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


let copiedStudent = { ...student };
console.log(copiedStudent); 