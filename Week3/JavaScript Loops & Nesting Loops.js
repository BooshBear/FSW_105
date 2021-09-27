var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
];

for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
       console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, let him in");
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, let her in");
    }
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is to young, he is not alloud in");
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is to young, she is not alloud in");
    }
}
console.log("");
for (let x = 0; x <= 100; x++) {
    if (x % 2 != 0) {
        console.log(x + " = odd");
    } else {
        console.log(x + " = even");
    }
}
console.log("")

var numbers = [2,3,2];
var sum = 0;
for (let index = 0; index < numbers.length; index++) {
    sum = sum + numbers[index]
}
for (let button = 0; button < sum; button++) {
    if (button % 2 == 0) {
        console.log("Lights on")
    } else {
        console.log("Lights off")
    }
}