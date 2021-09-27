var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function shell() {
    vegetables.pop();
    fruit.shift();
    var indexOfOrange = fruit.indexOf("orange");
    fruit.push(indexOfOrange);
    var lengthOfVegetables = vegetables.length;
    vegetables.push(lengthOfVegetables);
    var food = fruit.concat(vegetables);
    food.splice(4, 2);
    food.reverse();
    return food.toString();
}
console.log(shell());
