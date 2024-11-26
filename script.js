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

let Studentobj = {
    name: "Othiel",
    age: 27
};
let jsonString = JSON.stringify(Studentobj);
console.log(jsonString); 

let stringJson = '{"name":"Othniel","age":27}';
let jsonObj = JSON.parse(stringJson);
console.log(jsonObj.name); 

// Part Three: Using Destructuring Assignment   



ssasa

