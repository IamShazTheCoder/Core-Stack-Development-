// console.log("First JS code");

// const product = {
//   Name: "Mike",
//   Price: 2400 ,
//   Rating: 4.7,
//   offer: 5
// }

// console.log(product);

// product.offer = 13;


// const Profile = {
//   accountName: "Sharada Khapra",
//   followers: 1800,
//   posts: 342,
//   following: 100,
//   message: "<p>If you have some message enter here.</p>"
  
// }

//Take input from user and check whether it is 5 or not.

// let num = prompt("Enter Number : ");

// if(num % 5 ===0 ){
//     console.log("Entered Number is divisible by  5");
// }else{
//     console.log("Entered Number is not divisible by 5");
// }

//Problem # 2: 
//           Give Student Grade according to marks.

let marks = prompt("Enter Your Marks : ");
let grade;

if(marks >= 80 && marks <= 100){
    grade = "A+";
}else if(marks >= 70 && marks < 80){
    grade = "B";
}else if(marks >= 60 && marks < 70){
    grade = "C";
}else{
    grade = "Fail";
}

console.log("Your Grade is : " + grade);
