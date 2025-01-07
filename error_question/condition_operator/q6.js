// Write a script where:
//    - Declare `day = 'Monday'`.
//    - Use `switch-case` with `break` to print:
//      - `"Start of the workweek"` for `"Monday"`.
//      - `"Midweek"` for `"Wednesday"`.
//      - `"Weekend"` for `"Saturday"` and `"Sunday"`.
//      - `"Not a valid day"` otherwise.

const day="Monday"

switch(day){
    case "Monday":
        console.log("Start of the workweek");//run this line
        break;

    case "Wednesday":
        console.log("Midweek");
        break;

    case "Saturday" || "Sunday":
        console.log("Weekend");
        break;

    default:
        console.log("not valid")
        
}