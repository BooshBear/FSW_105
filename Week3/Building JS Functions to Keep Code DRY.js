// Part 1
function sumOf (num1, num2) {
    return num1 + num2;
}
console.log(sumOf(4, 7));

// Part 2
function maximum(x, y, z) {
    return Math.max(x, y,z);
}
console.log(maximum(2, 5, 9));

// Part 3
function evenOrOdd(number) {
    return (number % 2 == 0 ? "even" : "odd");
}
console.log(evenOrOdd(8));

// Part 4
function characters(String) {
    if (String.length <= 20) {
        return String + String;
    } else {
        return String.slice(0, String.length / 2);
    }
}
console.log(characters("12345678901234567890AB"));

// Extra
var fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
var sum = 0;
function extra1(n) {
    fibonacciNumbers.length = n;
    fibonacciNumbers.forEach(element => {
        sum += element
    });
    return sum;
}
console.log(extra1(7));

// Extra 2
/* function extra2(proto) {
    var matcher = proto.match(/[a-z]/gi);
    matcher.forEach(count => {
    
    });
    
}
console.log(extra2("pppiie")); */
/* Yea got lost on this one tried to turn it into an array. Then for loop and print the 
character and the number of how many after. */