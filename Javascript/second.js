console.log("HelloWorld!");

alert("Hello world!");


const student_info = {
    name: "Shahzaib",
    Age: 20,
    University: "Cusit",
    CGPA: 3.87,
    isStudent: true
}

console.log(student_info);

//Second Q
let a = prompt("Enter a = ");
let b = prompt("Enter b = ");

console.log("a + b = " + a+b);
console.log("a * b = " + a*b);
console.log("a / b = " + a/b);
console.log("a - b = " + a-b);

//Third Q
let length = prompt("Enter of a field = ");
let width = prompt("Enter width of a field = ");

let area = length * width ;
let parameter = 2 * (length + width);

console.log("Area of a field is = " + area);
console.log("Parameter of a field is = " + parameter);


let celcius = 30;
let fahrenheit = (celcius * 9/5)+32;
console.log("Temprature in celcius is = " + celcius);
console.log("Temprature in fahrenheit is = " + fahrenheit);

//Fifth Q
let price = 1200;
let quantity = 3;
let bill = price * quantity;
let discount = bill * 0.10;
let discount_bill = bill - discount;

console.log("Actual bill : " + bill);
console.log("Discount : "+ discount);
console.log("Actual discount_bill : " + discount_bill);

// Seconds Converter
let seconds = 7385;

let hours = Math.floor(seconds / 3600);
let minutes = Math.floor((seconds % 3600) / 60);
let second = Math.floor(seconds % 60);

console.log("Total Seconds = 7385 , Hours = "+ hours +", Minutes = "+ minutes+", Seconds = "+ second);

//Logical Operators

let age = prompt("Enter Age : ");
if(age.trim() === "" || isNaN(Number(age)))
    console.log("The input is invalid!");
else if(Number(age) < 0)
    console.log("Age is invalid");
else if(Number(age) < 18)
    console.log("Age is less than 18");
else if(Number(age) > 18)
    console.log("Age is greater than 18");
else 
    console.log("Age is 18");

//AND Operation

let Age = prompt("Enter age = ");
let Marks = prompt("Enter Marks = ");

if (Age >= 18 && Marks >= 60)
    console.log("You can take admission!");
else 
    console.log("You cannot take admission");

//OR Operation

let admin = false;
let developer = true;

if(admin || developer)
    console.log("You can SSH to server")
if(admin && developer)
    console.log("You can SSH");
else 
    console.log("You cannot SSH");

//Logical operator presedence.
let MFA = true;
let Admin = false;
let DevOps_Engr = true;

if(Admin || (DevOps_Engr && MFA))
    console.log("you are authenticated! user");
else 
    console.log("you are not authenticated!");


let CNIC = prompt("cnic -- Enter true / false : ");
let ID_CARD = prompt("id-card -- Enter true / false : ");
let AGE = prompt("age -- Enter age = ");

if(AGE >= 18 && (CNIC || ID_CARD))
    console.log("YOU ARE ELIGIBLE!!!!");
else
    console.log("YOU ARE NOT ELIGIBLE.....")



