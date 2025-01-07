// Write a script to check age groups:
// - Declare `age = 30`.
// - Use a `switch-case` statement to print:
//   - `"Senior Citizen"` if age is greater than or equal to 60.
//   - `"Adult"` if age is between 18 and 59.
//   - `"Teenager"` if age is between 12 and 17.
//   - `"Child"` otherwise.


let age=30;
switch(true) {
    case age>=60:
        console.log("Senior Citizen")

    case age>18 && age<59:
        console.log("Adult")//line run
        break;

    case age<12 && age<17:
        console.log("Teenager")

    default:
        console.log("child");
    
}


