// //Day3: conditional statements in javascript
// let a=20
// let b=10
// let c=15

// //if statement
// if(a>b){
//     console.log("a is greater than b")
// }
// else{
//     console.log("b is greater than a")
// // }
// if(a>b && a>c){
//     console.log("a is the greatest")
// }
// else if(b>c){
//     console.log("b is the greatest")
// }
// else{
//     console.log("c is the greatest")
// }

// Q: Declare four variables w,x,y,z and find largest among them using if-else statement.

// let w=10
// let x=20
// let y=15
// let z=5

// if (w>x && w>y && w>z){
//     console.log("w is the greatest")
// }
// else if(x>y && x>z){
//     console.log("x is the greatest")
// }   
// else if(y>z){
//     console.log("y is the greatest")
// }
// else{
//     console.log("z is the greatest")
// }

// q2: using if else if else statement, display "your BMI [BMI Value] is perfect",

// let weight = 10
// let height = 15
// let BMI = weight/(height*height)
// let averageBMI = 22.5

// if(BMI<averageBMI){
//     console.log("your BMI " + BMI + " is underweight")
// }
// else if(BMI>averageBMI){
//     console.log("your BMI " + BMI + " is overweight")
// }
// else{
//     console.log("your BMI " + BMI + " is perfect")
// }


// let unit =200
// let bill =0
// if (unit<=50){
//      bill =3
// }
// else if(unit>=150){
//     bill =5
// }
// else{
//      bill =8
// }
// let totalBill = unit*bill
// console.log("the total bill is: " + totalBill)

let age= 10
if(age<18){
    console.log("you are a minor")
}    
else if(age>=18 && age<60){
    console.log("you are an adult")
}    
else{
     console.log("you are a senior citizen")
}