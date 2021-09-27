// Preliminaries
console.log("Preliminaries Section");
    // Part 1
var i = 5;
var x = 3;
if (i > x) {
    console.log("is greater than");
}
    // Part 2
var str = "cat";
if (str.length == 3){
    console.log("is the length");
}
    // Part 3
var str2 = "dog";
if (str == str2){
    console.log("same");
}
else{
    console.log("not the same");
}

// Bronze Medal
console.log("");
console.log("Bronze Medal Section");
    // Part 1
let person = {
    name: "Baddie",
    age: 15,
};
if (person.age >= 18){
    console.log(person.name + " is allowed to go to the movies");
}
else {
    console.log(person.name + " is not allowed to go to the movies");
}
    // Part 2
if (person.name.charAt(0) == "B"){
    console.log(person.name + " is allowed to go to the movies");
}
else {
    console.log(person.name + " is not allowed to go to the movies");
}
    // Part 3
if (person.age >= 18 && person.name.charAt(0) == "B"){
    console.log(person.name + " is allowed to go to the movies");
}
else {
    console.log(person.name + " is not allowed to go to the movies");
}

// Silver Meadal
console.log("");
console.log("Silver Medal Section");
    // Part 1
if (1 == typeof "1"){
    console.log("strict");
}
else if (1 == "1"){
    console.log("loose");
}
else{
    console.log("not equal at all");
}
    // Part 2
if (1 <= 2 && 2 == 4){
    console.log("yes");
}

// Gold Medal
console.log("");
console.log("Gold Medal Section");
    // Part 1 - Choose Silver
if (1 == typeof "1" ? console.log("strict") 
: 1 == "1" ? console.log("loose") 
: console.log("not equal at all"));
    // Part 2
if (typeof str2 == "string"){
    console.log("true");
}
    // Part 3
if (typeof true == "boolean"){
    console.log("true");
} 
    // Part 4
if (typeof mySted == "undefined"){
    console.log("true");
}
    // Part 5
if ("s" >= 12){
    console.log("true");
}
else {
    console.log("false");
}
    // Part 6
if ("s1231543sdfgsrywwry" >= 12){
    console.log("true");
}
else {
    console.log("false");
}
    // Part 7
var x = 7;
if (x % 2 == 0) {
    console.log("even");
}
 else {
     console.log("odd");
 }