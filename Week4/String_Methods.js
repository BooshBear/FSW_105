// Part 1
function capitalizeAndLowercase(str1) {
    return (str1.toLocaleUpperCase() + str1.toLocaleLowerCase());
}
console.log(capitalizeAndLowercase("hikes"));

// Part 2
function findMiddleIndex(str2) {
    var newLength = str2.length / 2;
    return Math.floor(newLength);
}
console.log(findMiddleIndex("Poppies"));

// Part 3
function returnFirstHalf(str3) {
    return str3.slice(0, findMiddleIndex(str3));
}
console.log(returnFirstHalf('"It does not matter how slowly you go as long as you do not stop."'));

// Part 4
function returnSecondHalf(str4) {
    return str4.slice(findMiddleIndex(str4));
}
function capitalizeAndLowerCase2(str5) {
    var firstHalf = returnFirstHalf(str5);
    var secondHalf = returnSecondHalf(str5);
    return firstHalf.toLocaleUpperCase() + secondHalf.toLocaleLowerCase();
}
console.log(capitalizeAndLowerCase2("Hello World"));

// Optional Code
function capitalizeFirstLetter(str6) {
    var space = str6.indexOf(" ");
    if (space) {
        return str6.indexOf(space+1)
    } 
}
console.log(capitalizeFirstLetter("Hello my name is dylan"));