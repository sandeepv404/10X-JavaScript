// Series
// Given a number N, find the N-th term in the series 1, 3, 6, 10, 15, 21...

// Input
// One integer, denoting N.

// Output
// One Integer, denoting the N-th term in the series 1, 3, 6, 10, 15, 21....

// Example
// Input1:

// 4
// Output1:

// 10
// Input2:

// 3
// Output2:

// 6

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n = parseInt(readLine());
//The index value is 4 in the given series the answer is 10 
let output = parseInt(n * (n +1)/2);
console.log(output);