const studentName = "Aneira"
let studentAge = 22
let studentGrade = undefined

let namaUsiaFormatLama = "Nama: " +studentName+ " Usia: " +studentAge
let namaUsiaFormatBaru = `Nama ${studentName} Usia: ${studentAge}`

let _privateKey = "kkkk" //boleh buat variabel diawali dengan _ dan $

let courseName = "JavaScript 101";
let score = 100;
let isPassing = true;
let nextCourse;
let certificateNumber = null;
let attendance;

//Array
let courseModules = ["Variables", "Functions", "Objects", "Arrays"];
//Object
let student1 = {
    name: "John",
    age: 20,
    grades: [88, 90, 100],
    contact: {
        email: "john@gmail.com",
        phone: "123-456-7890"
    }
};



//Logical Operators
let hasPassingGrade = score >= 60;
let hasAttendance = true;

//AND Operators
let willPass = hasPassingGrade && hasAttendance;

//OR operator (||)
let needsHelp = (score < 60) || (attendance < 80);

//NOT Operator (!)
let isFalling = !hasPassingGrade;

//For Loop
console.log("---Basic for loop---");
for (let i = 1; i <= 5; i++){
    console.log(`Count: ${i}`);
}

//Loop through array
const fruits = ["apple", "banana", "orange", "mango"];
console.log("---Looping through array---");
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

//For Of Loop
console.log("---for of loop---");
const colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(`Color: ${color}`);
}

//For In Loop
console.log("--- for ... in loop---");
const student = {
    name: "John",
    age: 20,
    grade: "A"
};
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

//While Loop
console.log("---while loop");
let count = 1;
while (count <= 5) {
    console.log(`While count: ${count}`);
    count++;
}

// Do While Loop
console.log("---do...while loop---");
let num = 1;
do {
    console.log(`Number: ${num}`);
    num++;
} while (num <= 3);

//Break and Continue
console.log("---break and continue---");
for (let i = 1; i <= 5; i++) {
    if (i === 2) continue; //Skip 2
    if (i === 4) break; //Stop at 4
    console.log(`Number ${i}`);
}

// 1. Basic if statement
let studentScore = 85;

if (studentScore >= 80) {
    console.log("Excellent work!");
}

// 2. If-else statement
let age = 17;

if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("Too young to vote");
}

// 3. If-else if-else statement
let grade = 75;

if (grade >= 90) {
    console.log("Grade: A");
} else if (grade >= 80) {
    console.log("Grade: B");
} else if (grade >= 70) {
    console.log("Grade: C");
} else if (grade >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// 4. Nested if statements
let isLoggedIn = true;
let isAdmin = true;
let hasPermission = true;

if (isLoggedIn) {
    if (isAdmin) {
        if (hasPermission) {
            console.log("Welcome to admin dashboard!");
        } else {
            console.log("Insufficient permissions");
        }
    } else {
        console.log("Welcome to user dashboard!");
    }
} else {
    console.log("Please log in first");
}

// 5. Using logical operators with if statements
let username = "john_doe";
let password = "secret123";

if (username === "john_doe" && password === "secret123") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}

// 6. Ternary operator (shorthand if-else)
let isSubscribed = true;
let message = isSubscribed ? "Welcome back!" : "Please subscribe";

//======================
//1. Basic Function Declaration
function sayHello(name){
    return `Hello, ${name}!`;
}

//Using the function
console.log(sayHello("John")); 

//2. Function with Multiple Parameters
function calculateTota(price, quantity){
    return price * quantity;
}

//Using the function
console.log(calculateeTotal(10, 5));

//3. Function with Default Parameters
function greet(name = "Guest", time = "day"){
    return `Good ${time}, ${name}!`;
}

console.log(greet());
console.log(greet("Alice", "morning"));

//4. Arrow Function
const add = (a, b) => {
    return a + b;
}

const multiply = (a, b) => a * b;

console.log(add(5, 3));
console.log(multiply(4, 2));

//5. Function that uses another function
function calculateGrade(score){
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

function getStudentResult(name, score) {
    const grade = calculateGrade(score);
    return `${name} received a grade of ${grade}`;
}

// untuk run perintahnya node app.js
// boleh gak pake ;

/* let saldo = 2000
 saldo2 = 2000
 
 if (saldo == saldo2) hasilnya bakal true
 if (saldo === saldo2) hasilnya bakal false
*/