// **Multiple Conditions:**
// Write a script where:
// - Declare `score = 85`.
// - Use `if-else if-else` conditions to print:
//   - `"Excellent"` if the score is greater than or equal to 90.
//   - `"Good"` if the score is between 75 and 89.
//   - `"Needs Improvement"` otherwise.

const score=85;
if(score>=90){
    console.log(`"Excellent"`)
}
else if(score>=75 && score<=89){
    console.log(`"Good"`);//output on this line 
}
else{
    console.log(`Needs Improvement`)
}